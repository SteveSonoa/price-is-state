import React, { Component, Fragment } from 'react';
import './App.css';
import Candy from './Candy';
import Coin from './Coin';

class App extends Component {
	initialState = {
		dime: false,
		nickel: false,
		quarter: false,
		penny: false,
		reeces: false,
		twix: false,
		tootsie: false,
		skittles: false,
		totalCoin: 0,
		totalCandy: 0,
		gameOver: false,
		winner: false
	};

	state = {
		...this.initialState
	}

	handleClickCandy = (nameOfWhateverIJustClickedOn, howMuchDoesItCost) => {
		const addCoins = this.state.totalCandy + howMuchDoesItCost;
		const subCoins = this.state.totalCandy - howMuchDoesItCost;
		this.setState({
			totalCandy: this.state[nameOfWhateverIJustClickedOn] ? subCoins : addCoins,
			[nameOfWhateverIJustClickedOn]: !this.state[nameOfWhateverIJustClickedOn]
		});
	}

	handleClickCoin = (nameOfWhateverIJustClickedOn, howMuchDoesItCost) => {
		const addCoins = this.state.totalCoin + howMuchDoesItCost;
		const subCoins = this.state.totalCoin - howMuchDoesItCost;
		this.setState({
			totalCoin: this.state[nameOfWhateverIJustClickedOn] ? subCoins : addCoins,
			[nameOfWhateverIJustClickedOn]: !this.state[nameOfWhateverIJustClickedOn]
		});
	}

	compareTotals = () => {
		if(this.state.totalCoin && this.state.totalCandy) {
			const { totalCoin, totalCandy } = this.state;
			this.setState({
				gameOver: true,
				winner: totalCoin === totalCandy
			});
		}
	}

	resetGame = () => {
		this.setState(this.initialState);
	}

	render() {
	  const candies = [
		  {
			  name: 'reeces',
			  amount: 12
		  },
		  {
			  name: 'skittles',
			  amount: 8
		  },
		  {
			  name: 'tootsie',
			  amount: 2
		  },
		  {
			  name: 'twix',
			  amount: 4
		  },
	  ];

	  const coins = ['penny', 'nickel', 'dime', 'quarter'];

		return (
			<div className="App">
				<h1>The Price Is State!</h1>

				<h3 className="amount">You think the selected candy costs {this.state.totalCoin} cents.</h3>
				{this.state.gameOver && (
					<Fragment>
						<h3 className="amount">Actual cost: {this.state.totalCandy} cents.</h3>
						<h1>YOU {this.state.winner ? 'WIN' : 'LOSE'}!!!</h1>
					</Fragment>
				)}

				{!this.state.gameOver && !!this.state.totalCandy && !!this.state.totalCoin && <button onClick={this.compareTotals}>LOCK IT IN!!!</button>}
				{this.state.gameOver && <button onClick={this.resetGame}>Play Again?</button>}

				<div className="selections">
					<div className="unselected candy sel">
						<h2>Select Your Candy</h2>
						{candies.map(candy => (
							!this.state[candy.name] && (
								<Candy key={candy.name} src={`/${candy.name}.jpg`} alt={candy.name} onClick={this.handleClickCandy} amount={candy.amount} />
							)
						))}
					</div>

					<div className="selected candy sel">
						<h2>Selections</h2>
						{candies.map(candy => (
							this.state[candy.name] && (
								<Candy key={candy.name} src={`/${candy.name}.jpg`} alt={candy.name} onClick={this.handleClickCandy} amount={candy.amount} />
							)
						))}
					</div>

					<div className="selected coins sel">
						<h2>Selections</h2>
						{coins.map(coin => (
							this.state[coin] && <Coin key={coin} type={coin} onClick={this.handleClickCoin} />
						))}
					</div>

					<div className="unselected coins sel">
						<h2>Select Your Coins</h2>
						{coins.map(coin => (
							!this.state[coin] && <Coin key={coin} type={coin} onClick={this.handleClickCoin} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
