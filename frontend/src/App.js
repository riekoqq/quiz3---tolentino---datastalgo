import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './screens/Dashboard';
import { Container } from 'react-bootstrap'
import ProductScreen from './screens/ProductScreen';
import Header from './components/Navbar'
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<Dashboard />} exact />
              <Route path='/login' element={<LoginScreen/>} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/users' element={<UserScreen />} />
            </Routes>
          </Container>
        </main>
    </Router>
  );
}

export default App;
