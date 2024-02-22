import { useRoutes } from 'react-router-dom';
import "./styles/index.scss"
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Footer from './components/Footer';
import Media from './components/Utils/Media';

function Layout({ children }) {
  return (
    <div className='app-container'>
      <Header />
      <Media/>
      {children}
      <Footer />
    </div>
  );
}

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/project', element: <Project /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
  ]);

  return <Layout>{routes}</Layout>;
}

export default App;
