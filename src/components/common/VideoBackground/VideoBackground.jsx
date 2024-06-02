import styles from './VideoBackground.module.css';
import applyVideo from '../../../assets/slide2.mp4';
import PropTypes from 'prop-types';

const VideoBackground = ({ children }) => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay muted loop className={styles.video}>
        <source src={applyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        {children}
      </div>
    </div>
  );
};
VideoBackground.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default VideoBackground;
