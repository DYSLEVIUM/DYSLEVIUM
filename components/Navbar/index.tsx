import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const [showNavbar, setshowNavbar] = useState(true);
	const [showShadow, setshowShadow] = useState(false);

	const [showMenu, setshowMenu] = useState(false);

	let previousOffset;
	let currentOffset;

	const onScroll = () => {
		currentOffset = window.pageYOffset;

		if (previousOffset - currentOffset < 0) {
			setshowShadow(false);
			setshowNavbar(false);
		}

		if (previousOffset - currentOffset > 0) {
			setshowNavbar(true);
			setshowShadow(true);
		}

		if (showMenu) {
			setshowNavbar(true);
			setshowShadow(true);
		}

		previousOffset = currentOffset;

		if (currentOffset === 0) setshowShadow(false);
	};

	useEffect(() => {
		previousOffset = window.pageYOffset;
		currentOffset = window.pageYOffset;

		onScroll(); //  initial call on component load
		document.addEventListener('scroll', onScroll);

		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, []);

	const showMenuOnClick = () => {
		setshowMenu(!showMenu);
		setshowNavbar(true);
		document.body.style.overflow = showMenu ? 'visible' : 'hidden'; //  disabling scroll when menu is open
	};

	const navContainerStyles: object = {
		...(showMenu && { backdropFilter: 'none' }),
		...(!showMenu && {
			backdropFilter: 'blur(10px) saturate(200%)',
			transform: 'translateZ(0)',
			willChange: 'transform',
		}),
		...(showNavbar && {
			transform: 'translateY(0)',
			transition: 'all ease-in-out 0.25s',
		}),
		...(!showNavbar &&
			!showMenu && {
				transform: 'translateY(-100%)',
				transition: 'all ease-in-out 0.25s',
			}),
		...(showShadow && {
			boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
			backgroundColor: 'rgba(28,31,34,0.5)',
		}),
		...(!showShadow && {
			backgroundColor: 'transparent',
			backdropFilter: 'none',
			boxShadow: 'none',
			transition: 'all ease-in-out 0.25s',
		}),
	};

	const containerY = {
		hidden: { opacity: 0, translateY: -15 },
		visible: {
			opacity: 1,
			translateY: 0,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const listItemY = {
		hidden: { opacity: 0, translateY: -15 },
		visible: { opacity: 1, translateY: 0 },
	};

	//  mobile view animation
	const containerX = {
		hidden: { opacity: 0, translateX: 15 },
		visible: {
			opacity: 1,
			translateX: 0,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const listItemX = {
		hidden: { opacity: 0, translateX: 15 },
		visible: { opacity: 1, translateX: 0 },
	};

	const animation = useAnimation();
	const [ref, inView, entry] = useInView({
		threshold: 0.1,
		delay: 0.25,
	});

	useEffect(() => {
		if (inView) {
			animation.start('visible');
		} else {
			animation.start('hidden');
		}
	}, [animation, inView]);

	return (
		<nav className={styles.navContainer} style={navContainerStyles}>
			<motion.div variants={containerY} initial="hidden" animate="visible">
				<motion.a variants={listItemY} href="#intro">
					Logo
				</motion.a>
			</motion.div>

			<div
				className={styles.hamburgerMenuContainer}
				onClick={showMenuOnClick}
				style={
					showMenu
						? { width: '1.5rem', height: '1.5rem' }
						: { width: '1.5rem', height: '1rem' }
				}
			>
				<div className={showMenu ? styles.close : styles.hamburgerMenu}></div>
			</div>

			<div
				className={styles.blurContainer}
				style={
					showMenu
						? {
								backdropFilter: 'blur(10px) saturate(200%)',
								transform: 'translateZ(0)',
								willChange: 'transform',
						  }
						: { backdropFilter: 'none', pointerEvents: 'none' }
				}
			></div>

			<div className={styles.listContainer}>
				<motion.ul
					variants={containerY}
					initial="hidden"
					animate="visible"
					className={styles.list}
					onClick={(e) => e.stopPropagation()}
					// stopping propagation of clickHandler to current and other children
				>
					<motion.li variants={listItemY} className={styles.listItem}>
						<a href="#about">About</a>
					</motion.li>
					<motion.li variants={listItemY} className={styles.listItem}>
						<a href="#experience">Experience</a>
					</motion.li>
					<motion.li variants={listItemY} className={styles.listItem}>
						<a href="#projects">Projects</a>
					</motion.li>
					<motion.li variants={listItemY} className={styles.listItem}>
						<a href="#contact">Contact</a>
					</motion.li>
					<motion.li variants={listItemY} className={styles.listItem}>
						<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
							Résumé
						</a>
					</motion.li>
				</motion.ul>
			</div>

			<div
				className={styles.listContainerAside}
				style={
					showMenu
						? { transform: 'translateX(0)' }
						: { transform: 'translateX(100%)' }
				}
				onClick={showMenuOnClick} //  closing navbar when the blurred container is clicked
			>
				<motion.ul
					ref={ref}
					variants={containerX}
					initial="hidden"
					animate={animation}
					className={styles.listAside}
					onClick={(e) => e.stopPropagation()}
					// stopping propagation of clickHandler to current and other children
				>
					<motion.li variants={listItemX} className={styles.listItemAside}>
						<a href="#about">About</a>
					</motion.li>
					<motion.li variants={listItemX} className={styles.listItemAside}>
						<a href="#experience">Experience</a>
					</motion.li>
					<motion.li variants={listItemX} className={styles.listItemAside}>
						<a href="#projects">Projects</a>
					</motion.li>
					<motion.li variants={listItemX} className={styles.listItemAside}>
						<a href="#contact">Contact</a>
					</motion.li>
					<motion.li variants={listItemX} className={styles.listItemAside}>
						<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
							Résumé
						</a>
					</motion.li>
				</motion.ul>
			</div>
		</nav>
	);
};

export default Navbar;
