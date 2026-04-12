# Portfólio — Arquitetura Mínima React

Projeto com Vite + React + Tailwind em arquitetura ultra-simples com suporte a **dark mode**.

**Estrutura:**
- `src/App.jsx` — único componente React com toda a landing page (Header, Hero, FeaturedProject, ProjectsGrid, About, Contact, Footer)
- `src/main.jsx` — entry point minimal
- `src/styles/index.css` — configuração Tailwind
- `public/` — assets estáticos (SVGs)

**Paleta de Cores:**
- Acento principal: `#6DBF7F` (verde suave)
- Acento hover: `#5EA56A`
- Fundo claro: `#FFFFFF`
- Fundo escuro: `#0F172A` (slate-950)
- Texto: automático conforme tema

**Tema Dark Mode:**
- **Padrão:** tema escuro ativado por default
- **Toggle:** botão no header (☀️/🌙) para alternar entre claro e escuro
- **Persistência:** preferência salva em `localStorage` e recuperada ao recarregar
- **Classes Tailwind:** todas as classes utilizam `dark:` para aplicar estilos ao modo escuro

**Como rodar:**

```bash
npm install
npm run dev
```

Servidor: http://localhost:5174/

**Customizações:**
- Trocar cor de acento: edite `tailwind.config.cjs` (cores `accent` custom)
- Adicionar conteúdo: edite seções inline em `src/App.jsx`
- Assets: adicione SVGs/imagens em `public/`
- Alterar tema padrão: em `src/App.jsx`, mude `const [isDark, setIsDark] = useState(true)` para `useState(false)` para claro como padrão

**Build & Deploy:**

```bash
npm run build
```

Saída: `dist/` (pronto para deploy em Netlify, Vercel, GitHub Pages ou Replit)
