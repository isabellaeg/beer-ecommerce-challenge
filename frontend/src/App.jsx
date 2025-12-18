import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import ProductListingPage from './pages/ProductListingPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';

function AppContent() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/product/');

  return (
    <>
      <Header />
      <ProductListingPage />
      {isDetailPage && <ProductDetailsPage />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
