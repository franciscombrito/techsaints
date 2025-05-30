'use client'
// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef, useState } from 'react';
import { FaUserPlus, FaRobot } from 'react-icons/fa';

const images = ['about1.jpeg', 'about2.jpeg', 'about3.jpg', 'about4.jpg','about5.jpg', 'about6.jpg', 'about11.jpg', 'about8.jpg', 'about9.jpg', 'about10.jpg', 'about12.jpg'];

const speakers = [
  {
    name: 'Joana Cruz',
    role: 'Head of Business Operations',
    img: 'speaker7.jpeg'
  },
  {
    name: 'António Silva',
    role: 'Head of Technology',
    img: 'speaker8.jpeg'
  },
  {
    name: 'Francisco Brito',
    role: 'Tech Lead',
    img: 'speaker3.jpg'
  },
  {
    name: 'Veronica Macovei',
    role: 'QA Engineer',
    img: 'speaker5.jpeg'
  },
  {
    name: 'João Liliu',
    role: '.NET Engineer',
    img: 'speaker6.jpeg'
  },
  {
    name: 'Miguel Duarte',
    role: '.NET Engineer',
    img: 'speaker9.jpeg'
  },
  {
    name: 'Eduardo Carneiro',
    role: 'QA Automation Engineer',
    img: 'speaker10.jpeg'
  },
  {
    name: 'Francisco Lourenço',
    role: 'Associate Frontend Engineer',
    img: 'speaker23.jpeg'
  },
  {
    name: 'Joana Cerqueira',
    role: 'Trainee QA Automation Engineer',
    img: 'speaker12.jpeg'
  },
  {
    name: 'Bas Ariaansz',
    role: 'Business Analyst',
    img: 'speaker11.jpeg'
  },
  {
    name: 'Rita Neves',
    role: 'Senior Frontend Engineer',
    img: 'speaker13.jpeg'
  },
  {
    name: 'Pedro Costa',
    role: '.NET Engineer',
    img: 'speaker14.jpeg'
  },
  {
    name: 'Edgar Silva',
    role: 'Senior Java Engineer',
    img: 'speaker15.jpeg'
  },
  {
    name: 'Cesar Sá',
    role: 'Lead Frontend Engineer',
    img: 'speaker16.jpeg'
  },
  {
    name: 'Tiago Alves',
    role: 'Senior QA Automation Engineer',
    img: 'speaker17.jpeg'
  },
  {
    name: 'Tiago Viana',
    role: 'Frontend Engineer',
    img: 'speaker18.jpeg'
  },
  {
    name: 'Mariana Doblas',
    role: 'Salesforce Marketing Cloud Consultant',
    img: 'speaker19.jpeg'
  },
  {
    name: 'Liliane Correia',
    role: 'Marketing Automation Consultant',
    img: 'speaker20.jpeg'
  },
  {
    name: 'Pedro Sousa',
    role: 'Lead Cloud Engineer',
    img: 'speaker21.jpeg'
  },
  {
    name: 'Melina Picco',
    role: 'People Partner',
    img: 'speaker24.jpeg'
  },
  {
    name: 'Luísa Santos',
    role: 'Care Manager',
    img: 'speaker25.jpeg'
  },
  {
    name: 'Tânia Pimentel',
    role: 'Head of People & Culture',
    img: 'speaker22.jpeg'
  },
]

export default function Home() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showValtechSpeakers, setShowValtechSpeakers] = useState(false);

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
    <div className="sticky-buttons">
      <a href="https://forms.office.com/e/FYSYUEV6uS" target='_blank' className="sticky-button register">
        <div className="icon-wrapper">
          <FaUserPlus className="icon" />
        </div>
        <span className="button-text">Register</span>
      </a>
      <a href="#contest" className="sticky-button contest">
        <div className="icon-wrapper">
          <FaRobot className="icon" />
        </div>
        <span className="button-text">June AI Contest</span>
      </a>
    </div>

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
      <a href="#agenda" className="text-white font-semibold mx-2">AGENDA</a>
      ||
      <a href="#location" className="text-white font-semibold ml-2">LOCATION</a>
    </span>
    <div className='mt-5'>
        <a
    href="https://forms.office.com/e/FYSYUEV6uS"
    target='_blank'
    className="bg-[#10B981] hover:bg-[#0f766e] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
  >
    Register Now
  </a>
    </div>
    <div className="flex justify-center">
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
      <p className="mb-8">
        From insightful talks to festive moments, this is where <strong>innovation meets tradition</strong>, and where <strong>creativity, collaboration, and culture intersect</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap">
  <a
    href="https://forms.office.com/e/FYSYUEV6uS"
    target='_blank'
    className="bg-[#10B981] hover:bg-[#0f766e] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
  >
    Register Now
  </a>

  <a
    href="#contest"
    className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-full transition-all w-full sm:w-auto text-center"
  >
      June AI Contest
  </a>

  <a
     href="#europride"
    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
  >
     EuroPride 2025 - Lisbon
  </a>
