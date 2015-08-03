import React from 'react/addons';
import EditableContentItem from './../EditableContentItem';
import EditableInput from './../EditableInput';


class Article extends EditableContentItem {
	constructor(props) {
		super(props);
	}

	save (fields) {
		var idx = this.props.index; // index of current Article

		/* fields.map goes through through array of field string IDs that 
		correspond to EditableInput refs and updates them */
		fields.map( (field) => {
			var refName = field,
					ref = this.refs[field]; 
			
			var refVal = React.findDOMNode(ref).value;
			this.props.onChange(refName, refVal, idx);

		});
        
    this.setState({editing: false});
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
      	
      	<button onClick={this.save.bind(null, ['title', 'content', 'tags'])} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk">&nbsp;Save</button>
      </div>
    );
    
  }

	renderView () {
		return (
			<div className="panel">
	        <h3>{this.props.content.title}</h3>
	        <p>{this.props.content.content}</p>
	        <p>{this.props.content.tags}</p>

	        <button onClick={this.edit}
	            className="btn btn-default glyphicon glyphicon-pencil"/>
	        <button onClick={this.remove}
	            className="btn btn-danger glyphicon glyphicon-trash"/>
	    </div>
		);
	}

}


Article.defaultProps = {

}

// PropTypes Validation
Article.propTypes = {
	
};


export default Article;
