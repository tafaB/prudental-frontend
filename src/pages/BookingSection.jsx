import { useState, useEffect } from 'react';
import "react-day-picker/style.css";
import "cally";

// --- Constants & Data ---
const SERVICES = ["Therapy", "Surgery", "Orthodontics", "Implantology", "Clear Aligners", "Emergency Care"];

const OFFICE_HOURS = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
];

const CONTACT_DETAILS = [
    {
        label: "Phone",
        value: "+355 69 933 4380",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    },
    {
        label: "Email",
        value: "suadaastafasani@gmail.com",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    },
    {
        label: "Address",
        value: "Rruga Albanopoli, Tirana, Albania",
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </>
        )
    }
];

// --- Sub-Components ---

const ContactItem = ({ label, value, children }) => (
    <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-base-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{children}</svg>
        </div>
        <div>
            <div className="font-semibold">{label}</div>
            <div className="text-gray-600 text-xs sm:text-lg">{value}</div>
        </div>
    </div>
);

const FormInput = ({ icon, isTouched, ...props }) => (
    <div title={props.name}>
        <label className={`input input-lg ${isTouched ? 'validator' : ''} w-full`}>
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {icon}
            </svg>
            <input {...props} />
        </label>
        {props.hint && isTouched && <p className="validator-hint">{props.hint}</p>}
    </div>
);

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
};
// --- Main Component ---

