function ServicesSection() {
    const services = [
        {
            title: "General Dentistry",
            description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Cosmetic Dentistry",
            description: "Enhance your smile with veneers, whitening, and aesthetic dental procedures.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Orthodontics",
            description: "Straighten your teeth with traditional braces or modern clear aligner systems.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Dental Implants",
            description: "Permanent tooth replacement solutions for missing teeth with natural-looking results.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
            )
        },
        {
            title: "Oral Surgery",
            description: "Expert surgical procedures including wisdom tooth extraction and complex treatments.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
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
        <div className="bg-base-200 py-20">
            <div className="text-center space-y-4 mb-16 px-20">
                <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer a comprehensive range of dental services to meet all your oral health needs,
                    from routine cleanings to advanced procedures.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center m-20">
                {services.map((service, index) => (
                    <div key={index} className="card bg-base-100 w-full shadow-sm">
                        <figure className="px-10 pt-10">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-base-100">
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