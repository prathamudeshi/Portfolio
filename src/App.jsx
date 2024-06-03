import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div
         style = {{backgroundImage: `url("https://cdn2.stablediffusionapi.com/generations/0-79e8f124-7b1b-479d-abae-98e953853dcd.png")`}} 
       className="bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works />
      {/* <Feedbacks /> */}
    </div>
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    </BrowserRouter>
  )
}

export default App
