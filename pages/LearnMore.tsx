import React, { useState } from 'react';

const LearnMore: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const styles = `
    .lm-wrapper {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: #171a20;
      background-color: #ffffff;
      line-height: 1.5;
      width: 100%;
      overflow-x: hidden;
    }

    /* Typography */
    .lm-title {
      font-size: 40px;
      font-weight: 600;
      letter-spacing: -0.5px;
      margin: 0;
    }
    .lm-subtitle {
      font-size: 18px;
      font-weight: 400;
      color: #5c5e62;
      margin-top: 16px;
    }
    .lm-section-title {
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 48px;
    }
    
    /* Layout Utilities */
    .lm-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .lm-section {
      padding: 100px 0;
    }
    .lm-section-dark {
      background-color: #000000;
      color: #ffffff;
    }
    .lm-section-gray {
      background-color: #f4f4f4;
    }

    /* Hero Section */
    .lm-hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 120px 24px 60px;
      background-color: #ffffff;
      animation: lmFadeIn 1s ease-out;
    }
    .lm-hero h1 {
      font-size: 56px;
      margin-bottom: 12px;
      letter-spacing: -1px;
    }
    .lm-hero p {
      max-width: 600px;
      margin: 0 auto 60px;
      font-size: 20px;
      color: #393c41;
    }
    .lm-hero-image {
      width: 100%;
      max-width: 900px;
      height: auto;
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      animation: lmSlideUp 1s ease-out 0.3s backwards;
    }

    /* Problem Section */
    .lm-problem-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    .lm-problem-text {
      font-size: 20px;
      color: #a0a0a0;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    /* Steps Section */
    .lm-steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 40px;
      margin-top: 60px;
    }
    .lm-step-card {
      text-align: center;
      padding: 20px;
    }
    .lm-step-icon-circle {
      width: 64px;
      height: 64px;
      background: #f4f4f4;
      border-radius: 50%;
      margin: 0 auto 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3e6ae1;
    }

    /* Tech Section */
    .lm-tech-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
    @media (min-width: 768px) {
      .lm-tech-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .lm-tech-item {
      background: #ffffff;
      padding: 32px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      transition: transform 0.3s ease;
    }
    .lm-tech-item:hover {
      transform: translateY(-5px);
    }

    /* Comparison Section */
    .lm-comparison-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    @media (min-width: 768px) {
      .lm-comparison-wrapper {
        grid-template-columns: 1fr 1fr;
      }
    }
    .lm-col-before {
      background: #ffffff;
      padding: 60px 40px;
      color: #5c5e62;
    }
    .lm-col-after {
      background: #3e6ae1;
      padding: 60px 40px;
      color: #ffffff;
    }
    .lm-list {
      list-style: none;
      padding: 0;
      margin: 32px 0 0;
    }
    .lm-list li {
      margin-bottom: 16px;
      font-size: 18px;
      display: flex;
      align-items: center;
    }
    .lm-list li:before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 12px;
      background-color: currentColor;
    }

    /* Features Section */
    .lm-features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
    }
    .lm-feature-card {
      padding: 40px;
      border-radius: 16px;
      background: #f9f9f9;
      transition: all 0.3s ease;
      cursor: default;
    }
    .lm-feature-card:hover {
      background: #ffffff;
      box-shadow: 0 12px 24px rgba(0,0,0,0.08);
    }
    .lm-feature-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
    }

    /* FAQ Section */
    .lm-faq-container {
      max-width: 800px;
      margin: 0 auto;
    }
    .lm-faq-item {
      border-bottom: 1px solid #e0e0e0;
    }
    .lm-faq-question {
      width: 100%;
      text-align: left;
      padding: 24px 0;
      background: none;
      border: none;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #171a20;
    }
    .lm-faq-answer {
      height: 0;
      overflow: hidden;
      opacity: 0;
      transition: all 0.3s ease;
      font-size: 16px;
      color: #5c5e62;
      line-height: 1.6;
    }
    .lm-faq-answer.active {
      height: auto;
      opacity: 1;
      padding-bottom: 24px;
    }
    .lm-icon-plus {
      transition: transform 0.3s ease;
    }
    .lm-icon-plus.active {
      transform: rotate(45deg);
    }

    /* CTA Section */
    .lm-cta-box {
      background: #f4f4f4;
      border-radius: 30px;
      padding: 80px 24px;
      text-align: center;
    }
    .lm-btn {
      display: inline-block;
      background: #171a20;
      color: #ffffff;
      padding: 14px 48px;
      border-radius: 40px;
      font-size: 16px;
      font-weight: 500;
      margin-top: 32px;
      border: none;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .lm-btn:hover {
      background: #3e6ae1;
      transform: scale(1.05);
    }

    /* Animations */
    @keyframes lmFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes lmSlideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Mobile */
    @media (max-width: 640px) {
      .lm-hero h1 { font-size: 36px; }
      .lm-section { padding: 60px 0; }
    }
  `;

  return (
    <div className="lm-wrapper">
      <style>{styles}</style>
      
      {/* 1. Hero Section */}
      <section className="lm-hero">
        <h1 className="lm-title">Learn More About ResQLink</h1>
        <p className="lm-subtitle">A compact emergency alert device designed to protect every life.</p>
        <img 
          src="/resq_device.png" 
          alt="ResQLink Device" 
          className="lm-hero-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/id/201/1200/600';
          }}
        />
      </section>

      {/* 2. Problem Statement */}
      <section className="lm-section lm-section-dark">
        <div className="lm-container">
          <div className="lm-problem-content">
            <h2 className="lm-section-title" style={{color: '#fff'}}>Why ResQLink Exists</h2>
            <p className="lm-problem-text">
              In real-world emergency scenarios, seconds matter. Traditional phones are often unreachable during crashes, thrown out of reach, or dead zones prevent calls.
            </p>
            <p className="lm-problem-text">
              Delayed response times are the leading cause of preventable fatalities. There was a critical need for an instant, automated alert system that doesn't rely on human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How ResQLink Works */}
      <section className="lm-section">
        <div className="lm-container">
          <h2 className="lm-section-title">How It Works</h2>
          <div className="lm-steps-grid">
            {[
              { title: "Impact Detection", desc: "Sensors monitor G-force spikes." },
              { title: "Protocol Activation", desc: "Device wakes and verifies status." },
              { title: "GPS Lock", desc: "Connects to satellites for precise pin." },
              { title: "SOS Broadcast", desc: "Alerts sent to emergency contacts." }
            ].map((step, idx) => (
              <div key={idx} className="lm-step-card">
                <div className="lm-step-icon-circle">
                  <span style={{fontWeight: 'bold', fontSize: '24px'}}>{idx + 1}</span>
                </div>
                <h3 style={{fontWeight: 600, marginBottom: '8px'}}>{step.title}</h3>
                <p style={{color: '#5c5e62', fontSize: '14px'}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Inside */}
      <section className="lm-section lm-section-gray">
        <div className="lm-container">
          <h2 className="lm-section-title">Technology Inside</h2>
          <div className="lm-tech-grid">
            {[
              { title: "Accelerometer", sub: "High-G Force Detection" },
              { title: "Gyroscope", sub: "3-Axis Orientation" },
              { title: "GPS Module", sub: "Global Positioning" },
              { title: "Alert System", sub: "LTE-M & Satellite" }
            ].map((tech, i) => (
              <div key={i} className="lm-tech-item">
                <h3 style={{fontWeight: 600, marginBottom: '8px'}}>{tech.title}</h3>
                <p style={{fontSize: '14px', color: '#5c5e62'}}>{tech.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Before & After Comparison */}
      <section className="lm-section">
        <div className="lm-container">
          <div className="lm-comparison-wrapper">
            <div className="lm-col-before">
              <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '24px'}}>Before ResQLink</h3>
              <ul className="lm-list">
                <li>Delayed emergency response</li>
                <li>No automated alerts</li>
                <li>Dependent on phone battery</li>
                <li>No location tracking</li>
              </ul>
            </div>
            <div className="lm-col-after">
              <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '24px'}}>With ResQLink</h3>
              <ul className="lm-list">
                <li>Instant SOS activation</li>
                <li>Precise GPS pin sharing</li>
                <li>2-year independent battery</li>
                <li>Intelligent crash detection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Feature Breakdown */}
      <section className="lm-section">
        <div className="lm-container">
          <h2 className="lm-section-title">Feature Breakdown</h2>
          <div className="lm-features-grid">
            {[
              "Instant SOS Alerts",
              "Real-time Location Sharing",
              "Crash Detection Algorithm",
              "Lightweight (45g)",
              "Waterproof (IP68)",
              "7-Day Active Tracking",
              "Smart Fall Detection",
              "Global Coverage"
            ].map((feat, i) => (
              <div key={i} className="lm-feature-card">
                <h3 className="lm-feature-title">{feat}</h3>
                <p style={{color: '#5c5e62', fontSize: '14px'}}>
                  Engineered for reliability in the most demanding conditions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="lm-section lm-section-gray">
        <div className="lm-container">
          <h2 className="lm-section-title">Frequency Asked Questions</h2>
          <div className="lm-faq-container">
            {[
              { q: "How does ResQLink detect emergencies?", a: "It uses a custom algorithm combining data from the accelerometer and gyroscope to identify sudden stops or high-G impacts typical of accidents." },
              { q: "Do I need internet or SIM?", a: "ResQLink has an embedded eSIM that connects to multiple cellular networks. A basic subscription is required for data transmission." },
              { q: "How long does the battery last?", a: "The device features a non-rechargeable battery designed to last up to 2 years on standby or 7 days in active tracking mode." },
              { q: "Is it waterproof?", a: "Yes, it is IP68 rated, meaning it can withstand submersion in 1.5 meters of water for up to 30 minutes." },
              { q: "Does it work while driving?", a: "Yes, it is specifically designed to distinguish between normal driving vibrations and crash impacts." },
              { q: "What happens after SOS activates?", a: "Your emergency contacts receive an SMS with your location, and local emergency services are notified via our data center." }
            ].map((item, index) => (
              <div key={index} className="lm-faq-item">
                <button 
                  className="lm-faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {item.q}
                  <span className={`lm-icon-plus ${activeFaq === index ? 'active' : ''}`}>+</span>
                </button>
                <div className={`lm-faq-answer ${activeFaq === index ? 'active' : ''}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="lm-section">
        <div className="lm-container">
          <div className="lm-cta-box">
            <h2 className="lm-title">Ready to protect what matters most?</h2>
            <button className="lm-btn">Order Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;