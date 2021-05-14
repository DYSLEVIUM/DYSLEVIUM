import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	githubProfile,
	instagramProfile,
	linkedInProfile,
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
import { SectionContainer } from '../styles';
import {
	FooterContainer,
	SocialLinksContainer,
	SocialLinksTitle,
	SocialLinks,
	StyledSocialLink,
	ResumeQRCode,
} from './styles';

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
		<SectionContainer id="footer">
			<FooterContainer
				ref={ref}
				variants={container}
				initial="hidden"
				animate={animation}
			>
				<SocialLinksContainer>
					<SocialLinksTitle variants={listItem}>Find me at</SocialLinksTitle>
					<SocialLinks>
						<motion.li variants={listItem}>
							<StyledSocialLink
								href={githubProfile}
								target="_blank"
								title="Github"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
							</StyledSocialLink>
						</motion.li>
						<motion.li variants={listItem}>
							<StyledSocialLink
								href={linkedInProfile}
								target="_blank"
								title="LinkedIn"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
							</StyledSocialLink>
						</motion.li>
						<motion.li variants={listItem}>
							<StyledSocialLink
								href={instagramProfile}
								target="_blank"
								title="Instagram"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
							</StyledSocialLink>
						</motion.li>
						<motion.li variants={listItem}>
							<StyledSocialLink
								href={twitterProfile}
								target="_blank"
								title="Twitter"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
							</StyledSocialLink>
						</motion.li>
						<motion.li variants={listItem}>
							<StyledSocialLink
								href={redditProfile}
								target="_blank"
								title="Reddit"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faReddit}></FontAwesomeIcon>
							</StyledSocialLink>
						</motion.li>
					</SocialLinks>
				</SocialLinksContainer>
				<ResumeQRCode>
					<motion.span variants={listItem}>
						<a href={resumeUrl} target="_blank">
							<Image src="/resume.svg" alt="Résumé" width={250} height={250} />

							<motion.span title="Résumé">Résumé</motion.span>
						</a>
					</motion.span>
				</ResumeQRCode>
			</FooterContainer>
		</SectionContainer>
	);
};

export default FooterSection;
