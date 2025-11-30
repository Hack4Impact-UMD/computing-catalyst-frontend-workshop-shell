import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import RecipeBook from './pages/RecipeBook'
import RecipeList from './pages/RecipeList'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/recipebook" element={<RecipeBook />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
