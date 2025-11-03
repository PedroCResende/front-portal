# Portal de Notícias - Diplomacia Civil

Portal de notícias moderno e institucional desenvolvido em React, focado em cobertura de eventos, cerimônias e iniciativas relacionadas à Diplomacia Civil e relações internacionais.

## 🎯 Características

- **Design Institucional Moderno**: Combinação elegante de azul marinho e vermelho institucional
- **Sistema de Busca Inteligente**: Busca em tempo real por palavras-chave em títulos, resumos e conteúdo
- **Filtros por Categoria**: Navegação fácil entre diferentes categorias de notícias
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Notícias em Destaque**: Seção hero com as principais notícias
- **Compartilhamento Social**: Integração com Facebook, Twitter e LinkedIn
- **Notícias Relacionadas**: Sugestões contextuais ao final de cada artigo
- **Preparado para Backend**: Estrutura de dados definida para fácil integração com API

## 🛠️ Tecnologias

- **React 19**: Framework JavaScript moderno
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS 4**: Framework CSS utility-first
- **shadcn/ui**: Biblioteca de componentes acessíveis
- **Wouter**: Roteamento leve e eficiente
- **Streamdown**: Renderização de Markdown
- **Vite**: Build tool ultra-rápido

## 📁 Estrutura do Projeto

```
client/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   ├── Footer.tsx     # Rodapé institucional
│   │   ├── NewsCard.tsx   # Card de notícia
│   │   ├── SearchBar.tsx  # Barra de busca
│   │   ├── CategoryFilter.tsx # Filtro de categorias
│   │   └── Logo.tsx       # Logo customizado
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.tsx       # Página inicial
│   │   ├── NewsDetail.tsx # Detalhes da notícia
│   │   └── NotFound.tsx   # Página 404
│   ├── data/              # Dados mockados
│   │   └── mockNews.ts    # Notícias de exemplo
│   ├── App.tsx            # Configuração de rotas
│   └── index.css          # Estilos globais e tema
```

## 🎨 Paleta de Cores

- **Primária**: Azul Marinho (`hsl(221, 83%, 23%)`)
- **Acento**: Vermelho Institucional (`hsl(0, 100%, 27%)`)
- **Destaque**: Dourado (`hsl(43, 74%, 49%)`)

## 📝 Tipografia

- **Títulos**: Playfair Display (serif elegante)
- **Corpo**: Inter (sans-serif moderna)

## 🚀 Funcionalidades Implementadas

### Página Inicial
- Seção de notícias em destaque com layout hero
- Grid responsivo de notícias
- Sidebar com busca e filtros
- Contador de resultados
- Navegação por categorias

### Página de Detalhes
- Breadcrumb de navegação
- Imagem em destaque
- Conteúdo formatado em Markdown
- Informações de autor e data
- Botões de compartilhamento social
- Notícias relacionadas

### Sistema de Busca
- Busca em tempo real
- Pesquisa em múltiplos campos (título, resumo, conteúdo)
- Feedback visual de resultados

### Filtros
- Filtro por categoria
- Integração com URL (deep linking)
- Estado sincronizado com navegação

## 📱 Responsividade

O portal é totalmente responsivo com breakpoints otimizados:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔌 Integração com Backend

Para integrar com seu backend, modifique o arquivo `client/src/data/mockNews.ts`:

```typescript
// Substituir dados mockados por chamadas à API
export const fetchNews = async () => {
  const response = await fetch('https://sua-api.com/noticias');
  return response.json();
};
```

### Estrutura de Dados Esperada

```typescript
interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;      // Suporta Markdown
  category: string;
  author: string;
  date: string;         // ISO 8601
  image: string;        // URL da imagem
  featured: boolean;
}
```

## 🎯 Categorias Disponíveis

- Diplomacia Civil
- Eventos
- Cerimônias
- Notícias Internacionais
- Reconhecimentos
- Parcerias

## 📄 Licença

Desenvolvido para uso institucional.

## 🤝 Suporte

Para dúvidas ou solicitações de alterações, converse com a Manus AI.
