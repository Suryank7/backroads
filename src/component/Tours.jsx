import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {props.data && props.data.length > 0 ? (
          props.data.map((item) => <Tour key={item.id} {...item} />)
        ) : (
          <>
            <article className="tour-card">
              <div className="tour-img-container">
                <img
                  src="./images/tour-1.jpeg"
                  className="tour-img"
                  alt="Tibet Adventure"
                />
                <p className="tour-date">August 26th, 2020</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>Tibet Adventure</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    China
                  </p>
                  <p>6 days</p>
                  <p>from $2100</p>
                </div>
              </div>
            </article>

            <article className="tour-card">
              <div className="tour-img-container">
                <img
                  src="./images/tour-2.jpeg"
                  className="tour-img"
                  alt="Best of Java"
                />
                <p className="tour-date">October 1st, 2020</p>
              </div>
              <div className="tour-info">
                <h4>Best of Java</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    Indonesia
                  </p>
                  <p>11 days</p>
                  <p>from $1400</p>
                </div>
              </div>
            </article>

            <article className="tour-card">
              <div className="tour-img-container">
                <img
                  src="./images/tour-3.jpeg"
                  className="tour-img"
                  alt="Explore Hong Kong"
                />
                <p className="tour-date">September 15th, 2020</p>
              </div>
              <div className="tour-info">
                <h4>Explore Hong Kong</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    Hong Kong
                  </p>
                  <p>8 days</p>
                  <p>from $5000</p>
                </div>
              </div>
            </article>

            <article className="tour-card">
              <div className="tour-img-container">
                <img
                  src="./images/tour-4.jpeg"
                  className="tour-img"
                  alt="Kenya Highlights"
                />
                <p className="tour-date">December 5th, 2019</p>
              </div>
              <div className="tour-info">
                <h4>Kenya Highlights</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    Kenya
                  </p>
                  <p>20 days</p>
                  <p>from $3300</p>
                </div>
              </div>
            </article>
          </>
        )}
      </div>
    </section>
  );
};

export default Tours;
