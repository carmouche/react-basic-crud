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

	edit() {
		this.setState({
			editing: true
		});
	}

	save(fields) {
		var idx = this.props.index; // index of current Article

		/* fields.map goes through through array of field string IDs that 
		correspond to EditableInput refs and updates them */
		fields.map((field) => {
			var refName = field,
				ref = this.refs[field];

			var refVal = React.findDOMNode(ref).value;
			this.props.onChange(refName, refVal, idx);
		});

		this.setState({
			editing: false
		});
	}

	remove() {
		this.props.onRemove(this.props.index);
	}

	renderEdit() {
		return (
			<div>
				<EditableInput 
					ref="newContent" 
					content={this.props.content.newContent} />
				<button 
            	onClick={this.save.bind(null, this.props.contentFields)} 
            	className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk">
            	<span>&nbsp;Save</span>
            </button>
			</div>
		);

	}

	renderView() {
		return (
			<div className="panel">
		        <h3>
		        {this.props.content}
				<button 
					onClick={this.edit}
				    className="btn btn-default glyphicon glyphicon-pencil"/>
				<button 
					onClick={this.remove}
				    className="btn btn-danger glyphicon glyphicon-trash"/>
		        </h3>
		    </div>
		);
	}

	// RENDER 
	render() {
		if (this.state.editing) {
			return this.renderEdit();
		} else {
			return this.renderView();
		}
	}
}


EditableContentItem.defaultProps = {
	contentFields: ['newContent']
};

// PropTypes Validation
EditableContentItem.propTypes = {
	/* array of editable content 'refs' to be passed to the save() function
		corresponds to editable input fields of the article */
	contentFields: React.PropTypes.array.isRequired
};


export
default EditableContentItem;