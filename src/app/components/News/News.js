import React from 'react/addons';
import EditableContent from './../EditableContent';
import NewsItem from './NewsItem';

class News extends EditableContent {

	constructor(props) {
		super(props);
	}

	eachItem (item, i) {
		return (
			<NewsItem 
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
								New News Item
			</button>

			{this.state.items.map(this.eachItem)}
				
			</div>
		);
	}

}

News.defaultProps = {
	text: 'New content'
}

// PropTypes Validation
News.propTypes = {};


export default News;
