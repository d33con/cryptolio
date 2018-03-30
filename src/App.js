import React, { Component } from "react";
import axios from "axios";
import Title from "./Title";
import PortfolioSummary from "./PortfolioSummary";
import CurrencySummary from "./CurrencySummary";
import { Button } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {
        curr1: "",
        curr2: "",
        price: 0
      }
    };
    this.getPrice = this.getPrice.bind(this);
  }

  componentDidMount() {
    this.getPrice();
  }

  getPrice = () => {
    axios.get("https://cex.io/api/last_price/BTC/USD").then(response => {
      this.setState({
        curr1: response.data.curr1,
        curr2: response.data.curr2,
        price: response.data.lprice
      });
    });
  };

  render() {
    return (
      <div className="app-container">
        <Title />
        <PortfolioSummary />
        <CurrencySummary />
        <Button content="Get Price" onClick={this.getPrice} />
      </div>
    );
  }
}

export default App;
