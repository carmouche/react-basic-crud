import React from 'react/addons';
import BaseComponent from './BaseComponent';
import EditableContentItem from './EditableContentItem';
import Rebase from 're-base';

var base = Rebase.createClass('https://vivid-heat-2847.firebaseio.com/');

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

	componentDidMount () {
		base.syncState('items', {
	      context: this,
	      asArray: true,
	      state: 'items'
	   });
	}

	nextId () {
		this.uniqueId = this.uniqueId || 0;
		return this.uniqueId++;
	}

	add (contentObj) {
		var id = this.nextId();
		base.post('items/' + id, {
			data: {
				id: id,
				content: contentObj
			}
		})
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
