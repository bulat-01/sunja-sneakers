import styles from "./Header.module.scss";


function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div>
        <div className={`d-flex align-center`}/*className="header-left__logo logo d-flex align-center"*/>
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/assets/images/logo.png"
            alt=""
          />

          <div>
            <h3 className="text-uppercase">Sunja Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="d-flex align-center">
          <img
            className="mr-10"
            width={18}
            height={18}
            src="/assets/images/cart.svg"
            alt=""
          />
          <span>1205 руб.</span>
        </div>

        <div className="d-flex align-center">
          <img
            className="mr-10"
            width={18}
            height={18}
            src="/assets/images/user.svg"
            alt=""
          />
          <span>Профиль</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
