import React, { useState, useEffect } from 'react';

function SlidingTabs({
  className = "",
  tabs = ["Home", "About", "Shop"],
  onChange = () => {},
  ...newProps
}) {
  const [activeTab, setActiveTab] = useState(0)
  let finalClass = `${className} w-full flex sm:border-b sm:border-gray-300 relative flex-col sm:flex-row`
  let tabClassName =
    " flex-1 sm:text-center font-medium pb-3 cursor-pointer hover:text-red-400"
  let sliderClassName =
    "hidden sm:block absolute bottom-0 left-0 h-1 bg-red-400 transition-transform duration-300 ease-out"
  const numTabs = tabs.length;
  if (numTabs === 1) sliderClassName += " w-full";
  else if (numTabs === 2) sliderClassName += " w-1/2";
  else if (numTabs === 3) sliderClassName += " w-1/3";
/*  else if (numTabs === 4) sliderClassName += " w-1/4";
  else if (numTabs === 5) sliderClassName += " w-1/5";*/
  if (activeTab === 0) sliderClassName += " transform translate-x-0";
  else if (activeTab === 1) sliderClassName += " transform translate-x-full"
  else if (activeTab === 2) sliderClassName += " transform translate-x-double"
  else if (activeTab === 3) sliderClassName += " transform translate-x-triple"
/*  else if (activeTab === 4) sliderClassName += " transform translate-x-quad"*/
  const AllTabs = tabs.map((t, index) => {
    const isObject = typeof t === "object"
    let name = isObject ? t.label : t
    let value = isObject ? t.value : t
    let icon = isObject ? t.icon : null
    return (
      <div
        key={`${value}-${index}`}
        className={`${tabClassName} ${activeTab === index && "text-red-400"}`}
        onClick={() => {
          setActiveTab(index)
          onChange(value)
        }}
      >
        {icon && (
          <div className="w-6 sm:w-auto inline-block">
            {React.cloneElement(icon, { className: "mr-2" })}
          </div>
        )}
        {name}
      </div>
    )
  })
  return (
    <div className={finalClass} {...newProps}>
      {AllTabs}
      <div className={sliderClassName} />
    </div>
  )
}

export default SlidingTabs;