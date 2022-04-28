import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import Product from "./containers/Product";

function App() {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<Product />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
