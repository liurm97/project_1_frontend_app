import { NavLink, Outlet } from "react-router-dom"

export const SecondaryHeader = () =>
{
  return(
    <>
    <div className="header-container">
      <NavLink to="/" className="header-heading">
        <img className="smash-icon-landing" src={"src/assets/icon_white_bg.svg"} alt='Badminton jump shot icon' aria-label='Badminton jump shot icon'/>
        <h1 className="header-heading-h1">SmashBoard</h1>
      </NavLink> 
      </div>

      <main>
        <Outlet/>
      </main>
    </>
  )
}
