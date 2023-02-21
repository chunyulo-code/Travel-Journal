import React from "react";
import location from "../assets/locationIcon.png";

export default function Seperate(props) {
  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={props.item.imageUrl} alt="" />
      </div>
      <div className="card-text-container">
        <div className="location">
          <img className="locatoin-icon" src={location} alt="" />
          <span className="countryName">{props.item.location}</span>
          <a href={props.item.googleMapUrl} className="location-map-link">
            View on Google Maps
          </a>
        </div>
        <p className="resortName">{props.item.title}</p>
        <p className="duration">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="brief-intro">{props.item.description}</p>
      </div>
    </div>
  );
}
