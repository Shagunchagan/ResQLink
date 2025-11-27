import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { PageRoute } from '../types';

interface HomeProps {
  setPage: (page: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="animate-in fade-in zoom-in duration-500">
      <Hero setPage={setPage} />

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Safety</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Advanced technology packed into a compact, durable shell.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Instant SOS Alerts"
              description="One-touch activation sends emergency alerts to your pre-defined contacts and local authorities instantly."
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              }
            />
            <FeatureCard
              title="Crash Detection"
              description="High-G accelerometer detects severe impacts and automatically triggers an alert if you are unresponsive."
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              }
            />
            <FeatureCard
              title="GPS Sharing"
              description="Precise location tracking shares your exact coordinates via satellite connection, even without cellular data."
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <FeatureCard
              title="Water Resistant"
              description="IP68 rated casing ensures functionality in rain, snow, or submersion up to 1.5 meters."
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Protection For Everyone</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Drivers", text: "Automatic crash detection for peace of mind on the road.", img: "https://picsum.photos/id/183/800/600" },
              { title: "Elders", text: "Simple SOS button for falls or medical emergencies.", img: "https://i.ibb.co/twnsfQ8n/wmremove-transformed.jpg" },
              { title: "Solo Travelers", text: "GPS tracking for hikers and adventurers off the grid.", img: "https://picsum.photos/id/1036/800/600" },
            ].map((useCase, idx) => (
              <div key={idx} className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={useCase.img} 
                  alt={useCase.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-1">{useCase.title}</h3>
                  <p className="text-gray-200">{useCase.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;