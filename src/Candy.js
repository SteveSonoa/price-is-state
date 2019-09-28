import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Candy.css';

class Candy extends Component {
    render() {
        const { onClick, src, alt, amount } = this.props;

        return (
            <div className="pointer" onClick={() => onClick(alt, amount)}>
                <img src={src} alt={alt} />
            </div>
        );
    }
}

Candy.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

Candy.defaultProps = {
    onClick: () => {},
    active: false
}

export default Candy;
