// Libs
import React from 'react';
export default class Searchbox extends React.Component {	
	// Default states
	constructor() {
		super();
		this.state = {			
			username : ''			
		}
		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// input type 
	update(event) {
		event.preventDefault();
		let typed = event.target.value;
		this.props.changeUser(typed);
	}

	// Submit
	handleSubmit(event) {
	  event.preventDefault();	  
	  let username = this.props.username; 
	  this.props.dataSource(username);	  
	  //console.log(username);
	}

	render() {		
   	return (
   		<div>
				<form className="app__search__form" onSubmit={this.handleSubmit}>
				  <input id="app__search" className="app__search" placeholder={this.props.username} onChange={this.update} />
				  <button type="submit" className="app__search__button"><i className="material-icons">search</i></button>
				</form>
			</div>
		)
 	}
}
