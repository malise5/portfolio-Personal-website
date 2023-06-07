// import React from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [nav, setNav] = useState(false);

//     const handleNav = () => {
//         setNav(!nav);
//     };

//     return (
//         <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
//             <h1 className="w-full text-3xl font-bold text-orange-500">Logo</h1>
//             <div className="hidden md:flex uppercase">
//                 <Link to="/about" className="p-4">
//                     About
//                 </Link>
//                 <Link to="/portfolio" className="p-4">
//                     Portfolio
//                 </Link>
//                 <Link to="/resume" className="p-4">
//                     Resume
//                 </Link>
//             </div>
//             <div onClick={handleNav} className="block md:hidden">
//                 {nav ? (
//                     <AiOutlineMenu size={20} />
//                 ) : (
//                     <AiOutlineClose size={20} />
//                 )}
//             </div>
//             <div
//                 className={
//                     !nav
//                         ? "lg:hidden fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
//                         : "fixed left-[-100%]"
//                 }
//             >
//                 <h1 className="w-full text-3xl m-4 pl-4 font-bold text-orange-600">
//                     Logo
//                 </h1>
//                 <div className=" flex flex-col p-4 uppercase">
//                     <Link to="/about" className="p-4 border-b border-gray-600">
//                         About
//                     </Link>
//                     <Link
//                         to="/portfolio"
//                         className="p-4 border-b border-gray-600"
//                     >
//                         Portfolio
//                     </Link>
//                     <Link to="/resume" className="p-4">
//                         Resume
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center h-24">
                <img
                    src="/images/logo2.jpg"
                    alt="logo"
                    className="w-12 h-12 rounded-lg"
                />
                <div className="hidden md:flex uppercase">
                    <Link to="/" className="p-4">
                        About
                    </Link>
                    <Link to="/projects" className="p-4">
                        Projects
                    </Link>
                    <Link to="/resume" className="p-4">
                        Resume
                    </Link>
                </div>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? (
                        <AiOutlineMenu size={20} />
                    ) : (
                        <AiOutlineClose size={20} />
                    )}
                </div>
                <div
                    className={
                        !nav
                            ? " lg:hidden fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                            : " fixed left-[-100%]"
                    }
                >
                    <h1 className=" w-full text-3xl m-4 pl-4 font-bold text-orange-600">
                        Logo
                    </h1>
                    <div className="sm:hidden flex flex-col p-4 uppercase">
                        <Link
                            onClick={handleNav}
                            to="/"
                            className="p-4 border-b border-gray-600"
                        >
                            About
                        </Link>
                        <Link
                            onClick={handleNav}
                            to="/Projects"
                            className="p-4 border-b border-gray-600"
                        >
                            Projects
                        </Link>
                        <Link onClick={handleNav} to="/resume" className="p-4">
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
