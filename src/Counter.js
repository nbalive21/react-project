import React, { Component } from 'react';
class Counter extends Component {
	state = {
		number: 0
	};
	counterIncrease = () => {
		this.setState({
			number: this.state.number + 1
		});
	};

	counterDecrease = () => {
		this.setState({
			number: this.state.number - 1
		});
	};

	render() {
		return (
			<div>
				<h1>카운터</h1>
				<div>값:{this.state.number}</div>
				<button onClick={this.counterIncrease}>+</button>
				<button onClick={this.counterDecrease}>-</button>
			</div>
		);
	}
}
export default Counter;
