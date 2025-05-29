import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" />
      <p className={styles.name}>{name}</p>
      <span className={` ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </li>
  );
};

export default FriendListItem;
