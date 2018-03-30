import React, { Component } from "react";
import PropTypes from "prop-types";

class PortfolioSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="summary__container">
        <div className="summary__value">Value: $256.67</div>
        <div className="summary__profitloss">P/L : -$200.34</div>
      </div>
    );
  }
}

PortfolioSummary.propTypes = {};

export default PortfolioSummary;
