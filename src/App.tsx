import Title from './title.tsx'
import Intro from './intro.tsx'
import Hobby1 from "./hobby1.tsx";
import Hobby2 from "./hobby2.tsx";
import './App.css'

function App() {

  return (
    <>
      <Title/>
      <div className="split-screen">
          <div className="left-screen">
              <Intro name="Tina"/>
              <Hobby1/>
          </div>
          <div className="right-screen">
              <Intro name="Claire"/>
              <Hobby2/>
          </div>
      </div>
    </>
  )
}

export default App
