import React from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './IntroductionSection.module.scss';

const IntroductionSection = () => {
  return (
    <div id="intro" className={sectionStyles.sectionContainer}>
      <img
        src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
        width="50px"
        alt="Hello GIF"
        style={{ filter: 'saturate(150%)', display: 'flex' }}
      />

      <span>
        <h4>Hello, nice to meet you ...</h4>
      </span>
      <br />
      <h1>My name is Pushpakant Behera</h1>
    </div>
  );
};

export default IntroductionSection;
