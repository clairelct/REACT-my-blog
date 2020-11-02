import React from "react";

const NavigationMenu = (props) => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <a href="#" target="_self">
                {props.link1}
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                {props.link2}
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                {props.link3}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" target="_self">
            {props.link4}
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;
