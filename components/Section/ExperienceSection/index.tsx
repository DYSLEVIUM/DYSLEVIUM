import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { SectionContainer } from '../styles';
import {
	ExperienceContainer,
	SectionIntro,
	SectionTitle,
	TabList,
	TabButton,
	TabHighlight,
	TabPanelsList,
	TabPanel,
	ExperienceListContainer,
	ExperienceListContainerWrapper,
	PositionContainer,
	Position,
	Delimiter,
	Organization,
	TabListWrapper,
} from './styles';
import * as experienceData from '../../../data/experience.json';

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
	hidden: {
		opacity: 0,
		translateY: 15,
	},
	visible: {
		opacity: 1,
		translateY: 0,
	},
};

const listItemTab = {
	hidden: {
		opacity: 0,
		display: 'none',
		transition: {
			duration: 0.5,
			timingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		},
	},
	visible: {
		opacity: 1,
		display: 'block',
		transition: {
			duration: 0.5,
			timingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		},
	},
};

const ExperienceSection = () => {
	const [experiences, setExperiences] = useState(
		(experienceData as any).default
	);
	const [activeTabIndex, setActiveTabIndex] = useState(0);
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

	return (
		<SectionContainer id="experience">
			<ExperienceContainer
				ref={ref}
				variants={container}
				initial="hidden"
				animate={animation}
			>
				<SectionIntro>
					<SectionTitle variants={listItem}>Experience</SectionTitle>
				</SectionIntro>

				<ExperienceListContainer>
					<ExperienceListContainerWrapper>
						<TabListWrapper>
							<TabList variants={listItem}>
								{experiences.map(({ organization }, idx) => (
									<TabButton
										key={idx}
										isActive={activeTabIndex === idx}
										onClick={() => {
											setActiveTabIndex(idx);
										}}
									>
										<span>{organization}</span>
									</TabButton>
								))}
								<TabHighlight
									activeTabIndex={activeTabIndex}
									totalSize={experiences.length}
								/>
							</TabList>
						</TabListWrapper>
						<TabPanelsList variants={listItem}>
							{experiences.map(
								(
									{
										organization,
										position,
										website,
										startDate,
										endDate,
										position_details,
									},
									idx
								) => (
									<TabPanel
										key={idx}
										variants={listItemTab}
										animate={activeTabIndex !== idx ? 'hidden' : 'visible'}
									>
										<PositionContainer variants={listItem}>
											<Position>{position}</Position>
											<Delimiter>@</Delimiter>
											<Organization>
												<a
													href={website}
													target="_blank"
													rel="noopener noreferrer"
												>
													{organization}
												</a>
											</Organization>
										</PositionContainer>

										<div>
											{startDate} - {endDate}
										</div>

										<ul>
											{position_details.map((details, idx) => (
												<li key={idx}>{details}</li>
											))}
										</ul>
									</TabPanel>
								)
							)}
						</TabPanelsList>
					</ExperienceListContainerWrapper>
				</ExperienceListContainer>
			</ExperienceContainer>
		</SectionContainer>
	);
};

export default ExperienceSection;
