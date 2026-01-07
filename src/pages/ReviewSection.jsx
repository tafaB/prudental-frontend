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

import share_card from "../assets/share-card.jpg"

function ReviewSection() {
    const testimonials = [
        {
            name: "Naime Pervizi",
            role: "Teacher",
            content: "As a new patient, I was impressed from start to finish. The process was seamless, and everyone made me feel welcome. Could not ask for a better experience!",
            rating: 5,
            image: null
        },
        {
            name: "Bering Tafa",
            role: "Software Engineer",
            content: "Everyone is friendly, professional, and highly skilled. The office is spotless, appointments run on time, and the care is exceptional. My teeth have never felt better. Highly recommended!",
            rating: 5,
            image: null
        },
        {
            name: "Grisilda Pasha",
            role: "Architect",
            content: "I got my braces here and I couldn't be happier with the results! Professional team and excellent care!!",
            rating: 5,
            image: null
        },
        {
            name: "Olgert Brisku",
            role: "Media Manager",
            content: "Very professional 🌟",
            rating: 5,
            image: null
        }
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
  <div id="patients" className="bg-base-100 py-20 px-5 sm:px-20 lg:px-20 w-full">
    {/* Section title */}
    <div className="text-center space-y-4 mb-16 w-full">
      <h2 className="text-4xl font-bold text-gray-900">What Our Patients Say</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Don’t just take our word for it. Here is what our patients have to say about their experience with us.
      </p>
    </div>

    {/* Image + Testimonials */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-16">
      {/* Left image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={share_card} className="rounded-2xl shadow-lg" alt="Patients" />
      </div>

      {/* Right testimonials */}
      <div className="md:w-1/2 grid gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="card bg-base-200 w-full shadow-sm"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card-body">
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4 mt-4">
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
    </div>

    {/* Divider */}
    <div className="divider w-full pb-10 text-2xl font-bold text-gray-900">
      Have a look at our work
    </div>

    {/* Carousel */}
    <div className="carousel space-x-5 px-10 w-full">
      {teethData.map((tooth, index) => (
          <div key={index} className="carousel-item w-full max-w-md"
              data-aos="fade-right"
              data-aos-delay={index * 100}
          >
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

    {/* CTA Section */}
    <div className="px-5 pt-20">
      <div className="card bg-primary text-primary-content w-full p-5 sm:p-10">
        <div className="card-body">
          <h2 className="card-title justify-center font-bold text-3xl mb-4">
            Ready to Join Our Happy Patients?
          </h2>
          <p className="flex justify-center text-xl mb-8">
            Experience the difference that quality dental care can make in your life.
          </p>
          <div className="card-actions justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('appointment');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
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