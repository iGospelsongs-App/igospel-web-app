import icon1 from "../assets/images/home.svg";
import icon2 from "../assets/images/search.svg";
import icon3 from "../assets/images/library.svg";
import icon4 from "../assets/images/premium.svg";
import icon5 from "../assets/images/music-filter.png";
import icon6 from "../assets/images/Add.png";
import icon7 from "../assets/images/Vector.png";


import { MenuItem } from "../types";

export const sidebarMenuData: MenuItem[] = [
  {
    title: "Home",
    src: "/",
    icon: icon1,
  },
  {
    title: "Explore",
    src: "/explore",
    icon: icon2,
  },
  { title: "Library", src: "/album", icon: icon3 },
  {
    title: "Premium",
    src: "/premium",
    icon: icon4,
  },
  {
    title: "Your Playlist",
    src: "/playlist",
    icon: icon5,
  },
  {
    title: "Creator",
    src: "/creator",
    icon: icon7,
  },
];
