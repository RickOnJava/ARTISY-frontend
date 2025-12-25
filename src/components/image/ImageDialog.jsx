import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Heart, ThumbsDown } from "lucide-react";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ImageDialog({ open, setOpen, image }) {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${image.user.username}`);
  };

  const [likes, setLikes] = useState(image?.likes?.length);
  const [dislikes, setDislikes] = useState(image?.dislikes?.length);

  const handleView = async () => {
    try {
      await api.post(`/images/${image._id}/view`);
    } catch (err) {
      console.error("View error:", err);
    }
  };

  // 🔥 THIS IS THE FIX
  useEffect(() => {
    if (open) {
      handleView();
    }
  }, [open]);

  const handleLike = async () => {
    try {
      const res = await api.post(`/images/${image._id}/like`);

      // Success case
      setLikes(res.data.likes);
      setDislikes(res.data.dislikes);
    } catch (error) {
      // Axios error response
      if (error.response && error.response.status === 400) {
        alert("You already liked this image");
      } else {
        console.error("Like error:", error);
        alert("Something went wrong");
      }
    }
  };

  const handleDislike = async () => {
    try {
      const res = await api.post(`/images/${image._id}/dislike`);

      setLikes(res.data.likes);
      setDislikes(res.data.dislikes);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("You already disliked this image");
      } else {
        console.error("Dislike error:", error);
        alert("Something went wrong");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{image.title}</DialogTitle>
        </DialogHeader>

        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full rounded-md"
        />

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-500">@{image.user.username}</p>
            {user?.id !== image?.user?._id && (
              <button
                onClick={handleViewProfile}
                className="text-blue-600 text-lg hover:underline"
              >
                View Profile
              </button>
            )}
          </div>

          <div className="flex gap-4">
            <button onClick={handleLike} className="flex items-center gap-1">
              <Heart className="w-4 h-4" /> {likes}
            </button>

            <button onClick={handleDislike} className="flex items-center gap-1">
              <ThumbsDown className="w-4 h-4" /> {dislikes}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
