import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/services/api";
import ImageGrid from "../../components/image/ImageGrid";

export default function Profile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get(`/users/${username}`);
      setProfile(res.data);
    };

    const fetchImages = async () => {
      const res = await api.get(`/users/${username}/images`);
      setImages(res.data);
    };

    fetchProfile();
    fetchImages();
  }, [username]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="w-full flex justify-between ">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">@{profile.username}</h1>
          <p className="text-gray-500">Profile Views: {profile.profileViews}</p>
        </div>
        <Link to={"/"} className="text-sm text-gray-700 hover:underline">
          Back
        </Link>
      </div>

      <ImageGrid images={images} />
    </div>
  );
}
