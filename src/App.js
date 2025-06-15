import Header from "./components/Header";
import CartModal from "./components/CartModal";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper clear">
      <CartModal />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>

          <div className="search-block">
            <img src="/assets/images/search.svg" alt="Search" />
            <input className="clear" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
