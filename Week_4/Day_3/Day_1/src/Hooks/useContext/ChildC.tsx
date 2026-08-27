import { useContext } from "react"
import { UserContext } from "../../App"

const ChildC = () => {
    const  user = useContext(UserContext);
  return (
    <div>
      <h2>
        {user?.name}
      </h2>
    </div>
  )
}

export default ChildC
