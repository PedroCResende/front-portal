export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured: boolean;
}

export const categories = [
  "Todas",
  "Esportes",
  "Política",
  "Cultura",
  "Notícias Internacionais",
  "Economia"
];

export const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: "Brasil conquista medalha de ouro no Pan-Americano de Atletismo",
    slug: "brasil-conquista-medalha-ouro-pan-americano-atletismo",
    excerpt: "Atleta brasileiro bate recorde sul-americano e garante o primeiro lugar no pódio da competição continental.",
    content: `O Brasil conquistou mais uma medalha de ouro no Pan-Americano de Atletismo, realizado em Santiago, Chile. O atleta brasileiro **João Silva** venceu a prova dos 100 metros rasos com o tempo de 9.85 segundos, estabelecendo um novo recorde sul-americano.

## Desempenho Histórico

Esta é a terceira medalha de ouro do Brasil na competição, consolidando o país como uma potência no atletismo continental. João Silva, de 24 anos, vem de uma temporada excepcional, com vitórias em competições nacionais e internacionais.

> "Estou muito feliz com este resultado. Todo o trabalho duro valeu a pena. Dedico esta medalha à minha família e à minha equipe," declarou o atleta após a vitória.

## Próximos Desafios

Com este resultado, João Silva se credencia como um dos favoritos para os Jogos Olímpicos do próximo ano. A delegação brasileira segue confiante nas próximas provas do Pan-Americano.`,
    category: "Esportes",
    author: "Redação Esportiva",
    date: "2025-11-02",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Congresso aprova reforma tributária após meses de negociação",
    slug: "congresso-aprova-reforma-tributaria-negociacao",
    excerpt: "Após intensos debates, Câmara e Senado chegam a acordo sobre mudanças no sistema tributário brasileiro.",
    content: `O Congresso Nacional aprovou nesta terça-feira a reforma tributária, um dos projetos mais aguardados pelo setor produtivo e pela sociedade brasileira. A votação na Câmara dos Deputados teve 356 votos favoráveis e 120 contrários.

## Principais Mudanças

A reforma prevê a unificação de cinco tributos (PIS, Cofins, IPI, ICMS e ISS) em um Imposto sobre Valor Agregado (IVA) dual, dividido entre União e estados/municípios. A transição será gradual, com período de adaptação de sete anos.

## Reações do Mercado

Economistas avaliam positivamente a aprovação, destacando a simplificação do sistema tributário como fator crucial para aumentar a competitividade das empresas brasileiras.

> "Esta é uma conquista histórica para o Brasil. A simplificação tributária vai reduzir custos e aumentar a transparência," afirmou o relator do projeto.

## Próximos Passos

O texto segue agora para sanção presidencial, com expectativa de implementação gradual a partir do próximo ano.`,
    category: "Política",
    author: "Ana Paula Costa",
    date: "2025-11-01",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Festival de Cinema de Gramado anuncia vencedores da 52ª edição",
    slug: "festival-cinema-gramado-anuncia-vencedores-52-edicao",
    excerpt: "Produção nacional sobre imigração italiana conquista o Kikito de Ouro na principal categoria do festival.",
    content: `O Festival de Cinema de Gramado encerrou sua 52ª edição com a premiação dos melhores filmes brasileiros e latino-americanos. O longa-metragem **"Raízes do Sul"**, dirigido por Mariana Ferreira, levou o prêmio máximo, o Kikito de Ouro.

## Filme Premiado

"Raízes do Sul" conta a história de uma família de imigrantes italianos que chegou ao Brasil no início do século XX. O filme se destaca pela fotografia impecável e pelas atuações marcantes do elenco.

## Outras Premiações

- **Melhor Direção**: Carlos Henrique por "Sertão Vermelho"
- **Melhor Atriz**: Juliana Paes em "Entre Marés"
- **Melhor Ator**: Lázaro Ramos em "O Último Trem"

> "Este prêmio representa o reconhecimento de todo o cinema brasileiro. É uma honra receber o Kikito," declarou a diretora Mariana Ferreira.

## Impacto Cultural

O festival consolidou-se como um dos principais eventos culturais do país, revelando novos talentos e promovendo o cinema nacional.`,
    category: "Cultura",
    author: "Roberto Mendes",
    date: "2025-10-30",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "União Europeia anuncia novo pacote de medidas climáticas",
    slug: "uniao-europeia-anuncia-pacote-medidas-climaticas",
    excerpt: "Bloco europeu estabelece metas mais ambiciosas para redução de emissões de carbono até 2030.",
    content: `A União Europeia anunciou um novo pacote de medidas para combater as mudanças climáticas, estabelecendo metas ainda mais ambiciosas para a redução de emissões de gases de efeito estufa.

## Metas Estabelecidas

O bloco se compromete a reduzir as emissões em 65% até 2030, em comparação com os níveis de 1990. A meta anterior era de 55%.

## Investimentos Previstos

Serão destinados 1 trilhão de euros para projetos de energia renovável, eficiência energética e transição para uma economia verde nos próximos dez anos.

> "A Europa está liderando a transição para um futuro sustentável. Estas medidas são essenciais para proteger nosso planeta," afirmou a presidente da Comissão Europeia.

## Reações Internacionais

Líderes mundiais elogiaram a iniciativa, destacando a importância da cooperação internacional no combate às mudanças climáticas.`,
    category: "Notícias Internacionais",
    author: "Correspondente Internacional",
    date: "2025-10-29",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "Banco Central mantém taxa Selic em 10,75% ao ano",
    slug: "banco-central-mantem-taxa-selic-1075-ano",
    excerpt: "Comitê de Política Monetária decide manter juros básicos da economia pela terceira reunião consecutiva.",
    content: `O Comitê de Política Monetária (Copom) do Banco Central decidiu, por unanimidade, manter a taxa básica de juros (Selic) em 10,75% ao ano. Esta é a terceira reunião consecutiva em que a taxa permanece inalterada.

## Justificativa da Decisão

Segundo o comunicado do Copom, a decisão considera o cenário de inflação controlada e a necessidade de manter a estabilidade econômica. A autoridade monetária avalia que o atual patamar de juros é adequado para atingir as metas de inflação.

## Impacto na Economia

A manutenção da Selic afeta diretamente o custo do crédito, os investimentos e o consumo das famílias. Economistas avaliam que a estabilidade dos juros favorece o planejamento de longo prazo das empresas.

> "A decisão reflete o compromisso do Banco Central com a estabilidade de preços e o crescimento sustentável da economia," destacou o presidente da instituição.

## Perspectivas Futuras

Analistas do mercado financeiro projetam que a Selic deve permanecer estável nos próximos meses, com possibilidade de redução apenas no segundo semestre de 2026.`,
    category: "Economia",
    author: "Juliana Martins",
    date: "2025-10-28",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Seleção Brasileira vence amistoso contra Argentina por 3 a 1",
    slug: "selecao-brasileira-vence-amistoso-argentina-3-1",
    excerpt: "Em partida emocionante no Maracanã, Brasil domina clássico sul-americano e encerra jejum de vitórias.",
    content: `A Seleção Brasileira voltou a vencer a Argentina após três anos, em partida amistosa realizada no estádio do Maracanã, no Rio de Janeiro. O placar de 3 a 1 reflete o domínio brasileiro durante os 90 minutos.

## Destaques da Partida

Os gols brasileiros foram marcados por Vinícius Júnior (2) e Richarlison. Messi descontou para a Argentina no segundo tempo. O técnico Dorival Júnior elogiou o desempenho da equipe.

## Preparação para Eliminatórias

A vitória representa um importante teste para a seleção, que se prepara para as próximas rodadas das Eliminatórias da Copa do Mundo. O Brasil ocupa atualmente a segunda posição na tabela.

> "Foi uma grande atuação da equipe. Mostramos que estamos no caminho certo," declarou o capitão da seleção.`,
    category: "Esportes",
    author: "Redação Esportiva",
    date: "2025-10-27",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 7,
    title: "Senado aprova projeto de lei sobre inteligência artificial",
    slug: "senado-aprova-projeto-lei-inteligencia-artificial",
    excerpt: "Nova legislação estabelece diretrizes para uso ético e seguro de IA no Brasil.",
    content: `O Senado Federal aprovou o projeto de lei que regulamenta o uso de inteligência artificial no Brasil. A proposta estabelece princípios éticos, direitos dos cidadãos e responsabilidades das empresas que desenvolvem e utilizam sistemas de IA.

## Principais Pontos da Lei

A legislação prevê transparência nos algoritmos, proteção de dados pessoais, proibição de discriminação algorítmica e responsabilização em casos de danos causados por sistemas de IA.

## Debate Nacional

O projeto foi amplamente debatido com especialistas em tecnologia, empresas do setor e organizações da sociedade civil. A regulamentação busca equilibrar inovação e proteção dos direitos fundamentais.

> "Esta lei coloca o Brasil na vanguarda da regulação de IA, garantindo desenvolvimento tecnológico responsável," afirmou o relator do projeto.`,
    category: "Política",
    author: "Carlos Eduardo Santos",
    date: "2025-10-26",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 8,
    title: "Museu Nacional reabre após cinco anos de restauração",
    slug: "museu-nacional-reabre-cinco-anos-restauracao",
    excerpt: "Instituição centenária volta a receber visitantes com acervo renovado e estrutura modernizada.",
    content: `O Museu Nacional, no Rio de Janeiro, reabriu suas portas ao público após cinco anos de intenso trabalho de restauração. A instituição, que sofreu um incêndio devastador em 2018, foi completamente reconstruída e modernizada.

## Novo Acervo

Além da recuperação de peças históricas, o museu conta com novas aquisições e exposições interativas que utilizam tecnologia de ponta para proporcionar uma experiência imersiva aos visitantes.

## Investimentos

Foram investidos mais de R$ 300 milhões na reconstrução, com recursos do governo federal, doações privadas e parcerias internacionais. A estrutura agora conta com sistemas modernos de prevenção e combate a incêndios.

> "A reabertura do Museu Nacional é um marco para a cultura brasileira. Representa a resiliência e o compromisso com a preservação de nossa história," destacou o diretor da instituição.`,
    category: "Cultura",
    author: "Fernanda Lima",
    date: "2025-10-25",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3b7?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 9,
    title: "China e Estados Unidos retomam diálogo comercial bilateral",
    slug: "china-estados-unidos-retomam-dialogo-comercial",
    excerpt: "Após meses de tensão, as duas maiores economias do mundo anunciam nova rodada de negociações.",
    content: `China e Estados Unidos anunciaram a retomada do diálogo comercial bilateral, sinalizando uma possível distensão nas relações entre as duas maiores economias do mundo. O anúncio foi feito após reunião entre representantes dos dois países em Genebra.

## Temas em Discussão

As negociações abordarão tarifas comerciais, propriedade intelectual, transferência de tecnologia e barreiras não-tarifárias. Ambos os países demonstraram interesse em reduzir as tensões que afetam o comércio global.

## Impacto Global

A retomada do diálogo é vista com otimismo por economistas e líderes mundiais, que esperam efeitos positivos na economia global e na estabilidade dos mercados financeiros.

> "Este é um passo importante para a cooperação internacional e o fortalecimento do multilateralismo," declarou o secretário de Comércio dos EUA.`,
    category: "Notícias Internacionais",
    author: "Correspondente Internacional",
    date: "2025-10-24",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 10,
    title: "Petróleo atinge maior valor em dois anos no mercado internacional",
    slug: "petroleo-atinge-maior-valor-dois-anos-mercado",
    excerpt: "Barril do petróleo tipo Brent ultrapassa US$ 95, impulsionado por tensões geopolíticas e cortes na produção.",
    content: `O preço do barril de petróleo tipo Brent atingiu US$ 95,50 nesta quinta-feira, o maior valor registrado nos últimos dois anos. O aumento é atribuído a tensões geopolíticas no Oriente Médio e aos cortes na produção anunciados pela OPEP+.

## Fatores do Aumento

Analistas apontam a combinação de redução na oferta, aumento da demanda global e incertezas geopolíticas como principais fatores para a alta dos preços. A OPEP+ mantém política de restrição da produção para sustentar os preços.

## Impacto na Economia

O aumento do petróleo afeta diretamente os preços de combustíveis, transporte e produtos derivados, com potencial impacto inflacionário nas economias mundiais.

> "O mercado está reagindo às incertezas globais. É fundamental monitorar os desdobramentos para avaliar impactos de longo prazo," afirmou analista de commodities.`,
    category: "Economia",
    author: "Paulo Henrique Alves",
    date: "2025-10-23",
    image: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&h=600&fit=crop",
    featured: false
  }
];