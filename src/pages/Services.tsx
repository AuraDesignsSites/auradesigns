import { Link } from 'react-router-dom';
import { Globe, Shield, Wrench, Palette, Star, ArrowRight } from 'lucide-react';
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
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            title="Our Services"
            description="We design, build, and maintain modern websites your customers love."
            centered
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-soft">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews/Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            title="What Our Clients Say"
            description="Real results from real businesses"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-soft">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's design your next unfair advantage
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your digital presence? Our team is standing by to discuss your project.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;