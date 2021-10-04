import Index from './pages/Index'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profil from './pages/Profil'
import Perusahaan from './pages/Perusahaan'
import Surat from './pages/Surat'
import Visi from './pages/Visi'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css'


const App = () => {

  const { pathname } = window.location

  switch (pathname) {
    case '/login':
      return <Login />

    case '/signup':
      return <Signup />

    case '/profil':
      return <Profil />

    case '/perusahaan':
      return <Perusahaan />

    case '/surat':
      return <Surat />

    case '/visi':
      return <Visi />
  
    default:
      return <Index />
  }

}

export default App
