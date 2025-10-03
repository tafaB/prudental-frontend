import backgroundImage from "../assets/multiple-dentists.jpg"
import foregroundImage from "../assets/dentist-portrait.jpg"
function AboutSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center  px-10 lg:px-20 py-20">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900">
                        About Our Practice
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        With over a decade of experience, our dental practice has been serving the community
                        with exceptional care and cutting-edge technology. We believe in creating a comfortable,
                        stress-free environment where patients feel valued and cared for.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">State-of-the-Art Technology</h3>
                            <p className="text-gray-600">We use the latest dental technology to ensure precise, comfortable treatments.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                            <p className="text-gray-600">Our skilled professionals are committed to continuing education and excellence.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-base-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Patient-Centered Care</h3>
                            <p className="text-gray-600">Every treatment plan is personalized to meet your unique needs and goals.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[600px]">
                <div className="absolute bottom-10 left-10 left-0 w-full h-full rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={backgroundImage}
                        className="w-full h-full object-cover"
                        alt="Background"
                    />
                </div>
                <div className="absolute bottom-0 w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={foregroundImage}
                        className="w-full h-full object-cover"
                        alt="Foreground"
                    />
                </div>
            </div>
        </div>
    );
}
export default AboutSection;