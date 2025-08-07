import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Award, TrendingUp, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Michael Finn",
      role: "Founder & CEO",
      bio: "15+ years in CRM consulting with expertise in enterprise sales transformations. Former VP of Sales at TechCorp.",
      specialties: ["Strategic Planning", "Enterprise Sales", "Team Leadership"]
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Lead Architect",
      bio: "Former Salesforce architect with 12+ years building scalable CRM solutions for Fortune 500 companies.",
      specialties: ["System Architecture", "Data Integration", "Technical Strategy"]
    },
    {
      name: "David Chen",
      role: "VP of Implementation",
      bio: "Expert in change management and user adoption with 200+ successful CRM implementations.",
      specialties: ["Project Management", "User Training", "Process Optimization"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      bio: "Specializes in ensuring long-term CRM success with proven track record of 98% customer satisfaction.",
      specialties: ["Customer Success", "Support Strategy", "Account Management"]
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We put our clients first, ensuring every implementation is tailored to their unique business needs and goals."
    },
    {
      icon: Award,
      title: "Excellence in Delivery",
      description: "We maintain the highest standards of quality in every project, with a 99.8% on-time delivery rate."
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "We focus on delivering quantifiable business outcomes, with clients seeing average 45% sales increases."
    }
  ];

  const stats = [
    { value: "500+", label: "Successful Implementations" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "15+", label: "Years of Experience" },
    { value: "45%", label: "Average Sales Increase" }
  ];

  const certifications = [
    "Salesforce Certified Administrator",
    "HubSpot Certified Partner",
    "Microsoft Dynamics Specialist",
    "Pipedrive Certified Expert",
    "GDPR Compliance Certified",
    "ISO 27001 Security Certified"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Finnthelabel Solutions
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Transforming Businesses Through
              <span className="text-gradient block">Expert CRM Implementation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Founded in 2009, Finnthelabel Solutions has been at the forefront of CRM implementation, 
              helping over 500 companies optimize their sales processes and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center animate-fade-in-up delay-${index * 100}`}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-features py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower businesses with CRM solutions that not only streamline sales processes 
                but fundamentally transform how they engage with customers and drive revenue growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that the right CRM implementation can be a game-changer for any business, 
                regardless of size or industry. Our mission is to make that transformation accessible, 
                affordable, and measurably successful.
              </p>
              <Button className="btn-hero" asChild>
                <a href="https://salescentri.com/company/about-us?utm_source=finnthelabel.com&utm_medium=about_mission&utm_campaign=partner_network">
                  Learn More About Our Story <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </div>
            <div className="animate-fade-in-right">
              <div className="space-y-6">
                {values.map((value, index) => (
                  <Card key={index} className="card-feature">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <value.icon className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in CRM implementation, 
              sales optimization, and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className={`card-feature animate-fade-in-up delay-${index * 100}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Certifications & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team maintains the highest level of certifications across all major CRM platforms and security standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className={`card-enterprise text-center p-4 animate-fade-in-up delay-${index * 50}`}>
                <div className="font-medium text-sm">{cert}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">Our Raleigh Headquarters</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Located in the heart of North Carolina's Research Triangle, we serve clients across 
                the United States and internationally from our state-of-the-art facility.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>123 Innovation Drive, Raleigh, NC 27601</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(919) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@finnthelabel.com</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <Card className="card-enterprise p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your CRM Transformation?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation with our team to discuss your CRM implementation needs.
                </p>
                <div className="space-y-4">
                  <Button className="btn-hero w-full" asChild>
                    <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=about_contact&utm_campaign=partner_network">
                      Schedule Consultation <ArrowRight className="ml-2" size={20} />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://salescentri.com/contact?utm_source=finnthelabel.com&utm_medium=about_contact&utm_campaign=partner_network">
                      Contact Our Team
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">
              Join 500+ Companies Who Trust Finnthelabel
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Experience the difference that expert CRM implementation can make for your business.
            </p>
            <Button size="lg" className="bg-white text-foreground hover:bg-background/90" asChild>
              <a href="https://salescentri.com/resources/case-studies?utm_source=finnthelabel.com&utm_medium=about_cta&utm_campaign=partner_network">
                View Success Stories <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;