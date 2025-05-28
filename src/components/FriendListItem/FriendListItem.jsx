import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      />
      <img className={styles.avatar} src={avatar} alt="Avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
