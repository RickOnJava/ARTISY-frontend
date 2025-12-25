import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import ImageCard from "../../components/image/ImageCard";
import { Badge } from "../../components/ui/badge";
import { BadgeCheckIcon, ImagePlus } from "lucide-react";

export default function Profile() {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userRes = await api.get("/auth/me");
        const imageRes = await api.get("/images/my-images");

        setUser(userRes.data);
        setImages(imageRes.data);
      } catch (err) {
        console.error("Profile fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* PROFILE HEADER */}
      <div className="w-full flex justify-between ">
        <div className="mb-8">
          <div className="flex gap-4">
            <h1 className="text-2xl font-bold">@{user.username}</h1>
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600 px-5"
            >
              <BadgeCheckIcon />
              Myself
            </Badge>
          </div>

          <p className="text-gray-500 text-sm mt-1.5">
            Profile views: {user.profileViews}
          </p>
        </div>

        <Link to={"/"} className="text-sm text-gray-700 hover:underline">
          Back
        </Link>
      </div>

      {/* USER IMAGES */}
      {images && images.length > 0 ? (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <ImageCard key={img._id} image={img} />
          ))}
        </div>
      ) : (
        <div className=" w-full flex flex-col justify-center items-center mt-10">
          <p className="text-2xl font-semibold mb-5 text-gray-400">No Posts Created</p>
          <Link
            to={"/create"}
            className="flex flex-col justify-center items-center"
          >
            <ImagePlus size={40} className="" />
            <span className="text-[20px] text-gray-600">Create Now</span>
          </Link>
        </div>
      )}
    </div>
  );
}
