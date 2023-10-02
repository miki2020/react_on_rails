import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'
//import PostsList from './features/posts/PostsList'
function App() {
  

  return (
    <Router>
    <div className="app">
      <h1>React on Rails</h1>
      <p>React app view</p>
      <NavBar />
      <AppRoutes />
    </div>
    </Router>
  )
}

export default App;
