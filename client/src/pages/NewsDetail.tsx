import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mockNews } from "@/data/mockNews";
import { Streamdown } from "streamdown";
import NotFound from "./NotFound";

export default function NewsDetail() {
  const [, params] = useRoute("/noticia/:slug");
  const article = mockNews.find((news) => news.slug === params?.slug);

  if (!article) {
    return <NotFound />;
  }

  const formattedDate = new Date(article.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = article.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  // Notícias relacionadas (mesma categoria, excluindo a atual)
  const relatedNews = mockNews
    .filter((news) => news.category === article.category && news.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4 border-b">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
              <span>/</span>
              <span className="text-foreground">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Artigo */}
        <article className="py-8">
          <div className="container max-w-4xl">
            {/* Botão Voltar */}
            <Link href="/">
              <Button variant="ghost" className="mb-6 -ml-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>

            {/* Cabeçalho do Artigo */}
            <header className="mb-8">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y py-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                
                {/* Compartilhar */}
                <div className="flex items-center gap-2 ml-auto">
                  <Share2 className="h-4 w-4" />
                  <span className="mr-2">Compartilhar:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleShare('facebook')}
                    aria-label="Compartilhar no Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleShare('twitter')}
                    aria-label="Compartilhar no Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleShare('linkedin')}
                    aria-label="Compartilhar no LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Imagem Principal */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div className="prose prose-lg max-w-none mb-12 prose-headings:font-serif prose-headings:text-primary prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-l-accent prose-blockquote:bg-muted/30 prose-blockquote:italic">
              <Streamdown>{article.content}</Streamdown>
            </div>

            {/* Notícias Relacionadas */}
            {relatedNews.length > 0 && (
              <section className="mt-12 pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6">Notícias Relacionadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNews.map((news) => (
                    <Link key={news.id} href={`/noticia/${news.slug}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {news.category}
                          </Badge>
                          <h3 className="font-semibold leading-tight line-clamp-2 hover:text-primary transition-colors">
                            {news.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
