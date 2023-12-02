import './App.css'
import Card from './components/Card'

const laptopData = [
  {
    id: 485,
    name: "HP Pavillion",
    btnText: "Click me"
  },
  {
    id: 145,
    name: "Dell Alienware",
    btnText: "Visit me"
  },
  {
    id: 777,
    name: "Apple Macbook",
  }
]

function App() {
  return (
    <div className='flex gap-10'>
      {
        laptopData.map((laptop) => (
          <Card key={laptop.id} laptopName={laptop.name} btnText={laptop.btnText} />
        ))
      }
    </div>
  )
}

export default App
