import React from 'react/addons';
import EditableContent from './../EditableContent';
import BlogArticle from './BlogArticle';

class Blog extends EditableContent {

	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	eachItem (item, i) {
		return (
			<BlogArticle 
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
								New Blog Post
			</button>

			{this.state.items.map(this.eachItem)}
				
			</div>
		);
	}

}

Blog.defaultProps = {
	text: 'New blog post'
}

// PropTypes Validation
Blog.propTypes = {};


export default Blog;
