import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './ExperienceSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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
    <div id="experience" className={sectionStyles.sectionContainer}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        Experience Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corrupti laborum obcaecati placeat explicabo nihil et, officiis suscipit
        animi iure eligendi, quam ipsum natus atque dolorum aperiam ullam
        reprehenderit architecto. Placeat aspernatur nam neque repellat minus,
        quod fuga ad incidunt vitae optio laboriosam fugiat. Laborum facere
        omnis, nam temporibus aliquid modi vel labore repellendus quis nisi unde
        magnam, architecto perspiciatis commodi doloribus soluta quaerat odit
        sit alias? Mollitia soluta reprehenderit, debitis dolore eligendi
        maxime, eum animi neque, dignissimos aliquid aspernatur asperiores
        facere quae! Accusantium non ipsam doloribus excepturi doloremque harum
        minima facilis? Fuga, laborum reprehenderit obcaecati iure qui eum sequi
        vero mollitia recusandae dicta accusantium ducimus delectus doloremque
        quis nesciunt pariatur autem expedita neque ad. Quaerat libero
        repudiandae ab culpa expedita. Numquam doloremque assumenda qui nesciunt
        at voluptatem consectetur fugiat distinctio nobis ratione nisi, autem
        molestiae. Eius, deserunt dicta dolore illo, molestias quidem ipsum
        obcaecati consectetur voluptates aliquam a eaque explicabo, amet
        nesciunt nisi maiores est doloremque ad et laborum. Corrupti
        consequuntur sit rem numquam, deleniti aut error quo modi voluptates
        quam cum illo, deserunt doloremque ipsam similique dolorem quisquam
        nihil facilis culpa, libero amet vel reiciendis. Possimus ut dicta,
        maiores aspernatur labore odit explicabo obcaecati id vero unde eaque
        molestias.
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
