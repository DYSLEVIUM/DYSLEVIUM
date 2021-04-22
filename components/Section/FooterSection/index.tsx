import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import sectionStyles from '../Section.module.scss';
import styles from './FooterSection.module.scss';
import {
	githubProfile,
	instagramProfile,
	linkedinProfile,
	redditProfile,
	resumeUrl,
	twitterProfile,
} from '../../../utils/constants';
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faReddit,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
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
		<div id="footer" className={sectionStyles.sectionContainer}>
			<motion.div
				ref={ref}
				variants={container}
				initial="hidden"
				animate={animation}
				className={styles.footerContainer}
			>
				<motion.div className={styles.socialLinksContainer}>
					<motion.h4 variants={listItem} className={styles.socialLinksTitle}>
						Find me at
					</motion.h4>
					<motion.ul className={styles.socialLinks}>
						<motion.li variants={listItem}>
							<motion.a
								href={githubProfile}
								target="_blank"
								className={styles.link}
								title="Github"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
							</motion.a>
						</motion.li>
						<motion.li variants={listItem}>
							<motion.a
								href={linkedinProfile}
								target="_blank"
								className={styles.link}
								title="LinkedIn"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
							</motion.a>
						</motion.li>
						<motion.li variants={listItem}>
							<motion.a
								href={instagramProfile}
								target="_blank"
								className={styles.link}
								title="Instagram"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
							</motion.a>
						</motion.li>
						<motion.li variants={listItem}>
							<motion.a
								href={twitterProfile}
								target="_blank"
								className={styles.link}
								title="Reddit"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
							</motion.a>
						</motion.li>
						<motion.li variants={listItem}>
							<motion.a
								href={redditProfile}
								target="_blank"
								className={styles.link}
								title="Reddit"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faReddit} size="2x"></FontAwesomeIcon>
							</motion.a>
						</motion.li>
					</motion.ul>
				</motion.div>
				<motion.div className={styles.resumeQrCode}>
					<motion.span variants={listItem}>
						<a href={resumeUrl} target="_blank">
							<Image src="/resume.svg" alt="Résumé" width={250} height={250} />

							<motion.span>Résumé</motion.span>
						</a>
					</motion.span>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default FooterSection;
