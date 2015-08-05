import React from 'react/addons';
import EditableContentItem from './../EditableContentItem';
import EditableInput from './../EditableInput';


class WorkProject extends EditableContentItem {
	constructor(props) {
		super(props);
	}

	renderEdit () {
		return (
	         <div>
	            <div className="row">

                  <div className="col-sm-4">
                     <EditableInput 
                        ref="projectContent"
                        label="Project Content"
                        content={this.props.content.projectContent} 
                        type="textarea"
                  />

                  <EditableInput 
                        ref="tags" 
                        label="Project Tags"
                        content={this.props.content.tags} 
                     />
	                  </div>
	            </div>

	            <button 
	            	onClick={this.save.bind(null, this.props.contentFields)} 
	            	className="btn btn-info btn-sm glyphicon glyphicon-floppy-disk">
	            	<span>&nbsp;Save</span>
	            </button>
	      	</div>
	   	);

      }

	renderView () {
		return (
         <div className="row">
               <div className="col-md-12">
               		<div>
                        <button 
                           onClick={this.edit}
                           className="btn btn-default btn-sm glyphicon glyphicon-pencil"/>
                        <button 
                           onClick={this.remove}
                           className="btn btn-danger btn-sm glyphicon glyphicon-trash"/>
                     </div>
                     <div>
                        <p>{this.props.content.projectContent}</p>
                        <p>{this.props.content.tags}</p>
                     </div>
                     
               </div>
          </div>
		);
	}
}

WorkProject.defaultProps = {
	contentFields: ['projectContent', 'tags']
};

// PropTypes Validation
WorkProject.propTypes = {
	
};


export default WorkProject;
