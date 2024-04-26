import { NavLink } from "react-router-dom";

const Navbar = () => {

    const items = <>
        <NavLink className="group flex cursor-pointer flex-col">
            Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to="/addCoffee" className="group flex cursor-pointer flex-col">
            Add coffee <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to='/about' className="group flex cursor-pointer flex-col">
            About <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to='/contact' className="group flex cursor-pointer flex-col">
            Contact  <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
    </>
    return (
        <div>
            <nav className="flex items-center justify-between bg-[#331A15] px-4 py-2 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 rounded-box w-44 font-bold flex items-center justify-between gap-10 text-black">
                            {items}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl cursor-pointer rounded-2xl px-3 py-2 font-semibold text-white transition-all duration-200 hover:scale-110">Logo</a>
                </div>
                <div className="hidden md:flex md:items-center md:justify-between gap-16">
                    <ul className="flex items-center justify-between gap-10">
                        {items}
                    </ul>
                    <div className="flex items-center justify-between gap-5">
                        <button className="rounded-full bg-white px-6 py-2 text-[#331A15] transition-all duration-300 hover:scale-90">Log In</button>
                        <button className="rounded-full bg-white px-6 py-2 text-[#331A15] transition-all duration-300 hover:scale-90">Register</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
