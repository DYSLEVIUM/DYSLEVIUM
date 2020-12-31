import { useState, useEffect } from 'react';
import styles from './Progress.module.scss';

export default function Progressbar() {
  const [progress, setprogress] = useState(0);

  const onScroll = () => {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    setprogress((window.pageYOffset / totalHeight) * 100);
  };

  useEffect(() => {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    setprogress((window.pageYOffset / totalHeight) * 100);

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
}
