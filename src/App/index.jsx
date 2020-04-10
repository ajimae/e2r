// ract libraries
import React, { Component } from 'react';

// third party libraries
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

//Components
import Routes from '../routes';

// thunk action creators

class App extends Component {
	state = {};

	// life-cycle components goes in here

	render() {
		return (
			<React.Fragment>
				<Routes />
			</React.Fragment>
		);
	}
}

export default App;
