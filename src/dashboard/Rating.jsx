import React from "react";
import "./Style.css";

const Rating = () => {
  return (
    <div className="">
      <div className="mb-9">
        <p className="font-semibold text-xs mb-2">Your Rating</p>
        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
      </div>


      {/* custom css apply */}
     <div className="food-rating">
     <div className="containers">
        <div className="progress" style={{ "--i": "85", "--cls": "#2FBFDE" }}>
          <h3>85%</h3>
          <h4>Food Taste</h4>
        </div>
      </div>

      <div className="containers2">
        <div className="progress2" style={{ "--i": "85", "--cls": "#F99C30" }}>
          <h3>85%</h3>
          <h4>Hygiene</h4>
        </div>
      </div>

      <div className="containers3">
        <div className="progress3" style={{ "--i": "92", "--cls": "#6463D6" }}>
          <h3>92%</h3>
          <h4>Packaging</h4>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Rating;
