import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { GlobalStyles, MainContainer } from '../styles';

import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';
import AboutSection from '../components/Section/AboutSection';
import ContactSection from '../components/Section/ContactSection';
import ExperienceSection from '../components/Section/ExperienceSection';
import FooterSection from '../components/Section/FooterSection';
import IntroductionSection from '../components/Section/IntroductionSection';
import ProjectsSection from '../components/Section/ProjectsSection';
import Canvas from '../components/Canvas';
import { mobileSize } from '../styles/variables';

export default function App() {
  const [showBlur, setShowBlur] = useState(false);
  const toggleBlurContainer = (isClose) => {
    setShowBlur(!isClose);
  };

  const [isDesktopMode, setIsDesktopMode] = useState(false);

  const windowResize = () => {
    if (window.innerWidth < parseInt(mobileSize.replace('px', ''), 10))
      setIsDesktopMode(false);
    else {
      setIsDesktopMode(true);
    }
  };

  useEffect(() => {
    windowResize();

    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Pushpakant Behera - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalStyles />

      {/* header */}
      <>
        <Navbar onSideBarToggle={toggleBlurContainer} />
        <Progressbar />
      </>

      {isDesktopMode ? <Canvas /> : null}

      <MainContainer isBlur={showBlur && !isDesktopMode}>
        <IntroductionSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </MainContainer>
    </>
  );
}

// export async function getStaticProps(context) {
// 	const projects = await fetch(
// 		`https://api.github.com/users/${githubUsername}/repos?sort=DESC`
// 	).then((result) => result.json());

// 	const refreshRate = 60 * 60 * 8; //	in seconds
// 	return { props: { projects }, revalidate: refreshRate };
// }
