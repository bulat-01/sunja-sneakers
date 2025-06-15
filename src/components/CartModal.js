function CartModal() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="cart-modal d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className="btn-remove"
            src="/assets/images/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="cart-items">
          <div className="cart-item d-flex align-center p-20">
            <img
              className="mr-15"
              width={70}
              height={70}
              src="/assets/images/sneakers/1.jpg"
              alt="Sneakers"
            />

            <div className="mr-15">
              <h5 className="mb-5">Мужские Кроссовки Nike Air Max 270</h5>
              <b>12 999 руб.</b>
            </div>

            <img
              className="btn-remove"
              src="/assets/images/btn-remove.svg"
              alt="Remove"
            />
          </div>

          <div className="cart-item d-flex align-center p-20">
            <img
              className="mr-15"
              width={70}
              height={70}
              src="/assets/images/sneakers/1.jpg"
              alt="Sneakers"
            />

            <div className="mr-15">
              <h5 className="mb-5">Мужские Кроссовки Nike Air Max 270</h5>
              <b>12 999 руб.</b>
            </div>

            <img
              className="btn-remove"
              src="/assets/images/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className="cart-totals">
          <div className="cart-totals__row d-flex align-end mb-20">
            <div className="cart-totals__label">Итого: </div>
            <div className="dash-line"></div>
            <b className="cart-totals__value">21 498 руб. </b>
          </div>

          <div className="cart-totals__row d-flex align-end mb-40">
            <div className="cart-totals__label">Налог 5%: </div>
            <div className="dash-line"></div>
            <b className="cart-totals__value">1074 руб. </b>
          </div>

          <button className="green-button">
            Оформить заказ
            <img src="/assets/images/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