function BookingSection() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState(null);
    const [touchedFields, setTouchedFields] = useState({});
    useEffect(() => {
        if (!notification) return;
        const timer = setTimeout(() => setNotification(null), 5000);
        return () => clearTimeout(timer);
    }, [notification]);


    // Handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (!touchedFields[name]) {
            setTouchedFields(prev => ({ ...prev, [name]: true }));
        }
    };

    const handleDateSelect = async (e) => {
        const dateValue = e.target.value;
        setFormData(prev => ({ ...prev, date: dateValue, time: '' }));
        setCalendarOpen(false);
        setIsLoading(true);

        try {
            const res = await fetch(`https://prudental-backend.onrender.com/appointments/${dateValue}`);
            const data = await res.json();
            setTimeSlots(data.free_hours || []);
        } catch (err) {
            console.error(err);
            setNotification({
                type: "error",
                message: err.message || "Failed to load available slots"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const isFormInvalid = !formData.firstName || !formData.lastName || !formData.email ||
                         !formData.date || !formData.time || !formData.phone || !formData.service;

    const handleReset = () => {
        setFormData(INITIAL_FORM_STATE);
        setTimeSlots([]); 
        setTouchedFields({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const paddedHour = String(formData.time).padStart(2, '0');
        const startTime = `${formData.date}T${paddedHour}:00:00`;

        const payload = {
            name: formData.firstName,
            surname: formData.lastName,
            service: formData.service,
            email: formData.email,
            phone_number: formData.phone,
            message: formData.message,
            start_time: startTime
        };

        try {
            const response = await fetch("https://prudental-backend.onrender.com/appointments/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.detail || "Booking failed");
            }
            setNotification({
                type: "success",
                message: "Your appointment has been booked successfully."
            });
            handleReset();
        } catch (error) {
            setNotification({
                type: "error",
                message: error.message || "Could not connect to the server."
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="appointment" className="bg-base-200 p-5 sm:p-20 lg:px-10 w-full">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl font-bold text-gray-900">Book Your Appointment</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ready to take the next step towards better oral health? Schedule your appointment with us today.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start lg:px-20">
                {/* Left Column: Info */}
                <div className="grid gap-10 w-full" data-aos="fade-right">
                    <div className="card card-xl bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Contact Information</h2>
                            <h3 className="text-xl text-gray-600 pb-5">Get in touch with us through any of these channels</h3>
                            <div className="grid gap-5">
                                {CONTACT_DETAILS.map(detail => (
                                    <ContactItem key={detail.label} label={detail.label} value={detail.value}>
                                        {detail.icon}
                                    </ContactItem>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card card-xl bg-primary text-primary-content shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Office Hours</h2>
                            {OFFICE_HOURS.map(item => (
                                <div key={item.day} className="flex justify-between text-sm sm:text-lg">
                                    <span>{item.day}</span>
                                    <span>{item.hours}</span>
                                </div>
                            ))}
                            <div className="pt-4 border-t border-primary-focus flex justify-between">
                                <span>Emergency Hours</span>
                                <span>24/7 Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <form onSubmit={handleSubmit} className="card bg-base-100 shadow-2xl" data-aos="fade-left">
                    <div className="card-body space-y-4">
                        <h2 className="card-title text-2xl">Schedule Your Visit</h2>
                        <h3 className="text-xl text-gray-600">Fill out the form below and we will contact you to confirm</h3>
                        
                        <fieldset className="grid lg:grid-cols-2 gap-5">
                            <FormInput 
                                name="firstName" placeholder="First Name" required minLength="3" isTouched={touchedFields.firstName}
                                pattern="^[A-Za-z]{3,30}$" value={formData.firstName} onChange={handleInputChange}
                                hint="3-30 letters only" icon={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
                            />
                            <FormInput 
                                name="lastName" placeholder="Last Name" required minLength="3" isTouched={touchedFields.lastName}
                                pattern="^[A-Za-z]{3,30}$" value={formData.lastName} onChange={handleInputChange}
                                hint="3-30 letters only" icon={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
                            />
                            <FormInput 
                                name="email" type="email" placeholder="mail@site.com" required isTouched={touchedFields.email}
                                value={formData.email} onChange={handleInputChange}
                                icon={<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>}
                            />
                            <FormInput 
                                name="phone" type="tel" placeholder="Phone" required pattern="\+[0-9]*" isTouched={touchedFields.phone}
                                value={formData.phone} onChange={handleInputChange} hint="Must include prefix"
                                icon={<path d="M11 1H5C3.89543 1 3 1.89543 3 3V13C3 14.1046 3.89543 15 5 15H11C12.1046 15 13 14.1046 13 13V3C13 1.89543 12.1046 1 11 1Z" stroke="currentColor" fill="none" />}
                            />
                        </fieldset>

                        {/* Date Picker */}
                        <div className="relative">
                            <button type="button" className="input input-lg input-bordered w-full text-left" onClick={() => setCalendarOpen(!calendarOpen)}>
                                {formData.date || "Pick a date"}
                            </button>
                            {calendarOpen && (
                                <div className="absolute z-10 bg-base-100 rounded-box shadow-xl mt-2 p-2 border">
                                    <calendar-date onchange={handleDateSelect} className="cally">
                                        <svg slot="previous" className="size-4" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                                        <svg slot="next" className="size-4" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                                        <calendar-month />
                                    </calendar-date>
                                </div>
                            )}
                        </div>

                        {/* Time Slots */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-center">
                                Available time slots
                            </label>
                            {isLoading ? (
                                <div className="flex justify-center py-6">
                                    <span className="loading loading-spinner text-primary"></span>
                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-2">
                                    {timeSlots.length > 0 ? (
                                        timeSlots.map(slot => (
                                            <button key={slot} type="button" 
                                                className={`btn btn-sm ${formData.time === slot ? 'btn-primary' : 'btn-outline'}`}
                                                onClick={() => setFormData(p => ({...p, time: slot}))}>
                                                {slot}:00
                                            </button>
                                        ))
                                    ) : (
                                        <p className="text-xs text-gray-400 col-span-3 text-center">Select a date to see available times</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Service Selection */}
                        <details className="dropdown w-full">
                            <summary className="btn btn-lg w-full flex justify-between">
                                {formData.service || "Select a service"}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <ul className="menu bg-base-100 rounded-box w-full shadow-lg z-20">
                                {SERVICES.map(s => (
                                    <li key={s}>
                                        <a onClick={(e) => {
                                            setFormData(p => ({...p, service: s}));
                                            e.target.closest("details").removeAttribute("open");
                                        }} className={formData.service === s ? "bg-neutral text-base-100" : ""}>{s}</a>
                                    </li>
                                ))}
                            </ul>
                        </details>

                        <input name="message" type="text" className="input input-lg input-bordered w-full" placeholder="Additional Message" value={formData.message} onChange={handleInputChange} />

                        <button type="submit" disabled={isFormInvalid} className={`btn btn-xl mt-4 w-full ${isFormInvalid ? "btn-disabled" : "btn-neutral"}`}>
                            Book Appointment
                        </button>

                        {notification && (
                            <div
                                role="alert"
                                className={`w-full alert alert-soft ${notification.type === "success" ? "alert-success" : "alert-error"}`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {notification.type === "success" ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />

                                    )}
                                </svg>
                                <span>{notification.message}</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingSection;