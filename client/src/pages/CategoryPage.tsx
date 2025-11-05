import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import SearchBar from "@/components/SearchBar";
import { mockNews } from "@/data/mockNews";

interface CategoryPageProps {
  category: string;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar notícias pela categoria específica
  const categoryNews = useMemo(() => {
    return mockNews.filter((article) => article.category === category);
  }, [category]);

  // Aplicar busca nas notícias da categoria
  const filteredNews = useMemo(() => {
    if (searchQuery === "") return categoryNews;
    
    return categoryNews.filter((article) => {
      return (
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [categoryNews, searchQuery]);

  // Separar notícias em destaque e regulares
  const featuredNews = useMemo(
    () => filteredNews.filter((article) => article.featured),
    [filteredNews]
  );

  const regularNews = useMemo(
    () => filteredNews.filter((article) => !article.featured),
    [filteredNews]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section com Notícias em Destaque */}
        {featuredNews.length > 0 && searchQuery === "" && (
          <section className="bg-gradient-to-b from-muted/50 to-background py-12 border-b">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {category} em Destaque
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((article) => (
                  <NewsCard key={article.id} article={article} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Seção de Busca e Notícias */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Barra de Busca */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Buscar em {category}</h3>
                <div className="max-w-md">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder={`Buscar notícias de ${category}...`}
                  />
                </div>
              </div>

              {/* Título e Contador */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{category}</h2>
                <p className="text-muted-foreground mt-1">
                  {filteredNews.length}{" "}
                  {filteredNews.length === 1 ? "notícia encontrada" : "notícias encontradas"}
                </p>
              </div>

              {/* Grid de Notícias */}
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Nenhuma notícia encontrada{searchQuery ? " com os termos buscados" : ""}.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {regularNews.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}