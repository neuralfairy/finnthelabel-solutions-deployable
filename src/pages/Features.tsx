import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Database, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Smartphone,
  Globe,
  Lock
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Settings,
      title: "CRM Setup & Configuration",
      description: "Complete CRM system setup tailored to your business processes with custom fields, workflows, and automation rules.",
      benefits: ["Custom field configuration", "Workflow automation", "User role management", "Integration setup"]
    },
    {
      icon: Database,
      title: "Data Migration & Cleansing",
      description: "Seamless migration of your existing data with thorough cleansing and validation to ensure data integrity.",
      benefits: ["Legacy system migration", "Data deduplication", "Quality validation", "Backup & recovery"]
    },
    {
      icon: TrendingUp,
      title: "Sales Process Optimization",
      description: "Redesign and optimize your sales processes for maximum efficiency and conversion rates.",
      benefits: ["Pipeline optimization", "Lead scoring models", "Conversion tracking", "Performance analytics"]
    },
    {
      icon: Users,
      title: "Team Training & Adoption",
      description: "Comprehensive training programs to ensure your team maximizes CRM potential and achieves high adoption rates.",
      benefits: ["Role-based training", "Best practices guides", "Ongoing support", "Adoption tracking"]
    }
  ];

  const additionalFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards and reporting to track KPIs and make data-driven decisions."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services and third-party applications."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Mobile-responsive CRM access for sales teams on the go."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance and data protection."
    },
    {
      icon: Globe,
      title: "Multi-location Support",
      description: "Support for multi-location businesses with centralized management."
    },
    {
      icon: Lock,
      title: "Data Backup & Recovery",
      description: "Automated backup systems with disaster recovery capabilities."
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Microsoft Dynamics", "Pipedrive", "Zoho CRM",
    "Slack", "Microsoft Teams", "Google Workspace", "Office 365", "Mailchimp",
    "QuickBooks", "Xero", "NetSuite", "SAP", "Oracle"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Comprehensive CRM Solutions
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Complete CRM Implementation
              <span className="text-gradient block">Features & Capabilities</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover our full suite of CRM implementation services designed to transform 
              your sales operations and accelerate business growth.
            </p>
            <Button className="btn-hero" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=finnthelabel.com&utm_medium=features_hero&utm_campaign=partner_network">
                View Interactive Demo <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Core Implementation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology covers every aspect of CRM implementation from setup to adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className={`card-feature animate-fade-in-up delay-${index * 100}`}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-trust" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-features py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Extended Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced features and capabilities that set our CRM implementations apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className={`card-feature animate-fade-in-up delay-${index * 50}`}>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Seamless Integrations
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Connect with Your Existing Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our CRM implementations integrate seamlessly with over 100+ popular business tools and platforms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in-up">
              {integrations.map((integration, index) => (
                <div key={index} className={`card-enterprise text-center py-4 delay-${index * 25}`}>
                  <span className="font-medium text-sm">{integration}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/solutions/psa-suite/integrations?utm_source=finnthelabel.com&utm_medium=features_integrations&utm_campaign=partner_network">
                  View All Integrations
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 4-step methodology that ensures successful CRM deployment and adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Planning", desc: "Analyze your current processes and define requirements" },
              { step: "02", title: "Configuration & Setup", desc: "Configure CRM system according to your specifications" },
              { step: "03", title: "Data Migration & Testing", desc: "Migrate existing data and conduct thorough testing" },
              { step: "04", title: "Training & Go-Live", desc: "Train your team and launch your new CRM system" }
            ].map((item, index) => (
              <div key={index} className={`text-center animate-fade-in-up delay-${index * 100}`}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              See our CRM implementation capabilities in action with a personalized demo tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-foreground hover:bg-background/90" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=features_cta&utm_campaign=partner_network">
                  Book Demo Now <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <a href="https://salescentri.com/pricing?utm_source=finnthelabel.com&utm_medium=features_cta&utm_campaign=partner_network">
                  View Pricing Plans
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;