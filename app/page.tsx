'use client'
// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef } from 'react';

const images = ['about1.jpeg', 'about2.jpeg', 'about3.jpg', 'about4.jpg','about5.jpg', 'about6.jpg', 'about11.jpg', 'about8.jpg', 'about9.jpg', 'about10.jpg', 'about12.jpg'];

export default function Home() {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 30); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white font-sans">
      <Head>
        <title>Tech & Saints Week</title>
        <meta name="description" content="A conference celebrating technology and culture" />
      </Head>

      <section className="relative h-screen w-full overflow-hidden">
  <Image
    src="/hero.png"
    alt="Tech and Saints Week Hero"
    fill
    priority
    className="object-cover z-0"
  />

  {/* <div className="absolute inset-0 bg-black/20 z-10"></div> */}

  <div className="absolute top-[73vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4">
    <h1 className="text-4xl sm:text-6xl font-extrabold text-center">
      <span className="text-white-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">Tech</span>{' '}
      <span className="text-white-400 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]">&</span>{' '}
      <span className="text-white-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">Saints Week</span>
    </h1>
    <p className="mt-4 text-lg md:text-xl">AT THE INTERSECTION OF CULTURE AND TECHNOLOGY</p>
    <span className="text-xl mt-3 block">
      <a href="#about" className="text-white font-semibold mr-2">ABOUT</a>
      ||
      <a href="#contest" className="text-white font-semibold ml-2">AI </a> 
      ||
      <a href="#agenda" className="text-white font-semibold ml-2">AGENDA</a>
    </span>
    <div className="flex mt-4 justify-center">
      <Image
        src="/Valtech_Logo_White.svg"
        alt="Logo"
        width={180}
        height={60}
      />
    </div>
  </div>
</section>
<section id="about" className="w-full pt-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between md:gap-x-16">

        {/* Text content */}
        <div className="md:w-3/5 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            At the Intersection of Culture and Technology
          </h2>
          <p className="mb-4">
            Welcome to the <strong>third edition</strong> of <strong>Tech & Saints Week</strong>, Valtech Portugal’s unique celebration of what makes us who we are — passionate about technology, proud of our culture, and eager to share both.
          </p>
          <p className="mb-4">
            This event brings together our community to <strong>share knowledge</strong>, <strong>showcase our work</strong>, and <strong>host top-tier speakers</strong> from around the tech world. But it’s more than just a event — it’s a celebration.
          </p>
          <p className="mb-4">
            Held in <strong>June</strong>, during Lisbon’s most vibrant season, Tech & Saints Week pays tribute to the beloved <strong>Santos Populares</strong> — Portugal’s iconic street festival tradition. For an entire month, the city comes alive with <em>music, lights, grilled sardines, colorful garlands</em>, and the unmistakable energy of community spirit.
          </p>
          <p>
            From insightful talks to festive moments, this is where <strong>innovation meets tradition</strong>, and where <strong>creativity, collaboration, and culture intersect</strong>.
          </p>
        </div>

        {/* Static Image */}
        <div className="md:w-2/5 flex justify-center">
          <div className="w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/about1.jpeg"
              alt="Santos Populares festival in Lisbon"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
      <div className="relative w-full flex opacity-20 h-48">
        <div className="w-[600px] relative h-full">
          <Image
            src="/skyline.png"
            alt="Left Lisbon skyline"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#112240] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">TECH & DEI</h3>
              <p className="text-sm text-gray-300 mb-4">June 24</p>
              <div className="space-y-2">
                <p>12:00 Event Title</p>
                <p>00:00 Event Title</p>
              </div>
            </div>
            <div className="bg-[#112240] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">TECH & AI</h3>
              <p className="text-sm text-gray-300 mb-4">June 26</p>
              <div className="space-y-2">
                <p>00:00 Event Title</p>
                <p>00:00 Event Title</p>
              </div>
            </div>
            <div className="bg-[#112240] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">BUSINESS & CULTURE</h3>
              <p className="text-sm text-gray-300 mb-4">June 27</p>
              <div className="space-y-2">
                <p>00:00 Event Title</p>
                <p>00:00 Event Title</p>
              </div>
            </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400">SPEAKERS</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          {Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="bg-[#112240] p-4 rounded-xl">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-600 mb-4" />
              <p className="font-semibold">Job Alame</p>
              <p className="text-sm text-gray-300">Job Title</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-[40vw] h-[300px] flex-shrink-0"
            >
              <img
                src={`/${img}`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
    </section>
    <section id="contest" className="w-full py-20 bg-yellow-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Image Side */}
        <div className="md:w-1/2">
          <img
            src="/juneAI.png"
            alt="June AI Contest illustration"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Text Side */}
        <div className="md:w-1/2 text-center md:text-left">

          <h2 className="text-4xl font-bold text-green-600 mb-6">
            Unleash Your Creativity
          </h2>

          <p className="text-lg mb-4">
            Join us for an inclusive AI challenge open to all at Valtech. Whether you're coding or just dreaming — your ideas matter!
          </p>

          {/* Contest Duration */}
          <p className="text-md font-medium text-gray-700 mb-6">
            📅 Contest runs from <strong>June 1</strong> to <strong>June 20</strong>, 2025
          </p>

          {/* Prize */}
          <p className="text-lg font-bold text-red-500 mb-8">
            🏆 Win a €100 TAP Air Portugal Voucher!
          </p>

          {/* Tracks */}
          <ul className="space-y-4 text-left list-inside list-none">
            <li><strong>🧠 No-Code Idea Challenge:</strong> Share a smart AI application or business idea powered by AI — no coding required!</li>
            <li><strong>🧘 Productivity & Wellbeing:</strong> Propose AI tools that enhance productivity and promote workplace wellbeing.</li>
            <li><strong>🌍 Diversity, Equity & Inclusion:</strong> Suggest AI-driven initiatives to foster a more inclusive work environment.</li>
          </ul>

          {/* Link to Contest Rules */}
          <div className="mt-8">
            <a
              href="/contest-rules.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all"
            >
              📜 Read Full Contest Rules
            </a>
          </div>
        </div>

      </div>
    </section>
      {/* Location Section */}
      <section id="location" className="w-full py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Where to Find Us</h2>
          <p className="mb-4">Join us at our Lisbon office during Tech & Saints Week</p>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5150.08386369669!2d-9.146319022825448!3d38.742343655836194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331ce02dbf7d%3A0xdf6b7eaea0295427!2sValtech%20Portugal!5e1!3m2!1spt-PT!2spt!4v1743695591539!5m2!1spt-PT!2spt" // Replace with your actual embed URL
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
