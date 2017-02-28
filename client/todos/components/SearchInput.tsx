import * as React from 'react';
import { Store, createStore } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { dispatchCurrentInputValue, dispatchHintList } from '../actions';
import { HintList } from '../../todos';
import '../../css/slyle.css';

interface SearchInputProps {
  currentInputValue: string;
  onChageInputValue: (string) => void;
  onChangeHint:(string) => void;
  hintList: string[];
  fetchStatus: boolean;
};

interface SearchInputState {
  isStateHint?: boolean; 
};

class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
  constructor(props) {
    super(props);
    let initState: SearchInputState = {isStateHint: false};
    this.state = initState;
  };

  handleInputChange = (e) => {
    const text = e.target.value;
    this.props.onChageInputValue(text);
    if (text.length === 0){
      this.setState({isStateHint: false})
    }
    else{
      this.props.onChangeHint(text);
      this.setState({isStateHint: true})
    }
  };

  clickElementHintList = (text:string) =>{
    this.props.onChageInputValue(text)
    this.setState({isStateHint: false})
  };

  keyboardEvents = (e) => {
    // if (e.keyCode == 13/*Enter*/){
    //   console.log ('enter');
    // }
    // if (e.keyCode == 38/*Up*/){
    //   console.log ('up');
    // };
    //  if (e.keyCode == 40/*Down*/){
    //   console.log ('down');
    // }  
  };

  render() {

    return (
      <div>
        <input 
          type="text"
          className="searchInput"
          placeholder="Search country"
          value={this.props.currentInputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.keyboardEvents}/>
          {this.props.fetchStatus? <div id='spinnerID' className='spinner'></div>: ''}
          {!this.props.fetchStatus && this.state.isStateHint? <HintList 
            clickElementHintList={this.clickElementHintList} 
            hintlist={this.props.hintList}/>:''}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    currentInputValue: state.reducer.currentInputValue,
    hintList: state.reducer.hintList,
    fetchStatus: state.reducer.fetchStatus
  };
};

function mapDispatchToProps(dispatch) {
  return {
	  onChageInputValue: function(text:string) {dispatchCurrentInputValue(text, dispatch)},
    onChangeHint: (text: string) => {dispatchHintList(text, dispatch)}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);