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
            <div className="row">

                  <div className="col-md-12">

                  	

                  </div>
            </div>

            <div className="row">

                  <div className="col-md-6">
                        <label>Image Preview:</label>
                        <img src={this.props.content.image} />
                        <label>Image URL:</label>
                        <EditableInput 
                              ref="image" 
                              content={this.props.content.image} 
                        />

                  </div>

                  <div className="col-md-6">
                        <label>Title:</label>

                        <EditableInput 
                              ref="title" 
                              content={this.props.content.title} 
                        />
                        <label>Content:</label>

                        <EditableInput 
                        ref="content"
                        content={this.props.content.content} 
                              type="textarea"
                        />
                        <label>Tags:</label>

                        <EditableInput 
                              ref="tags" 
                              content={this.props.content.tags} 
                        />
                  </div>

            </div>

      	
     
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
      	<div>
                  <div className="row">
                        <div className="col-md-12">
                              <h3>{this.props.content.title}
                                    <button onClick={this.edit}
                                    className="btn btn-default glyphicon glyphicon-pencil"/>
                                    <button onClick={this.remove}
                                    className="btn btn-danger glyphicon glyphicon-trash"/>
                              </h3>
                              
                        </div>

                  </div>
                  <div className="row">
                        <div className="col-md-6">
                          <img src={this.props.content.image} />
                        </div>
                        <div className="col-md-6">
                              <p>{this.props.content.content}</p>
                              <p>{this.props.content.tags}</p>
                        </div>
                   </div>
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
