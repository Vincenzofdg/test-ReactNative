import { registerRootComponent } from 'expo';
import MyProvider from './context/MyProvider'
import Home from './Pages/Home'

function App() {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
}

export default registerRootComponent(App);