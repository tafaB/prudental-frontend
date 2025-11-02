import { useState } from 'react';
import "react-day-picker/style.css";
function BookingSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
    });

    const services = [
        "Therapy",
        "Surgery",
        "Orthodontics",
        "Implantology",
        "Clear Aligners",
        "Emergency Care"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceSelect = (service) => {
        setFormData(prev => ({
            ...prev,
            service
        }));
    };

      const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Validation
    if (!formData.firstName) return alert('Please fill your First Name');
    if (!formData.lastName) return alert('Please fill your Last Name');
    if (!formData.date) return alert("Please select a date.");
    if (!formData.time) return alert("Please select a time.");
    if (!formData.service) return alert("Please enter the type of service you need");

    // Format message for WhatsApp
    const message = `
New Appointment Request:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Date: ${formData.date}
Time: ${formData.time}
Service: ${formData.service}
Additional Message: ${formData.message || 'None'}
`.trim();

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '355699334380';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

    return (
        <div id="appointment" className="bg-base-200 p-5 sm:p-20 lg:px-10 w-full">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl font-bold text-gray-900">Book Your Appointment</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ready to take the next step towards better oral health? Schedule your appointment with us today.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start lg:px-20">
                <div className="grid gap-10 w-full h-full" data-aos="fade-right">
                    <div className="card card-xl bg-base-100 w-full min-w-0 h-full shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Contact Information</h2>
                            <h3 className="text-xl text-gray-600 pb-5">Get in touch with us through any of these channels</h3>
                            <div className="grid gap-5">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Phone</div>
                                        <div className="text-gray-600">+355 69 933 4380</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Email</div>
                                        <div className="text-gray-600 text-xs sm:text-lg">suadaastafasani@gmail.com</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Address</div>
                                        <div className="text-gray-600 text-xs sm:text-lg">Rruga Albanopoli, Tirana, Albania</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-xl bg-primary text-primary-content w-full shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Office Hours</h2>
                            <div className="flex justify-between text-sm sm:text-lg">
                                <span>Monday - Friday</span>
                                <span>8:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between text-sm sm:text-lg">
                                <span>Saturday</span>
                                <span>9:00 AM - 3:00 PM</span>
                            </div>
                            <div className="flex justify-between text-sm sm:text-lg">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                            <div className="pt-4 border-t border-base">
                                <div className="flex justify-between">
                                    <span>Emergency Hours</span>
                                    <span>24/7 Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}  className="card bg-base-100 w-full h-full shrink-0 shadow-2xl"
                    data-aos="fade-left">
                    <div className="card-body w-full h-full">
                        <h2 className="card-title text-2xl">Schedule Your Visit</h2>
                        <h3 className="text-xl text-gray-600 pb-5">Fill out the form below and we will contact you to confirm your appointment</h3>
                        <div className="w-full h-full flex flex-col justify-evenly">
                            <fieldset className="fieldset">
                                <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-5 h-full">
                                    <div title="first-name">
                                        <label className="input input-lg validator w-full">
                                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </g>
                                            </svg>
                                            <input
                                                name="firstName"
                                                type="text"
                                                required
                                                placeholder="First Name *"
                                                pattern="^[A-Za-z]{3,30}$"
                                                minlength="3"
                                                maxlength="30"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <p className="validator-hint">
                                            Please enter 3-30 letters only (no numbers or symbols).
                                        </p>
                                    </div>
                                    <div title="last-name">
                                        <label className="input input-lg validator w-full">
                                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </g>
                                            </svg>
                                            <input
                                                name="lastName"
                                                type="text"
                                                required
                                                placeholder="Last Name *"
                                                pattern="^[A-Za-z]{3,30}$"
                                                minlength="3"
                                                maxlength="30"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <p className="validator-hint">
                                            Please enter 3-30 letters only (no numbers or symbols).
                                        </p>
                                    </div>
                                    <div title="email">
                                        <label className="input input-lg validator w-full">
                                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                >
                                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                </g>
                                            </svg>
                                            <input name="email" type="email" placeholder="mail@site.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <div className="validator-hint hidden">Enter valid email address</div>
                                    </div>
                                    <div title="phone">
                                        <label className="input input-lg validator w-full">
                                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <g fill="none">
                                                    <path
                                                        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                                                        fill="currentColor"
                                                    ></path>
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="tabular-nums"
                                                placeholder="Phone"
                                                pattern="\+[0-9]*"
                                                title="Must contain prefix and digits"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <p className="validator-hint">Must be 10 digits</p>
                                    </div>

                                    <div title="date">
                                        <label className="input input-lg validator w-full">
                                            <svg
                                                className="h-[1em] opacity-50"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            <input
                                                name="date"
                                                type="date"
                                                required
                                                className="w-full"
                                                placeholder="Date *"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                    </div>

                                    <div title="time">
                                        <label className="input input-lg validator w-full">
                                            <svg
                                                className="h-[1em] opacity-50"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            <input
                                                name="time"
                                                type="time"
                                                required
                                                className="w-full"
                                                placeholder="Time *"
                                                value={formData.time || ""}
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                    </div>

                                    {/* <input name="date" type="date" className="input input-lg w-full"
                                        required
                                        placeholder="Date *"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                    />
                                    <input name="time" type="time" className="input input-lg w-full"
                                        required
                                        placeholder="Time *"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                    /> */}
                                </div>
                            </fieldset>
                            <details className="dropdown w-full my-5">
                                <summary className="btn btn-lg w-full flex justify-between items-center">
                                    <span>{formData.service || "Select a service *"}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 ml-2 transition-transform duration-200 group-open:rotate-180"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>

                                <ul className="menu bg-base-100 rounded-box w-full shadow-sm mt-2">
                                    {services.map((service) => (
                                        <li key={service}>
                                            <a
                                                onClick={(e) => {
                                                    handleServiceSelect(service);
                                                    e.target.closest("details").removeAttribute("open");
                                                }}
                                                className={`py-3 px-4 w-full transition-all ${formData.service === service
                                                    ? "bg-neutral text-base-100"
                                                    : ""
                                                    }`}
                                            >
                                                {service}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                            <fieldset className="fieldset">
                                <input name="message" type="text" className="input input-lg w-full" placeholder="Additional Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </fieldset>
                        </div>
                        <button type="submit" className="btn btn-xl btn-neutral mt-4 w-full">
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default BookingSection;