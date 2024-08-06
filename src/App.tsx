import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { Filter } from './components/Filter'
import { Cards2 } from './components/Cards2'
import { Buttons } from './components/Buttons'

const Card = new Array(3).fill(null)
function App() {
  return (
    <>
      <Header />
      <Filter />
      <div className="flex items-center justify-center pt-16 pb-5">
        <Cards />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        {Card.map(() => (
          <Cards2 />
        ))}
      </div>
      <div className="pt-10">
        <Buttons />
      </div>
    </>
  )
}

export default App
