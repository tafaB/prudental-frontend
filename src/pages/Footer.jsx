import locationPin from "../assets/location-pin.svg"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import instagram from "../assets/instagram-icon.svg"
import facebook from "../assets/facebook-icon.svg"
import prudental_logo from "../assets/prudental-logo-solo.svg"
function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <img src={prudental_logo}/>
                <div className="py-5">
                    <p className="text-xl font-bold">
                        Prudental
                    </p>
                    Providing exceptional dental care with a gentle touch.<br/>Your smile is our priority.
                </div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/prudental.clinic?igsh=NXpvbTAzNWdvbTRi">
                        <img className="w-8 h-8 text-white" src={instagram}/>
                    </a>
                    <a href="https://www.facebook.com/share/1BYE9qsy9a/?mibextid=wwXIfr">
                        <img className="w-8 h-8 text-white" src={facebook}/>
                    </a>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Quick Access</h6>
                <a href="#about" className="link link-hover">About Us</a>
                <a href="#services" className="link link-hover">Our Services</a>
                <a href="#patients" className="link link-hover">Patient Reviews</a>
                <a href="#appointment" className="link link-hover">Book Appointment</a>
            </nav>
            <nav>
                <h6 className="footer-title">Our Services</h6>
                <a className="link link-hover">Therapy</a>
                <a className="link link-hover">Surgery</a>
                <a className="link link-hover">Orthodontics</a>
                <a className="link link-hover">Implantology</a>
                <a className="link link-hover">Clear Aligners</a>
                <a className="link link-hover">Emergency Care</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact Info</h6>

                <a className="link link-hover flex items-center gap-3">
                    <img className="w-6 h-6 text-white" src={locationPin} alt="Location" />
                    <span>
                        Rruga Albanopoli, Tirana, Albania
                    </span>
                </a>

                <a className="link link-hover flex items-center gap-3 py-4">
                    <img className="w-6 h-6 text-white" src={phone} alt="Phone" />
                    <span>+355 69 933 4380</span>
                </a>

                <a className="link link-hover flex items-center gap-3">
                    <img className="w-6 h-6 text-white" src={mail} alt="Email" />
                    <span>suadaastafasani@gmail.com</span>
                </a>
            </nav>
        </footer>
    )
}
export default Footer;