import React from 'react';

export default function SearchWeatherBar() {
  return (
    <div className="submit-weather-container">
      <h2>Watch The Weather!</h2>
      <input
        type="text"
        placeholder="City or Zip Code"
        className="input-field"
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </div>
  );
}
