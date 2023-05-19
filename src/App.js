import "./App.scss";
import Rate from "./Rate";

const data = [
  {
    prise: 300,
    speed: 10,
    classNumber: "one",
    titleColor: "rgb(3, 158, 158)",
    priceColor: "rgba(3, 158, 158, 0.344)",
  },
  {
    prise: 450,
    speed: 50,
    classNumber: "two",
    titleColor: "rgb(79, 189, 152)",
    priceColor: "rgba(79, 189, 152, 0.371)",
  },
  {
    prise: 550,
    speed: 100,
    classNumber: "three",
    titleColor: "rgb(195, 72, 1)",
    priceColor: "rgba(195, 72, 1, 0.725)",
  },
  {
    prise: 1000,
    speed: 200,
    classNumber: "for",
    titleColor: "black",
    priceColor: "rgba(0, 0, 0, 0.825)",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((card) => (
        <Rate card={card} />
      ))}
    </div>
  );
}

export default App;
