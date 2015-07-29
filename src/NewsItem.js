import React from 'react/addons';
import EditableContentItem from './EditableContentItem';

class NewsItem extends EditableContentItem {

	constructor(props) {
		super(props);
	}

	renderEdit () {    
    return (
      <div>
      	<textarea ref="newContent" type="text" defaultValue={this.props.content}></textarea>
      	<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    );
  }

  renderView () {
		return (
			<div className="panel">
	        <p>
	        {this.props.content}
	        <button onClick={this.edit}
	            className="btn btn-sm btn-default glyphicon glyphicon-pencil"/>
	        <button onClick={this.remove}
	            className="btn btn-sm btn-danger glyphicon glyphicon-trash"/>
	        </p>
	    </div>
		);
	}
}


NewsItem.defaultProps = {

}

// PropTypes Validation
NewsItem.propTypes = {
	
};


export default NewsItem;
