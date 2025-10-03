import dentalClinicImg from "../assets/dental_clinic.jpg";
function Welcome() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="flex flex-col lg:flex-row lg:px-20 py-20 items-center">
                <div className="flex-1 text-left px-4 space-y-8 w-full">
                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Your Smile is Our
                            <span className="text-primary block">Priority</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Experience exceptional dental care with our team of experienced professionals.
                            We provide comprehensive dental services in a comfortable, modern environment.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button className="btn btn-primary">Book Your Appointment</button>
                        <button class="btn btn-outline btn-primary">Learn More</button>
                    </div>
                    <div className="grid grid-cols-3 gap-8 py-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold">10+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">2500+</div>
                            <div className="text-gray-600">Happy Patients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">100%</div>
                            <div className="text-gray-600">Satisfaction</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="m-5 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={dentalClinicImg}
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;