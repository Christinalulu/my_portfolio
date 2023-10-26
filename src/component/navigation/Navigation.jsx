// import { Bars2Icon } from '@heroicons/react/24/solid'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'

function Navigation(){
   return (
      <>
      <nav className=' bg-red-100 w-full flex justify-between items-center h-16'>

        <div>
          <a className=' p-6 text-xl' href="#">CLF</a>
        </div>

        <div className=' mr-6'>
          <ul className=' flex justify-around'>
            <li className=' p-2 text-ms'>
              <a className=' text-2xl' href="#"><AiOutlineLinkedin/></a>
            </li>
            <li className=' p-2 text-ms'>
              <a  className=' text-2xl' href="#"><AiOutlineGithub/></a>
            </li>
            <li className=' p-2 text-ms'>
              <a  className=' text-2xl' href="#"><BsDiscord/></a>
            </li>
          </ul>
        </div>
      </nav>

      </>
   )
}

export default Navigation;