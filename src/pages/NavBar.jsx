import prudental_logo from "../assets/prudental-logo.svg"
function NavBar() {
    return (
        <div className="navbar bg-base-100 shadow-sm px-10 lg:px-20 fixed top-0 w-full z-50">
            {/* <a href="#welcome" className="navbar-start">
                <h1 className="text-2xl font-bold text-primary">Prudental</h1>
                <img src={prudental_logo}/>
            </a> */}
            <a href="#welcome" className="navbar-start flex items-center gap-2">
  <img src={prudental_logo} className="h-12 w-auto" alt="Logo" />
</a>

            <div className="navbar-end">
                <div className="hidden lg:flex items-center space-x-8">
                    <a href="#about" className="text-foreground hover:text-primary transition-colors">
                        About
                    </a>
                    <a href="#services" className="text-foreground hover:text-primary transition-colors">
                        Services
                    </a>
                    <a href="#patients" className="text-foreground hover:text-primary transition-colors">
                        Our Patients
                    </a>
                    <a
                        href="#appointment"
                        className="btn btn-neutral"
                    >
                        Book Appointment
                    </a>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#patients">Our Patients</a></li>
                        <li><a href="#appointment">Book Appointment</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;