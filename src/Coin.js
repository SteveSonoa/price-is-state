import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Coin.css';

class Coin extends Component {
    render() {
        const { type, onClick } = this.props;

        const style = {
            borderColor: '#666666', 
            backgroundColor: '#aaaaaa',
            height: '10vw',
            width: '10vw'
        };

        let amount = 25;

        switch (type) {
            case 'penny':
                style.borderColor = 'darksalmon';
                style.backgroundColor = 'brown';
                style.height = '5vw';
                style.width = '5vw';
                amount = 1;
                break;
            case 'nickel':
                style.height = '7vw';
                style.width = '7vw';
                amount = 5;
                break;
            case 'dime':
                style.height = '4vw';
                style.width = '4vw';
                amount = 10;
                break;
            default: 
                break;
        }

        return (
            <div className="coin pointer" style={style} onClick={() => onClick(type, amount)}>
                {amount}
            </div>
        );
    }
}

Coin.propTypes = {
    type: PropTypes.oneOf(['penny', 'nickel', 'dime', 'quarter']).isRequired,
    onClick: PropTypes.func
}

Coin.defaultProps = {
    onClick: () => {}
}

export default Coin;
