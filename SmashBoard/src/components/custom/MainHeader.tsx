import Icon from '@mdi/react';
import { mdiThemeLightDark, mdiGithub } from '@mdi/js';
import {Link, NavLink, Outlet} from "react-router-dom"

export const MainHeader = () =>
{
  return(
    <>
    <div className="header-container">
      <NavLink to="/" className="header-heading">
        <img className="smash-icon-landing" src={"src/assets/icon_white_bg.svg"} alt='Badminton jump shot icon' aria-label='Badminton jump shot icon'/>
        <h1 className="header-heading-h1">SmashBoard</h1>
      </NavLink>
      <div className='header-links'>
        <NavLink className="header-link" to="/about">About</NavLink>
        <NavLink className="header-link" to="/coffee">Coffee</NavLink>
        <NavLink className="header-link" to="/contact">Contact</NavLink>
      </div>
      <div className='header-icons'>
      <Link target='blank' to="https://github.com/liurm97/project_1_frontend_app">
        <Icon path={mdiGithub} size={1} color={"#fff"} />
      </Link>
      <Icon path={mdiThemeLightDark} size={1} rotate={360} color={"#fff"}/>
      </div>
    </div>

    <main>
      <Outlet context="Hi from outlet"/>
    </main>
    </>

  )

}

