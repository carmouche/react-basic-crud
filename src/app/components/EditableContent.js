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
			'update', 
			'add', 
			'remove', 
			'eachItem'
		);
	}

	nextId () {
      this.uniqueId = this.uniqueId || 0;
      return this.uniqueId++;
  }

	add (content) {
		var arr = this.state.items;
		arr.push({
			id: this.nextId(),
			content
		});
		this.setState({items: arr})
	}

	update (newContent, i) {
		var arr = this.state.items;
		    arr[i].content = newContent;
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
				onChange={this.update}
        onRemove={this.remove}
			/>
		);
	}

	// RENDER 
	render () {
		return (
			<div>
			<button type="button" 
								className="btn btn-success glyphicon glyphicon-plus"
								onClick={this.add.bind(null, this.props.text)}>
								New Item
			</button>
			{this.state.items.map(this.eachItem)}
				
			</div>
		);
	}

}

EditableContent.defaultProps = {
	text: 'New content'
}

// PropTypes Validation
EditableContent.propTypes = {};


export default EditableContent;
