import Icon from '@mdi/react';
import { mdiThemeLightDark, mdiGithub } from '@mdi/js';
import { SmashIcon } from './SmashIcon';
import {Link} from "react-router-dom"
// import { SmashIcon } from './SmashIcon';
// import smash_icon_black_bg from "../../assets/icon_black_bg.svg"

export const MainHeader = () =>
{
  return(
    <div className="header-container">
      <div className="header-heading">
        <SmashIcon/>
        <h1 className="header-heading-h1">SmashBoard</h1>
      </div>
      <div className='header-links'>
      <Link to="/about" className='header-link'>About</Link>
      <Link to="/coffee" className='header-link'>Buy me a coffee</Link>
      <Link to="/contact" className='header-link'>Contact</Link>
      </div>
      <div className='header-icons'>
      <a href='#'><Icon path={mdiGithub} size={1} color={"#fff"} /></a>
      <Icon path={mdiThemeLightDark} size={1} rotate={360} color={"#fff"}/>
      </div>
    </div>
  )
}

