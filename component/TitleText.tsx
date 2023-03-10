
import { Component, ReactNode, Fragment, ChangeEvent, } from "react";

type MyProps = {
  value: string;
   age: number;
};

type MyState = {
  cnt: number;
  name: string;
};

export class TitleText extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { cnt: this.props.age, name: "" };
  }

  addCounter() {
  console.log('hello')
    this.setState((state)=>({
        cnt:state.cnt+1
    }));
  }
setName(e:ChangeEvent<HTMLInputElement>){
    this.setState((state)=>({
        name:e.target.value,
    }));
}
  render(): ReactNode {
    return (
      <Fragment>
        <div>{this.props.value}</div>
        <div>{this.state.cnt}</div>
        <div>{this.state.name}</div>
        <button onClick={(e) => this.addCounter()}>Add</button>
        <button onClick={ this.addCounter.bind(this)}>Add2</button>
        <input onChange={(e)=>this.setName(e)}/>
      </Fragment>
    );
  }
}

// import { Component, ReactNode, Fragment } from 'react';
// type Props = {
//     value: string;
//     age: number;
// }
// type State = {
//     cnt: number;
//     name: string;
// }

// export class TitleText extends Component<Props, State>{

    
//     constructor(props: Props) {
//         super(props)
//         this.state = { cnt: this.props.age, name: '' }
//     }

//     addCount(){
        
//     }
//     render(): ReactNode {
//         return
//         (<Fragment>

//             <div>{this.props.value}</div>
//             <div>{this.state.cnt}</div>
//             <div>{this.state.name}</div>
//             <button onClick={(e)=>this.addCount()}>Add</button>
//         </Fragment>)
//     }
// }