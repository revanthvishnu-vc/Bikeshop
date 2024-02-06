import React from "react";
import { MenuList } from "../../Components/MenuItem/MenuList.js";
import MenuItem from "../../Components/MenuItem/MenuItem.js";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Machines</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              // image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
