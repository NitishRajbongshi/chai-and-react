import { useState } from "react"
import Button from "./components/Button"
function App() {
  const [color, setColor] = useState('lightgray')
  const changeBg = (color) => {
    setColor(color);
  }
  return (
      <div className="w-full h-screen flex items-end justify-center" style={{ backgroundColor: color }}>
        <div className="flex justify-center items-center gap-2 bg-white mb-2 flex-wrap p-2 rounded-lg">
          <Button color='red' onClick={() => changeBg('red')}>RED</Button>
          <Button color='green' onClick={() => changeBg('green')}>GREEN</Button>
          <Button color='blue' onClick={() => changeBg('blue')}>BLUE</Button>
          <Button color='yellow' onClick={() => changeBg('yellow')}>YELLOW</Button>
        </div>
      </div>
  )
}

export default App
