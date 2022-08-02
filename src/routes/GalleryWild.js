import Divider from "../components/Divider";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import { TITLES } from "../services/services";
import { wildImages } from "../services/wild";

export default function GalleryWild() {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-title-container">
          <Divider title={TITLES.WILD} />
        </div>
        <div className="gallery-grid">
          {wildImages.map((image) => (
            <GalleryImage key={image.id} image={image} styles="gallery-image" />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
