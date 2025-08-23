"use client";
// pages/index.tsx
import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/page.module.css';
import Link from 'Next/Link'

type TabType = 'destaques' | 'servicos' | 'beneficios' | 'contato';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('destaques');

  const servicos = [
    {
      id: 1,
      titulo: 'Alvenaria e Estrutura',
      descricao: 'Construção de paredes, muros, churrasqueiras e demolição com segurança.',
      icone: '🏗️'
    },
    {
      id: 2,
      titulo: 'Preparação de Superfícies',
      descricao: 'Chapisco, emboço, reboco e nivelamento para receber acabamentos.',
      icone: '🔨'
    },
    {
      id: 3,
      titulo: 'Acabamentos e Revestimentos',
      descricao: 'Aplicação de cerâmicas, porcelanatos, pastilhas e pintura.',
      icone: '✨'
    },
    {
      id: 4,
      titulo: 'Impermeabilização',
      descricao: 'Proteção contra umidade escoamento adequado de água.',
      icone: '🛡️'
    }
  ];

  const beneficios = [
    {
      id: 1,
      titulo: 'Qualidade Garantida',
      descricao: 'Utilizamos materiais de primeira linha e mão de obra especializada.'
    },
    {
      id: 2,
      titulo: 'Prazo Cumprido',
      descricao: 'Comprometimento com os prazos estabelecidos no contrato.'
    },
    {
      id: 3,
      titulo: 'Orçamento Sem Surpresas',
      descricao: 'Transparência total nos custos desde o início do projeto.'
    },
    {
      id: 4,
      titulo: 'Limpeza Diária',
      descricao: 'Deixamos o local organizado e livre de entulhos diariamente.'
    }
  ];

  return (
    <div className={styles.fullScreenContainer}>
      <Head>
        <title>JR Construção</title>
        <meta name="description" content="Serviços especializados em construção e reforma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            {/* Logo como imagem */}
            <div className={styles.logoContainer}>
              <img
                src="/jrConstrucao.jpg"
                alt="JR Construção"
                className={styles.logoImage}
              />
            </div>
            <nav className={styles.desktopNav}>
              <ul className={styles.navList}>
                <li>
                  <button
                    onClick={() => setActiveTab('destaques')}
                    className={`${styles.navButton} ${activeTab === 'destaques' ? styles.activeNavButton : ''}`}
                  >
                    Destaques
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('servicos')}
                    className={`${styles.navButton} ${activeTab === 'servicos' ? styles.activeNavButton : ''}`}
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('beneficios')}
                    className={`${styles.navButton} ${activeTab === 'beneficios' ? styles.activeNavButton : ''}`}
                  >
                    Benefícios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('contato')}
                    className={`${styles.navButton} ${activeTab === 'contato' ? styles.activeNavButton : ''}`}
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </nav>
            <button className={styles.mobileMenuButton}>☰</button>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Conteúdo da aba Destaques */}
        {activeTab === 'destaques' && (
          <section className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Destaques</h2>
            <div className={styles.grid2Cols}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Nossos Serviços</h3>
                <p className={styles.cardText}>
                  Oferecemos soluções completas em construção e reforma, desde a alvenaria até os acabamentos finais.
                </p>
                <ul className={styles.list}>
                  <li>Alvenaria estrutural e convencional</li>
                  <li>Acabamentos em geral</li>
                  <li>Impermeabilização</li>
                  <li>Reformas e reparos</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Por que nos escolher?</h3>
                <p className={styles.cardText}>
                  Com anos de experiência no mercado, nossa equipe é especializada em entregar projetos com qualidade, dentro do prazo e orçamento combinados.
                </p>
                <div className={styles.highlightBox}>
                  <button
                    onClick={() => setActiveTab('contato')}
                    className={styles.highlightButton}
                  >
                    Entre em contato hoje mesmo para um orçamento gratuito!
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Conteúdo da aba Serviços */}
        {activeTab === 'servicos' && (
          <section className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
            <div className={styles.grid4Cols}>
              {servicos.map(servico => (
                <div key={servico.id} className={`${styles.card} ${styles.hoverCard}`}>
                  <div className={styles.icon}>{servico.icone}</div>
                  <h3 className={styles.cardTitle}>{servico.titulo}</h3>
                  <p className={styles.cardText}>{servico.descricao}</p>
                </div>
              ))}
            </div>

            <div className={styles.infoSection}>
              <h3 className={styles.subSectionTitle}>Serviços Detalhados</h3>
              <div className={styles.grid2Cols}>
                <div>
                  <h4 className={styles.listTitle}>Alvenaria e Estrutura</h4>
                  <ul className={styles.list}>
                    <li>Assentamento de tijolos e blocos</li>
                    <li>Construção de muros e churrasqueiras</li>
                    <li>Demolição com segurança</li>
                    <li>Remoção de entulho</li>
                  </ul>
                </div>
                <div>
                  <h4 className={styles.listTitle}>Acabamentos</h4>
                  <ul className={styles.list}>
                    <li>Aplicação de pisos e revestimentos</li>
                    <li>Instalação de rodapés</li>
                    <li>Pintura básica e especializada</li>
                    <li>Regularização de superfícies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Conteúdo da aba Benefícios */}
        {activeTab === 'beneficios' && (
          <section className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Benefícios</h2>
            <div className={styles.grid2Cols}>
              {beneficios.map(beneficio => (
                <div key={beneficio.id} className={styles.card}>
                  <h3 className={styles.cardTitle}>{beneficio.titulo}</h3>
                  <p className={styles.cardText}>{beneficio.descricao}</p>
                </div>
              ))}
            </div>

            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>Vantagens Exclusivas</h3>
              <p className={styles.ctaText}>Além de todos esses benefícios, oferecemos garantia em todos os serviços realizados!</p>
              <button
                onClick={() => setActiveTab('contato')}
                className={styles.ctaButton}
              >
                Solicitar Orçamento
              </button>
            </div>
          </section>
        )}

        {/* Conteúdo da aba Contato */}
        {activeTab === 'contato' && (
          <section className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Entre em Contato</h2>
            <div className={styles.grid2Cols}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Informações de Contato</h3>
                <div className={styles.contactInfo}>
                  <div>
                    <h4 className={styles.contactLabel}>Telefone</h4>
                    <p className={styles.contactText}>(11) 99999-9999</p>
                  </div>
                  <div>
                    <h4 className={styles.contactLabel}>Email</h4>
                    <p className={styles.contactText}>contato@jrconstrucao.com.br</p>
                  </div>
                  <div>
                    <h4 className={styles.contactLabel}>Endereço</h4>
                    <p className={styles.contactText}>Rua das Construções, 123 - Centro, São Paulo - SP</p>
                  </div>
                  <div>
                    <h4 className={styles.contactLabel}>Horário de Atendimento</h4>
                    <p className={styles.contactText}>Segunda a Sexta: 8h às 18h</p>
                    <p className={styles.contactText}>Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solicite um Orçamento</h3>
                <form className={styles.form}>
                  <div>
                    <label htmlFor="nome" className={styles.formLabel}>Nome</label>
                    <input
                      type="text"
                      id="nome"
                      className={styles.formInput}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                    <input
                      type="email"
                      id="email"
                      className={styles.formInput}
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className={styles.formLabel}>Telefone</label>
                    <input
                      type="tel"
                      id="telefone"
                      className={styles.formInput}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="servico" className={styles.formLabel}>Serviço de Interesse</label>
                    <select
                      id="servico"
                      className={styles.formInput}
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="alvenaria">Alvenaria e Estrutura</option>
                      <option value="preparacao">Preparação de Superfícies</option>
                      <option value="acabamentos">Acabamentos e Revestimentos</option>
                      <option value="impermeabilizacao">Impermeabilização</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensagem" className={styles.formLabel}>Mensagem</label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      className={styles.formTextarea}
                      placeholder="Descreva brevemente o serviço necessário"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={styles.submitButton}
                  >
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} JR Construção. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}