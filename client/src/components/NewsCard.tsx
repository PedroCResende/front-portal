import { Link } from "wouter";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NewsArticle } from "@/data/mockNews";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/noticia/${article.slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
          <div className="relative h-80 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-accent text-accent-foreground">Destaque</Badge>
            </div>
          </div>
          <CardHeader>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Badge variant="outline">{article.category}</Badge>
            </div>
            <h2 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
              {article.title}
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
          </CardContent>
          <CardFooter className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/noticia/${article.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="flex-grow">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Badge variant="outline" className="text-xs">{article.category}</Badge>
          </div>
          <h3 className="text-lg font-semibold leading-tight hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{article.author}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
