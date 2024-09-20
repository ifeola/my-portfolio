import MenuBtn from "./MenuBtn";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import styles from "../styles/nav.module.css";
import ResumeBtn from "./ResumeBtn";
import { useState } from "react";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.nav}>
      <DesktopNav />
      <ResumeBtn />
      <MenuBtn toggle={toggle} setToggle={setToggle} />
      <MobileNav toggle={toggle} />
    </nav>
  );
}
