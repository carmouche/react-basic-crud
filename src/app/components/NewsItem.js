import React from 'react/addons';
import BaseComponent from './BaseComponent';

class NewsItem extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}

		this._bind(
			'edit', 
			'save', 
			'remove', 
			 'renderView',
			 'renderEdit'
		);
	}

	edit () {
		this.setState({editing: true});
	}

	save () {
		var newHeadline = React.findDOMNode(this.refs.newHeadline).value,
				newContent = React.findDOMNode(this.refs.newContent).value;
    
    this.props.onChange(newHeadline, newContent, this.props.index);
    this.setState({editing: false});
  }

  remove () {
    this.props.onRemove(this.props.index);
  }

	// renderEdit () {
	// 	return (
	// 		<div>
	// 			<input ref="newHeadline" className="form-control" />
	// 			<textarea ref="newContent" className="form-control" /></textarea>
 //      	<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
	// 		</div>
	// 	);
	// }

	renderEdit () {
    return (
      <div>
      	<input type="text" defaultValue={this.props.headline} ref="newHeadline" />
      	<textarea ref="newContent" defaultValue={this.props.content} className="form-control"></textarea>
      	<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    );
  }

	renderView () {
		return (
			<div className="panel panel-primary">
	      <div className="panel-heading">
	        <h3 className="panel-title">
	        {this.props.headline}
	        <button onClick={this.edit}
	            className="btn btn-default glyphicon glyphicon-pencil"/>
	        <button onClick={this.remove}
	            className="btn btn-danger glyphicon glyphicon-trash"/>
	        </h3>
	      </div>
	      <div className="panel-body">
	        {this.props.content}
	      </div>
	    </div>
		);
	}

	// RENDER 
	render () {
		if (this.state.editing) {
        return this.renderEdit();
    }
    else {
        return this.renderView();
    }
	}

}

NewsItem.defaultProps = {
	title: 'Default title',
	content: 'Some default content'
}

// PropTypes Validation
NewsItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired
};


export default NewsItem;
