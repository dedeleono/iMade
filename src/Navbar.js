import React, { useState } from "react"

function NavTripleMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="flex items-center h-20 px-6 justify-between shadow-sm bg-white relative z-50">
      <a className="flex-1 no-underline block h-8">
        <img
          src="https://gustui.s3.amazonaws.com/gustlogo.png"
          className="h-full"
        />
      </a>
      <div className="flex-none hidden md:flex md:justify-center md:h-full">
        <a
          href="#"
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
        > Home</a>
        <a
          href="#"
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-black transition-colors duration-300 ease-in-out hover:text-blue-400"
        >Dogs</a>
        <a
          href="#"
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
        >Bones</a>
        <a
          href="#"
          className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
        >Settings
        </a>
      </div>
      <div className="flex-1 items-center justify-end hidden md:flex">
          shop cart icon
      </div>
      {/*<FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer md:hidden"
      />*/}
      {mobileOpen && (
        <div className="bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              {/*<FontAwesomeIcon icon={faHome} className="mr-3" />*/} Home
            </a>
            <a
              href="#"
              className="no-underline px-2 py-1 my-2 font-medium border-b-2 border-black hover:text-blue-400"
            >
              {/*<FontAwesomeIcon icon={faDog} className="mr-3" />*/} Dogs
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              {/*<FontAwesomeIcon icon={faBone} className="mr-3" />*/} Bones
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              {/*<FontAwesomeIcon icon={faCog} className="mr-3" /> */} Settings
            </a>
            {/*            <Avatar
              image="https://gustui.s3.amazonaws.com/avatar.png"
              status="online"
              className="cursor-pointer my-2"
            /> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavTripleMenu;