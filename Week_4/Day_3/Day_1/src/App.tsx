import { createContext, useState } from 'react';
import './App.css'
import ChildA from './Hooks/useContext/ChildA'









// import DataFetcher from './Hooks/useEffect/DataFether'
// import Counter from './Hooks/useState/Counter'
// import Second from './Hooks/useEffect/Second'
// import TimerComponent from './Hooks/useEffect/TimerComponenet'
// import Cardd from './Component/Card.tsx'
// import SimpleForm from './Component/FormEvent.tsx'
// import NameInput from './Component/NameInput.tsx'
// import { Card } from './Component/Specialprops.tsx'
// import Typeevents from './Component/Typeevents.tsx'
// import Profile from './Component/UseState.tsx'










interface User {
  name: string;
} 

 export const UserContext = createContext<User | undefined>(undefined);

export function App() {

  const [user, _setUser] = useState<User>({ name: "Ups" });

  return (

    <>
    {/* <SimpleForm/> */}
    {/* <Typeevents/> */}
    {/* <NameInput/> */}
    {/* <h1>Typescript with React</h1>
    <Cardd  name="Mobile" price ={1000} isTrue={true} />
    <Cardd  name="Laptop" price ={100000} isTrue={true} />
     <Card className="highlight" style={{ padding: "10px" }}>
          <h1>Title</h1>
          <p>Some content</p>
        </Card>
      <Profile /> */}
      {/* <Counter/> */}
      {/* <Second/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}





      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )
}


export default App
