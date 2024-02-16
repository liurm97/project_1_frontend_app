import { useOutletContext } from "react-router-dom"

export const Contact = () =>
{
  const value = useOutletContext()
  return (
    <>
    Contact {value}
    </>
  )
}