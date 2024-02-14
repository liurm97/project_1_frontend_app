import {Link} from "react-router-dom"

export const MainBody = () =>
{
  return(
    <div className="body-container">
      <div className="body-text">Badminton enthusiasts out there!</div>
      <div className="body-text">Keen to find out more about World Rankings?</div>
      <div className="body-text">What are you waiting for?</div>
      {/* <Button size={"xl"} variant={"destructive"} onClick={() => {window.location.href = "/dashboard"}}>Go</Button> */}
      <Link to="/dashboard" className="destructive-btn">Go</Link>
    </div>
  )
}