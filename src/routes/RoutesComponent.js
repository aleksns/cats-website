import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../services/services";
import Contact from "./Contact";
import GalleryWild from "./GalleryWild";
import GalleryTame from "./GalleryTame";
import Home from "./Home";
import Portfolio from "./Portfolio";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.WILD} element={<GalleryWild />} />
      <Route path={ROUTES.TAME} element={<GalleryTame />} />
    </Routes>
  );
}
