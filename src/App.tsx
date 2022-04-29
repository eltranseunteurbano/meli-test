import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from './components/Layout';
import Home from './containers/Home';
import Product from './containers/Product';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items/:id" element={<Product />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </div>
  );
};

export default App;
