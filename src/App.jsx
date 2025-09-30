import { Outlet } from "react-router-dom"
import TopHeader from "./components/TopHeader/TopHeader"
import Header from "./components/Header/Header"

function App() {
  return (
    <>
      <TopHeader/>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
