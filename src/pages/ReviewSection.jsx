import tooth1bad from "../assets/tooth_1_bad.jpg"
import tooth2bad from "../assets/tooth_2_bad.jpg"
import tooth3bad from "../assets/tooth_3_bad.jpg"
import tooth4bad from "../assets/tooth_4_bad.jpg"
import tooth5bad from "../assets/tooth_5_bad.jpg"
import tooth6bad from "../assets/tooth_6_bad.jpg"
import tooth7bad from "../assets/tooth_7_bad.jpg"
import tooth8bad from "../assets/tooth_8_bad.jpg"
import tooth9bad from "../assets/tooth_9_bad.jpg"

import tooth1good from "../assets/tooth_1_good.jpg"
import tooth2good from "../assets/tooth_2_good.jpg"
import tooth3good from "../assets/tooth_3_good.jpg"
import tooth4good from "../assets/tooth_4_good.jpg"
import tooth5good from "../assets/tooth_5_good.jpg"
import tooth6good from "../assets/tooth_6_good.jpg"
import tooth7good from "../assets/tooth_7_good.jpg"
import tooth8good from "../assets/tooth_8_good.jpg"
import tooth9good from "../assets/tooth_9_good.jpg"

function ReviewSection() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Manager",
            content: "Dr. Smith and the team made my dental anxiety disappear. The modern facility and gentle care exceeded my expectations. I actually look forward to my appointments now!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRlbnRhbCUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3NTkzODY5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            name: "Michael Chen",
            role: "Software Engineer",
            content: "The digital technology they use is incredible. My crown was made and fitted in a single visit. The precision and efficiency are outstanding.",
            rating: 5,
            image: null
        },
        {
            name: "Emily Rodriguez",
            role: "Teacher",
            content: "After years of hiding my smile, the cosmetic work done here has completely transformed my confidence. The results are natural and beautiful.",
            rating: 5,
            image: null
        },
        {
            name: "David Thompson",
            role: "Retired",
            content: "The staff here treats you like family. They explained everything clearly and made sure I was comfortable throughout my treatment.",
            rating: 5,
            image: null
        }
    ];

    const stats = [
        { number: "2,500+", label: "Happy Patients" },
        { number: "15+", label: "Years Experience" },
        { number: "4.9/5", label: "Average Rating" },
        { number: "98%", label: "Satisfaction Rate" }
    ];

  const teethData = [
    { bad: tooth1bad, good: tooth1good },
    { bad: tooth2bad, good: tooth2good },
    { bad: tooth3bad, good: tooth3good },
    { bad: tooth4bad, good: tooth4good },
    { bad: tooth5bad, good: tooth5good },
    { bad: tooth6bad, good: tooth6good },
    { bad: tooth7bad, good: tooth7good },
    { bad: tooth8bad, good: tooth8good },
    { bad: tooth9bad, good: tooth9good },
  ];


    return (
        <div className="bg-base-100 py-20">
            <div className="text-center space-y-4 mb-16 px-20">
                <h2 className="text-4xl font-bold text-gray-900">What Our Patients Say</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Don't just take our word for it. Here's what our patients have to say about their experience with us.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16 justify-items-center m-20">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="card bg-base-200 w-full shadow-sm">
                        <div className="card-body">
                            <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    {testimonial.image ? (
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-blue-600 font-semibold">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="divider px-20 pb-10">
                <h2 className="text-4xl font-bold text-gray-900"> Have a look at our work </h2>
            </div>
            <div className="carousel space-x-5 px-20 w-full">
                {teethData.map((tooth, index) => (
                    <div key={index} className="carousel-item w-full max-w-md">
                        <figure className="diff aspect-[16/9]">
                            <div className="diff-item-1">
                                <img className="rounded-box" src={tooth.bad} alt={`Tooth ${index + 1} (before)`} />
                            </div>
                            <div className="diff-item-2">
                                <img className="rounded-box" src={tooth.good} alt={`Tooth ${index + 1} (after)`} />
                            </div>
                            <div className="diff-resizer"></div>
                        </figure>
                    </div>
                ))}
            </div>

            <div className="px-20 pt-20">
                <div className="card bg-primary text-primary-content w-full p-10">
                    <div className="card-body">
                        <h2 className="card-title justify-center font-bold text-3xl mb-4">Ready to Join Our Happy Patients?</h2>
                        <p className="flex justify-center text-xl mb-8">
                            Experience the difference that quality dental care can make in your life.
                        </p>
                        <div className="card-actions justify-center">
                            <button
                                onClick={() => {
                                    const element = document.getElementById('appointment');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Schedule Your Visit Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ReviewSection;