import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './ContactSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { email } from '../../../utils/constants';

const ContactSection = () => {
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

	return (
		<div id="contact" className={sectionStyles.sectionContainer}>
			<motion.div
				ref={ref}
				variants={container}
				initial="hidden"
				animate={animation}
				className={styles.contactContainer}
			>
				<motion.h2 variants={listItem} className={styles.contactTitle}>
					Get in Touch
				</motion.h2>
				<motion.h3 variants={listItem} className={styles.contactDescription}>
					Whether you have a question or just want to say hi, my inbox is always
					open. I'll try my best to get back to you!
				</motion.h3>
				<motion.button variants={listItem} className={styles.contactBtn}>
					<a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
						Get in Touch
					</a>
				</motion.button>
			</motion.div>
		</div>
	);
};

export default ContactSection;