</div>
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

  {/* Skyline Decoration */}
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

<section id="agenda" className="py-20 px-6 text-center bg-[#0a192f]"> 
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

    {/* Day Card */}
    <div className="bg-[#112240] p-8 rounded-2xl flex flex-col">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">TECH & D&I</h3>
        <p className="text-sm text-gray-300">June 24</p>
      </div>
      <div className="flex-1 flex flex-col justify-center space-y-4 text-left text-gray-100">
      <div>
          <p className="font-semibold">12.00- 12.45</p>
          <p className="text-sm text-gray-300">Tech & Saints Week <strong>Kick-off</strong>, with Sheree Atcheson</p>
        </div>
        <div>
          <p className="font-semibold">12.30 - 13.30</p>
          <p className="text-sm text-gray-300"><strong>Cape Verdian Lunch</strong> with Austelino Correia, Presidente Assembleia Nacional de Cabo Verde</p>
        </div>
        <div>
          <p className="font-semibold">14.30 - 14:45</p>
                    <p className="text-sm text-gray-300">Inclusion in Action: <strong>Guiding the Visually Impaired</strong> with João Azevedo, teacher of students with special needs </p>
                           <br />
          <p className="text-sm text-gray-300">Craft Circles United: <strong>Making the Web Inclusive: Accessibility in Action</strong>, by Veronica Macovei and João Liliu</p>

        </div>
        <div>
          <p className="font-semibold">17:30 - 20:00 🌍</p>
          <p className="text-sm text-gray-300"><strong>International Dinner & Live Music</strong>: Bring a dish from your country, share traditions, and celebrate diversity with us!</p>
        </div>
      </div>
    </div>

    {/* Day Card */}
    <div className="bg-[#112240] p-8 rounded-2xl flex flex-col">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">TECH & AI</h3>
        <p className="text-sm text-gray-300">June 26</p>
      </div>
      <div className="flex-1 flex flex-col justify-center space-y-4 text-left text-gray-100">
        <div>
          <p className="font-semibold">14.00- 15.00</p>
          <p className="text-sm text-gray-300"><strong>How multi-stage attacks, GenAI, and quantum computing threaten critical telecommunications infrastructure</strong>, by Rodrigo Brito</p>
        </div>

        <div>
          <p className="font-semibold">16.00 - 17:30</p>
          <p className="text-sm text-gray-300">Craft Circles United: <strong>Javascript Fullstack Temptation - Heaven-Sent or Hell-Bound?</strong> by Danilo Hoffmann, the Devil, Francisco Brito, the Angel</p>
        </div>
        <div>
          <p className="font-semibold">18:00 - 19:00 🤖</p>
          <p className="text-sm text-gray-300">Quality Talks: <strong>AI & Innovation</strong>, by Marco António Silva</p>
        </div>
      </div>
    </div>

    {/* Day Card */}
    <div className="bg-[#112240] p-8 rounded-2xl flex flex-col">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">BUSINESS & CULTURE</h3>
        <p className="text-sm text-gray-300">June 27</p>
      </div>
      <div className="flex-1 flex flex-col justify-center space-y-4 text-left text-gray-100">
      <div>
          <p className="font-semibold">13.00- 14.00</p>
          <p className="text-sm text-gray-300"><strong>Diving Into Valtech Portugal</strong> - meet our team, our projects and our Smart Search Accelerator, by our amazing team!</p>
      </div>
      <div>
          <p className="font-semibold">17.00 - 18.00</p>
          <p className="text-sm text-gray-300"><strong>June AI Contest</strong> - Awards Ceremony</p>
      </div>
      <div>
          <p className="font-semibold">18.00 - 🎊🎤</p>
          <p className="text-sm text-gray-300">Tech & Saints Week Gran Finale: <strong>Saints Party</strong>, hosted by our Karaoke Master Rúben aka Ricardão </p>
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
              <Image
                src="/speaker26.jpeg"  
                alt="Sheree Atcheson"
                fill
                className="object-cover"
              />
            </div>
              <p className="font-semibold">Sheree Atcheson</p>
              <p className="text-xs text-gray-300">Group SVP Diversity & Inclusion</p>
              <p className="text-sm text-gray-300">Valtech</p>
            </div>
            <div className="bg-[#112240] p-2 rounded-xl">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image
                src="/speaker1.jpeg"  
                alt="Rodrigo Brito"
                fill
                className="object-cover"
              />
            </div>
              <p className="font-semibold">Rodrigo Brito</p>
              <p className="text-xs text-gray-300">VP of Products, Cybersecurity</p>
              <p className="text-sm text-gray-300">Nokia</p>
            </div>

            <div className="bg-[#112240] p-2 rounded-xl">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image
                src="/speaker2.jpeg" 
                alt="Marco António Silva"
                fill
                className="object-cover"
              />
            </div>
              <p className="font-semibold">Marco António Silva</p>
              <p className="text-xs text-gray-300">National Innovation Officer</p>
              <p className="text-sm text-gray-300">Microsoft</p>
            </div>
            
            <div className="bg-[#112240] p-2 rounded-xl">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image
                src="/speaker4.jpg"  
                alt="Danilo Hoffmann"
                fill
                className="object-cover"
              />
            </div>
              <p className="font-semibold">Danilo Hoffmann</p>
              <p className="text-xs text-gray-300">Freelancer, Javascript Enthusiast</p>
            </div>
            </div>
            <button
              onClick={() => setShowValtechSpeakers(!showValtechSpeakers)}
              className="my-6 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition"
            >              {showValtechSpeakers ? 'Hide Valtech Portugal Speakers' : 'Show Valtech Portugal Speakers'}
            </button>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            {showValtechSpeakers && shuffleArray(speakers).map((person,i) => (
              <div key={i} className="bg-[#112240] p-2 rounded-xl">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative">
                <Image
                  src={'/' + person.img}  
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
                <p className="font-semibold">{person.name}</p>
                <p className="text-xs text-gray-300">{person.role}</p>
                <p className="text-sm text-gray-300">Valtech Portugal</p>
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
            Join us for an inclusive AI challenge open to all at Valtech. Whether you are coding or just dreaming — your ideas matter!
          </p>

          {/* Contest Duration */}
          <p className="text-md font-medium text-gray-700 mb-6">
            📅 Contest runs from until June 20, 2025
          </p>

          {/* Prize */}
          <p className="text-lg font-bold text-red-500 mb-8">
            🏆 Win a €100 GoGift Voucher!
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
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 mx-2 rounded-full transition-all"
            >
              📜 Rules
            </a>
            <a
              href="https://forms.office.com/e/VFt2W7zTz5"
              target='_blank'
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all"
            >
              Submit your idea
            </a>
          </div>
        </div>

      </div>
    </section>
    <section id="lucky-circuit" className="w-full bg-black text-white relative">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">

    {/* Image or wheel visual */}
    <div className="md:w-7/10 text-center md:text-left pt-20">
  <h2 className="text-4xl font-bold text-yellow-400 mb-4">
    Saints Wheel of Luck
  </h2>

  <p className="text-lg mb-6">
    Every day during <strong>Tech & Saints Week</strong>, get your chance to spin our Saints & Tech-inspired Wheel of Luck!
  </p>

  <p className="text-md text-gray-300 mb-6">
    Stop by the wheel booth at lunch or after the talks — <strong>one spin per day</strong>, and plenty of surprises in store!
  </p>
</div>

    {/* Text content */}
    <div className="md:w-3/10">
    <img
        src="/logo_image.png" // Image with your updated visual
        alt="Tech & Saints Wheel of Luck"
        className="w-full rounded-3xl shadow-lg"
      />
    </div>

  </div>
</section>
<section id="europride"  className="relative w-full py-20 bg-white text-gray-900">
  {/* Top border */}
  <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500" />

  {/* Bottom border */}
  <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500" />

  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
    
    {/* Image */}
    <div className="md:w-1/2">
    <div className="w-full aspect-[4/3] rounded-2xl p-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 shadow-xl">
  <div className="w-full h-full rounded-2xl overflow-hidden">
    <img
      src="/pride.png"
      alt="Lisbon with Rainbow for EuroPride 2025"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </div>

    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500">
        EuroPride 2025 Comes to Lisbon
      </h2>
      <p className="text-lg mb-6">
        This year, we’re proud to host <strong>Tech & Saints Week</strong> in the same city where 
        <strong> EuroPride 2025 </strong> will take place! Lisbon will be buzzing with 
        <strong> diversity, celebration, and culture</strong> — and we’re excited to be part of it.
      </p>
      <p className="text-md text-gray-600 mb-6">
        Join us in person and experience a week filled with <strong>technology, tradition, and pride</strong>. 
        From inspiring talks and Portuguese <em>Santos Populares</em> festivities to the vibrant 
        <strong> EuroPride 2025</strong> events — Lisbon will be the place to be this June!
      </p>
      <a
        href="https://europride2025.pt"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Learn More About EuroPride 2025
      </a>
    </div>

  </div>
</section>
      {/* Location Section */}
      <section id="location" className="w-full py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Where to Find Us</h2>
          <p className="mb-4">Join us at our Lisbon office during Tech & Saints Week</p>

          <div className="mt-4 text-gray-700 text-base leading-relaxed mb-5">
            For any questions about <strong>Tech & Saints Week</strong>, the <strong>June AI Contest</strong>, or anything else related to the event, feel free to reach out!
            <br /><br />
            <strong>Email:</strong> <a href="mailto:francisco.brito@valtech.com" className="underline text-green-700">francisco.brito@valtech.com</a><br />
            <strong>Teams:</strong> Francisco Brito
          </div>

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shuffleArray(array: any): Array<{ name: string, role: string, img: string}> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];   
  }
  return array;
}