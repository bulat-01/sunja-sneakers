import styles from "./CartModal.module.scss";

function CartModal() {
  return (
    <div style={{}} className="overlay">
      <div className={`${styles.cartModal} d-flex flex-column`}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className={styles.btnRemove}
            src="/assets/images/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className={styles.cartItems}>
          <div className={`${styles.cartItem} d-flex align-center p-20`}>
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
              className={styles.btnRemove}
              src="/assets/images/btn-remove.svg"
              alt="Remove"
            />
          </div>

          <div className={`${styles.cartItem} d-flex align-center p-20`}>
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
              className={styles.btnRemove}
              src="/assets/images/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className={styles.cartTotals}>
          <div className="d-flex align-end mb-20">
            <div>Итого: </div>
            <div className={styles.dashLine}></div>
            <b>21 498 руб. </b>
          </div>

          <div className="d-flex align-end mb-40">
            <div>Налог 5%: </div>
            <div className={styles.dashLine}></div>
            <b>1074 руб. </b>
          </div>

          <button className={styles.greenButton}>
            Оформить заказ
            <img src="/assets/images/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
