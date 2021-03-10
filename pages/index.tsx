import Head from 'next/head';
import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';
import AboutSection from '../components/Section/AboutSection';
import ContactSection from '../components/Section/ContactSection';
import ExperienceSection from '../components/Section/Experience';
import FooterSection from '../components/Section/FooterSection';
import IntroductionSection from '../components/Section/IntroductionSection';
import Projects from '../components/Section/Projects';
import { githubUsername } from '../utils/constants';

export default function App({ projects }) {
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
				<Projects projects={projects} />
				<ContactSection />
				<FooterSection />
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	const projects = await fetch(
		`https://api.github.com/users/${githubUsername}/repos?sort=DESC`
	).then((result) => result.json());

	const refreshRate = 60 * 60 * 8; //	in seconds
	return { props: { projects }, revalidate: refreshRate };
}
