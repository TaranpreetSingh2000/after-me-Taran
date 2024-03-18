import React, { useState, useEffect } from "react";
import Card from "../view/cards/Card";
import Style from "./Strapidata.module.css";
import { useQuery, gql } from "@apollo/client";
import Typewriter from "typewriter-effect";
import { BallTriangle } from "react-loader-spinner";

const REVIEWS = gql`
  query GetCards {
    cards(sort: "createdAt:asc", pagination: { limit: 100 }) {
      data {
        id
        attributes {
          title
          icon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Strapidata = () => {
  const { data, error, loading } = useQuery(REVIEWS);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading || !showCards) {
    return (
      <div className={`container ${Style.main_component}`}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#00008B"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (error) {
    return (
      <div className={`container ${Style.main_component}`}>
        <div className="errorinnercontainer d-flex flex-column align-items-center">
          <h6>Oh, something went wrong</h6>
          <p>
            We couldn't fetch the data due to some technical error. It happens
            just try again after couple of minutes
          </p>
        </div>
      </div>
    );
  }

  if (!Array.isArray(data.cards.data)) {
    return <p>Data is not in the expected format</p>;
  }

  if (data.cards.data.length === 0) {
    return <p>No data found</p>;
  }

  console.log(data)
  return (
    <div className={`container ${Style.main_component}`}>
      <>
        <h1 className={Style.main_title}>
          <Typewriter
            options={{
              strings: ["What My Family Should Know"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="row">
          {data.cards.data.map((review) => {
            const cardTitle = review.attributes.title;
            const cardIcon = `${import.meta.env.VITE_API_URL}${
              review.attributes.icon.data[0].attributes.url
            }`;

            return (
              <div key={review.id} className="col-lg-3 col-6 mt-4">
                <Card cardTitle={cardTitle} cardIcon={cardIcon} />
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Strapidata;
