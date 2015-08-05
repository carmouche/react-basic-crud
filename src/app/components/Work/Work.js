import React from 'react/addons';
import EditableContent from './../EditableContent';
import WorkProject from './WorkProject';
import Rebase from 're-base';

var base = Rebase.createClass('https://vivid-heat-2847.firebaseio.com/');

class Work extends EditableContent {

	constructor(props) {
		super(props);
	}

	componentDidMount () {
		base.syncState('projects', {
	      context: this,
	      asArray: true,
	      state: 'items'
	   });
	}

	eachItem (item, i) {
		return (
				<WorkProject 
					key={item.key}
					index={i} 
					content={item.content} 
					onChange={this.updateAll}
	        		onRemove={this.remove}
				/>
		);
	}

	// RENDER 
	render () {
		return (
			<div>
				<button 
					type="button" 
					className="btn btn-success glyphicon glyphicon-plus"
					onClick={this.add.bind(
						null, {
							projectContent: "New Project Content up in hurrr", 
							tags: "New Tags foshoo",
						}
					)}>

				<span>Add Work Project</span>
			</button>

			{this.state.items.map(this.eachItem)}		
			</div>
		);
	}
}

Work.defaultProps = {};

// PropTypes Validation
Work.propTypes = {};


export default Work;
