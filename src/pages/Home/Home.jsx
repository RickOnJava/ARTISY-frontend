import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../redux/image/imageThunks";
import ImageGrid from "../../components/image/ImageGrid";
import { useState } from "react";

const moods = [
  "All",
  "Calm",
  "Dark",
  "Vibrant",
  "Minimal",
  "Moody",
  "Aesthetic",
  "Warm",
  "Cold",
  "Dreamy",
  "Vintage",
  "Abstract",
  "Nature",
  "Urban",
  "Cinematic",
];

export default function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.images);
  const [selectedMood, setSelectedMood] = useState("All");

  useEffect(() => {
    if (selectedMood === "All") {
      dispatch(fetchImages());
    } else {
      dispatch(fetchImages({ mood: selectedMood }));
    }
  }, [dispatch, selectedMood]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Explore Creativity</h1>

      {/* Mood Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            className={`px-3 py-1 rounded-full text-sm border
              ${
                selectedMood === mood
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
          >
            {mood}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ImageGrid images={list} />
      )}
    </div>
  );
}
