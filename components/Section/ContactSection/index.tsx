import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './ContactSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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
      >
        Contact Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dignissimos vel tempore culpa sed ullam maxime nihil saepe ratione atque
        magni tempora, corporis commodi quas. Nobis alias voluptas dolores eos
        excepturi maiores unde inventore voluptatibus amet culpa, ad rem eveniet
        porro voluptatum autem expedita consectetur quaerat odio sequi
        exercitationem beatae distinctio similique cum vel. Sed illum ea maiores
        placeat veritatis voluptas velit? Quae nihil iusto accusamus totam atque
        sequi facere dolorum possimus et impedit eius natus quia autem cumque
        sed, rerum at doloremque sapiente? Facere velit illum vel odio molestiae
        dolorem dolor, aut iste repellendus ad tempora. Quas voluptates vero
        deleniti quaerat expedita animi, sunt ex necessitatibus obcaecati eaque
        voluptatum eos, saepe doloribus hic, laborum tenetur vitae totam magnam
        laboriosam fugit? Repellendus amet possimus facilis, quaerat aliquid
        nulla adipisci veniam? Facilis magnam qui, veritatis atque soluta odio
        vitae a, fugiat ad repellat rerum quis dignissimos magni aut obcaecati
        quod laboriosam saepe voluptate sint sequi animi ullam cum! Odio rem,
        beatae blanditiis voluptas eaque aut tenetur dolore neque. Possimus
        iusto veritatis accusantium. Sit culpa doloremque quae eius fuga
        facilis, beatae tempore reprehenderit porro quaerat sequi distinctio
        animi perspiciatis atque ad aliquam rem sunt exercitationem nostrum
        adipisci officiis eaque officia tenetur aut. Libero.
      </motion.div>
    </div>
  );
};

export default ContactSection;
