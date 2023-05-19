import React, { useState } from "react";
import "./Rate.scss";

export default function Rate(props) {
  const [pressed, setPressed] = useState(false);

  function handleChange() {
    setPressed(!pressed);
  }

  return (
    <div className={`rate__wrapper ${pressed ? "selected" : ""}`}>
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
        <div className="prise">{props.card.prise}</div>руб/мес
      </div>
      <div className="rate__speed">{`до ${props.card.speed} Мб/сек`}</div>
      <div className="rate__text">Объем включенного траффика не ограничен</div>
      <button className="rate__button" onClick={handleChange}>
        {pressed ? "Cменить тариф" : "Выбрать тариф"}
      </button>
    </div>
  );
}
