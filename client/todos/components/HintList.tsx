import * as React from 'react';
import { Store, createStore } from 'redux';
import { bindActionCreators } from 'redux'
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { IArrayData } from '../arrayData'
import * as actions from '../actions'

interface HintListProps {
  hintlist: IArrayData[];
  clickElementHintList: (string) => void;
}
  
export default class HintList extends React.Component<HintListProps, void> {
elementClick= (e) => {
  let text = e.target.innerHTML;
  this.props.clickElementHintList(text);
}
  render() {
    return (
     <div className = 'hintList'>
      {
        this.props.hintlist.map((element, i) => {
          return (<div key= {i} onClick={this.elementClick}>{element.name}</div>)
        })
        }
      </div>
      );
  }
}  