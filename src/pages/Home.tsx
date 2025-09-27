import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Shield, Code2, Users, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/auralogo-transparentbg.png';

const Home = () => {
  const trustedLogos = [
    "TechCorp", "InnovateLab", "GrowthCo", "StartupXYZ"
  ];

  const valueProps = [
    {
      icon: <Zap className="h-12 w-12 text-accent mb-4" />,
      title: "Rapid Delivery",
      description: "Ship fast with modern development tools. Weeks of work delivered in days through streamlined workflows and proven methodologies."
    },
    {
      icon: <Target className="h-12 w-12 text-accent mb-4" />,
      title: "Conversion-First UX",
      description: "Every element designed for action. Clear CTAs, optimized user flows, and fast loading pages that turn visitors into customers."
    },
    {
      icon: <Shield className="h-12 w-12 text-accent mb-4" />,
      title: "Secure & Managed Hosting",
      description: "Modern CI/CD pipelines, SSL certificates, automated backups, and enterprise-grade security built in from day one."
    },
    {
      icon: <Code2 className="h-12 w-12 text-accent mb-4" />,
      title: "Edit Without Headaches",
      description: "Clean, componentized code that's actually maintainable. No more wrestling with messy WordPress installations."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "We learn your business goals and user needs"
    },
    {
      number: "02", 
      title: "Design & Build",
      description: "Rapid prototyping and development with modern tools"
    },
    {
      number: "03",
      title: "Launch & Grow",
      description: "Deploy, monitor, and continuously improve"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Design. Build. Launch
                <span className="gradient-text"> — Fast.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Aura Designs creates high-performing websites for small businesses and professionals using modern development workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-ghost">
                  <Link to="/projects">See Projects</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full max-w-[500px] h-[400px] mx-auto relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src={logo} 
                  alt="Aura Designs Logo" 
                  className="relative z-10 w-full max-w-[450px] h-auto object-contain animate-spin-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-12 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-muted-foreground mb-8">Trusted by growing brands</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="text-xl font-semibold text-muted-foreground">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Aura Designs?</h2>
            <p className="text-xl text-muted-foreground">Modern solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="card-soft text-center group">
                {prop.icon}
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground">Simple, streamlined, effective</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to ship something great?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's transform your vision into a high-performing website that drives real results.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;