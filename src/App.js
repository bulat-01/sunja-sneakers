import Header from "./components/Header";
import CartModal from "./components/CartModal";
import Card from "./components/Card";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "/assets/images/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imgUrl: "/assets/images/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imgUrl: "/assets/images/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imgUrl: "/assets/images/sneakers/4.jpg",
  },
];

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
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
