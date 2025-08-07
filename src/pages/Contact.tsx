import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our CRM experts",
      contact: "(919) 555-0123",
      hours: "Mon-Fri, 8AM-6PM EST",
      link: "tel:+19195550123"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 2 hours",
      contact: "hello@finnthelabel.com",
      hours: "24/7 Response",
      link: "mailto:hello@finnthelabel.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant answers to your questions",
      contact: "Start Live Chat",
      hours: "Mon-Fri, 8AM-8PM EST",
      link: "https://salescentri.com/contact/support-request/live-chat?utm_source=finnthelabel.com&utm_medium=contact_chat&utm_campaign=partner_network"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a personalized consultation",
      contact: "Book Demo Call",
      hours: "Flexible Scheduling",
      link: "https://salescentri.com/get-started/calendly?utm_source=finnthelabel.com&utm_medium=contact_calendar&utm_campaign=partner_network"
    }
  ];

  const offices = [
    {
      name: "Raleigh Headquarters",
      address: "123 Innovation Drive, Suite 400",
      city: "Raleigh, NC 27601",
      phone: "(919) 555-0123",
      email: "raleigh@finnthelabel.com",
      hours: "Mon-Fri: 8AM-6PM EST"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Ready to Transform
              <span className="text-gradient block">Your Sales Process?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with our CRM experts to discuss your implementation needs. 
              We're here to help you optimize your sales operations and drive growth.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-trust" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-trust" />
                <span>2-Hour Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-trust" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Choose Your Preferred Contact Method</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to connect with our team of CRM implementation experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`card-feature text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-${index * 50}`}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-3" asChild>
                    <a href={method.link}>
                      {method.contact}
                    </a>
                  </Button>
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{method.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-features py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
              
              <Card className="card-feature">
                <CardContent className="p-8">
                  <form 
                    action="https://salescentri.com/contact/sales-inquiry?utm_source=finnthelabel.com&utm_medium=contact_form&utm_campaign=partner_network" 
                    method="POST" 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" name="company" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <Select name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="crm-setup">CRM Setup & Configuration</SelectItem>
                          <SelectItem value="data-migration">Data Migration</SelectItem>
                          <SelectItem value="process-optimization">Sales Process Optimization</SelectItem>
                          <SelectItem value="training">Team Training & Adoption</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Tell us about your CRM needs *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        placeholder="Describe your current sales process, challenges, and what you hope to achieve with CRM implementation..."
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="btn-hero w-full">
                      Send Message <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in-right">
              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Our Office</h3>
                  {offices.map((office, index) => (
                    <Card key={index} className="card-enterprise">
                      <CardHeader>
                        <CardTitle className="text-xl">{office.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <div>{office.address}</div>
                            <div>{office.city}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <span>{office.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button className="btn-hero w-full" asChild>
                      <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=contact_quick&utm_campaign=partner_network">
                        Schedule Free Demo <ArrowRight className="ml-2" size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://salescentri.com/get-started/free-trial?utm_source=finnthelabel.com&utm_medium=contact_quick&utm_campaign=partner_network">
                        Start Free Trial
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=finnthelabel.com&utm_medium=contact_quick&utm_campaign=partner_network">
                        Request Custom Quote
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Emergency Contact */}
                <Card className="card-feature border-trust">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-trust" />
                      <span>Urgent Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      For existing clients with urgent issues:
                    </p>
                    <Button size="sm" className="btn-trust" asChild>
                      <a href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=finnthelabel.com&utm_medium=contact_urgent&utm_campaign=partner_network">
                        Submit Priority Ticket
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about getting started with our CRM implementation services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How quickly can you start our CRM implementation?",
                a: "We can typically begin implementation within 1-2 weeks of contract signing, depending on project complexity and our current capacity."
              },
              {
                q: "Do you work with businesses outside of Raleigh?",
                a: "Yes! While we're based in Raleigh, NC, we serve clients nationwide and internationally through remote implementation services."
              },
              {
                q: "What CRM platforms do you specialize in?",
                a: "We're certified experts in Salesforce, HubSpot, Microsoft Dynamics, Pipedrive, and Zoho CRM, among others."
              },
              {
                q: "Is there a minimum company size you work with?",
                a: "We work with businesses of all sizes, from startups to enterprise organizations with 1000+ employees."
              },
              {
                q: "What's included in your consultation?",
                a: "Our free consultation includes a current process assessment, CRM platform recommendations, and a custom implementation roadmap."
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
    </div>
  );
};

export default Contact;