import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { PrimaryButton } from '../../../styles/shared/Button';
import { githubProfile } from '../../../utils/constants';
import { SectionContainer } from '../styles';
import {
	ProjectsContainer,
	SectionIntro,
	ProjectDescription,
	Homepage,
	GithubLink,
	LinksContainer,
	TitleContainer,
	ProjectTitle,
	ProjectListItem,
	ProjectsList,
	SectionAlt,
	SectionTitle,
	ShowMore,
} from './styles';

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
				delayChildren: 0.25,
			},
		},
	};

	const MAX_RENDERED_PROJECTS = 6;
	const [showMore, setShowMore] = useState(false);
	const [projectsList, setProjectsList] = useState(
		projects.slice(0, MAX_RENDERED_PROJECTS)
	);

	useEffect(() => {
		if (showMore) setProjectsList(projects);
		else setProjectsList(projects.slice(0, MAX_RENDERED_PROJECTS));
	}, [showMore]);

	const showMoreToggle = () => {
		setShowMore((prevState) => !prevState);
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
		<SectionContainer id="projects">
			<ProjectsContainer
				ref={ref}
				variants={container}
				initial="hidden"
				animate={animation}
			>
				<SectionIntro>
					<SectionTitle variants={listItem}>Some of my projects</SectionTitle>
					<SectionAlt
						variants={listItem}
						href={githubProfile + '?tab=repositories'}
						target="_blank"
						rel="noopener noreferrer"
					>
						View on Github
					</SectionAlt>
				</SectionIntro>

				<ProjectsList>
					<AnimatePresence>
						{projectsList.map((project) => (
							<ProjectListItem
								key={project.id}
								variants={listItem}
								initial={listItem.hidden}
								animate={listItem.visible}
								exit={listItem.hidden}
							>
								<ProjectTitle>
									<TitleContainer>
										<a
											href={project.html_url}
											target="_blank"
											rel="noopener noreferrer"
										>
											{formatTitle(project.name)}
										</a>
									</TitleContainer>

									<LinksContainer>
										<GithubLink
											variants={listItem}
											initial={listItem.hidden}
											animate={listItem.visible}
											exit={listItem.hidden}
										>
											<motion.a
												href={project.html_url}
												target="_blank"
												rel="noopener noreferrer"
											>
												<FontAwesomeIcon icon={faGithub} />
											</motion.a>
										</GithubLink>
										{(() => {
											if (
												project.homepage !== '' &&
												project.homepage !== null
											) {
												return (
													<Homepage
														variants={listItem}
														initial={listItem.hidden}
														animate={listItem.visible}
														exit={listItem.hidden}
													>
														<a
															href={project.homepage}
															target="_blank"
															rel="noopener noreferrer"
														>
															<FontAwesomeIcon icon={faExternalLinkAlt} />
														</a>
													</Homepage>
												);
											}
										})()}
									</LinksContainer>
								</ProjectTitle>
								<ProjectDescription>{project.description}</ProjectDescription>
							</ProjectListItem>
						))}
					</AnimatePresence>
				</ProjectsList>

				<ShowMore>
					<PrimaryButton onClick={showMoreToggle} variants={listItem}>
						Show {showMore ? 'Less' : 'More'}
					</PrimaryButton>
				</ShowMore>
			</ProjectsContainer>
		</SectionContainer>
	);
};

export default ProjectsSection;
