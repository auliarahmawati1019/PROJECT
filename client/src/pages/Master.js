import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css'
import Masterd from './pages/Masterd'

function Master() {

  const { pathname } = window.location

  switch (pathname) {
    case '/login':
      return <Login />

    case '/signup':
      return <Signup />

    case '/Masterd':
      return <Masterd />

  


    default:
      return <Index />
  }

}

export default Master
