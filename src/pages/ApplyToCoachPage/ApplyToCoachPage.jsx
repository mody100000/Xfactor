import ApplyToCoachForm from '../../components/ApplyToCoach/ApplyToCoachForm';
import ImageBackground from '../../components/common/ImageBackground/ImageBackground';
import styles from './ApplyToCoachPage.module.css';

const ApplyToCoachPage = () => {
  return (
    <ImageBackground>
      <div className={styles.container}>
        <ApplyToCoachForm />
      </div>
    </ImageBackground>
  );
};

export default ApplyToCoachPage;
