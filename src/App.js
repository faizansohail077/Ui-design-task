import Navigation from './Components/Navbar'
import Session from './Components/Session'
import Introduction from './Components/Introduction'
import Reason from './Components/Reasons'
import Menu from './Components/Menu'
import './App.css'
import History from './Components/History'
import News from './Components/News'
import Footer from './Components/Footer'
import Subscription from './Components/Subscription'
import Testimonials from './Components/Testimonials'
function App() {
  return (
    <div >
      <div className="container app">
        <Navigation />
        <Session />
        <Introduction />
        <Reason />
        <Menu />
        <History />
        {/* <Testimonials /> */}
        <News />
        <Subscription />
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
}

export default App;
