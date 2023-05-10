import "./Rate.scss";

let rateSelected = "";

function Rate(props) {
  return (
    <div
      className={`rate__wrapper ${
        props.card.isSelected ? (rateSelected = "selected") : ""
      }`}
    >
      <div
        className={`rate__title title__${props.card.classNumber}`}
        style={{
          backgroundColor: props.card.titleColor,
        }}
      >{`Безлимитный ${props.card.prise}`}</div>
      <div
        className="rate__prise"
        style={{
          backgroundColor: props.card.priceColor,
        }}
      >
        <div className="prise">{props.card.prise}</div>руб/мес{" "}
      </div>
      <div className="rate__speed">{`до ${props.card.speed} Мб/сек`}</div>
      <div className="rate__text">Объем включенного траффика не ограничен</div>
    </div>
  );
}

export default Rate;
