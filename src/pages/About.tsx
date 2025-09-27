import { Users, Target, Clock, Award, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/Common/SectionHeader';

const About = () => {
  const stats = [
    { number: "3-5", label: "Days Average Turnaround", icon: <Clock className="h-6 w-6" /> },
    { number: "95+", label: "Lighthouse Performance Score", icon: <Award className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction (NPS)", icon: <Target className="h-6 w-6" /> }
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
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            title="About Aura Designs"
            description="We're a small studio that combines modern development tools with senior product thinking to deliver polished websites quickly."
            centered
          />
          
          <div className="prose prose-lg max-w-none text-center space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded on the belief that every business deserves a exceptional digital presence, 
              Aura Designs bridges the gap between cutting-edge development tools and thoughtful design strategy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We leverage modern development platforms and tools to deliver what traditionally took weeks 
              in just days, without compromising on quality or user experience. Our approach combines 
              rapid prototyping with battle-tested design principles to create websites that not only 
              look great but drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To democratize high-quality web design by making professional, 
                conversion-focused websites accessible to businesses of all sizes 
                through streamlined workflows and transparent pricing.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <div className="space-y-3">
                {["Clarity over complexity", "Speed with quality", "Transparent communication", "Results-driven design"].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-soft flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            title="Meet Our Team"
            description="Passionate professionals dedicated to your success"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-soft text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            title="Our Process"
            description="How we turn your vision into reality"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="card-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{phase.phase}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;