function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between align-center p-40">
        <div className="header-left">
          <div className="header-left__logo logo d-flex align-center">
           <img className="mr-15" width={40} height={40} src="/assets/images/logo.png" alt=""/>

            <div className="logo__text">
                <h3 className="logo__title text-uppercase">Sunja Sneakers</h3>
                <p className="logo__subtitle">Магазин лучших кроссовок</p>
            </div>
          </div>
        </div>

        <div className="header-right d-flex">
          <div className="cart d-flex align-center">
             <img className="mr-10" width={18} height={18} src="/assets/images/cart.svg" alt=""/>
             <span>1205 руб.</span>
          </div>

           <div className="user d-flex align-center">
              <img className="mr-10" width={18} height={18} src="/assets/images/user.svg" alt=""/>
             <span>Профиль</span>
           </div>
        </div>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        
        <div class="sneakers d-flex">
          <div class="card">
            <img width={133} height={112} src="/assets/images/sneakers/1.jpg" alt="Sneakers"/>

            <h5 class="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div class="card__row d-flex justify-between">
              <div class="card__price">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="card__button">
                <img width={11} height={11} src="/assets/images/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>

           <div class="card">
            <img width={133} height={112} src="/assets/images/sneakers/2.jpg" alt="Sneakers"/>

            <h5 class="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div class="card__row d-flex justify-between">
              <div class="card__price">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="card__button">
                <img width={11} height={11} src="/assets/images/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>

           <div class="card">
            <img width={133} height={112} src="/assets/images/sneakers/3.jpg" alt="Sneakers"/>

            <h5 class="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div class="card__row d-flex justify-between">
              <div class="card__price">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="card__button">
                <img width={11} height={11} src="/assets/images/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>

           <div class="card">
            <img width={133} height={112} src="/assets/images/sneakers/4.jpg" alt="Sneakers"/>

            <h5 class="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div class="card__row d-flex justify-between">
              <div class="card__price">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>

              <button className="card__button">
                <img width={11} height={11} src="/assets/images/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
