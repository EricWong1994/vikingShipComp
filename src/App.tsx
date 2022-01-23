import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import ButtonDemo from './demos/button-demo'

function App() {
  // const [stayTime, setStayTime] = useState(5000)
  // const closeAlert1 = () => {
  //   console.log("on close alert1")
  // }
  return (
    <div className="App">
      <ButtonDemo/>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Button btnType={ButtonType.Primary} size={ButtonSize.Small} onClick={() => {
  //         setStayTime(p => {
  //           p += 1000
  //           console.log(p)
  //           return p
  //         })
  //       }}>
  //         ++
  //       </Button>
  //       <Button btnType={ButtonType.Primary} size={ButtonSize.Small} onClick={() => {
  //         setStayTime(p => {
  //           p -= 1000
  //           console.log(p)
  //           return p
  //         })
  //       }}>
  //         --
  //       </Button>
  //       <Button autoFocus >hello</Button>
  //       <Button size={ButtonSize.Large}
  //         onClick={(e) => { e.preventDefault(); alert('abcd') }}>
  //         default large
  //       </Button>
  //       <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Large}>
  //         disabled button
  //       </Button>
  //       <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
  //         large primary
  //       </Button>
  //       <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
  //         small danger
  //       </Button>
  //       <Button btnType={ButtonType.Link} size={ButtonSize.Large}
  //         href="https://www.baidu.com">
  //         baidu link
  //       </Button>
  //       <Button btnType={ButtonType.Link} disabled size={ButtonSize.Large}
  //         href="https://www.baidu.com">
  //         baidu link disable
  //       </Button>
  //     </header>
  //   </div >
  // );
}

export default App;
