import icon1 from "../assets/images/home.svg";
import icon2 from "../assets/images/search.svg";
import icon3 from "../assets/images/library.svg";
import icon4 from "../assets/images/premium.svg";
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
];
