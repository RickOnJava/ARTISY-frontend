import ImageCard from "./ImageCard";

export default function ImageGrid({ images }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {images?.map((img) => (
        <ImageCard key={img._id} image={img} />
      ))}
    </div>
  );
}
