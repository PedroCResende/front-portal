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
  "Diplomacia Civil",
  "Eventos",
  "Cerimônias",
  "Notícias Internacionais",
  "Reconhecimentos",
  "Parcerias"
];

export const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: "Túlio Vitty: Conectando Inovação, Diplomacia Civil e Propósito Humano",
    slug: "tulio-vitty-conectando-inovacao-diplomacia-civil",
    excerpt: "Em um momento em que tecnologia e humanidade frequentemente parecem caminhar em direções opostas, Túlio Vitty prova que ambos os mundos podem andar lado a lado.",
    content: `Miami (EUA) — Em um momento em que tecnologia e humanidade frequentemente parecem caminhar em direções opostas, **Túlio Vitty** prova que ambos os mundos podem andar lado a lado.

Um estrategista digital, empreendedor e **Diplomata Civil Humanitário**, ele se tornou uma das vozes mais influentes no cenário global atual.

## Túlio Vitty e o Instituto Elisangela Dias Expandindo a Diplomacia Civil nos EUA

Como Diretor de Expansão da **Jethro International**, Túlio lidera iniciativas que combinam inovação, diplomacia e propósito social. Seu objetivo é expandir a **Diplomacia Civil** e o empreendedorismo brasileiro nos Estados Unidos.

### O Poder da Parceria com o Instituto Elisangela Dias

Esta nova fase da jornada de **Túlio Vitty** se fortalece através de sua parceria com o **Instituto Elisangela Dias**, uma organização dedicada há mais de duas décadas à formação profissional, **Diplomacia Civil** e liderança feminina.

Sob a liderança de **Elisângela Dias**, **Diego Dias** (Vice-Presidente e Diretor Executivo de Expansão) e o Diplomata Civil **Raynner Silveira**, o Instituto opera em mais de 198 países, integrando fé, educação e influência.

> "Esta parceria é mais do que uma conexão institucional — é uma união de propósitos. O trabalho de Túlio Vitty representa aquilo em que acreditamos: transformar a inovação digital em uma ferramenta de impacto humano," diz Elisângela Dias, Diretora Internacional da Jethro Civil Diplomacy Org.

Com apenas 25 anos, o Diplomata **Raynner Silveira** representa a nova geração de líderes que combinam tecnologia, propósito e inovação.

> "Vivemos em um tempo em que líderes e jovens caminham lado a lado. A tecnologia conecta, mas o propósito transforma," enfatiza Raynner.`,
    category: "Diplomacia Civil",
    author: "Comunicação Civil Diplomat",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Diplomacia Civil: Cerimônia de Entrega de Credenciais no Palácio da Liberdade",
    slug: "diplomacia-civil-cerimonia-entrega-credenciais-palacio-liberdade",
    excerpt: "O Palácio da Liberdade, patrimônio histórico e símbolo da cultura mineira, foi palco de uma solenidade especial promovida pelo Consulado Honorário da Dinamarca em Minas Gerais.",
    content: `O **Palácio da Liberdade**, patrimônio histórico e símbolo da cultura mineira, foi palco na tarde do dia 29 de setembro de uma solenidade especial promovida pelo **Consulado Honorário da Dinamarca em Minas Gerais**, representado pela cônsul honorária **Luciana Simões**.

Na ocasião, a empresária, escritora e palestrante **Luciana Matosinhos Ribeiro** foi agraciada com as **Credenciais de Diplomacia Civil da Jethro Internacional**, em reconhecimento à sua atuação inspiradora e ao compromisso com causas humanitárias e de impacto social.

## Uma solenidade de prestígio

A cerimônia contou com a abertura conduzida por **Elisângela Dias**, Diretora de Expansão Internacional da Jethro, que ressaltou a importância da diplomacia civil como ponte entre nações, culturas e sociedades. Sua trajetória de dedicação humanitária deu ainda mais relevância ao momento de reconhecimento, e pelo presidente do Corpo Consular em Minas Gerais, **Francisco Pontello**.

## Presenças e ambiente

O evento reuniu autoridades, lideranças e convidadas ilustres da sociedade mineira, num ambiente de elegância e confraternização. A tarde foi marcada também por um chá da tarde requintado, que proporcionou integração e diálogo entre os presentes.

## Reconhecimento a Luciana Matosinhos Ribeiro

Com a entrega das credenciais, Luciana Matosinhos Ribeiro reafirma sua missão de promover valores de solidariedade, ética, interculturalidade e desenvolvimento humano. Sua trajetória profissional e intelectual fortalece o papel da diplomacia civil como instrumento de transformação e cooperação internacional.

## Minas Gerais como palco de conexões globais

O Corpo Consular de Minas Gerais celebra com entusiasmo este marco, que demonstra como nosso Estado continua sendo um espaço de iniciativas que conectam o Brasil ao mundo, valorizando o protagonismo feminino e a responsabilidade social como fundamentos da diplomacia contemporânea.`,
    category: "Cerimônias",
    author: "Corpo Consular MG",
    date: "2025-09-29",
    image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Diretoria de Relações Internacionais: Transformando Oportunidades em Negócios Concretos",
    slug: "diretoria-relacoes-internacionais-transformando-oportunidades",
    excerpt: "O Corpo Consular do Estado de Minas Gerais possui uma estrutura dedicada a conectar empresas locais com oportunidades globais.",
    content: `O Corpo Consular do Estado de Minas Gerais possui uma estrutura dedicada a conectar empresas locais com oportunidades globais através de sua Diretoria de Relações Internacionais.

## Missão e Objetivos

A Diretoria trabalha para facilitar o comércio internacional, promover investimentos estrangeiros e fortalecer os laços diplomáticos entre Minas Gerais e países representados pelos consulados.

## Principais Iniciativas

Entre as principais ações desenvolvidas estão missões comerciais, eventos de networking internacional e programas de capacitação para empresários interessados em expandir seus negócios para mercados externos.

## Resultados Alcançados

Nos últimos anos, a Diretoria tem contribuído significativamente para o aumento das exportações mineiras e para a atração de investimentos estrangeiros diretos no estado.`,
    category: "Parcerias",
    author: "Corpo Consular MG",
    date: "2025-10-20",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Noite de Honra e Celebração Diplomática",
    slug: "noite-honra-celebracao-diplomatica",
    excerpt: "Corpo Consular de Minas Gerais realiza a Cerimônia de Entrega da Medalha e do Diploma do Mérito Consular.",
    content: `O Corpo Consular de Minas Gerais realizou mais uma edição da tradicional Cerimônia de Entrega da Medalha e do Diploma do Mérito Consular, honrando personalidades que contribuíram significativamente para o fortalecimento das relações internacionais.

## Homenageados

A cerimônia reconheceu empresários, acadêmicos e líderes comunitários que se destacaram na promoção da cooperação internacional e no desenvolvimento de projetos que beneficiam tanto Minas Gerais quanto os países representados.

## Momento de Confraternização

O evento proporcionou um ambiente de networking e celebração, reunindo membros do corpo diplomático, autoridades governamentais e representantes da sociedade civil.

## Importância do Reconhecimento

As medalhas e diplomas entregues simbolizam o compromisso contínuo com a excelência nas relações internacionais e o reconhecimento do trabalho dedicado de indivíduos que fazem a diferença na diplomacia consular.`,
    category: "Eventos",
    author: "Corpo Consular MG",
    date: "2025-10-10",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "Expansão da Rede Consular em Minas Gerais",
    slug: "expansao-rede-consular-minas-gerais",
    excerpt: "Novos consulados honorários são estabelecidos no estado, fortalecendo os laços internacionais de Minas Gerais.",
    content: `Minas Gerais continua expandindo sua rede de representações consulares com a abertura de novos consulados honorários em diferentes regiões do estado.

## Novos Consulados

Recentemente, foram inaugurados consulados de países europeus e asiáticos, ampliando as possibilidades de cooperação em áreas como comércio, educação e cultura.

## Benefícios para o Estado

A presença de consulados honorários facilita o atendimento a cidadãos estrangeiros residentes em Minas Gerais e promove oportunidades de negócios e intercâmbio cultural.

## Perspectivas Futuras

A expectativa é que mais países estabeleçam representações consulares no estado nos próximos anos, consolidando Minas Gerais como um importante polo de relações internacionais no Brasil.`,
    category: "Notícias Internacionais",
    author: "Redação Portal",
    date: "2025-10-05",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Programa de Intercâmbio Cultural Conecta Jovens Brasileiros e Estrangeiros",
    slug: "programa-intercambio-cultural-jovens",
    excerpt: "Iniciativa promovida pelo Corpo Consular proporciona experiências de imersão cultural para estudantes.",
    content: `Um novo programa de intercâmbio cultural está conectando jovens brasileiros e estrangeiros através de experiências de imersão que vão além do turismo tradicional.

## Estrutura do Programa

O programa oferece oportunidades de estudo, trabalho voluntário e vivência em famílias anfitriãs, permitindo que os participantes desenvolvam uma compreensão profunda das culturas envolvidas.

## Parcerias Internacionais

Diversas instituições de ensino e organizações culturais de países parceiros colaboram para garantir experiências enriquecedoras e seguras para todos os participantes.

## Impacto Social

Além do desenvolvimento pessoal dos jovens envolvidos, o programa contribui para o fortalecimento de laços entre comunidades e para a promoção da paz e compreensão mútua entre nações.`,
    category: "Eventos",
    author: "Redação Portal",
    date: "2025-09-25",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 7,
    title: "Fórum de Diplomacia Civil Debate Desafios Globais Contemporâneos",
    slug: "forum-diplomacia-civil-desafios-globais",
    excerpt: "Especialistas internacionais se reúnem para discutir soluções colaborativas para questões humanitárias e ambientais.",
    content: `O Fórum de Diplomacia Civil reuniu especialistas de diversos países para debater os principais desafios globais contemporâneos e propor soluções colaborativas baseadas em princípios humanitários.

## Temas Abordados

As discussões abrangeram questões como mudanças climáticas, migração, direitos humanos e desenvolvimento sustentável, com foco em ações práticas que podem ser implementadas através da diplomacia civil.

## Participação Diversificada

O evento contou com a presença de diplomatas, acadêmicos, representantes de ONGs e líderes comunitários, proporcionando uma perspectiva multidisciplinar sobre os temas tratados.

## Compromissos Assumidos

Ao final do fórum, os participantes assinaram uma declaração conjunta estabelecendo compromissos concretos para ações coordenadas em suas respectivas áreas de atuação.`,
    category: "Diplomacia Civil",
    author: "Comunicação Civil Diplomat",
    date: "2025-09-15",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 8,
    title: "Reconhecimento Internacional para Projeto de Inclusão Social",
    slug: "reconhecimento-internacional-projeto-inclusao-social",
    excerpt: "Iniciativa brasileira de inclusão social recebe prêmio em cerimônia internacional de direitos humanos.",
    content: `Um projeto brasileiro de inclusão social desenvolvido em parceria com instituições de diplomacia civil recebeu reconhecimento internacional em prestigiada cerimônia de direitos humanos.

## O Projeto Premiado

A iniciativa foca na integração de comunidades vulneráveis através de programas de capacitação profissional, educação e acesso a serviços básicos de saúde.

## Impacto Mensurável

Desde seu início, o projeto já beneficiou mais de 5.000 famílias e serviu como modelo para iniciativas similares em outros países da América Latina.

## Reconhecimento Global

O prêmio internacional destaca a importância de abordagens colaborativas e centradas nas comunidades para enfrentar desafios sociais complexos.`,
    category: "Reconhecimentos",
    author: "Redação Portal",
    date: "2025-09-10",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    featured: false
  }
];
