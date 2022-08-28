import Image from 'next/image'
import { bgWrap } from '../styles.module.css'
import clouds from "../Resources/clouds.jpg";

const Background = () => (
    <div className={bgWrap}>
      <Image
        alt="Clouds"
        src={clouds}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
)

export default Background