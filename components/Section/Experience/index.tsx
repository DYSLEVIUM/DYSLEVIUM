import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { SectionContainer } from '../styles';
import { ExperienceContainer } from './styles';
import * as experienceData from '../../../data/experience.json';

const ExperienceSection = () => {
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

		console.log(experiences);
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

	const [experiences, setExperiences] = useState(
		(experienceData as any).default
	);

	return (
		<SectionContainer id="experience">
			<ExperienceContainer
				ref={ref}
				variants={container}
				initial="hidden"
				animate={animation}
			>
				<div>
					{experiences.map((experience, idx) => (
						<div key={idx}>
							<div>{experience.position}</div>
							<div>{experience.organization}</div>
							<div>{new Date(experience.startDate).toUTCString()}</div>
							<div>{experience.endDate}</div>
							<div>{experience.address}</div>
						</div>
					))}
				</div>
			</ExperienceContainer>
		</SectionContainer>
	);
};

export default ExperienceSection;
