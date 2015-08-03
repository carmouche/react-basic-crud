import React from 'react/addons';
import BaseComponent from './BaseComponent';
import EditableInput from './EditableInput';

class EditableContentItem extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}

		this._bind(
			'edit', 
			'save', 
			'remove', 
			'renderView',
			'renderEdit'
		);
	}

	edit () {
		this.setState({editing: true});
	}

	save () {

		var newContent = React.findDOMNode(this.refs.newContent).value;
    
    this.props.onChange(newContent, this.props.index);
    this.setState({editing: false});
  }

  remove () {
    this.props.onRemove(this.props.index);
  }

	renderEdit () {
		return (
      <div>
      	<EditableInput ref="newContent" savemethod={this.save} type={this.props.type} content={this.props.content} />
      	<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    );
    
  }

	renderView () {
		return (
			<div className="panel">
	        <h3>
	        {this.props.content}
	        <button onClick={this.edit}
	            className="btn btn-default glyphicon glyphicon-pencil"/>
	        <button onClick={this.remove}
	            className="btn btn-danger glyphicon glyphicon-trash"/>
	        </h3>
	    </div>
		);
	}

	// RENDER 
	render () {
		if (this.state.editing) {
        return this.renderEdit();
    }
    else {
        return this.renderView();
    }
	}
}


EditableContentItem.defaultProps = {

}

// PropTypes Validation
EditableContentItem.propTypes = {
	
};


export default EditableContentItem;
