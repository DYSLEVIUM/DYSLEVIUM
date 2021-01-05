import { useState, useEffect } from 'react';
import styles from './Progress.module.scss';

const Progressbar = () => {
  const [progress, setprogress] = useState(0);

  const onScroll = () => {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    setprogress((window.pageYOffset / totalHeight) * 100);
  };

  useEffect(() => {
    onScroll(); //  initial call on component load

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className={styles.progressbar}
      style={{
        width: progress + '%',
      }}
    ></div>
  );
};

export default Progressbar;
