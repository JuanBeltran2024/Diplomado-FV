/**
 * Archivo principal de rutas de la aplicación.
 * Define la estructura de navegación utilizando React Router.
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Importación de Componentes de Layout ---
import Layout from './components/Layout';

// --- Importación de Páginas ---
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ModulesList from './pages/ModulesList';
import ModuleDetail from './pages/ModuleDetail';
import ClassDetail from './pages/ClassDetail';
import Teachers from './pages/Teachers';

// --- Importación de Estilos Globales ---
import './App.css';

// --- Contextos ---
import { RoleProvider } from './context/RoleContext';

function App() {
  return (
    // Router principal que envuelve toda la aplicación para manejar el historial de navegación
    <RoleProvider>
      <Router>
        <Routes>
          {/* --- RUTAS PÚBLICAS --- */}
          {/* Páginas accesibles sin necesidad de iniciar sesión */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* --- RUTAS PRIVADAS (PLATAFORMA) --- */}
          {/* Envueltas en el componente <Layout />, el cual contiene el menú lateral y la barra superior.
              Todas estas rutas se renderizarán dentro del espacio de contenido del Layout. */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/modules" element={<ModulesList />} />
            <Route path="/modules/:id" element={<ModuleDetail />} />
            <Route path="/class/:id" element={<ClassDetail />} />
            <Route path="/teachers" element={<Teachers />} />
          </Route>
        </Routes>
      </Router>
    </RoleProvider>
  );
}

export default App;
