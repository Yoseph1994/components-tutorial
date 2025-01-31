import { ImageGalleryList } from "@/constants/images";
import Image from "next/image";

function GalleryCard() {
  return (
    <div>
      {ImageGalleryList.map((image) => {
        return (
          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
            key={image.id}
          >
            <Image src={image.url} alt={image.title} width={250} height={250} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryCard;
