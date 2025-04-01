// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

export default function Home() {



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

  <div className="absolute top-[70vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4">
    <h1 className="text-4xl md:text-6xl font-bold">TECH & SAINTS WEEK</h1>
    <p className="mt-4 text-lg md:text-xl">AT THE INTERSECTION OF CULTURE AND TECHNOLOGY</p>
    <span className="mt-20 block">
      <a href="#about" className="text-white font-semibold mr-2">ABOUT</a>
      ||
      <a href="#agenda" className="text-white font-semibold ml-2">AGENDA</a>
    </span>
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
  {/* Left image - 50% width */}
  <div className="w-1/2 relative h-full">
    <Image
      src="/skyline.png"
      alt="Left Lisbon skyline"
      fill
      className="object-cover "
    />
  </div>
</div>
    </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((day) => (
            <div key={day} className="bg-[#112240] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Day {day}</h3>
              <p className="text-sm text-gray-300 mb-4">June {11 + day}</p>
              <div className="space-y-2">
                <p>00:00 Event Title</p>
                <p>00:00 Event Title</p>
              </div>
            </div>
          ))}
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

      {/* Location Section */}
      <section id="location" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">LOCATION</h2>
        <p className="text-xl">Lisbon, Portugal</p>
      </section>
    </div>
  );
}
