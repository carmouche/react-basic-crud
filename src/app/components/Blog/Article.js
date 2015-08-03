import React from 'react/addons';
import EditableContentItem from './../EditableContentItem';
import EditableInput from './../EditableInput';


class Article extends EditableContentItem {
	constructor(props) {
		super(props);
	}

	save (fields) {
		var index = this.props.index;
		fields.map( (field) => {
			var refName = field,
					ref = this.refs[field]; 

			
			var refVal = React.findDOMNode(ref).value;
			this.props.onChange(refName, refVal, index);

		});
        
    this.setState({editing: false});
  }

	renderEdit () {
		return (
      <div>
      	<EditableInput ref="title" savemethod={this.save} content={this.props.content.title} />
      	<EditableInput ref="content" savemethod={this.save} content={this.props.content.content} />
      	<EditableInput ref="tags" savemethod={this.save} content={this.props.content.tags} />
      	
      	<button onClick={this.save.bind(null, ['title', 'content', 'tags'])} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    );
    
  }

	renderView () {
		return (
			<div className="panel">
	        <h3>
	        {this.props.content.title}
	        </h3>

	        <p>{this.props.content.content}</p>
	        <p>{this.props.content.content}</p>

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
