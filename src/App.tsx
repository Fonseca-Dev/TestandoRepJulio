import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './App/Home/Home';
import Login from './App/Login/Login';
import Signup from './App/Signup/Signup';
import Extract from './App/Extract/Extract';
import DetalheTransacao from './App/DetalheTransacao/DetalheTransacao.tsx';
import CarteiraControleGastos from './App/CarteiraControleGastos/CarteiraControleGastos';
import NovaCarteira from './App/NovaCarteira/NovaCarteira';
import EditarCarteira from './App/EditarCarteira/EditarCarteira';
import { SaldoProvider } from './contexts/SaldoContext';
import { TransacaoProvider } from './contexts/TransacaoContext';
import { TipoTransacaoProvider } from './contexts/TipoTransacaoContext';
import { CarteiraProvider } from './contexts/CarteiraContext';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SaldoProvider>
        <TransacaoProvider>
          <TipoTransacaoProvider>
            <CarteiraProvider>
              <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/extrato" element={<Extract />} />
                <Route path="/carteira" element={<CarteiraControleGastos />} />
                <Route path="/nova-carteira" element={<NovaCarteira />} />
                <Route path="/editar-carteira/:id" element={<EditarCarteira />} />
                <Route path="/transacao/:id" element={<DetalheTransacao />} />
              </Routes>
            </Router>
            </CarteiraProvider>
          </TipoTransacaoProvider>
        </TransacaoProvider>
      </SaldoProvider>
    </div>
  );
}

export default App;