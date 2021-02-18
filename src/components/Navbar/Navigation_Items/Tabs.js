import React from "react";
import NavItem from './Nav_Item/NavItem';

const Tabs = (props) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
<>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <NavItem link="/" color='red'>Shop</NavItem>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + props.color + "-600"
                    : "text-" + props.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 About
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + props.color + "-600"
                    : "text-" + props.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
