import React from 'react/addons';
import EditableContent from './../EditableContent';
import Article from './Article';

class Blog extends EditableContent {

	constructor(props) {
		super(props);
	}

	/* 

		Parameter names that reference the passed value 
		should be equal to desired property names otherwise 
		the value must be explicitly defined as 

		propertyname: parameter 

	*/

	add (title, content, tags) {
		var arr = this.state.items;
		arr.push({
			id: this.nextId(),
			content: {
				title,
				content,
				tags
			}
		});
		this.setState({items: arr})
	}

	update (field, newContent, i) {
		var arr = this.state.items;
		    arr[i].content[field] = newContent;
		    this.setState({items:arr});
	}

	eachItem (item, i) {
		return (
			<Article 
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
							onClick={this.add.bind(null, 
								// sets the default text content when a new Article is added
								"New Title", 
								"New Content", 
								"New Tags"
							)}>

					<span>Add Blog Post</span>
			</button>

			{this.state.items.map(this.eachItem)}
				
			</div>
		);
	}
}

Blog.defaultProps = {

}

// PropTypes Validation
Blog.propTypes = {};


export default Blog;
