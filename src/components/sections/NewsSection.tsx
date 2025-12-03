import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "The Art of Modern Kitchen Design: Trends for 2024",
    excerpt:
      "Discover the latest trends shaping contemporary kitchen design, from sustainable materials to smart technology integration.",
    date: "November 28, 2024",
    category: "Design Trends",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "HATZIORFANOS Group Expands Partnership with Boffi",
    excerpt:
      "Strengthening our commitment to high-end design solutions with expanded collaboration across Greece.",
    date: "November 15, 2024",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Sustainable Living: Eco-Friendly Interior Solutions",
    excerpt:
      "How conscious design choices can create beautiful spaces while minimizing environmental impact.",
    date: "October 30, 2024",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="label-uppercase mb-4 block">Stay Inspired</span>
          <h2 className="heading-section text-foreground mb-4">
            News and Stories
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Stay inspired with our latest insights, trends, and expert
            perspectives on design, architecture, and lifestyle.
          </p>
          <div className="line-separator mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-card rounded-sm overflow-hidden hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <Button variant="minimal" size="sm" asChild>
                  <a href={`#article-${article.id}`}>
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#blog">
              See All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
