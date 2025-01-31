import GalleryCard from "@/components/GalleryCard";
import ImageGalleryHeader from "@/components/ImageGalleryHeader";

function page() {
  return (
    <main className="bg-blue-50 min-h-screen p-2">
      <div className="bg-white min-h-screen p-20 rounded-2xl shadow-2xl">
        <ImageGalleryHeader />
        <GalleryCard />
      </div>
    </main>
  );
}

export default page;
