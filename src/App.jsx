import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutLanyard from './components/AboutLanyard';
import MountainJourney from './components/MountainJourney';
import SkillsPeriodic from './components/SkillsPeriodic';
import WorkAccordion from './components/WorkAccordion';
import CertificationsInk from './components/CertificationsInk';
import ExperienceSpine from './components/ExperienceSpine';
import AchievementsHorizontal from './components/AchievementsHorizontal';
import ContactLetterHop from './components/ContactLetterHop';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased selection:bg-ink selection:text-paper relative">
      {/* 1. Frosted Glass Top Navigation */}
      <Navbar />

      {/* 2. One Continuous Calm Scroll (No splash screens, no page curtains) */}
      <main>
        {/* Section 01: Hero with Full Uncropped 16:9 Landscape Video */}
        <Hero />

        {/* Section 02: About with 3-Column Grid & Hanging Lanyard ID Card */}
        <AboutLanyard />

        {/* Section 03: The Engineering & Research Mountain Trek */}
        <MountainJourney />

        {/* Section 04: Periodic Table of My Stack (Curated Power Elements) */}
        <SkillsPeriodic />

        {/* Section 05: Selected Work (Expanding Horizontal Accordion Gallery) */}
        <WorkAccordion />

        {/* Section 06: Always Learning (Ink-Flood Certifications Index) */}
        <CertificationsInk />

        {/* Section 07: Education & Experience as One Continuous Path */}
        <ExperienceSpine />

        {/* Section 08: Proven Results (Achievements Horizontal Gallery) */}
        <AchievementsHorizontal />

        {/* Section 09: Letter-Hop Contact & Direct Communication Envelope */}
        <ContactLetterHop />
      </main>

      {/* 3. Minimal Footer */}
      <Footer />
    </div>
  );
}
