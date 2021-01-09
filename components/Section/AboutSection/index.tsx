import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './AboutSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const AboutSection = () => {
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
    <div id="about" className={sectionStyles.sectionContainer}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        About Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
        illo unde itaque, aliquid dolores a architecto labore porro impedit
        doloribus reiciendis laudantium, reprehenderit eum quo perspiciatis
        fugit culpa voluptatem velit possimus nihil, ipsa iure placeat. Nobis,
        officia incidunt facere nostrum tempora iusto exercitationem eos debitis
        et numquam quod voluptatibus quas voluptates cum necessitatibus sunt
        ipsam? Nam labore maxime, dolorum soluta quia, velit illum repudiandae
        vitae blanditiis inventore tenetur aperiam ad distinctio aliquam facere
        consequuntur consequatur fugit omnis qui vel doloremque a! Rem eveniet
        non iste quaerat explicabo doloremque ipsa veritatis totam error
        voluptas! Nesciunt mollitia temporibus aliquid laborum cum maxime
        perferendis itaque labore possimus, facilis excepturi tempore officiis
        fuga voluptas maiores fugiat numquam, laboriosam quisquam! Incidunt
        numquam a quo dicta odio quos doloribus nisi iure modi, enim sapiente,
        provident officia vitae! Aut voluptate omnis magni porro quas officiis,
        recusandae impedit. Dolores repudiandae aut veniam cum praesentium
        voluptates, magni quia numquam veritatis, voluptatum eaque commodi iure
        nobis sapiente asperiores molestiae molestias deserunt accusamus eos
        impedit. Quam quia omnis dolorem facilis saepe? Reiciendis aliquam omnis
        veritatis eaque maiores! Nemo soluta quasi possimus dicta, animi
        voluptatibus? Exercitationem quis nobis quae quaerat quibusdam, facilis
        eaque quam suscipit molestiae laborum deserunt quo ullam similique ut?
      </motion.div>
    </div>
  );
};

export default AboutSection;
