// @flow
import React, { Component } from 'react';
import { SDK } from './starter';

type Props = {
  blockName: string
};

type State = {
  loading: boolean;
  component: any;
}

function Comp(block){
  return block.component;
}

function Loading(){
  return <h1>Loading</h1>;
}

export class BlockComponent extends Component<Props & any, State>{
  state = {
    loading: true,
    component: <Loading/>
  };

  componentDidMount()
  {
    SDK.getBlock(this.props.blockName)
      .then((block) =>{
        this.setState({component: block.wrapperHOC(this.props), loading: false})
      });
  };

  render(){
    return (
        <Comp component={this.state.component}/>
    );
  }
}

export default BlockComponent;
