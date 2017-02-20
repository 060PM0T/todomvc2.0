import * as React from 'react';
import { Store, createStore } from 'redux';
import { bindActionCreators } from 'redux'
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { IArrayData } from '../arrayData'
import * as actions from '../actions'

interface HintListProps {
  nodeValue: string[];
}
 
class NodeList extends React.Component<HintListProps, void> {

  render() {
    return (
      <div className = 'nodeList'>
      <p>First Node</p>
        { 
          this.props.nodeValue.map((element, i) => {
            return <p key={i}>{element}</p>
          })
        }
      </div>
      );
  }
}

export default NodeList;