import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        status={item.status}
        star={item.stats.rating}
        review={item.stats.reviewCount}
        country={item.location}
        cap={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card-list">{cards}</div>
    </div>
  );
}

export default App;
