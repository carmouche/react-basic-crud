import React from 'react/addons';
import EditableContent from './../EditableContent';
import Article from './Article';

class Blog extends EditableContent {

	constructor(props) {
		super(props);
	}

	eachItem (item, i) {
		return (
				<Article 
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
					className="btn btn-success glyphicon glyphicon-plus"
					onClick={this.add.bind(
						null, {
							title: "New Title", 
							content: "New Content", 
							tags: "New Tags",
							image: "http://lorempixel.com/400/200"
						}
					)}>

				<span>Add Blog Post</span>
			</button>

			{this.state.items.map(this.eachItem)}		
			</div>
		);
	}
}

Blog.defaultProps = {};

// PropTypes Validation
Blog.propTypes = {};


export default Blog;
