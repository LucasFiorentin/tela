import { Cards } from './components/Cards'
import { Filter } from './components/Filter'
import { Cards2 } from './components/Cards2'

const Card = new Array(3).fill(null)
function App() {
  return (
    <>
      <Filter />
      <div className="flex items-center justify-center pt-16 ">
        <Cards />
      </div>
      <div className="flex flex-col items-center justify-center pt-5">
        {Card.map(() => (
          <Cards2 />
        ))}
      </div>
    </>
  )
}

export default App
