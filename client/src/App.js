import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home"
import { CreateRecipe } from './pages/create-recipe';
import { SavedRecipes } from './pages/save-recipe';
import { Auth } from './pages/auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-recipe" element={<CreateRecipe />}/>
          <Route path="/save-recipe" element={<SavedRecipes />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
