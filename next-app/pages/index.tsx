import wordart from '../Resources/wordart.png';
import Image from 'next/image';
import Background from './background';
import CoolText from '../Components/coolText';
import Counter from '../Components/counter';
import Window from '../Components/window';
// this is the defualt page

const HelloWorld = () => (
  // this is the div that contains all the components
  <div>
    <Background/>
    <Image
            src={wordart} 
            alt="welcome to alib.lol a fun and cool website"
            priority
            />
    <div className='container'>
      <Window titlebar="About"/>
      <Counter/>
      <CoolText text="github" url="https://github.com/aliblol"/>
    </div>
  </div>
)


export default HelloWorld
