import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Product from './containers/Product';

const App = (): React.ReactNode => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<Product />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
