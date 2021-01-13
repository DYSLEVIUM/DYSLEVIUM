import { useEffect } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';
import AboutSection from '../components/Section/AboutSection';
import IntroductionSection from '../components/Section/IntroductionSection';
import ContactSection from '../components/Section/ContactSection';
import FooterSection from '../components/Section/FooterSection';
import ExperienceSection from '../components/Section/Experience';
import Projects from '../components/Section/Projects';

export default function App() {
  useEffect(() => {
    if (window.location.origin + '/' !== window.location.href)
      window.location.href = '/';
    console.clear();
  });

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pushpakant Behera - Portfolio</title>
      </Head>
      {/* header */}
      <>
        <Navbar />
        <Progressbar />
      </>

      <main>
        <IntroductionSection />
        <AboutSection />
        <ExperienceSection />
        <Projects />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
