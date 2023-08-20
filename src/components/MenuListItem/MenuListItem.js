
import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <img src={menuItem.imageUrl} alt='img' className={styles.url} />
      
      <div className={styles.content}>
        <div className={styles.name}>{menuItem.name}</div>
        <div className={styles.name}>{menuItem.description}</div>
        <div className={styles.name}>
          <span>Pirce : ${menuItem.price.toFixed(2)}</span>
        </div>
        <div className={styles.name}>
          <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
