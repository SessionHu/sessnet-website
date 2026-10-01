import React from 'react';
import styles from './IFrame.module.scss';

export default ({ src }: { src: string }) => {
  const ref = React.useRef<HTMLIFrameElement>(null);
  React.useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;
    const onLoad = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;
      iframe.style.height = `${doc.documentElement.offsetHeight}px`;
    };
    iframe.addEventListener('load', onLoad);
    iframe.src = src;
    return () => {
      iframe.removeEventListener('load', onLoad);
    };
  }, [src]);
  return <iframe ref={ref} className={styles.iframe}></iframe>;
}
