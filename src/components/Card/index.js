import styles from "./Card.module.scss";

console.log(styles);
function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/assets/images/heart_unliked.svg" alt="" />
      </div>

      <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />

      <h5 className="styles.card__title">{props.title}</h5>

      <div className="d-flex justify-between">
        <div>
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>

        <button onClick={onClickButton}>
          <img
            width={11}
            height={11}
            src="/assets/images/plus.svg"
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
