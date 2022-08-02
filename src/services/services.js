import heroImg1 from "../images/hero/heroImage1.jpg";
import heroImg2 from "../images/hero/heroImage2.jpg";
import heroImg3 from "../images/hero/heroImage3.jpg";
import heroImg4 from "../images/hero/heroImage4.jpg";
import heroImg5 from "../images/hero/heroImage5.jpg";

import heroImg1Placeholder from "../images/hero/placeholders/heroImage1-placeholder.jpg";
import heroImg2Placeholder from "../images/hero/placeholders/heroImage2-placeholder.jpg";
import heroImg3Placeholder from "../images/hero/placeholders/heroImage3-placeholder.jpg";
import heroImg4Placeholder from "../images/hero/placeholders/heroImage4-placeholder.jpg";
import heroImg5Placeholder from "../images/hero/placeholders/heroImage5-placeholder.jpg";

export const ROUTES = {
  HOME: "/",
  CONTACT: "/contact",
  PORTFOLIO: "/portfolio",
  WILD: "/portfolio/wild",
  TAME: "/portfolio/tame",
};

export const TITLES = {
  NAME: "CATS CLUB",
  CATEGORIES: "CATEGORIES",
  CONTACT: "CONTACT",
  PORTFOLIO: "PORTFOLIO",
  WILD: "WILD",
  TAME: "TAME",
  CONTACT_ME: "CONTACT ME",
  TERMS: "CATS CLUB, ALL RIGHTS RESERVED"
};

export const CATEGORIES = [
  {
    id: "categoryWild",
    title: TITLES.WILD,
    original: "images/categoriesTitle/wildImageTitle.jpg",
    placeholder: "images/categoriesTitle/placeholders/wildImageTitle-placeholder.jpg",
    url: ROUTES.WILD,
  },
  {
    id: "categoryTame",
    title: TITLES.TAME,
    original: "images/categoriesTitle/tameImageTitle.jpg",
    placeholder: "images/categoriesTitle/placeholders/tameImageTitle-placeholder.jpg",
    url: ROUTES.TAME,
  },
];

export const carouselImages = [
  {
    id: "hero1",
    original: heroImg1,
    placeholder: heroImg1Placeholder,
    position: "50% 50%",
  },
  {
    id: "hero2",
    original: heroImg2,
    placeholder: heroImg2Placeholder,
    position: "50% 50%",
  },
  {
    id: "hero3",
    original: heroImg3,
    placeholder: heroImg3Placeholder,
    position: "50% 30%",
  },
  {
    id: "hero4",
    original: heroImg4,
    placeholder: heroImg4Placeholder,
    position: "50% 30%",
  },
  {
    id: "hero5",
    original: heroImg5,
    placeholder: heroImg5Placeholder,
    position: "50% 30%",
  },
];
