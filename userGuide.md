# Guia do Usuário - Portal de Notícias

## Visão Geral

O Portal de Notícias é uma plataforma moderna dedicada à cobertura de eventos, cerimônias e iniciativas relacionadas à Diplomacia Civil e relações internacionais. O portal combina um design institucional elegante com funcionalidades modernas para proporcionar uma experiência de leitura excepcional.

## Tecnologia Utilizada

O portal foi desenvolvido com tecnologias de ponta para garantir performance, segurança e escalabilidade. A aplicação utiliza **React 19** como framework principal, proporcionando uma interface de usuário dinâmica e responsiva. O sistema de estilização é baseado em **Tailwind CSS 4**, garantindo um design consistente e altamente customizável através de tokens de design e variáveis CSS.

Para a interface de usuário, o portal integra a biblioteca **shadcn/ui**, oferecendo componentes acessíveis e modernos que seguem as melhores práticas de design. A navegação é gerenciada pelo **Wouter**, uma solução leve e eficiente para roteamento em aplicações React. O conteúdo em formato Markdown é renderizado através da biblioteca **Streamdown**, permitindo formatação rica e profissional dos artigos.

A paleta de cores foi cuidadosamente escolhida combinando azul marinho institucional com vermelho, criando uma identidade visual que transmite seriedade e confiança. As fontes utilizadas são **Playfair Display** para títulos, trazendo elegância e sofisticação, e **Inter** para o corpo do texto, garantindo excelente legibilidade em todos os dispositivos.

O projeto está preparado para integração futura com backend através de uma estrutura de dados bem definida, facilitando a migração dos dados mockados para uma API real quando necessário.

## Usando o Portal

A página inicial apresenta as notícias em destaque no topo, com imagens de alta qualidade e informações completas sobre cada artigo. Você pode navegar pelas categorias usando o menu superior, que inclui "Diplomacia Civil", "Eventos", "Cerimônias" e "Notícias Internacionais". Cada categoria filtra automaticamente o conteúdo relevante.

Na lateral esquerda, você encontra a barra de busca onde pode digitar palavras-chave para encontrar notícias específicas. A busca é inteligente e procura em títulos, resumos e conteúdo completo dos artigos. Logo abaixo está o filtro de categorias, permitindo visualizar notícias de uma categoria específica ou todas simultaneamente.

Ao clicar em qualquer notícia, você é direcionado para a página de detalhes onde pode ler o artigo completo. A página de detalhes inclui breadcrumb para navegação fácil, informações sobre autor e data de publicação, botões de compartilhamento para redes sociais (Facebook, Twitter e LinkedIn), e uma seção de notícias relacionadas ao final do artigo.

O portal é totalmente responsivo, adaptando-se perfeitamente a smartphones, tablets e desktops. No mobile, o menu de navegação se transforma em um menu hambúrguer para melhor aproveitamento do espaço.

## Gerenciando o Conteúdo

Atualmente, o portal utiliza dados mockados para demonstração. Para integrar com seu backend existente, você precisará modificar o arquivo `client/src/data/mockNews.ts` para fazer chamadas à sua API. A estrutura de dados já está definida e documentada, facilitando essa integração.

Cada notícia possui os seguintes campos: id (identificador único), title (título da notícia), slug (URL amigável), excerpt (resumo breve), content (conteúdo completo em Markdown), category (categoria da notícia), author (nome do autor), date (data de publicação), image (URL da imagem), e featured (se é notícia em destaque).

As categorias disponíveis são: Diplomacia Civil, Eventos, Cerimônias, Notícias Internacionais, Reconhecimentos e Parcerias. Você pode adicionar novas categorias editando o array `categories` no mesmo arquivo.

## Próximos Passos

Converse com a Manus AI a qualquer momento para solicitar alterações ou adicionar funcionalidades. Você pode personalizar cores, fontes, layout e adicionar novos recursos como sistema de comentários, newsletter ou integração com redes sociais. A estrutura modular do código facilita a expansão e manutenção do portal.
