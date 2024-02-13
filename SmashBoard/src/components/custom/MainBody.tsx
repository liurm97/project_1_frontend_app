import { Button } from "../ui/Button"

export const MainBody = () =>
{
  return(
    <div className="body-container">
      <div className="body-text">Badminton enthusiasts out there!</div>
      <div className="body-text">Keen to find out more about World Rankings?</div>
      <div className="body-text">What are you waiting for?</div>
      <Button size={"xl"} variant={"destructive"}>Go</Button>
    </div>
  )
}