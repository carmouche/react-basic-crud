import React from 'react/addons';
import BaseComponent from './BaseComponent';

class EditableInput extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind(
			'renderEdit',
			'test'
		);
	}

	test() {
		alert('hey')
	}

	renderEdit () {
		if (this.props.type === 'input') {
			return <input type="text" onBlur={this.props.savemethod} defaultValue={this.props.content} />
		}
		if (this.props.type === 'textarea') {
      return <textarea defaultValue={this.props.content}></textarea>
		}    
  }

	// RENDER 
	render () {
    return this.renderEdit();
    
	}
}


EditableInput.defaultProps = {
	type: 'input'
}

// PropTypes Validation
EditableInput.propTypes = {
	
};


export default EditableInput;
