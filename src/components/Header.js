import React from "react";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <>
      <header>
        <h1>My Blog</h1>
        <h2>An awesome baseline</h2>
      </header>
      <NavigationMenu link1="Link1" link2="Link2" link3="Link3" link4="Link4" />
    </>
  );
};

export default Header;
