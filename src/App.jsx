import { AppContextProvider } from './context/AppContext';
import RouterApp from './routes'
import Global from './styles/Global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div>
      
      <AppContextProvider>
        <RouterApp/>
      </AppContextProvider>

      <Global />

      <ToastContainer />

    </div>
  )
}

export default App
