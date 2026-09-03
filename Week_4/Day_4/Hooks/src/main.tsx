import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Dom from './useRef/Dom.tsx'
// import App from './App.tsx'
// import Refs from './forRefs/Refs.tsx'
// import Timer from './useRef/Timer.tsx'
import Form from './useReducer/Form.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Timer/> */}
    {/* <Dom/> */}
    {/* <Refs/> */}
    <Form/>
  </StrictMode>,
)
