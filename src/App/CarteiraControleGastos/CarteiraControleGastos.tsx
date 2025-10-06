import React from "react";
import { useNavigate } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import { useCarteira } from "../../contexts/CarteiraContext";

const CarteiraControleGastos: React.FC = () => {
  const navigate = useNavigate();
  const { carteiras } = useCarteira();

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



  return (
    <>
      {/* Fundo branco da tela inteira */}
      <div style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 999
      }}></div>

      <Menubar />

      {/* Fundo branco do header */}
      <div style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        height: '100px',
        backgroundColor: 'white',
        zIndex: 1001
      }}></div>

      {/* Título "Resumo de Setembro" fixo */}
      <div style={{
        position: 'fixed',
        top: '50px',
        left: '20px',
        zIndex: 1002,
        color: '#0065F5',
        fontSize: '21px'
      }}>
        <span style={{ fontWeight: '400' }}>Resumo de </span>
        <span style={{ fontWeight: '700' }}>Setembro</span>
      </div>

      {/* Card branco scrollável com conteúdo */}
      <div style={{
        position: 'fixed',
        left: '0px',
        right: '0px',
        top: '120px', 
        bottom: '100px', // profundidade vertical 
        borderTopRightRadius: '16px',
        borderTopLeftRadius: '16px',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 1009,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>

        {/* Conteúdo scrollável */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 16px',
          paddingBottom: '80px',
          backgroundColor: 'white'
        }}>
          
          {/* Título Carteiras com contador */}
          <div style={{
            color: '#1e293b',
            fontSize: '20px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            Carteiras
            <span style={{
              backgroundColor: '#858585ff',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              padding: '2px 8px',
              borderRadius: '120px',
              minWidth: '20px',
              textAlign: 'center'
            }}>
              {carteiras.length}
            </span>
          </div>

          {/* Carrossel de Carteiras */}
          <div style={{
            height: '200px',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              overflowX: 'auto',
              overflowY: 'hidden',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: 'grab',
              userSelect: 'none'
            }}
              className="carrossel-carteiras"
              onMouseDown={(e) => {
                const container = e.currentTarget;
                container.style.cursor = 'grabbing';
                let startX = e.clientX;
                let scrollLeft = container.scrollLeft;

                const handleMouseMove = (e: MouseEvent) => {
                  e.preventDefault();
                  const x = e.clientX - startX;
                  container.scrollLeft = scrollLeft - x;
                };

                const handleMouseUp = () => {
                  container.style.cursor = 'grab';
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
              onTouchStart={(e) => {
                const container = e.currentTarget;
                let startX = e.touches[0].clientX;
                let scrollLeft = container.scrollLeft;

                const handleTouchMove = (e: TouchEvent) => {
                  const x = e.touches[0].clientX - startX;
                  container.scrollLeft = scrollLeft - x;
                };

                const handleTouchEnd = () => {
                  document.removeEventListener('touchmove', handleTouchMove);
                  document.removeEventListener('touchend', handleTouchEnd);
                };

                document.addEventListener('touchmove', handleTouchMove);
                document.addEventListener('touchend', handleTouchEnd);
              }}
            >
              
              {/* Carteiras existentes */}
              {carteiras.map((carteira) => (
                <div key={carteira.id} style={{
                  minWidth: '160px',
                  width: '160px',
                  height: '180px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  padding: '16px',
                  position: 'relative',
                  flexShrink: 0
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#0065F5';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
                onClick={() => navigate(`/editar-carteira/${carteira.id}`)}
                >
                  {/* Nome da carteira */}
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '800',
                    color: '#0065F5',
                    textAlign: 'left',
                    alignSelf: 'flex-start'
                  }}>
                    {carteira.nome}
                  </div>

                  {/* Ícone da carteira */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {renderIcone(carteira.icone)}
                  </div>
                  
                  {/* Valor da carteira */}
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#0065F5',
                    textAlign: 'center'
                  }}>
                    R$ {carteira.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              ))}

              {/* Card "Criar nova carteira" */}
              <div style={{
                minWidth: '160px',
                width: '160px',
                height: '180px',
                backgroundColor: 'white',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                flexShrink: 0
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#0065F5';
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              }}
              onClick={() => {
                window.location.href = '/nova-carteira';
              }}
              >
                {/* Ícone + */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#0065F5" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14"/>
                    <path d="M5 12h14"/>
                  </svg>
                </div>
                
                {/* Texto */}
                <div style={{
                  fontSize: '14px',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  Criar nova carteira
                </div>
              </div>

            </div>
          </div>

          {/* Título Controle de gasto */}
          <div style={{
            color: '#1e293b',
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Controle de gasto
          </div>

          {/* Lista de Cards de Controle */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            
            {/* Card Saldo Total */}
            <div style={{
              height: '80px',
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '16px'
            }}>
              {/* Ícone do cifrão */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f9ff',
                borderRadius: '12px',
                padding: '12px',
                minWidth: '48px',
                height: '48px'
              }}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#00CD5C" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 1v22"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              
              {/* Textos e valor */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
                {/* Texto "Saldo Total" */}
                <div style={{
                  color: '#64748b',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px'
                }}>
                  Saldo Total
                </div>
                
                {/* Valor do saldo */}
                <div style={{
                  color: '#0065F5',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  R$ {carteiras.reduce((total, carteira) => total + carteira.valor, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>

            {/* Card Gastos Total */}
            <div style={{
              height: '80px',
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '16px'
            }}>
              {/* Ícone da seta para baixo */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffffff',
                borderRadius: '12px',
                padding: '12px',
                minWidth: '48px',
                height: '48px'
              }}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#000000ff" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14"/>
                  <path d="m19 12-7 7-7-7"/>
                </svg>
              </div>
              
              {/* Textos e valor */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
                {/* Texto "Gastos Total" */}
                <div style={{
                  color: '#64748b',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px'
                }}>
                  Gastos Total
                </div>
                
                {/* Valor dos gastos */}
                <div style={{
                  color: '#000000ff',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  R$ 0,00
                </div>
              </div>
            </div>

            {/* Card Investimentos */}
            <div style={{
              height: '80px',
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '16px'
            }}>
              {/* Ícone de gráfico/trade */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0fdf4',
                borderRadius: '12px',
                padding: '12px',
                minWidth: '48px',
                height: '48px'
              }}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#0065F5" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                  <path d="M14 9h5v5"/>
                </svg>
              </div>
              
              {/* Textos e valor */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
                {/* Texto "Investimentos" */}
                <div style={{
                  color: '#64748b',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px'
                }}>
                  Investimentos
                </div>
                
                {/* Valor dos investimentos */}
                <div style={{
                  color: '#00CD5C',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  +R$ 0,00
                </div>
              </div>
            </div>

            {/* Card Metas */}
            <div style={{
              height: '80px',
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '16px'
            }}>
              {/* Ícone de alvo */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fef3c7',
                borderRadius: '12px',
                padding: '12px',
                minWidth: '48px',
                height: '48px'
              }}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#f59e0b" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              
              {/* Textos e valor */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
                {/* Texto "Metas" */}
                <div style={{
                  color: '#64748b',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px'
                }}>
                  Metas
                </div>
                
                {/* Valor das metas */}
                <div style={{
                  color: '#000000ff',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  R$ 0,00
                </div>
              </div>
            </div>

            {/* Card Resumo de gastos */}
            <div style={{
              width: '361px',
              height: '140px',
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '14px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              boxSizing: 'border-box'
            }}>
              {/* Título */}
              <div style={{
                color: '#0065F5',
                fontSize: '16px',
                fontWeight: '900',
                marginBottom: '8px'
              }}>
                Resumo de gastos
              </div>
              
              {/* Linhas de informação */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                flex: 1
              }}>
                {/* Despesas cartão de crédito */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '20px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '2px',
                      backgroundColor: '#00CD5C',
                      flexShrink: 0
                    }}></div>
                    <span style={{
                      color: '#000000',
                      fontSize: '16px',
                      fontWeight: '600',
                      lineHeight: '1'
                    }}>
                      Despesas cartão de crédito
                    </span>
                  </div>
                  <span style={{
                    color: '#00CD5C',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '1'
                  }}>
                    R$ 0,00
                  </span>
                </div>

                {/* Despesas cartão de Débito/Pix */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '20px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '2px',
                      backgroundColor: '#0065F5',
                      flexShrink: 0
                    }}></div>
                    <span style={{
                      color: '#000000',
                      fontSize: '16px',
                      fontWeight: '600',
                      lineHeight: '1'
                    }}>
                      Despesas cartão de Débito/Pix
                    </span>
                  </div>
                  <span style={{
                    color: '#0065F5',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '1'
                  }}>
                    R$ 0,00
                  </span>
                </div>

                {/* Gasto hoje */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '36px'
                }}>
                  <span style={{
                    color: '#000000',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '1'
                  }}>
                    Gasto hoje
                  </span>
                  <span style={{
                    color: '#000000',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '1'
                  }}>
                    R$ 0,00
                  </span>
                </div>
              </div>
            </div>

            {/* Card Relatório gerado pela agi.ia */}
            <div style={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxSizing: 'border-box'
            }}>
              {/* Título */}
              <div style={{
                color: '#0065F5',
                fontSize: '18px',
                fontWeight: '700',
                textAlign: 'left'
              }}>
                Relatório gerado pela agi.ia
              </div>
              
              {/* Texto do relatório */}
              <div style={{
                color: '#000000',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.5',
                textAlign: 'left'
              }}>
                No último mês você gastou{' '}
                <span style={{ color: '#0065F5', fontWeight: '600' }}>
                  R$643,75
                </span>
                {' '}em{' '}
                <span style={{ color: '#0065F5', fontWeight: '600', fontStyle: 'italic' }}>
                  Agi Café
                </span>
                . Vale a pena repensar esse hábito! Levar comida de casa ou escolher opções mais baratas para administrar seu dinheiro sem abrir mão de uma boa refeição.
              </div>
            </div>

            {/* Card Gráfico de gastos */}
            <div style={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box'
            }}>
              {/* Título */}
              <div style={{
                color: '#0065F5',
                fontSize: '18px',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Gráfico de gastos
              </div>
              
              {/* Container do gráfico centralizado */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px'
              }}>
                {/* Simulação do DonutChart - será substituído pelo componente real */}
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: `conic-gradient(
                    #FFE079 0deg 216deg,
                    #FF8080 216deg 288deg,
                    #7280FF 288deg 360deg
                  )`,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'white',
                    borderRadius: '50%'
                  }}></div>
                </div>
              </div>
              
              {/* Legenda dos valores */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {/* Imóvel, boletos */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#FFE079',
                      borderRadius: '8px'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flex: 1
                    }}>
                      <span style={{
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}>
                        60% Imóvel, boletos
                      </span>
                    </div>
                  </div>
                  {/* Barra de progresso 60% */}
                  <div style={{
                    marginLeft: '44px'
                  }}>
                    <div style={{
                      width: '60%',
                      height: '6px',
                      backgroundColor: '#FFE079',
                      borderRadius: '3px'
                    }}></div>
                  </div>
                </div>

                {/* Alimentação */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#FF8080',
                      borderRadius: '8px'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                        <line x1="6" y1="1" x2="6" y2="4"/>
                        <line x1="10" y1="1" x2="10" y2="4"/>
                        <line x1="14" y1="1" x2="14" y2="4"/>
                      </svg>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flex: 1
                    }}>
                      <span style={{
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}>
                        20% Alimentação
                      </span>
                    </div>
                  </div>
                  {/* Barra de progresso 20% */}
                  <div style={{
                    marginLeft: '44px'
                  }}>
                    <div style={{
                      width: '20%',
                      height: '6px',
                      backgroundColor: '#FF8080',
                      borderRadius: '3px'
                    }}></div>
                  </div>
                </div>

                {/* Assinaturas */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#7280FF',
                      borderRadius: '8px'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flex: 1
                    }}>
                      <span style={{
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}>
                        20% Assinaturas
                      </span>
                    </div>
                  </div>
                  {/* Barra de progresso 20% */}
                  <div style={{
                    marginLeft: '44px'
                  }}>
                    <div style={{
                      width: '20%',
                      height: '6px',
                      backgroundColor: '#7280FF',
                      borderRadius: '3px'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CarteiraControleGastos;