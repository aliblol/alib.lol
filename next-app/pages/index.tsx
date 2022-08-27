import Counter from '../Components/Counter';
import wordart from '../Resources/wordart.png';
import Image from 'next/image';
import Background from './background';
// this is the defualt page

const HelloWorld = () => (
  <div>
    <Background/>
    <Image 
    sizes="(min-width: 75em) 33vw,
            (min-width: 48em) 50vw,
            100vw" 
            src={wordart} 
            alt="welcome to alib.lol a fun and cool website"
            priority
            />
    <Counter/>
  </div>
)

export default HelloWorld
