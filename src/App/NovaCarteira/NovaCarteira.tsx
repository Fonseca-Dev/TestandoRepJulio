import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import { useCarteira } from "../../contexts/CarteiraContext";

const NovaCarteira: React.FC = () => {
  const navigate = useNavigate();
  const { adicionarCarteira } = useCarteira();
  const [nomeCarteira, setNomeCarteira] = useState("Nova carteira");
  const [valorCarteira, setValorCarteira] = useState(0);
  const [showEditNome, setShowEditNome] = useState(false);
  const [showPopupValor, setShowPopupValor] = useState(false);
  const [showSeletorIcone, setShowSeletorIcone] = useState(false);
  const [iconeEscolhido, setIconeEscolhido] = useState("wallet");
  const [inputValor, setInputValor] = useState("");
  
  // Simulando saldo disponível da conta
  const saldoDisponivel = 2500.50;

  const icones = [
    { id: "wallet", name: "Carteira", svg: <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/> },
    { id: "piggy-bank", name: "Cofrinho", svg: <path d="M19 7c0-1.1-.9-2-2-2h-3V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7zm-8 0h2v2h-2V7zm0 4h2v2h-2v-2z"/> },
    { id: "credit-card", name: "Cartão", svg: <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/> },
    { id: "home", name: "Casa", svg: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/> },
    { id: "car", name: "Carro", svg: <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/> },
    { id: "gift", name: "Presente", svg: <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/> }
  ];

  const renderIcone = (iconeId: string) => {
    const icone = icones.find(i => i.id === iconeId);
    if (!icone) return null;
    
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0065F5" strokeWidth="2">
        {icone.svg}
      </svg>
    );
  };

  const handleSalvarValor = () => {
    const valor = parseFloat(inputValor.replace(',', '.'));
    if (!isNaN(valor) && valor >= 0 && valor <= saldoDisponivel) {
      setValorCarteira(valor);
      setShowPopupValor(false);
      setInputValor("");
    }
  };

  const handleCriarCarteira = () => {
    adicionarCarteira({
      nome: nomeCarteira,
      valor: valorCarteira,
      icone: iconeEscolhido
    });
    navigate('/carteira');
  };

  return (
    <>
      <Menubar />
      
      {/* Background branco */}
      <div style={{
        position: 'fixed',
        left: '0px',
        right: '0px',
        top: '0px', 
        bottom: '0px', 
        width: '100%',
        backgroundColor: 'white',
        zIndex: 999
      }}>
        


        {/* Botão voltar */}
        <div 
          style={{
            position: 'fixed',
            top: '20px',
            left: '24px',
            color: '#0065F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            zIndex: 1002
          }}
          onClick={() => navigate(-1)}
        >
          <svg 
            width="34" 
            height="34" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </div>

        {/* Card Principal */}
        <div style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '332px',
          height: '193px',
          backgroundColor: 'white',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '16px',
          zIndex: 1002
        }}>
          
          {/* Título editável no canto superior esquerdo */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            {showEditNome ? (
              <input
                value={nomeCarteira}
                onChange={(e) => setNomeCarteira(e.target.value)}
                onBlur={() => setShowEditNome(false)}
                onKeyPress={(e) => e.key === 'Enter' && setShowEditNome(false)}
                autoFocus
                style={{
                  border: '1px solid #0065F5',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  fontSize: '16px',
                  fontWeight: '800',
                  color: '#0065F5',
                  outline: 'none',
                  minWidth: '120px'
                }}
              />
            ) : (
              <span
                onClick={() => setShowEditNome(true)}
                style={{
                  fontSize: '16px',
                  fontWeight: '800',
                  color: '#0065F5',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {nomeCarteira}
              </span>
            )}
            <button
              onClick={() => setShowEditNome(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0065F5" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15.5 8 16l.5-4 9.5-9.5z"/>
              </svg>
            </button>
          </div>

          {/* Valor da carteira */}
          <div style={{
            position: 'absolute',
            top: '56px',
            left: '16px'
          }}>
            <div
              onClick={() => setShowPopupValor(true)}
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#0065F5',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              R$ {valorCarteira.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          {/* Ícone da carteira no canto inferior esquerdo */}
          <div 
            onClick={() => setShowSeletorIcone(true)}
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '48px',
              height: '48px',
              backgroundColor: '#fafafaff',
              borderRadius: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {renderIcone(iconeEscolhido)}
          </div>


        </div>

        {/* Botão Criar Carteira */}
        <button
          onClick={handleCriarCarteira}
          style={{
            position: 'fixed',
            bottom: '120px',
            top: '43%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '332px',
            height: '47px',
            backgroundColor: '#0065F5',
            color: 'white',
            border: 'none',
            borderRadius: '120px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 1002
          }}
        >
          Criar carteira
        </button>

        {/* Popup Valor */}
        {showPopupValor && (
          <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px',
              width: '320px',
              boxShadow: '0 10px 25px rgba(255, 255, 255, 0.3)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '16px',
                textAlign: 'center'
              }}>
                Definir valor da carteira
              </h3>
              
              <div style={{
                marginBottom: '16px',
                padding: '12px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px'
              }}>
                <span style={{ fontSize: '14px', color: '#64748b' }}>Saldo disponível: </span>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#0065F5' }}>
                  R$ {saldoDisponivel.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <input
                type="text"
                placeholder="0,00"
                value={inputValor}
                onChange={(e) => setInputValor(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  marginBottom: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />

              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                <button
                  onClick={() => setShowPopupValor(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    color: '#64748b',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSalvarValor}
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: 'none',
                    borderRadius: '8px',
                    backgroundColor: '#0065F5',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup Seletor de Ícones */}
        {showSeletorIcone && (
          <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px',
              width: '320px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '16px',
                textAlign: 'center'
              }}>
                Escolher ícone
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '16px'
              }}>
                {icones.map((icone) => (
                  <button
                    key={icone.id}
                    onClick={() => {
                      setIconeEscolhido(icone.id);
                      setShowSeletorIcone(false);
                    }}
                    style={{
                      padding: '16px',
                      border: iconeEscolhido === icone.id ? '2px solid #0065F5' : '1px solid #e2e8f0',
                      borderRadius: '8px',
                      backgroundColor: iconeEscolhido === icone.id ? '#f0f9ff' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                      {icone.svg}
                    </svg>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{icone.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowSeletorIcone(false)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  color: '#64748b',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default NovaCarteira;