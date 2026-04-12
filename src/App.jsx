import React, { useState, useEffect } from 'react'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Carregar tema do localStorage ou usar dark como padrão
    const saved = localStorage.getItem('theme')
    const preferDark = saved ? saved === 'dark' : true
    setIsDark(preferDark)
    applyTheme(preferDark)
  }, [])

  const applyTheme = (dark) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    applyTheme(newTheme)
  }

  const projects = [
    { id: 1, title: 'Projeto RiscoFauna', img: '/screenshot-rf.png' },
    { id: 2, title: 'Dashboard Conservação', img: '/project3.svg' },
    { id: 3, title: 'Soluções Mobile', img: '/project2.svg' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-m.png" alt="logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-semibold">Matias Dev</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <div className="hidden md:flex gap-6">
              <a href="#projects" className="hover:text-accent transition">Projetos</a>
              <a href="#about" className="hover:text-accent transition">Sobre</a>
              <a href="#contact" className="hover:text-accent transition">Contato</a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Disponível para novos projetos
            </span>
          </div>
        </div>
        {/* Hero */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-slate-900 dark:text-white">Engenharia de Soluções</span>{' '}
            <span className="text-accent">Baseadas em Dados</span>
            <span className="text-slate-900 dark:text-white">.</span>
          </h1>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#projects" className="inline-block bg-accent text-white px-5 py-3 rounded-md shadow hover:bg-accent-600 transition">Ver Projetos</a>
            <a href="#contact" className="inline-block border border-slate-300 dark:border-slate-600 px-5 py-3 rounded-md text-slate-900 dark:text-slate-50 hover:bg-slate-50 dark:hover:bg-slate-900 transition">Contato</a>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-8">
            <h2 className="text-2xl text-center font-semibold mb-6 text-accent">Sobre</h2>
            <p className="text-lg text-center text-slate-700 dark:text-slate-300">Igor Matias - Biólogo de formação em transição de carreira para Desenvolvedor.</p>
            <p className="text-lg text-center text-slate-700 dark:text-slate-300">Especialista no desenvolvimento de ferramentas sofisticadas de análise de dados e aplicações de coleta para resolver desafios complexos do mundo real. Focamos em soluções que unem conservação e tecnologia, trabalhando com pipelines, dashboards e modelagem para transformar dados em impacto.</p>
          </div>
        </section>

        {/* Featured Project */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Projeto em Destaque</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img src="/screenshot-rf.png" alt="Projeto destaque" className="w-full md:w-1/2 rounded-lg shadow" />
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold">RiscoFauna — Segurança Operacional em Aeródromos</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">Aplicativo para coleta e análises de dados para Gerenciamento de Risco de Fauna, integrando Mapeamento, Dashboards e Inteligência.</p>
              <a href="#" className="mt-6 inline-block bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-600 transition">Ver projeto</a>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-6">Projetos Selecionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(project => (
              <article key={project.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Breve descrição do projeto.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-right">
          <h2 className="text-2xl font-semibold mb-4">Vamos construir algo incrível</h2>
          <p className="text-slate-700 dark:text-slate-300">E-mail: <a href="mailto:igor@matias.dev.br" className="text-accent hover:underline">igor@matias.dev.br</a></p>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Telefone: <a href="tel:+5581999407919" className="text-accent hover:underline">81 99940-7919</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-slate-600 dark:text-slate-400 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-m.png" alt="logo" className="w-6 h-6 rounded-lg object-cover" />
            <span>© {new Date().getFullYear()} Matias</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
