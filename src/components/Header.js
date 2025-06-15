function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="header-left">
        <div className="header-left__logo logo d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/assets/images/logo.png"
            alt=""
          />

          <div className="logo__text">
            <h3 className="logo__title text-uppercase">Sunja Sneakers</h3>
            <p className="logo__subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>
      </div>

      <div className="header-right d-flex">
        <div className="cart d-flex align-center">
          <img
            className="mr-10"
            width={18}
            height={18}
            src="/assets/images/cart.svg"
            alt=""
          />
          <span>1205 руб.</span>
        </div>

        <div className="user d-flex align-center">
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
