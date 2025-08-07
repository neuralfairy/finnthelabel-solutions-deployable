import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Shield, Award, Star } from 'lucide-react';
import heroImage from '@/assets/hero-crm.jpg';

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Sales Process Optimization",
      description: "Streamline your sales pipeline with proven CRM methodologies that increase conversion rates by up to 40%."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get your CRM up and running in weeks, not months, with our accelerated deployment framework."
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance and industry certifications you can trust."
    },
    {
      icon: Users,
      title: "Team Training & Adoption",
      description: "Comprehensive training programs ensuring 95% user adoption rates across your organization."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechGlobal Inc.",
      content: "Finnthelabel transformed our sales process. We saw a 45% increase in qualified leads within 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "InnovateCorp",
      content: "The CRM implementation was seamless. Our team productivity increased by 60% immediately.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Sales Director",
      company: "GrowthTech",
      content: "Best investment we've made. ROI was visible within the first quarter of implementation.",
      rating: 5
    }
  ];

  const stats = [
    { value: "500+", label: "Companies Served" },
    { value: "99.8%", label: "Uptime Guarantee" },
    { value: "45%", label: "Average Sales Increase" },
    { value: "30 Days", label: "Implementation Time" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                #1 CRM Implementation Specialists
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your
                <span className="text-gradient block">Sales Process</span>
                with Expert CRM Implementation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Accelerate revenue growth with our proven CRM implementation methodology. 
                Trusted by 500+ companies to optimize their sales operations and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="btn-hero" asChild>
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=hero_cta&utm_campaign=partner_network">
                    Book Free Demo <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>
                <Button className="btn-secondary" asChild>
                  <a href="https://salescentri.com/get-started/free-trial?utm_source=finnthelabel.com&utm_medium=hero_secondary&utm_campaign=partner_network">
                    Start Free Trial
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-trust" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-trust" />
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-trust" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <img 
                src={heroImage} 
                alt="Professional CRM implementation consultancy team working on sales optimization"
                className="w-full h-auto rounded-2xl shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center animate-fade-in-up delay-${index * 100}`}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-features py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose Finnthelabel
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Expert CRM Implementation
              <span className="text-gradient block">That Drives Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology combines technical expertise with business acumen to deliver 
              CRM solutions that transform your sales operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`card-feature animate-fade-in-up delay-${index * 100}`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-trust/10 text-trust border-trust/20">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how companies like yours have transformed their sales operations with our CRM solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`card-enterprise animate-fade-in-up delay-${index * 100}`}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-background/10 text-background border-background/20">
              Ready to Transform Your Sales?
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Start Your CRM Transformation Today
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have revolutionized their sales process with our expert CRM implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-foreground hover:bg-background/90" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=cta_section&utm_campaign=partner_network">
                  Book Your Free Demo <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry?utm_source=finnthelabel.com&utm_medium=cta_section&utm_campaign=partner_network">
                  Get Custom Quote
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-background/60">
              <div className="flex items-center space-x-2">
                <Award size={16} />
                <span>Enterprise Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={16} />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>99.8% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;