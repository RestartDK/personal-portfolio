import mePic from '/assets/me.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

function Intro() {
  return (
    <div
        id="intro"
        className='h-screen w-full flex flex-col items-center justify-center pt-2 pb-2 bg-carafe-500'
    >
      <div className='mb-20 flex flex-col items-center text-sanddollar-500 py-5 px-5'>
        <h1 className='text-tan-500 text-5xl'>
          Daniel Kumlin
        </h1>
        <h2 className='pt-2 text-2xl'>
          Tech entrepeneur and fullstack developer
        </h2>
        <div className='flex flex-row py-5 space-x-3 text-5xl'>
          <a className='hover:text-sanddollar-300' href="https://www.linkedin.com/in/daniel-kumlin-154211238/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a className='hover:text-sanddollar-300' href="https://github.com/RestartDK" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a className='hover:text-sanddollar-300' href="https://www.instagram.com/daniellkumlin/" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>          
        </div>
        <img
        className='rounded-full w-60 h-60' 
        src={mePic} 
        alt="profile"
        /> 
      </div>
    </div>
  )
}

export default Intro