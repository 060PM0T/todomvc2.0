import { bindActionCreators } from 'redux'
import { Dispatch } from 'redux';
import * as React from 'react';
import { connect } from 'react-redux';
import { SearchInput} from '../../todos';

class App extends React.Component<void, void> {
  render() {

    return (
   		<div className='row'>
      		<p className='header'>Hello world</p>
          <SearchInput/>
    	</div>
    )
  }
}


export default App
