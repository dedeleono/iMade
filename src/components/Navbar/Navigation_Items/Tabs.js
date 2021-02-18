import React from "react";
import NavItem from './Nav_Item/NavItem';

const Tabs = (props) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <NavItem link="/" color='red'>Shop</NavItem>
            <NavItem link="/about" color='red'>About</NavItem>
            <NavItem link="/contact" color='red'>Contact Us</NavItem>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
