import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css'


const App = () => {

  const { pathname } = window.location

  switch (pathname) {
    case '/login':
      return <Login />

    case '/signup':
      return <Signup />

   
  
    default:
      return <Index />
  }

}

export default Master
