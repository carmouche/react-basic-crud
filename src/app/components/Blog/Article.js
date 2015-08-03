import React from 'react/addons';
import EditableContentItem from './../EditableContentItem';
import EditableInput from './../EditableInput';


class Article extends EditableContentItem {
	constructor(props) {
		super(props);
	}

	renderEdit () {
		return (
      <div>
      	<EditableInput 
      		ref="title" 
      		content={this.props.content.title} 
      	/>
      	<EditableInput 
      		ref="content"
      		content={this.props.content.content} 
      		type="textarea"
      	/>
      	<EditableInput 
      		ref="tags" 
      		content={this.props.content.tags} 
      	/>
      	<EditableInput 
      		ref="image" 
      		content={this.props.content.image} 
      	/>
     
      	<button 
      		onClick={this.save.bind(null, this.props.contentFields)} 
      		className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk">
      		<span>&nbsp;Save</span>
      	</button>
      </div>
    );
    
  }

	renderView () {
		return (
			<div className="panel">
	        <h3>{this.props.content.title}</h3>
	        <p>{this.props.content.content}</p>
	        <p>{this.props.content.tags}</p>
	        <img src={this.props.content.image} />

	        <button onClick={this.edit}
	            className="btn btn-default glyphicon glyphicon-pencil"/>
	        <button onClick={this.remove}
	            className="btn btn-danger glyphicon glyphicon-trash"/>
	    </div>
		);
	}

}


Article.defaultProps = {
	contentFields: ['title', 'content', 'tags', 'image']
}

// PropTypes Validation
Article.propTypes = {
	
};


export default Article;
