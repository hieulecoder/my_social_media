import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  generateDesktopNavLinks,
  generateMobileNavLinks,
} from "./NavLinks.utils";
import { selectDropdown } from "../../../redux/dropdown/dropdown.selectors";

import styles from "./NavLinks.module.css";

const NavLinks = ({ isMobile }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [navLinks, setNavLinks] = useState([]);
  const dropdown = useSelector(selectDropdown);
  const dispatch = useDispatch();

  useEffect(() => {
    const renderNavLinks = () => {
      if (isMobile) {
        return generateMobileNavLinks(currentPath);
      } else {
        return generateDesktopNavLinks(currentPath, dropdown, dispatch);
      }
    };

    setNavLinks(renderNavLinks());
  }, [isMobile, currentPath, dropdown, dispatch]);

  return <div className={styles.container}>{navLinks}</div>;
};

export default NavLinks;
