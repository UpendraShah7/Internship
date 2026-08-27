import ChildC from "./ChildC"

const ChildB = () => {
    console.log("second Child")
  return (
    <div>
    <ChildC/>
    </div>
  )
}

export default ChildB
