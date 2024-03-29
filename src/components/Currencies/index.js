import { Component } from "react";
import Ul from "./style";

class Currencies extends Component {
    render() {
        const optionsEL = this.props.currencies.map((currency, index) => {
            return <li
                key={index}
                onClick={this.props.handleCurrencyDropdown}>
                {`${currency.symbol} ${currency.label}`}
            </li>
        })

        return (
            <Ul onClick={this.props.handleCurrency}>
                {optionsEL}
            </Ul>
        )
    }
}

export default Currencies;