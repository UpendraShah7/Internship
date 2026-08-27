//create Context
//Provider
//Consumer
//Any child that can be consumer must be inside Context.Provider

import ChildB from "./ChildB"


//Steps
//create Context
const ChildA = () => {
    console.log("First Child")
  return (
    <div>
      <ChildB/>
    </div>  
  )
}

export default ChildA
