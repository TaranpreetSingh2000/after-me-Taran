import React, { useEffect } from "react";
import style from "./card.module.css";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ key, cardTitle, cardIcon }) => {
  return (
    <Link to="/commonroute" state={{ cardTitle }}>
      <div className={style.card} id={key}>
        <div className={style.inner_card}>
          <img className={style.image} src={cardIcon} alt={cardTitle} />
          <div className={style.card_title}>
            <h6 className={style.cardTitleStyle}>{cardTitle}</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
