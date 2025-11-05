import { useState, useMemo, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { mockNews } from "@/data/mockNews";

export default function Home() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Extrair categoria da URL se existir
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("Todas");
    }
  }, [location]);

  // Filtrar notícias baseado em busca e categoria
  const filteredNews = useMemo(() => {
    return mockNews.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todas" || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Separar notícias em destaque e regulares
  const featuredNews = useMemo(
    () => filteredNews.filter((article) => article.featured),
    [filteredNews]
  );

  // Quando há filtro/busca ativa, mostrar todas as notícias (incluindo destaques)
  // Quando não há filtro, mostrar apenas as não-destaque (pois destaques já aparecem no hero)
  const regularNews = useMemo(() => {
    const hasActiveFilter = selectedCategory !== "Todas" || searchQuery !== "";
    if (hasActiveFilter) {
      return filteredNews; // Mostra todas, incluindo destaques
    }
    return filteredNews.filter((article) => !article.featured); // Mostra apenas não-destaque
  }, [filteredNews, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section com Notícias em Destaque */}
        {featuredNews.length > 0 && searchQuery === "" && selectedCategory === "Todas" && (
          <section className="bg-gradient-to-b from-muted/50 to-background py-12 border-b">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Notícias em Destaque</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((article) => (
                  <NewsCard key={article.id} article={article} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Seção de Busca e Filtros */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Sidebar com Filtros */}
              <aside className="lg:col-span-1 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Buscar</h3>
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Buscar notícias..."
                  />
                </div>
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </aside>

              {/* Grid de Notícias */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">
                    {selectedCategory === "Todas" ? "Todas as Notícias" : selectedCategory}
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    {filteredNews.length} {filteredNews.length === 1 ? "notícia encontrada" : "notícias encontradas"}
                  </p>
                </div>

                {filteredNews.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      Nenhuma notícia encontrada com os filtros selecionados.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {regularNews.map((article) => (
                      <NewsCard key={article.id} article={article} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}