import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What is CRM implementation and why do I need it?",
          a: "CRM implementation is the process of setting up, configuring, and optimizing a Customer Relationship Management system for your business. It involves data migration, customization, training, and ensuring user adoption. You need it to streamline sales processes, improve customer relationships, increase revenue, and gain valuable insights into your business operations."
        },
        {
          q: "How long does a typical CRM implementation take?",
          a: "Implementation timeframes vary based on complexity: Small businesses (2-4 weeks), Medium businesses (4-8 weeks), Enterprise organizations (8-16 weeks). Factors affecting timeline include data volume, customization requirements, integrations needed, and team availability for training."
        },
        {
          q: "What's the difference between CRM setup and CRM implementation?",
          a: "CRM setup refers to basic system configuration and data entry. CRM implementation is comprehensive and includes strategic planning, process optimization, custom configuration, data migration, integration setup, team training, and ongoing support to ensure success."
        },
        {
          q: "Do you work with specific CRM platforms?",
          a: "We're certified experts in all major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics 365, Pipedrive, Zoho CRM, and many others. We help you choose the right platform based on your business needs, budget, and growth plans."
        }
      ]
    },
    {
      title: "Pricing & Investment",
      questions: [
        {
          q: "How much does CRM implementation cost?",
          a: "Our implementation packages start at $2,999 for small businesses and scale based on complexity. Pricing includes setup, configuration, data migration, training, and support. Enterprise implementations are custom-quoted based on specific requirements. All packages include a 30-day money-back guarantee."
        },
        {
          q: "Are there ongoing costs after implementation?",
          a: "No ongoing fees from us - you only pay for implementation. However, you'll need to pay for your chosen CRM platform's subscription directly to them. We can help you select cost-effective plans and negotiate better rates with CRM vendors."
        },
        {
          q: "What's included in the implementation fee?",
          a: "Full system configuration, data migration and cleansing, custom workflow setup, integration configuration, comprehensive user training, go-live support, and 30 days of optimization assistance. No hidden fees or surprise charges."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes, we offer flexible payment options for Professional and Enterprise packages. You can split payments across project milestones or arrange monthly payments. Contact us to discuss payment terms that work for your budget."
        }
      ]
    },
    {
      title: "Implementation Process",
      questions: [
        {
          q: "What happens during the discovery phase?",
          a: "We analyze your current sales processes, identify pain points, map data sources, understand your team's workflow, define success metrics, and create a customized implementation roadmap. This ensures the CRM solution perfectly fits your business needs."
        },
        {
          q: "How do you handle data migration?",
          a: "We use proven migration methodologies including data auditing, cleansing, mapping, validation, and secure transfer. We ensure zero data loss and maintain data integrity throughout the process. All migrations include comprehensive backup and rollback procedures."
        },
        {
          q: "What kind of training do you provide?",
          a: "Role-based training tailored to each user's responsibilities, hands-on workshops with real scenarios, best practices guides, video tutorials, and ongoing support. We ensure 95%+ user adoption rates through our comprehensive training approach."
        },
        {
          q: "How do you ensure user adoption?",
          a: "Through strategic change management including stakeholder buy-in, role-based training, gamification elements, progress tracking, addressing resistance, and celebrating wins. We've achieved 95%+ adoption rates across 500+ implementations."
        }
      ]
    },
    {
      title: "Technical Questions",
      questions: [
        {
          q: "Can you integrate our CRM with existing tools?",
          a: "Yes, we specialize in integrations with 100+ business tools including email platforms, accounting software, marketing automation, phone systems, and custom applications. We ensure seamless data flow across your entire business ecosystem."
        },
        {
          q: "What about data security and compliance?",
          a: "We follow enterprise-grade security protocols including encrypted data transfer, secure access controls, GDPR compliance, regular security audits, and backup procedures. All our implementations meet industry security standards."
        },
        {
          q: "Do you provide mobile CRM setup?",
          a: "Absolutely. We configure mobile access for all major CRM platforms, optimize mobile workflows, set up offline capabilities, and train teams on mobile best practices. Your sales team can work effectively from anywhere."
        },
        {
          q: "What if we need custom features?",
          a: "We can build custom fields, workflows, reports, and dashboards within your CRM platform. For complex requirements, we can develop custom applications or recommend third-party solutions that integrate seamlessly."
        }
      ]
    },
    {
      title: "Support & Maintenance",
      questions: [
        {
          q: "What support do you provide after go-live?",
          a: "30 days of included optimization support, plus optional ongoing support packages. We offer user training refreshers, system updates, performance optimization, and strategic consulting to ensure continued success."
        },
        {
          q: "How do you handle urgent issues?",
          a: "Priority support for urgent issues with 2-hour response time during business hours. Existing clients have access to our dedicated support portal and can submit priority tickets for immediate assistance."
        },
        {
          q: "Can you help with CRM optimization later?",
          a: "Yes, we offer ongoing optimization services including performance analysis, workflow improvements, new feature implementation, additional integrations, and strategic consulting as your business grows."
        },
        {
          q: "Do you provide training for new employees?",
          a: "Yes, we can provide additional training sessions for new team members or refresher training for existing users. We also create custom training materials and documentation for your internal use."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Everything You Need to Know About
              <span className="text-gradient block">CRM Implementation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our CRM implementation services, 
              pricing, processes, and support options.
            </p>
            <Button className="btn-hero" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=faq_hero&utm_campaign=partner_network">
                Schedule Free Consultation <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`mb-12 animate-fade-in-up delay-${categoryIndex * 100}`}>
                <h2 className="text-3xl font-bold mb-8 text-center">{category.title}</h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6 py-2 bg-white hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-features py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our CRM implementation experts are here to help. Choose your preferred way to get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-feature text-center animate-fade-in-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <p className="text-muted-foreground text-sm">Speak with an expert immediately</p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">(919) 555-0123</p>
                <p className="text-xs text-muted-foreground mb-4">Mon-Fri, 8AM-6PM EST</p>
                <Button className="w-full" asChild>
                  <a href="tel:+19195550123">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-feature text-center animate-fade-in-up delay-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <p className="text-muted-foreground text-sm">Get instant answers online</p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">Start Chat</p>
                <p className="text-xs text-muted-foreground mb-4">Mon-Fri, 8AM-8PM EST</p>
                <Button className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request/live-chat?utm_source=finnthelabel.com&utm_medium=faq_chat&utm_campaign=partner_network">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-feature text-center animate-fade-in-up delay-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <p className="text-muted-foreground text-sm">Detailed response within 2 hours</p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">hello@finnthelabel.com</p>
                <p className="text-xs text-muted-foreground mb-4">24/7 Response</p>
                <Button className="w-full" asChild>
                  <a href="mailto:hello@finnthelabel.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Helpful Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore additional resources to learn more about CRM implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Implementation Guide",
                description: "Complete CRM implementation checklist",
                link: "https://salescentri.com/resources/whitepapers-ebooks?utm_source=finnthelabel.com&utm_medium=faq_resources&utm_campaign=partner_network"
              },
              {
                title: "ROI Calculator",
                description: "Calculate your CRM investment return",
                link: "https://salescentri.com/solutions/use-case-navigator/recommendations?utm_source=finnthelabel.com&utm_medium=faq_resources&utm_campaign=partner_network"
              },
              {
                title: "Case Studies",
                description: "Real client success stories",
                link: "https://salescentri.com/resources/case-studies?utm_source=finnthelabel.com&utm_medium=faq_resources&utm_campaign=partner_network"
              },
              {
                title: "Training Videos",
                description: "Free CRM training materials",
                link: "https://salescentri.com/resources/tutorials-webinars?utm_source=finnthelabel.com&utm_medium=faq_resources&utm_campaign=partner_network"
              }
            ].map((resource, index) => (
              <Card key={index} className={`card-feature hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-${index * 50}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={resource.link}>
                      Access Resource <ArrowRight className="ml-1" size={14} />
                    </a>
                  </Button>
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
              Ready to Start Your CRM Implementation?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your specific needs and get a custom implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-foreground hover:bg-background/90" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=faq_cta&utm_campaign=partner_network">
                  Book Free Consultation <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=finnthelabel.com&utm_medium=faq_cta&utm_campaign=partner_network">
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

export default FAQ;