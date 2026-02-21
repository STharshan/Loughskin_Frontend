import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
 const testimonials = [
    {
      author: "Catherine",
      location: "Local",
      rating: 5,
      service: "Head Spa",
      text: "Absolutely amazing! My first time experiencing the head spa and have recommended it to all my girls and also my boyfriend. Can’t recommend enough!! Do not hesitate to book, it’s a must. Salon is luxurious 🤎",
    },
    {
      author: "Elaine Croshaw",
      location: "Loughborough",
      rating: 5,
      service: "Facial + Massage",
      text: "Amazing experience from start to finish. The room was set up lovely, the facial felt so indulgent, finished with the head and shoulder massage. My skin felt so smooth and clean after the facial and the head massage was an amazing experience.",
    },
    {
      author: "Mia Evans",
      location: "Local Guide",
      rating: 5,
      service: "Full Body + Head Massage",
      text: "Kindly moved my appointment to squeeze me in before officially opening, such a lovely experience and will definitely be back! Full body massage & head massage were great and very relaxing & needed!",
    },
    {
      author: "Safiyha Davies",
      location: "Loughborough",
      rating: 5,
      service: "Skin Treatment",
      text: "I had my treatment done with Shriya today, she was so lovely & very professional. I really enjoyed my treatment and the results also after just one session! Highly recommend & I will definitely be back again 😍 also the salon is so nice inside I love it!",
    },
    {
      author: "Zoe Watret",
      location: "Loughborough",
      rating: 5,
      service: "Body Contour Bundle",
      text: "I booked in for the body contour bundle on my torso and it was brilliant! Shriya was so knowledgeable and professional. She made me feel super comfortable getting this treatment done on something I’m so insecure about.",
    },
    {
      author: "Lauren Bolus-Jones",
      location: "Local Guide",
      rating: 5,
      service: "Luxury Head Spa + Facial + Dermaplaning",
      text: "What a blissful few hours! I went for the luxury Japanese head spa, facial & dermaplaning. It was fantastic, first time coming after finding on Instagram and I will be back. One of the best facials ever!",
    },
    {
      author: "Sameena Amin",
      location: "Manchester",
      rating: 5,
      service: "Microneedling + Head Spa + Full Body Massage",
      text: "Truly one of the most amazing experiences! Coming from Manchester me and my sister booked Shreya and Bee for micro needling, Japanese head spa and a full body massage - both ladies were so attentive to our needs and made sure we felt relaxed the whole time!",
    },
    {
      author: "Matylda Drost",
      location: "Loughborough",
      rating: 5,
      service: "Skin Treatment",
      text: "Had the best experience with Shriya, so friendly and welcoming. She made me feel comfortable and walked me through the whole process. Definitely knows what she’s doing and to top it off the results are amazing 😝",
    },
    {
      author: "B K",
      location: "Loughborough",
      rating: 5,
      service: "Couples Head Spa + Luxury Facial",
      text: "My husband and I booked a couples Japanese head spa with the luxury facial and we were not disappointed, 2 hours of pure bliss! It was the perfect little treat for us before we welcome our baby soon and they made sure I was comfortable.",
    },
    {
      author: "Vicki Arnett",
      location: "Loughborough",
      rating: 5,
      service: "Facials",
      text: "I’ve been for many facials in my life and hands down Lough Skin do the best facials. From start to finish it was amazing. Thank you so much to Shriya my skin feels great.",
    },
    {
      author: "Rashpal Bassi",
      location: "TikTok Client",
      rating: 5,
      service: "Head Spa + Luxury Facial",
      text: "I went for a Japanese head spa and luxury facial after finding on TikTok, I have to say I was blown away from start to finish. B was very attentive and welcoming, the room was very inviting and I felt relaxed straight away.",
    },
    {
      author: "A Hussain",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa",
      text: "I went for the Luxury Japanese Head Spa with LoughSkin and it was the most amazing experience. It came with a mini facial and massage, the whole experience was amazing! I was greeted by the lovely Bithe and she made me feel at ease.",
    },
    {
      author: "Katunei999",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "I wanted to treat myself for my birthday and I'm glad I took the leap! I had the luxury Japanese head spa and facial, and it was immensely peaceful and relaxing. Worth every penny. Service was wonderful; B was so inviting.",
    },
    {
      author: "Sufiya Panchbhaya",
      location: "Loughborough",
      rating: 5,
      service: "Head Spa + Luxury Facial",
      text: "I recently visited LoughSkin for a Japanese head spa and luxury facial, and I was completely blown away by the experience! From the moment I walked in, I was greeted with a warm and inviting atmosphere that immediately put me at ease.",
    },
    {
      author: "Laura Partington",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial + Vitamin C",
      text: "I had the luxury head spa and facial with Vitamin C treatment, and it was incredibly relaxing. The massages were fantastic, just the right pressure throughout. I even dozed off a few times because I was so relaxed.",
    },
    {
      author: "Tasneem Subedar",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "Cannot recommend LoughSkin in Loughborough enough. B took special attention to make this a truly relaxing and luxurious experience. I had the luxury Japanese head spa and facial gifted to me as a present and I will definitely be returning.",
    },
    {
      author: "Juvannah Brown",
      location: "Loughborough",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "I had the Japanese Inspired Luxury Headspa + Luxury Facial with B. I cannot describe how clean and fresh I felt afterwards, would book in weekly if I could.",
    },
    {
      author: "Rhyanne Lautier",
      location: "Visitor",
      rating: 5,
      service: "Head Spa",
      text: "I’m visiting the area and got a last minute booking for a Japanese head spa treatment. I’m so glad I did as it was an amazing experience! B is so lovely and made me feel super comfortable. The treatment itself was incredible. Highly recommend!",
    },
    {
      author: "Naima Khatun",
      location: "Loughborough",
      rating: 5,
      service: "Facial + Head Spa",
      text: "Always a lovely experience when I visit, so professional and B really takes her time and puts her all in making her customers feel the best.",
    },
    {
      author: "Leanne Heffer",
      location: "Local Guide",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "The most magical time. I had the luxury headspa with facial and I can't recommend it enough! B was amazing, so so friendly, very educated, explained everything & the tension was perfection.",
    },
    {
      author: "Abbey Hynes",
      location: "Local Guide",
      rating: 5,
      service: "Luxury Head Spa + Facial",
      text: "This was incredible and hands down the best treatment I’ve had (luxury Japanese headspa and facial). I was made to feel so relaxed, and the headspa is as good as it looks on social media. My hair and scalp feels amazing.",
    },
  ];

  // --- Responsive Logic ---
  const [viewPortWidth, setViewPortWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    // Handle window sizing safely
    const handleResize = () => setViewPortWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine how many cards to show based on screen width
  const visibleCards = viewPortWidth < 640 ? 1 : viewPortWidth < 1024 ? 2 : 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - visibleCards : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - visibleCards ? 0 : prev + 1));
  };

  const truncateText = (text, index) => {
    if (expandedIndex === index) return text;
    return text.length > 150 ? text.slice(0, 150) + "..." : text;
  };

  return (
    <section className="py-20 bg-[#faf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#a67c5b] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block"
          >
            Client Love
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Testimonials
          </h2>
          <div className="w-12 h-1 bg-[#62c5d2] mx-auto rounded-full" />
        </div>

        {/* Slider Container */}
        <div className="relative group">
          
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * (100 / visibleCards)}% )` }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  style={{ width: `calc(${100 / visibleCards}% - ${(6 * (visibleCards - 1)) / visibleCards}px)` }}
                  className="shrink-0"
                >
                  <div className="h-full bg-white border border-[#e1c9b3]/20 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-[#e1c9b3] opacity-30" />
                      </div>

                      <p className="text-gray-700 leading-relaxed italic mb-4">
                        "{truncateText(t.text, index)}"
                      </p>

                      {t.text.length > 150 && (
                        <button
                          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                          className="text-[#a67c5b] font-bold text-sm hover:underline mb-6 block"
                        >
                          {expandedIndex === index ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#a67c5b] to-[#c9a68a] text-white flex items-center justify-center font-serif text-lg font-bold">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 leading-none mb-1">{t.author}</h4>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">{t.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-12 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-full lg:justify-between lg:px-2 lg:pointer-events-none">
            <button
              onClick={handlePrev}
              className="lg:pointer-events-auto w-12 h-12 flex items-center justify-center bg-white border border-[#e1c9b3] text-[#a67c5b] rounded-full hover:bg-[#a67c5b] hover:text-white transition-all shadow-lg lg:-translate-x-6"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="lg:pointer-events-auto w-12 h-12 flex items-center justify-center bg-white border border-[#e1c9b3] text-[#a67c5b] rounded-full hover:bg-[#a67c5b] hover:text-white transition-all shadow-lg lg:translate-x-6"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}