import * as React from 'react';
import { IArrayData } from '../arrayData';

interface HintListProps {
  hintlist: IArrayData[];
  clickElementHintList: (string) => void;
}
  
export default class HintList extends React.Component<any, void> {
elementClick = (e) => {
  let text = e.target.innerHTML;
  this.props.clickElementHintList(text);
};
  render() {
    return (
     <div className = 'hintList'>
      {
        this.props.hintlist.map((element, i) => {
          return (
            <div 
            key={i}
            onClick={this.elementClick}
            >{element.name}</div>)
        })
        }
      </div>
      );
  };
};