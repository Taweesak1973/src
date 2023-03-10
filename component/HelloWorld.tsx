import { FC, Fragment } from 'react';
import { BigText } from './BigText';
import { TitleText } from './TitleText';
import { Parent } from './Parent';
import { Panel } from './Panel';
import Todos from'./Todos';
import {Counter} from'./Counter';
const name = "Take me to you heart.";

const sayName = (n: string): string => {
    return "This is your " + n;
}
const element = <div>{sayName(name)}</div>;
const ele2 = <div>{name}</div>
const HelloWorld: FC = () => {
    return (

        <Fragment>
            {element}
            {ele2}
            <Parent><BigText text="my-text" /></Parent>
            <Panel> <div>{sayName(name)}</div></Panel>
           
            <TitleText value='My title text' age={0} />
          <Todos todos={['one','two','three']}/>
          <Counter/>
        </Fragment>
    )

}
export default HelloWorld;