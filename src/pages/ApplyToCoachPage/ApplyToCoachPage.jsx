import ApplyToCoachForm from '../../components/ApplyToCoach/ApplyToCoachForm';
import VideoBackground from '../../components/common/VideoBackground/VideoBackground';
import styles from './ApplyToCoachPage.module.css';

const ApplyToCoachPage = () => {
  return (
    <VideoBackground>
      <div className={styles.container}>
        <ApplyToCoachForm />
      </div>
    </VideoBackground>
  );
};

export default ApplyToCoachPage;
