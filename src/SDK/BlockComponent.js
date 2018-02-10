// @flow
import React, { Component } from 'react';
import { SDK } from './starter';

type Props = {
  block: string
};

type State = {
  loading: boolean;
  component: any;
}

function Comp(block){
  return <div>{block.component}</div>;
}

export class BlockComponent extends Component<Props, State>{
  state = {
    loading: true,
    component: null
  };

  componentDidMount()
  {
    SDK.getBlock(this.props.block)
      .then((bock) =>{
        this.setState({component: bock.wrapperHOC(), loading: false})
      });
  };

  render(){
    return (
      <div>
        {this.state.loading && <h1>Loading...</h1>}
        {!this.state.loading && this.state.component && <Comp component={this.state.component}/>}
      </div>
    );
  }
}

export default BlockComponent;
