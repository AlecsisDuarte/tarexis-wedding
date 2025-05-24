import "./styles/Travel.css";
import React from "react";

const Travel: React.FC = () => {
  return (
    <div className="travel-info">
      <div className="travel-container">
        <h1 className="travel-title">Getting to Valle de Guadalupe, Mexico</h1>

        <section className="travel-section">
          <h2 className="section-title">Airports</h2>
          <p className="section-paragraph">
            There are two convenient airport options for travelers coming from
            the United States:
          </p>
          <ul className="travel-list">
            <li>
              <strong>San Diego International Airport (SAN):</strong> Ideal for
              most US travelers. Located about 2 hours from Valle de Guadalupe
              by car.
            </li>
            <li>
              <strong>Tijuana International Airport (TIJ):</strong> Often
              cheaper and closer (approx. 1.5 hours by car). If you use the
              Cross Border Xpress (CBX) pedestrian bridge from San Diego, you
              can walk directly into the Tijuana airport terminal without having
              to cross the border separately by car or on foot.
            </li>
          </ul>
          <br />
          <em>
            Note: CBX connects TIJ directly to San Diego. It allows U.S.
            passengers to walk across the border with a same-day boarding pass,
            CBX ticket, and valid passport. Since the wedding is in Mexico, you
            will not need to cross back into the U.S. after arrival.{" "}
            <a
              href="https://www.crossborderxpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="travel-link"
            >
              Learn more
            </a>
            .
          </em>
        </section>

        <section className="travel-section">
          <h2 className="section-title">Transportation Options</h2>
          <ul className="travel-list">
            <li>
              <strong>Rental Car:</strong> Most convenient for freedom and
              exploring. Ensure rental coverage includes Mexico.
            </li>
            <li>
              <strong>Shuttle Services:</strong> Private or group shuttles from
              both airports are available.
            </li>
          </ul>
          <div className="group-bus">
            <h3 className="group-bus-title">Interested in a Group Bus?</h3>
            <p>
              If you're interested in joining a group bus from San Diego or
              Tijuana (for a fee), please let us know here:
            </p>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="travel-link"
            >
              Fill Out the Google Form
            </a>
          </div>
        </section>

        <section className="travel-section">
          <h2 className="section-title">Travel Tips</h2>
          <ul className="travel-list">
            <li>
              Bring a valid U.S. passport. It's essential for crossing the
              border.
            </li>
            <li>
              Border crossing times can vary greatly—sometimes up to 4 hours.
              Plan accordingly.
            </li>
            <li>
              Use pesos or a credit card with no foreign transaction fees.
            </li>
            <li>Cell service may be limited—download offline maps.</li>
            <li>
              Driving in Baja is generally safe but drive cautiously and avoid
              night travel.
            </li>
          </ul>
        </section>

        <section className="travel-section">
          <h2 className="section-title">Recommended Spots</h2>
          <ul className="travel-list">
            <li>
              <strong>Finca Altozano:</strong> A scenic open-air restaurant with
              local flavors and great wine.
            </li>
            <li>
              <strong>Deckman's en el Mogor:</strong> Michelin-star chef
              experience using local ingredients.
            </li>
            <li>
              <strong>El Cielo Winery & Resort:</strong> Luxury tasting
              experience and accommodation.
            </li>
            <li>
              <strong>La Cocina de Doña Esthela:</strong> Famous for authentic
              Mexican breakfast and ranked among the world's best. A must-visit
              spot for brunch lovers.
            </li>
            <li>
              <strong>Cuatro Cuatros:</strong> Stunning views, unique wine and
              beer experiences, and a beautiful sunset bar overlooking the
              Pacific Ocean.
            </li>
            <li>
              <strong>Ensenada:</strong> Just a short drive away, great for
              seafood, boardwalk strolls, and local markets.
            </li>
            <li>
              <strong>La Bufadora:</strong> A natural marine geyser and popular
              tourist spot near Ensenada.
            </li>
            <li>
              <strong>Rosarito:</strong> Known for its beachside charm and
              famous Puerto Nuevo-style lobster. Great for a seaside meal and
              relaxed afternoon.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Travel;
