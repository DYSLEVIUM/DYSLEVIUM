import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './FooterSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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
      >
        Footer Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident architecto animi ea magni hic doloribus ut tempore in nobis
        soluta facilis laborum aliquam maiores quam voluptatem, dolorum sint
        odio et impedit! Facilis quisquam dicta perferendis odio molestiae
        possimus fugit, officiis iure quaerat adipisci harum ea porro dolore
        doloribus praesentium minus quia in earum tenetur aperiam saepe velit
        voluptatibus dolorem corrupti! Velit cum veritatis doloribus veniam?
        Tenetur facere soluta in quia fugiat dolorum ut mollitia eos sapiente
        rem officiis quidem, ipsa earum delectus corporis commodi? Eligendi sit
        corrupti repellat alias nostrum ex voluptas dolorum quia porro atque
        temporibus dolor esse a beatae doloribus amet eaque quaerat ipsum, sint
        rerum quod corporis, vitae ab recusandae? Voluptatibus sequi maiores
        sint quibusdam velit laborum commodi nesciunt, corrupti rem vel non quos
        ullam dolorum delectus itaque beatae minima. Veniam laboriosam eius
        alias rem similique? Soluta eos laudantium velit quo nesciunt dolorem
        aut, sequi, dolores accusamus molestias explicabo totam nisi? Quas
        quaerat consequuntur sed culpa tempore eligendi molestias aperiam et
        quis aspernatur repudiandae in soluta facilis, reiciendis eveniet ab
        minus nemo qui repellat officiis est. Atque rerum omnis ea suscipit
        eligendi debitis maxime hic, accusantium amet dolores, praesentium
        dolore beatae dolorem autem natus facilis veritatis unde.
      </motion.div>
    </div>
  );
};

export default FooterSection;
