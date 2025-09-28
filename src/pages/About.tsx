import { Users, Target, Clock, Award, CheckCircle, Sparkles, Zap, Heart, Rocket, Code2, Palette, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/Common/SectionHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: <Rocket className="h-6 w-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Heart className="h-6 w-6" /> },
    { number: "98%", label: "On-Time Delivery", icon: <Target className="h-6 w-6" /> },
    { number: "24h", label: "Response Time", icon: <Zap className="h-6 w-6" /> }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Lead Designer & Developer", 
      bio: "10+ years crafting digital experiences with a focus on performance and usability."
    },
    {
      name: "Sarah Chen",
      role: "UX Strategist",
      bio: "Conversion optimization expert who turns user insights into business results."
    },
    {
      name: "Mike Johnson", 
      role: "Technical Lead",
      bio: "Full-stack architect specializing in modern web technologies and scalable solutions."
    }
  ];

  const process = [
    {
      phase: "Discovery",
      details: ["Business goals analysis", "Target audience research", "Competitive landscape review", "Technical requirements gathering"]
    },
    {
      phase: "Prototyping", 
      details: ["Wireframe creation", "User flow mapping", "Design system development", "Interactive mockups"]
    },
    {
      phase: "Build",
      details: ["Modern development practices", "Component-based architecture", "Performance optimization", "Cross-browser testing"]
    },
    {
      phase: "QA",
      details: ["Accessibility audit", "Performance testing", "Device compatibility check", "SEO optimization"]
    },
    {
      phase: "Launch",
      details: ["DNS setup & SSL", "CDN configuration", "Analytics integration", "Monitoring setup"]
    },
    {
      phase: "Support",
      details: ["Monthly maintenance", "Content updates", "Security patches", "Performance monitoring"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">About Aura Designs</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  We're not just developers,
                  <span className="gradient-text"> we're digital architects</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every business deserves a digital presence that not only looks amazing but drives real results. 
                  We bridge the gap between cutting-edge technology and thoughtful design strategy.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-ghost">
                  <Link to="/projects">See Our Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-gradient-primary rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span> & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize high-quality web design and make professional, 
              conversion-focused websites accessible to businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="h-8 w-8" />, title: "Speed with Quality", description: "Fast delivery without compromising on excellence" },
              { icon: <Heart className="h-8 w-8" />, title: "Transparent Communication", description: "Honest, clear communication throughout every project" },
              { icon: <Target className="h-8 w-8" />, title: "Results-Driven Design", description: "Every decision made with your business goals in mind" },
              { icon: <Rocket className="h-8 w-8" />, title: "Clarity over Complexity", description: "Simple solutions that work beautifully" }
            ].map((value, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-soft hover:shadow-medium transition-shadow duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 flex-shrink-0">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Dream Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate professionals dedicated to turning your vision into digital reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-soft hover:shadow-medium transition-shadow duration-300 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We <span className="gradient-text">Bring Ideas to Life</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that transforms your vision into a digital masterpiece
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{phase.phase}</h3>
                  </div>
                  <ul className="space-y-3">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's transform your digital presence together. Every great website starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;