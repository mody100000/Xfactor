import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageBackground.module.css';
import backgroundImage from '../../../assets/ImageBackground.webp';

const ImageBackground = ({ children }) => {
  return (
    <div className={styles.imageBackground}>
      <img src={backgroundImage} alt="Background" className={styles.image} />
      <div className={styles.overlay}>
        {children}
      </div>
    </div>
  );
};

ImageBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageBackground;
