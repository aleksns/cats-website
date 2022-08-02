import Divider from "../components/Divider";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";
import { TITLES } from "../services/services";
import { tameImages } from "../services/tame";

export default function GalleryTame() {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-title-container">
          <Divider title={TITLES.TAME} />
        </div>
        <div className="gallery-grid">
          {tameImages.map((image) => (
            <GalleryImage key={image.id} image={image} styles="gallery-image" />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
