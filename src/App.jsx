// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data.json'

function App() {
  const cardsList = data.map(item => {
    return (
      <>
        <Card 
        key={item.key}
        item={item}
        />
        <hr/>
      </>
    )
  })
  return (
    <div className="container">
      <Navbar />
        <section className='cards-list'>
          {cardsList}
        </section>
    </div>
  )
}

export default App
