import orthodontics from "../assets/orthodontics.jpg"
import implant from "../assets/implant.jpg"
import therapy from "../assets/therapy.jpg"
import surgery from "../assets/surgery.jpg"
import clear_aligners from "../assets/clear-aligners.jpg"
function ServicesSection() {
    const services = [
        {
            title: "Therapy",
            description: "Professional dental therapy to maintain healthy teeth and gums, including cleaning and preventive care.",
            icon: (
                <img
                    className="rounded-full w-full h-full object-cover"
                    src={therapy}
                    alt="Therapy"
                />
            )
        },
        {
            title: "Surgery",
            description: "Expert dental surgery services for extractions, wisdom teeth removal, and corrective procedures.",
            icon: (
                <img
                    className="rounded-full w-full h-full object-cover"
                    src={surgery}
                    alt="Surgery"
                />
            )
        },
        {
            title: "Orthodontics",
            description: "Specialized care to straighten teeth and correct bite issues with braces and retainers.",
            icon: (
                <img
                    className="rounded-full w-full h-full object-cover"
                    src={orthodontics}
                    alt="Orthodontics"
                />
            )
        },
        {
            title: "Implantology",
            description: "State-of-the-art dental implants to replace missing teeth and restore your smile and function.",
            icon: (
                <img
                    className="rounded-full w-full h-full object-cover"
                    src={implant}
                    alt="Implantology"
                />
            )
        },
        {
            title: "Clear Aligners",
            description: "Removable, transparent aligners to gradually straighten teeth without traditional braces.",
            icon: (
                <img
                    className="rounded-full w-full h-full object-cover"
                    src={clear_aligners}
                    alt="Clear Aligners"
                />
            )
        },
        {
            title: "Emergency Care",
            description: "Urgent dental care when you need it most, including pain relief and emergency treatments.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        }
    ];

    return (
        <div id="services" className="bg-base-200 py-20 px-5 sm:px-20 lg:px-20 w-full">
            <div className="text-center space-y-4 mb-16 w-full">
                <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer a comprehensive range of dental services to meet all your oral health needs,
                    from routine cleanings to advanced procedures.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center m-5 sm:m-20">
                {services.map((service, index) => (
                    <div key={index} className="card bg-base-100 w-full shadow-sm"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}>
                        <figure className="px-10 pt-10">
                            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto text-base-100 border-2 border-primary">
                                {service.icon}
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ServicesSection;