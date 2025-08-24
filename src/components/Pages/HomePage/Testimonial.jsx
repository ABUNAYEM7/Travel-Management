import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TESTIMONIALS = [
  {
    name: "Carolyn Craig",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop",
    rating: 3.5,
    text:
      "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.",
  },
  {
    name: "Harriet Maxwell",
    avatar:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=160&auto=format&fit=crop",
    rating: 4,
    text:
      "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.",
  },
  {
    name: "Ronald Richards",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=160&auto=format&fit=crop",
    rating: 4.5,
    text:
      "Failure will never overtake me if my determination to succeed is strong enough. We must embrace pain and burn it as fuel for our journey.",
  },
  {
    name: "Esther Howard",
    avatar:
      "https://images.unsplash.com/photo-1544005316-04ce1f2d2d1e?q=80&w=160&auto=format&fit=crop",
    rating: 5,
    text:
      "Your time is limited, so don’t waste it living someone else’s life. Keep learning, keep improving, keep building momentum.",
  },
];

// star renderer
const Stars = ({ value = 0 }) => {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  const Star = ({ className = "" }) => (
    <svg viewBox="0 0 20 20" className={`w-4 h-4 ${className}`} fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z"/>
    </svg>
  );

  return (
    <div className="flex items-center gap-1">
      {[...Array(full)].map((_, i) => (
        <Star key={`f-${i}`} className="text-yellow-400" />
      ))}
      {half && (
        <div className="relative">
          <Star className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(empty)].map((_, i) => (
        <Star key={`e-${i}`} className="text-gray-300" />
      ))}
    </div>
  );
};

const Card = ({ t }) => (
  <div className="px-3">
    <div className="bg-white/90 border border-gray-100 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow"
        />
        <p className="text-gray-600 leading-7 text-[15px]">{t.text}</p>
      </div>

      <div className="mt-6">
        <p className="font-extrabold text-gray-900">{t.name}</p>
        <div className="mt-2">
          <Stars value={t.rating} />
        </div>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,          // autoplay enabled
    autoplaySpeed: 3000,     // 3 seconds per slide
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        {/* increased margin top for more space above dots */}
        <ul className="!m-0 flex items-center justify-center gap-2 mt-10">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <span className="block h-2 w-2 rounded-[2px] bg-yellow-400 opacity-60 slick-active:opacity-100"></span>
    ),
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Testimonial from our Clients
          </h2>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            The French Revolution constituted for the conscience of the dominant aristocratic class a fall from
          </p>
        </div>

        <div className="mt-10">
          <Slider {...settings}>
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} t={t} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
