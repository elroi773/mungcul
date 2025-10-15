import './App.css'
import Text from "./img/h1.png"
import DogFoot from "./img/dogfoot.png"

function App() {
  return (
    <div className="container">
      <img src={DogFoot} alt="dogfoot" className="dogfoot" />
      <img src={Text} alt="text" className="text" />
      <button className="login">로그인</button>
      <button className="join">회원가입</button>
    </div>
  )
}

export default App
