import React from 'react/addons';
import BaseComponent from './BaseComponent';
import EditableContentItem from './EditableContentItem';

class EditableContent extends BaseComponent {

	constructor(props) {
		super(props);

		this.state = {
			items: []
		}

		this._bind(
			'nextId', 
			'updateAll', 
			'add', 
			'remove', 
			'eachItem'
		);
	}

	nextId () {
		this.uniqueId = this.uniqueId || 0;
		return this.uniqueId++;
	}

	add (contentObj) {
		var arr = this.state.items;
		
		arr.push({
			id: this.nextId(),
			content: contentObj
		});
		this.setState({items: arr})
	}

	//update multipel items
	updateAll (field, newContent, i) {
		var arr = this.state.items;
	    
	    arr[i].content[field] = newContent;
	    this.setState({items:arr});
	}

	remove (i) {
		var arr = this.state.items;
		
		arr.splice(i, 1);
		this.setState({items: arr});
	}

	eachItem (item, i) {
		return (
			<EditableContentItem 
				key={item.id}
				index={i} 
				content={item.content} 
				onChange={this.updateAll}
				onRemove={this.remove}
			/>
		);
	}

	// RENDER 
	render () {
		return (
			<div>
				<button 
					type="button" 
					onClick={this.add.bind(null, {content: "New Content"})}
					className="btn btn-success glyphicon glyphicon-plus">
					New Item
				</button>
				
				{this.state.items.map(this.eachItem)}
			</div>
		);
	}
}

EditableContent.defaultProps = {};

// PropTypes Validation
EditableContent.propTypes = {};


export default EditableContent;
