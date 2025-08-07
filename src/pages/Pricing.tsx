import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$2,999",
      period: "one-time setup",
      description: "Perfect for small businesses getting started with CRM",
      popular: false,
      features: [
        "Basic CRM setup and configuration",
        "Up to 5 users",
        "Standard data migration (up to 1,000 records)",
        "2 hours of user training",
        "Email support",
        "Basic reporting dashboard",
        "Standard integrations (3 included)"
      ],
      cta: "Get Started",
      link: "https://salescentri.com/pricing/plans-overview?utm_source=finnthelabel.com&utm_medium=pricing_starter&utm_campaign=partner_network"
    },
    {
      name: "Professional",
      icon: Star,
      price: "$7,999",
      period: "one-time setup",
      description: "Ideal for growing companies with advanced needs",
      popular: true,
      features: [
        "Advanced CRM setup with custom workflows",
        "Up to 25 users",
        "Complete data migration (up to 10,000 records)",
        "8 hours of comprehensive training",
        "Priority phone & email support",
        "Advanced analytics and reporting",
        "Premium integrations (10 included)",
        "Mobile app configuration",
        "30-day optimization support"
      ],
      cta: "Most Popular",
      link: "https://salescentri.com/pricing/plans-overview?utm_source=finnthelabel.com&utm_medium=pricing_professional&utm_campaign=partner_network"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "tailored pricing",
      description: "For large organizations with complex requirements",
      popular: false,
      features: [
        "Enterprise CRM implementation",
        "Unlimited users",
        "Complete legacy system migration",
        "Dedicated implementation manager",
        "24/7 priority support",
        "Custom reporting and dashboards",
        "Unlimited integrations",
        "Multi-location support",
        "Ongoing optimization and consulting",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      link: "https://salescentri.com/pricing/enterprise-custom?utm_source=finnthelabel.com&utm_medium=pricing_enterprise&utm_campaign=partner_network"
    }
  ];

  const addOns = [
    {
      name: "Extended Training",
      price: "$500",
      period: "per session",
      description: "Additional training sessions for your team"
    },
    {
      name: "Custom Integration",
      price: "$1,500",
      period: "per integration",
      description: "Connect with specialized third-party tools"
    },
    {
      name: "Data Cleansing",
      price: "$0.10",
      period: "per record",
      description: "Professional data cleaning and validation"
    },
    {
      name: "Ongoing Support",
      price: "$299",
      period: "per month",
      description: "Monthly optimization and support retainer"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Simple, Transparent
              <span className="text-gradient block">CRM Implementation Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the implementation package that fits your business needs and budget.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-trust" />
                <span>No Monthly Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-trust" />
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-trust" />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'card-feature'} animate-fade-in-up delay-${index * 100}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 ${plan.popular ? 'bg-gradient-primary' : 'bg-silver'} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-foreground'}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                  <p className="text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-trust mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-8 ${plan.popular ? 'btn-hero' : 'btn-secondary'}`}
                    asChild
                  >
                    <a href={plan.link}>
                      {plan.cta} <ArrowRight className="ml-2" size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-features py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your CRM implementation with our optional add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className={`card-feature text-center animate-fade-in-up delay-${index * 50}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{addon.price}</div>
                  <div className="text-sm text-muted-foreground">{addon.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Calculate Your ROI</h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how much you could save and earn with our CRM implementation services.
            </p>
            
            <Card className="card-enterprise p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">45%</div>
                  <div className="text-muted-foreground">Average Sales Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-muted-foreground">Productivity Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <div className="text-muted-foreground">ROI Within 12 Months</div>
                </div>
              </div>
              <Button className="btn-hero mt-8" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/recommendations?utm_source=finnthelabel.com&utm_medium=pricing_roi&utm_campaign=partner_network">
                  Get Custom ROI Analysis <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our CRM implementation pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "What's included in the setup fee?",
                a: "Our setup fee covers complete CRM configuration, data migration, user training, and go-live support. No hidden costs."
              },
              {
                q: "Are there ongoing monthly fees?",
                a: "No monthly fees from us. You only pay for your chosen CRM platform's subscription directly to them."
              },
              {
                q: "How long does implementation take?",
                a: "Most implementations complete within 2-6 weeks depending on complexity and data volume."
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment options for Professional and Enterprise packages."
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 30-day money-back guarantee on all implementation services."
              }
            ].map((faq, index) => (
              <Card key={index} className={`card-feature animate-fade-in-up delay-${index * 50}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your CRM needs and get a custom implementation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-foreground hover:bg-background/90" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=pricing_cta&utm_campaign=partner_network">
                  Schedule Free Consultation <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=finnthelabel.com&utm_medium=pricing_cta&utm_campaign=partner_network">
                  Get Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;