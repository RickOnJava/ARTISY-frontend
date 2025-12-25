import { useState } from "react";
import { Heart, Eye, ThumbsDown } from "lucide-react";
import ImageDialog from "./ImageDialog";

export default function ImageCard({ image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
      >
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full object-cover"
          loading="lazy"
        />

        <div className="p-3">
          <h3 className="font-semibold text-sm">{image.title}</h3>

          <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
            <span>@{image.user.username}</span>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Heart size={14} /> {image.likes?.length || 0}
              </span>
              <span className="flex items-center gap-1">
                <ThumbsDown size={14} /> {image.dislikes?.length || 0}
              </span>
              <span className="flex items-center gap-1">
                <Eye size={14} /> {image.views || 0}
              </span>
            </div>
          </div>

          <span className="inline-block mt-2 text-xs bg-gray-200 px-2 py-1 rounded">
            #{image.mood}
          </span>
        </div>
      </div>

      {/* Modal */}
      <ImageDialog
        open={open}
        setOpen={setOpen}
        image={image}
      />
    </>
  );
}

