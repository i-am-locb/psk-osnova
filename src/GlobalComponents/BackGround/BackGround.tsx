import styles from "./BackGround.module.scss";

export const BackGround = () => {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        disablePictureInPicture
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src="/Video/BGVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
