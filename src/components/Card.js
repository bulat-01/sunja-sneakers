function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/assets/images/heart_unliked.svg" alt="" />
      </div>

      <img
        width={133}
        height={112}
        src="/assets/images/sneakers/1.jpg"
        alt="Sneakers"
      />

      <h5 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>

      <div className="card__row d-flex justify-between">
        <div className="card__price">
          <p>Цена:</p>
          <b>12 999 руб.</b>
        </div>

        <button className="card__button">
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
