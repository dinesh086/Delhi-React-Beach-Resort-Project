import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "free Cocktail",
        info:
          "loren lorem ipusm dolor sit amet consectorrt adiptonsinf elit. magni,corporis!",
      },
      {
        icons: <FaHiking />,
        title: "free Hiking",
        info:
          "loren lorem ipusm dolor sit amet consectorrt adiptonsinf elit. magni,corporis!",
      },
      {
        icons: <FaShuttleVan />,
        title: "free Shuttle Van",
        info:
          "loren lorem ipusm dolor sit amet consectorrt adiptonsinf elit. magni,corporis!",
      },
      {
        icons: <FaBeer />,
        title: "free Strongest Beer",
        info:
          "loren lorem ipusm dolor sit amet consectorrt adiptonsinf elit. magni,corporis!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
