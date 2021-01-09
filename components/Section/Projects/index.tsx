import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './ProjectsSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ProjectsSection = () => {
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
    <div id="projects" className={sectionStyles.sectionContainer}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        Projects Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos veniam rem sint? Optio minima et rerum qui odio. Veniam
        corporis aut blanditiis cupiditate aperiam harum ab nulla possimus
        expedita magni, iusto, et facilis. Cum velit animi, nam qui debitis
        aliquid dolore impedit tenetur quaerat natus sapiente sed repellendus
        aliquam laborum ratione deleniti cupiditate modi maiores odio
        voluptatem, sint cumque. Blanditiis eos fuga dolor ducimus labore
        impedit, voluptate magni veritatis cupiditate, quas earum a neque
        accusantium explicabo voluptatibus temporibus, ipsa eligendi ipsum
        obcaecati perspiciatis. At adipisci autem nemo molestiae officia minus
        quisquam consequuntur, atque possimus illo culpa quas nihil facilis
        quaerat inventore quos. Modi explicabo sequi quia obcaecati earum, natus
        quis asperiores. Harum nobis, quasi debitis fuga officiis ipsam ea ipsum
        dolorem repellat suscipit sint, similique excepturi saepe facere, illo
        nesciunt recusandae. Odit accusamus delectus necessitatibus mollitia
        pariatur quidem quam vero velit error maiores. Neque maiores qui quidem
        voluptates? Delectus commodi vero optio perspiciatis esse nesciunt
        dignissimos? Numquam consequuntur dolore nam ducimus officiis tempora ex
        sapiente veniam iusto, molestias, modi earum cum tenetur voluptatem
        accusantium nulla culpa natus adipisci provident magnam deleniti!
        Perspiciatis doloribus necessitatibus optio accusamus veritatis
        voluptate. Odio illo reiciendis nemo quas nam quaerat porro fugiat optio
        cumque tempora!
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
