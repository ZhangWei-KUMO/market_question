import Image from 'next/image';
import { Tag } from 'antd';
import styles from './Card.module.css';

function Card({
  name, title, image, types,
}) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        height={400}
        width={420}
        layout="fixed"
        className={styles.cardImage}
      />
      <div className={styles.cardText}>
        <h3>{name}</h3>
        <p>{title}</p>
        {types.map((j, k) => (
          <span key={j} className={styles.tag}>{j}</span>
        ))}
      </div>
    </div>
  );
}

export default Card;
