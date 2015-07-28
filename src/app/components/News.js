import React from 'react/addons';
import BaseComponent from './BaseComponent';
import NewsItem from './NewsItem';

class News extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}

		this._bind(
			'nextId', 
			'update', 
			'add', 
			'remove', 
			'eachArticle'
		);
	}

	nextId () {
      this.uniqueId = this.uniqueId || 0;
      return this.uniqueId++;
  }

	add (headline, content) {
		var arr = this.state.articles;
		arr.push({
			id: this.nextId(),
			content,
			headline
		});
		this.setState({articles: arr})
	}

	update(newHeadline, newContent, i) {
		var arr = this.state.articles;
		    arr[i].content = newContent;
		    arr[i].headline = newHeadline;
		    this.setState({articles:arr});
	}

	remove (i) {
		var arr = this.state.articles;
	      arr.splice(i, 1);
	      this.setState({articles: arr});
	}

	eachArticle (article, i) {
		return (
			<NewsItem 
				key={article.id}
				headline={article.headline} 
				content={article.content}
				index={i} 
				onChange={this.update}
        onRemove={this.remove}
			/>
		);
	}

	// RENDER 
	render () {
		return (
			<div>
				<h2>News Items</h2>
				<button type="button" 
								className="btn btn-success glyphicon glyphicon-plus"
								onClick={this.add.bind(null, "New Headline", "New Content")}>
								New Article
				</button>
				{this.state.articles.map(this.eachArticle)}
				
			</div>
		);
	}

}

News.defaultProps = {}

// PropTypes Validation
News.propTypes = {};


export default News;
