import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User, Clock, TrendingUp } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to CRM Implementation in 2024",
    excerpt: "Everything you need to know about implementing a CRM system that drives real business results, from planning to execution.",
    author: "Michael Finn",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Implementation Guide",
    image: "/placeholder-blog-hero.jpg",
    link: "https://salescentri.com/resources/whitepapers-ebooks?utm_source=finnthelabel.com&utm_medium=blog_featured&utm_campaign=partner_network"
  };

  const blogPosts = [
    {
      title: "5 Signs Your Sales Team Needs a CRM Upgrade",
      excerpt: "Identify the warning signs that indicate it's time to modernize your customer relationship management system.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Sales Strategy",
      link: "https://salescentri.com/resources/case-studies?utm_source=finnthelabel.com&utm_medium=blog_post&utm_campaign=partner_network"
    },
    {
      title: "ROI Calculator: Measuring CRM Implementation Success",
      excerpt: "Learn how to calculate and track the return on investment from your CRM implementation project.",
      author: "David Chen",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Business Intelligence",
      link: "https://salescentri.com/solutions/use-case-navigator/recommendations?utm_source=finnthelabel.com&utm_medium=blog_post&utm_campaign=partner_network"
    },
    {
      title: "Data Migration Best Practices for CRM Projects",
      excerpt: "Essential strategies for ensuring clean, accurate data transfer during CRM implementation.",
      author: "Emily Rodriguez",
      date: "November 28, 2024",
      readTime: "15 min read",
      category: "Technical Guide",
      link: "https://salescentri.com/services/data-enrichment?utm_source=finnthelabel.com&utm_medium=blog_post&utm_campaign=partner_network"
    },
    {
      title: "User Adoption Strategies That Actually Work",
      excerpt: "Proven techniques to ensure your team embraces and effectively uses your new CRM system.",
      author: "Michael Finn",
      date: "November 20, 2024",
      readTime: "12 min read",
      category: "Change Management",
      link: "https://salescentri.com/resources/tutorials-webinars?utm_source=finnthelabel.com&utm_medium=blog_post&utm_campaign=partner_network"
    },
    {
      title: "Integration Guide: Connecting Your CRM Ecosystem",
      excerpt: "How to seamlessly integrate your CRM with existing business tools and workflows.",
      author: "Sarah Johnson",
      date: "November 15, 2024",
      readTime: "18 min read",
      category: "Integration",
      link: "https://salescentri.com/solutions/psa-suite/integrations?utm_source=finnthelabel.com&utm_medium=blog_post&utm_campaign=partner_network"
    },
    {
      title: "Mobile CRM: Empowering Your Remote Sales Team",
      excerpt: "Best practices for implementing mobile CRM solutions that keep your team productive anywhere.",
      author: "David Chen",
      date: "November 8, 2024",
      readTime: "9 min read",
      category: "Mobile Strategy",
      link: "https://salescentri.com/platforms/lead-management?utm_source=finnthelabel.com&utm_medium=blog_post&utm_campaign=partner_network"
    }
  ];

  const categories = [
    "All Posts",
    "Implementation Guide", 
    "Sales Strategy",
    "Technical Guide",
    "Business Intelligence",
    "Change Management",
    "Integration",
    "Mobile Strategy"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              CRM Implementation Insights
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Expert Insights on
              <span className="text-gradient block">CRM Implementation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest thoughts on CRM implementation best practices, 
              industry trends, and proven strategies for sales success.
            </p>
            <Button className="btn-hero" asChild>
              <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=finnthelabel.com&utm_medium=blog_hero&utm_campaign=partner_network">
                Download Free CRM Guide <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            </div>
            
            <Card className="card-feature overflow-hidden animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-gradient-silver flex items-center justify-center">
                  <div className="text-center p-8">
                    <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-muted-foreground">Featured Guide</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 w-fit">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="btn-hero w-fit" asChild>
                    <a href={featuredPost.link}>
                      Read Full Guide <ArrowRight className="ml-2" size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-silver-light/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "btn-hero" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-features py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover actionable insights and best practices from our CRM implementation experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className={`card-feature group hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-${index * 50}`}>
                <CardHeader>
                  <div className="aspect-video bg-gradient-silver rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 w-fit text-xs">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button size="sm" variant="ghost" className="group-hover:text-primary" asChild>
                      <a href={post.link}>
                        Read More <ArrowRight className="ml-1" size={14} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/resources?utm_source=finnthelabel.com&utm_medium=blog_more&utm_campaign=partner_network">
                View All Resources <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest CRM insights, implementation tips, and industry trends delivered to your inbox monthly.
            </p>
            
            <Card className="card-enterprise p-8">
              <div className="max-w-md mx-auto">
                <div className="flex space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="btn-hero" asChild>
                    <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=finnthelabel.com&utm_medium=blog_newsletter&utm_campaign=partner_network">
                      Subscribe
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  By subscribing, you agree to our privacy policy. Unsubscribe anytime.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Our expert team can help you implement the CRM strategies and best practices covered in our blog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-foreground hover:bg-background/90" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=blog_cta&utm_campaign=partner_network">
                  Book Strategy Session <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <a href="https://salescentri.com/contact?utm_source=finnthelabel.com&utm_medium=blog_cta&utm_campaign=partner_network">
                  Contact Our Experts
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;