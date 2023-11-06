import React from 'react';
import './reservation.css';

const Reservation = () => {
  const handleOrderNow = () => {
    window.location.href = '/#menu'; // Redirect to the menu section
  };

  return (
    <section className="reservation section" id="reservation">
      <h2 className="section__title" data-title="Client Info">
        Your Information will be used in our demographics
      </h2>
      <form className="reservation__form grid" action="">
        <div className="reservation__data">
          <label className="reservation__label" htmlFor="age">
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="reservation__input"
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="reservation__data">
          <label className="reservation__label" htmlFor="gender">
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            className="reservation__input"
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="button" className="btn reservation__btn" onClick={handleOrderNow}>
          Order Now
        </button>
      </form>
    </section>
  );
};

export default Reservation;
