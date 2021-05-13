import Head from 'next/head';

import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';
import AboutSection from '../components/Section/AboutSection';
import ContactSection from '../components/Section/ContactSection';
import ExperienceSection from '../components/Section/Experience';
import FooterSection from '../components/Section/FooterSection';
import IntroductionSection from '../components/Section/IntroductionSection';
import ProjectsSection from '../components/Section/ProjectsSection';
import Canvas from '../components/Canvas';
import { githubUsername } from '../utils/constants';

export default function App({ projects }) {
	return (
		<>
			<Head>
				<title>Pushpakant Behera - Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			{/* header */}
			<>
				<Navbar />
				<Progressbar />
			</>

			<main style={{ position: 'relative' }}>
				<Canvas />
				<IntroductionSection />
				<AboutSection />
				<ExperienceSection />
				<ProjectsSection projects={projects} />
				<ContactSection />
				<FooterSection />
			</main>
		</>
	);
}

export async function getStaticProps(context) {
	const projects = await fetch(
		`https://api.github.com/users/${githubUsername}/repos?sort=DESC`
	).then((result) => result.json());

	const refreshRate = 60 * 60 * 8; //	in seconds
	return { props: { projects }, revalidate: refreshRate };
}
