import { useState } from "react";
import api from "@/services/api";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MOODS = [
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

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !mood) {
      alert("Please select an image and mood");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("mood", mood);

    try {
      setLoading(true);
      await api.post("/images/upload", formData);
      toast("Post Created Successfully");
      navigate("/");
    } catch (err) {
      alert(err?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <Input
          placeholder="Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Mood Dropdown */}
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select Mood</option>
          {MOODS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Image Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-64 object-cover rounded-md"
          />
        )}

        <Button className="w-full" disabled={loading}>
          {loading ? "Uploading..." : "Post Image"}
        </Button>
      </form>
    </div>
  );
}
