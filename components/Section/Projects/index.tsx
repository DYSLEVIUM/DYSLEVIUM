import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { githubProfile } from '../../../utils/constants';
import sectionStyles from '../Section.module.scss';
import styles from './ProjectsSection.module.scss';

const ProjectsSection = ({ projects }) => {
	const animation = useAnimation();
	const [ref, inView, entry] = useInView({
		threshold: 0.1,
		delay: 0.25,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			animation.start('visible');
		} else {
			animation.start('hidden');
		}
	}, [animation, inView]);

	const container = {
		hidden: { opacity: 0, translateY: 15 },
		visible: {
			opacity: 1,
			translateY: 0,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 0.25 * 4,
			},
		},
	};

	const listItem = {
		hidden: { opacity: 0, translateY: 15 },
		visible: {
			opacity: 1,
			translateY: 0,
		},
	};

	const formatTitle = (str: string) => {
		let newStrArr = Array.from(str);
		let delimiter = ['-', '_'];
		for (let i = 0; i < str.length; ++i) {
			for (let j = 0; j < delimiter.length; ++j) {
				if (str[i] === delimiter[j]) newStrArr[i] = ' ';
				break;
			}
		}

		let newStr: String = newStrArr[0];
		for (let i = 1; i < str.length; ++i) {
			if (newStrArr[i] >= 'A' && newStrArr[i] <= 'Z') {
				if (newStrArr[i - 1] >= 'a' && newStrArr[i - 1] <= 'z') {
					newStr += ' ';
				}
			}
			newStr += newStrArr[i];
		}

		return newStr;
	};

	return (
		<div id="projects" className={sectionStyles.sectionContainer}>
			<motion.div
				ref={ref}
				variants={container}
				initial="hidden"
				animate={animation}
				className={styles.projectsContainer}
			>
				<div className={styles.sectionIntro}>
					<motion.h2 variants={listItem} className={styles.sectionTitle}>
						Some of my projects
					</motion.h2>
					<motion.a
						variants={listItem}
						className={styles.sectionAlt}
						href={githubProfile + '?tab=repositories'}
						target="_blank"
					>
						View on Github
					</motion.a>
				</div>

				<ul className={styles.projectsList}>
					{projects.map((project) => (
						<motion.li
							key={project.id}
							variants={listItem}
							className={styles.projectListItem}
						>
							<motion.h3 variants={listItem} className={styles.projectTitle}>
								<a href={project.html_url} target="_blank">
									{formatTitle(project.name)}
								</a>
							</motion.h3>

							<motion.h4
								variants={listItem}
								className={styles.projectDescription}
							>
								{project.description}
							</motion.h4>
							{/* <motion.h5 variants={listItem}>
								<a href={project.html_url} target="_blank">
									GITHUB
								</a>
							</motion.h5>

							<motion.h5 variants={listItem}>
								<a href={project.homepage} target="_blank">
									LINK
								</a>
							</motion.h5> */}
						</motion.li>
					))}
				</ul>
			</motion.div>
		</div>
	);
};

export default ProjectsSection;
