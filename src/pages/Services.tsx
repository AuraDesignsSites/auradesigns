import { Link } from 'react-router-dom';
import { Globe, Shield, Wrench, Palette, Star, ArrowRight, Sparkles, Zap, Target, Heart, Code2, Rocket, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/Common/SectionHeader';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-accent mb-4" />,
      title: "Website Design & Development",
      description: "Complete web solutions built for performance and conversion.",
      features: [
        "Responsive Next.js sites with modern design",
        "UX/UI optimization and copy support",
        "CMS integration or static site options",
        "Performance & SEO best practices built-in",
        "Analytics & conversion tracking setup"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-accent mb-4" />,
      title: "Web Hosting & Security", 
      description: "Enterprise-grade hosting with built-in security and monitoring.",
      features: [
        "Vercel deployments with global CDN",
        "SSL certificates and automated backups", 
        "Core Web Vitals optimization",
        "Uptime monitoring and alerts",
        "Basic WAF and security recommendations"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-accent mb-4" />,
      title: "Maintenance & Support",
      description: "Keep your site running smoothly with ongoing care.",
      features: [
        "Monthly security and performance updates",
        "Content changes and copy revisions",
        "Bug fixes and compatibility updates",
        "Small feature additions and improvements",
        "Priority technical support"
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-accent mb-4" />,
      title: "Brand & Collateral",
      description: "Complete brand identity and marketing materials.",
      features: [
        "Custom logo design and brand guidelines",
        "Business card design & print-ready files",
        "Social media profile and cover setup",
        "Brand kit handoff with all assets",
        "Style guide and usage documentation"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Aura delivered a clean, fast site in days. Our conversion rate jumped 40% within the first month.",
      author: "Taylor R.",
      role: "Small Business Owner",
      rating: 5
    },
    {
      quote: "Traffic up, inquiries doubled. The team understood exactly what we needed and delivered beyond expectations.",
      author: "Dr. Lina P.", 
      role: "Clinic Director",
      rating: 5
    },
    {
      quote: "Seamless process from mockup to launch. Professional, responsive, and the site performs beautifully.",
      author: "Mark H.",
      role: "Contractor", 
      rating: 5
    },
    {
      quote: "Finally, a web team that speaks our language. Fast delivery without compromising on quality.",
      author: "Emma K.",
      role: "Marketing Director",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Solutions That
              <span className="gradient-text"> Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we deliver comprehensive web solutions that transform your business and delight your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <span className="text-sm font-semibold text-primary">Service {index + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild className="btn-hero">
                      <Link to="/contact">
                        Get This Service
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-gradient-subtle rounded-3xl p-12 h-96 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-secondary/20 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses who trusted us with their digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl mb-6 leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.author}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Aura Designs?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another web agency. We're your strategic partner in digital success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="h-8 w-8" />, title: "Lightning Fast", description: "3-5 day delivery without compromising quality" },
              { icon: <Target className="h-8 w-8" />, title: "Results Focused", description: "Every design decision drives conversions" },
              { icon: <Users className="h-8 w-8" />, title: "Personal Touch", description: "Direct access to our team throughout your project" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Every great website starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-2xl font-semibold">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;