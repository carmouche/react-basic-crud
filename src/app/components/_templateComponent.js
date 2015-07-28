import React from 'react/addons';
import BaseComponent from './BaseComponent';

class ExampleComponent extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = [
			articles: []
		]

		this._bind('');
	}

	// Mounting
	componentWillMount () {}
	componentDidMount () {}

	// Updating
	componentWillReceiveProps () {}
	shouldComponentUpdate () {}
	componentWillUpdate () {}
	componentDidUpdate () {}

	// Unmounting
	componentWillUnmount () {}

	// RENDER 
	render () {
		return ();
	}

}

ExampleComponent.defaultProps = {}

// PropTypes Validation
ExampleComponent.propTypes = {};


export default ExampleComponent;
