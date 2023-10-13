import "./App.css";
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  const navLinks = [
    {href: "#home", label: "Home" },
    {href: "#faq", label: "FAQs"},    
    {href: "#support ", label: "Support" },
    {href: "#settings", label: "Settings"},        
  ];
  return (
    <>
    <header className="sm:px-8 px-6 py-2 z-10 w-full">
      <nav className="flex justify-center items-center max-container">
        <a href="/" className="text-3xl font-bold">
          FlexChat
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-monteserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block cursor-pointer" onClick={() => {
          setOpen(!open);
        }}
        >
          <RxHamburgerMenu className="text-4xl" />
        </div>
      </nav>
    </header>
    {open && (
      <div>
        <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100">
          <div className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer" onClick={() => {
            setOpen(!open);
          }}
          >
            <AiOutlineClose className="text-4xl" />
          </div>
          <ul className="lg:hidden flex flex-col items-center justify-center h-full">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )}
    </>
  )
}
export default NavBar;
