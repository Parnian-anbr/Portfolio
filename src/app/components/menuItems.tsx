interface MenuItemsProps {
  menuItem: string;
}

import {
    Anton,
    Bebas_Neue,
    Foldit,
    Roboto,
    Titillium_Web,
    Ubuntu,
} from "next/font/google";

const ubuntuFont = Ubuntu({
  weight: "300",
  subsets: ["latin"],
});
const foldit = Titillium_Web({
  weight: "700",
  subsets: ["latin"],
});
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function MenuItems({ menuItem }: MenuItemsProps) {
  return (
    <div className={'menu-container '}>
      <span className="menu-Items -rotate-90 ">{menuItem}</span>
    </div>
  );
}
