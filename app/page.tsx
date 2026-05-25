'use client'
// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef } from 'react';
import { Rocket, Laptop, Users, Wine, LayoutGrid, BrainCircuit, Cpu, Code2, PartyPopper } from 'lucide-react';

const images = ['about1.jpeg', 'about_2.jpg', 'about_3.jpg', 'about_4.jpg', 'about_5.jpg', 'about_6.jpg', 'about_7.jpg', 'about_8.jpg', 'about_9.jpg', 'about_10.jpg', 'about_11.jpg', 'about_12.jpg', 'about_13.jpg', 'about_14.jpg', 'about_15.jpg', 'about_16.jpg', 'about_17.jpg', 'about_18.jpg', 'about_19.jpg', 'about_20.jpg', 'about_21.jpg'];

const speakers = [
  {
    name: 'Sofia de la Colina',
    img: 'speaker1.jpeg'
  },
  {
    name: 'Oleksii Kuzmuk',
    img: 'speaker2.jpeg'
  },
  {
    name: 'Rostislav Kostenko',
    img: 'speaker3.jpg'
  }
]

export default function Home() {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 30);

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

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/top_banner.png"
          alt="Tech and Saints Week Hero"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-between pt-[22vh] pb-[5vh] px-4">
          <h1
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-black leading-none tracking-tight text-center whitespace-nowrap text-[7vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[4.5vw]"
          >
            <span className="text-white">tech &amp; </span>
            <span className="text-[#14C94F]">s</span>
            <span className="text-[#FFC400]">a</span>
            <span className="text-[#FF3B3B]">i</span>
            <span className="text-[#1877FF]">n</span>
            <span className="text-[#14C94F]">t</span>
            <span className="text-[#FFC400]">s</span>
            <span className="text-white"> week</span>
          </h1>
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm sm:text-base md:text-xl block text-center">
              <a href="#about" className="text-white font-semibold mr-2">ABOUT</a>
              ||
              <a href="#agenda" className="text-white font-semibold mx-2">AGENDA</a>
              ||
              <a href="#location" className="text-white font-semibold ml-2">LOCATION</a>
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full pt-20 pb-20 bg-white text-gray-900 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-96 opacity-20 pointer-events-none">
          <Image src="/lisbon_bg.png" alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between md:gap-x-16">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
              At the Intersection of Culture and Technology
            </h2>
            <p className="mb-4">
              Welcome to the <strong>fourth edition</strong> of <strong>Tech & Saints Week</strong>, Valtech Portugal&apos;s unique celebration of what makes us who we are - passionate about technology, proud of our culture, and eager to share both.
            </p>
            <p className="mb-4">
              This event brings together our community to <strong>share knowledge</strong>, <strong>showcase our work</strong>, and <strong>host top-tier speakers</strong> from around the tech world. But it&apos;s more than just a event - it&apos;s a celebration.
            </p>
            <p className="mb-4">
              Held in <strong>June</strong>, during Lisbon&apos;s most vibrant season, Tech & Saints Week pays tribute to the beloved <strong>Santos Populares</strong> - Portugal&apos;s iconic street festival tradition. For an entire month, the city comes alive with music, lights, grilled sardines, colorful garlands, and the unmistakable energy of community spirit.
            </p>
            <p className="mb-8">
              From insightful talks to festive moments, this is where <strong>innovation meets tradition</strong>, and where <strong>creativity, collaboration, and culture intersect</strong>.
            </p>
          </div>
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
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 px-6 text-center" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* June 23 - Green */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: '#0d1b2e', border: '1px solid #14C94F' }}>
            <div className="px-6 py-4" style={{ backgroundColor: '#14C94F' }}>
              <h3 className="text-2xl font-black tracking-wide" style={{ color: '#0d1b2e' }}>JUNE 23</h3>
            </div>
            <div className="flex-1 flex flex-col text-left px-6 pb-6 pt-0">
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  <div style={{ width: 2, height: 24, backgroundColor: '#14C94F', opacity: 0.4 }} />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ border: '2px solid #14C94F', backgroundColor: '#0d1b2e' }}>
                    <Rocket size={20} color="#14C94F" />
                  </div>
                  <div style={{ width: 2, flexGrow: 1, backgroundColor: '#14C94F', opacity: 0.4 }} />
                </div>
                <div className="py-1 flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#14C94F' }}>12:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Kick-off Session</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div style={{ width: 2, height: 10, backgroundColor: '#14C94F', opacity: 0.4 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#14C94F' }} />
                  <div style={{ width: 2, height: 10, backgroundColor: '#14C94F', opacity: 0.4 }} />
                </div>
                <div className="ml-4 flex-1" style={{ height: 1, backgroundColor: '#1877FF', opacity: 0.6 }} />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ border: '2px solid #14C94F', backgroundColor: '#0d1b2e' }}>
                    <Laptop size={20} color="#14C94F" />
                  </div>
                  <div style={{ width: 2, flexGrow: 1, backgroundColor: '#14C94F', opacity: 0.4 }} />
                </div>
                <div className="py-1 flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#14C94F' }}>2:00 PM - 2:30 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>PULSO</p>
                  <p className="text-xs mt-1 leading-5" style={{ color: '#9ca3af' }}>
                    Practical<br />Ergonomics<br />Exercises (remote)
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div style={{ width: 2, height: 10, backgroundColor: '#14C94F', opacity: 0.4 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#14C94F' }} />
                  <div style={{ width: 2, height: 10, backgroundColor: '#14C94F', opacity: 0.4 }} />
                </div>
                <div className="ml-4 flex-1" style={{ height: 1, backgroundColor: '#1877FF', opacity: 0.6 }} />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ border: '2px solid #14C94F', backgroundColor: '#0d1b2e' }}>
                    <Users size={20} color="#14C94F" />
                  </div>
                  <div style={{ width: 2, flexGrow: 1, backgroundColor: '#14C94F', opacity: 0.4 }} />
                </div>
                <div className="py-1 flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#14C94F' }}>4:00 PM - 5:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Aiding Balanced Decision Making Workshop</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>With Sofia De La Colina</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div style={{ width: 2, height: 10, backgroundColor: '#14C94F', opacity: 0.4 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#14C94F' }} />
                  <div style={{ width: 2, height: 10, backgroundColor: '#14C94F', opacity: 0.4 }} />
                </div>
                <div className="ml-4 flex-1" style={{ height: 1, backgroundColor: '#1877FF', opacity: 0.6 }} />
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ border: '2px solid #14C94F', backgroundColor: '#0d1b2e' }}>
                  <Wine size={20} color="#14C94F" />
                </div>
                <div className="py-1">
                  <p className="text-xs font-semibold" style={{ color: '#14C94F' }}>5:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Yoga & Wine</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>With Samantha Campos</p>
                </div>
              </div>
            </div>
          </div>

          {/* June 25 - Yellow */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: '#0d1b2e', border: '1px solid #FFC400' }}>
            <div className="px-6 py-4" style={{ backgroundColor: '#FFC400' }}>
              <h3 className="text-2xl font-black tracking-wide" style={{ color: '#0d1b2e' }}>JUNE 25</h3>
            </div>
            <div className="flex-1 flex flex-col text-left px-6 pb-6 pt-0">
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  <div style={{ width: 2, height: 24, backgroundColor: '#FFC400', opacity: 0.4 }} />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ border: '2px solid #FFC400', backgroundColor: '#0d1b2e' }}>
                    <Users size={20} color="#FFC400" />
                  </div>
                  <div style={{ width: 2, flexGrow: 1, backgroundColor: '#FFC400', opacity: 0.4 }} />
                </div>
                <div className="py-1 flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#FFC400' }}>2:00 PM - 2:30 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Diving Into Valtech Portugal</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Meet our team and our projects</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div style={{ width: 2, height: 10, backgroundColor: '#FFC400', opacity: 0.4 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFC400' }} />
                  <div style={{ width: 2, height: 10, backgroundColor: '#FFC400', opacity: 0.4 }} />
                </div>
                <div className="ml-4 flex-1" style={{ height: 1, backgroundColor: '#1877FF', opacity: 0.6 }} />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ border: '2px solid #FFC400', backgroundColor: '#0d1b2e' }}>
                    <LayoutGrid size={20} color="#FFC400" />
                  </div>
                  <div style={{ width: 2, flexGrow: 1, backgroundColor: '#FFC400', opacity: 0.4 }} />
                </div>
                <div className="py-1 flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#FFC400' }}>4:00 PM - 5:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Microsoft Talk</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>(TBD)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div style={{ width: 2, height: 10, backgroundColor: '#FFC400', opacity: 0.4 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFC400' }} />
                  <div style={{ width: 2, height: 10, backgroundColor: '#FFC400', opacity: 0.4 }} />
                </div>
                <div className="ml-4 flex-1" style={{ height: 1, backgroundColor: '#1877FF', opacity: 0.6 }} />
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ border: '2px solid #FFC400', backgroundColor: '#0d1b2e' }}>
                  <BrainCircuit size={20} color="#FFC400" />
                </div>
                <div className="py-1">
                  <p className="text-xs font-semibold" style={{ color: '#FFC400' }}>5:00 PM - 6:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>AI Session (TBD)</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>(TBD)</p>
                </div>
              </div>
            </div>
          </div>

          {/* June 26 - Red */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: '#0d1b2e', border: '1px solid #FF3B3B' }}>
            <div className="px-6 py-4" style={{ backgroundColor: '#FF3B3B' }}>
              <h3 className="text-2xl font-black tracking-wide" style={{ color: '#0d1b2e' }}>JUNE 26</h3>
            </div>
            <div className="flex-1 flex flex-col text-left px-6 pb-6 pt-0">
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  <div style={{ width: 2, height: 24, backgroundColor: '#FF3B3B', opacity: 0.4 }} />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ border: '2px solid #FF3B3B', backgroundColor: '#0d1b2e' }}>
                    <Cpu size={20} color="#FF3B3B" />
                  </div>
                  <div style={{ width: 2, flexGrow: 1, backgroundColor: '#FF3B3B', opacity: 0.4 }} />
                </div>
                <div className="py-1 flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#FF3B3B' }}>3:00 PM - 4:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Valtech One - Framework for AI Agentic Implementation</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>With Bruno Oliveira, Oleksii Kuzmuk and Rostislav Kostenko</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div style={{ width: 2, height: 10, backgroundColor: '#FF3B3B', opacity: 0.4 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF3B3B' }} />
                  <div style={{ width: 2, height: 10, backgroundColor: '#FF3B3B', opacity: 0.4 }} />
                </div>
                <div className="ml-4 flex-1" style={{ height: 1, backgroundColor: '#1877FF', opacity: 0.6 }} />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ border: '2px solid #FF3B3B', backgroundColor: '#0d1b2e' }}>
                    <Code2 size={20} color="#FF3B3B" />
                  </div>
                  <div style={{ width: 2, flexGrow: 1, backgroundColor: '#FF3B3B', opacity: 0.4 }} />
                </div>
                <div className="py-1 flex-1">
                  <p className="text-xs font-semibold" style={{ color: '#FF3B3B' }}>5:00 PM - 6:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Multi-Agent Coding Teams</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>(Brady Gaster - Squad Framework) With Marco Antonio Silva</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div style={{ width: 2, height: 10, backgroundColor: '#FF3B3B', opacity: 0.4 }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF3B3B' }} />
                  <div style={{ width: 2, height: 10, backgroundColor: '#FF3B3B', opacity: 0.4 }} />
                </div>
                <div className="ml-4 flex-1" style={{ height: 1, backgroundColor: '#1877FF', opacity: 0.6 }} />
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ border: '2px solid #FF3B3B', backgroundColor: '#0d1b2e' }}>
                  <PartyPopper size={20} color="#FF3B3B" />
                </div>
                <div className="py-1">
                  <p className="text-xs font-semibold" style={{ color: '#FF3B3B' }}>6:00 PM</p>
                  <p className="font-black text-sm uppercase leading-tight" style={{ color: '#ffffff' }}>Saints Party</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-10 px-6 text-center bg-[#0a192f]">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400">SPEAKERS</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="bg-[#112240] p-2 rounded-xl">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image src="/speaker_2.jpg" alt="Sofia de la Colina" fill className="object-cover" />
            </div>
            <p className="font-semibold">Sofia de la Colina</p>
            <p className="text-xs text-gray-300">Group Diversity and Inclusion Lead</p>
            <p className="text-sm text-gray-300">Valtech</p>
          </div>
          <div className="bg-[#112240] p-2 rounded-xl">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image src="/speaker_1.jpg" alt="Oleksii Kuzmuk" fill className="object-cover" />
            </div>
            <p className="font-semibold">Oleksii Kuzmuk</p>
            <p className="text-xs text-gray-300">Director of Technology, MACH</p>
          </div>
          <div className="bg-[#112240] p-2 rounded-xl">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image src="/speaker_3.jpg" alt="Rostislav Kostenko" fill className="object-cover" />
            </div>
            <p className="font-semibold">Rostislav Kostenko</p>
            <p className="text-xs text-gray-300">Senior Sitecore Engineer</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-[40vw] h-[300px] flex-shrink-0">
              <img
                src={`/${img}`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Wheel of Luck Section */}
      <section id="lucky-circuit" className="w-full bg-black text-white relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12 py-20">
          <div className="md:w-7/10 text-center md:text-left">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Saints Wheel of Luck
            </h2>
            <p className="text-lg mb-6">
              Every day during <strong>Tech & Saints Week</strong>, get your chance to spin our Saints & Tech-inspired Wheel of Luck!
            </p>
            <p className="text-md text-gray-300 mb-6">
              Stop by the wheel booth at lunch or after the talks - <strong>one spin per day</strong>, and plenty of surprises in store!
            </p>
          </div>
          <div className="md:w-3/10">
            <img
              src="/logo_image.png"
              alt="Tech & Saints Wheel of Luck"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Last Edition Section */}
      <section className="w-full bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            Last Edition Sessions
          </h2>
          <div className="w-full overflow-hidden">
            <img
              src="/last_year.png"
              alt="Last Edition Sessions"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="w-full py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Where to Find Us</h2>
          <p className="mb-4">Join us at our Lisbon office during Tech & Saints Week</p>
          <div className="mt-4 text-gray-700 text-base leading-relaxed mb-5">
            For any questions about <strong>Tech & Saints Week</strong>, or anything else related to the event, feel free to reach out!
            <br /><br />
            <strong>Email:</strong>{' '}
            <a href="mailto:pt.office@valtech.com" className="underline text-green-700">
              pt.office@valtech.com
            </a>
          </div>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5150.08386369669!2d-9.146319022825448!3d38.742343655836194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331ce02dbf7d%3A0xdf6b7eaea0295427!2sValtech%20Portugal!5e1!3m2!1spt-PT!2spt!4v1743695591539!5m2!1spt-PT!2spt"
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shuffleArray(array: any): Array<{ name: string; role: string; img: string }> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}