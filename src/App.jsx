import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import News from './Pages/News/News'
import Guarantees from './Pages/Guarantees/Guarantees'
import CurrentNews from './Pages/News/CurrentNews/CurrentNews'
import { Route, Routes } from 'react-router-dom'
import ROUTES from "./routes"
import './App.css'
import Contacts from './Pages/Contacts/Contacts'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import ReadyKits from './Pages/Ready_matesKits/ReadyKits'
import Delivery from './Pages/Delivery/Delivery'

function App() {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.NEWS} element={<News/>}/>
        <Route path={ROUTES.CURRENTNEWS} element={<CurrentNews/>}/>
        <Route path={ROUTES.GUARANTEES} element={<Guarantees/>}/>
        <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
        <Route path={ROUTES.READY_KITS} element={<ReadyKits/>}/>
        <Route path={ROUTES.DELIVERY} element={<Delivery/>}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App