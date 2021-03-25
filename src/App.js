import Navigation from './components/Navbar'
import Session from './components/session'
import Introduction from './components/Introduction'
import Reason from './components/Reasons'
import Menu from './components/Menu'
import './App.css'
import History from './components/History'
import News from './components/News'
import Footer from './components/footer'
function App() {
  return (
    <div className="container app">
      <Navigation />
      <Session />
      <Introduction />
      <Reason />
      <Menu />
      <History />
      <News />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
