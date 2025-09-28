import React from "react";
import "./Travel.css";

const Travel: React.FC = () => {
  return (
    <div className="travel-container">
      <h1 className="travel-title">Travel</h1>

      <section className="travel-section">
        <h2>Getting In</h2>
        <div className="getting-in-columns">
          <div className="column">
            <h3>From United States</h3>
            <p>
              The most convenient airport for reaching Valle de Guadalupe from
              San Diego is San Diego International Airport (SAN).
            </p>
            <h4>By Car</h4>
            <p>
              If you choose to fly to San Diego you have a couple of options for
              crossing the border and driving to Valle de Guadalupe.
            </p>
            <h4>By Foot</h4>
            <p>
              From San Diego Airport, you can take a taxi or rideshare
              (Uber/Lyft) to the San Ysidro border crossing. This is often the
              quickest way to cross the border on foot.
            </p>
            <p>Once you've walked across into Tijuana, you can rent a car.</p>
            <p>
              <strong>Travel Tip:</strong> Be prepared for potential wait times
              at the border, especially on weekends or holidays. Check current
              border wait times (link to CBP border wait times website, if
              desired). Ensure you have your valid passport ready!
            </p>
            <h4>By Car</h4>
            <p>
              You can drive any car over the border (rental or your own).
              However, if you have Global Entry, you can pre-register your car
              and join a faster line to cross.
            </p>
          </div>
          <div className="column">
            <h3>From Mexico</h3>
            <p>
              The most convenient airport for reaching Valle de Guadalupe from
              Mexico is Tijuana International Airport (TIJ) in Mexico.
            </p>
            <p>
              Once you've crossed into Tijuana, you'll navigate through the city
              to connect to the toll road (Mexico Federal Highway 1D, or
              "Carretera Escénica").
            </p>
            <p>
              From Ensenada, follow signs for Mexico Federal Highway 3
              ("Carretera Ensenada-Tecate" or "La Ruta del Vino"), which will
              take you into the heart of Valle de Guadalupe.
            </p>
            <p>
              <strong>Travel Tip:</strong> The driving time from to Valle de
              Guadalupe is typically one and a half to two hours, plus border
              crossing time. Be aware that traffic in Tijuana can be heavy,
              especially during peak hours.
            </p>
            <p>
              If you are interested in a group shuttle from San Diego please
              fill out this form.
            </p>
            <p>
              The cost per person is estimated to be $XX.XX and requires at
              least 15 people to opt in for us to book it.
            </p>
          </div>
        </div>
      </section>

      <section className="travel-section">
        <h2>Where to Stay</h2>
        <p>
          We recommend booking your accommodations as soon as possible, as Valle
          de Guadalupe is a popular destination. Here are a few suggestions:
        </p>
        {/* Add your hotel and accommodation recommendations here */}
      </section>

      <section className="travel-section">
        <h2>Moving Around</h2>
        <p>
          Once you're in Valle de Guadalupe, we recommend the following for
          getting around:
        </p>
        {/* Add your transportation recommendations here */}
      </section>
    </div>
  );
};

export default Travel;
