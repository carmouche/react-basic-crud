import React from 'react/addons';
import BaseComponent from './BaseComponent';

class EditableInput extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind(
			'renderEdit'
		);
	}

	renderEdit () {
		if (this.props.type === 'input') {
			return <input type="text" defaultValue={this.props.content} />
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
