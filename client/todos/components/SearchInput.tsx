import * as React from 'react';
import { Store, createStore } from 'redux';
import { bindActionCreators } from 'redux'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {arrayData, IArrayData} from '../arraydata';
import * as actions from '../actions';

import {
  NodeList,
  HintList
       } from '../../todos';
import '../../css/slyle.css';

// interface SearchInputProps {
//   currentInputValue: string;
//   onChageInputValue: (string) => void;
//   onChageNode: (string) => void;
//   nodeValue: string[];
// }

interface SearchInputState {
  isStateHint?: boolean;
  hintList?: IArrayData[];
  currentInputValue?: string; 
}

class SearchInput extends React.Component<any, SearchInputState> {
    constructor(props, context) {
        super(props, context);
        let initState: SearchInputState = {isStateHint : false, hintList : arrayData, currentInputValue: ''};
        this.state = initState;
    };

  handleInputChange = (e) => {
    const text = e.target.value;
    this.props.onChageInputValue(text);
    let hintList = [];

    for (let i = 0; i < arrayData.length; i++ ){
      if (arrayData[i].name.toLowerCase().indexOf(text.toLowerCase()) === 0 ){
        hintList.push( arrayData[i] );
      } 
    }

    if (hintList.length === 0 || text.length === 0){
      this.setState({isStateHint: false});
    }
    else {
      this.setState({isStateHint: true})
    }
    this.setState({hintList : hintList});

  };

  handleNodeHint = (e) => {  
      this.props.onChageNode(this.props.currentInputValue);
      this.props.onChageInputValue('');
  };

  clickElementHintList = (text:string) =>{
     this.props.onChageInputValue(text)
     this.setState({isStateHint: false})
  }

  render() {
    console.log('onChange')
    return (
            <div>
            <input 
              type="text"
              className="searchInput"
              placeholder="Search country"
              value={this.props.currentInputValue}
              onChange={this.handleInputChange}/>
              <button className="addNode" onClick = {this.handleNodeHint}> Add </button>
              <NodeList nodeValue={this.props.nodeValue}/>
              {this.state.isStateHint? <HintList clickElementHintList={this.clickElementHintList} hintlist={this.state.hintList}/>:' '}
            </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      currentInputValue: state.reduser.currentInputValue,
      nodeValue: state.reduser.nodeList,
      hintValue: state.reduser.hintList
  }
}

function mapDispatchToProps(dispatch) {
  return {
	  onChageInputValue: function(text:string) {dispatch(actions.currentInputValue(text))},
    onChageNode: function(text:string) {dispatch(actions.nodeValue(text))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);