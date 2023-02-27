import Counter from '../Components/Counter';
import wordart from '../Resources/wordart.png';
import Image from 'next/image';
import Background from './background';
import CoolText from '../Components/coolText';
// this is the defualt page

const HelloWorld = () => (
  <div>
    <Background/>
    <Image
            src={wordart} 
            alt="welcome to alib.lol a fun and cool website"
            priority
            />
    <Counter/>
    <CoolText text="github" url="https://github.com/aliblol"/>
  </div>
)


export default HelloWorld
