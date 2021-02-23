import styles from '../../style/components/profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profleConteiner}>
      <img src="https://github.com/yurirolandi.png" alt="Yuri Rolandi" />
      <div>
        <strong>Yuri Rolandi</strong> 
        <p>
            <img src="icons/level.svg" alt="Level"/>
            Level 1</p>
      </div>
    </div>
  );
}
