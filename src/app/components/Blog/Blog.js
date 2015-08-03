import React from 'react/addons';
import EditableContent from './../EditableContent';

class Blog extends EditableContent {

	constructor(props) {
		super(props);
	}

	// RENDER 
	render () {
		return (
			<div>
			<button type="button" 
								className="btn btn-success glyphicon glyphicon-plus"
								onClick={this.add.bind(null, this.props.content)}>
								New Blog Post
			</button>

			{this.state.items.map(this.eachItem)}
				
			</div>
		);
	}

}

Blog.defaultProps = {
	content: 'New blog post'
}

// PropTypes Validation
Blog.propTypes = {};


export default Blog;
