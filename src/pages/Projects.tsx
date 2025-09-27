import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/Common/SectionHeader';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'E-commerce', 'Portfolio', 'SaaS', 'Clinic', 'Trades', 'Coach'];

  const projects = [
    {
      id: 1,
      title: "Elite Fitness Studio",
      category: "Coach",
      tags: ["Health", "Booking", "E-commerce"],
      image: "/api/placeholder/600/400",
      description: "Modern fitness studio website with class booking system and membership management.",
      problem: "Local fitness studio needed an online presence to compete with larger chains and streamline bookings.",
      approach: "Created a conversion-focused site with integrated booking system and member portal.",
      outcome: "300% increase in online bookings, 85% reduction in phone inquiries.",
      metrics: {
        conversions: "+300%",
        lighthouse: "96",
        lcp: "0.9s"
      },
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"]
    },
    {
      id: 2,
      title: "Premier Dental Care",
      category: "Clinic", 
      tags: ["Healthcare", "Appointments", "Local SEO"],
      image: "/api/placeholder/600/400",
      description: "Professional dental practice website with appointment booking and patient resources.",
      problem: "Outdated website wasn't converting visitors and appointment process was inefficient.",
      approach: "Redesigned with patient journey in mind, streamlined appointment booking, local SEO optimization.",
      outcome: "200% increase in appointment requests, #1 local search ranking.",
      metrics: {
        conversions: "+200%", 
        lighthouse: "98",
        lcp: "0.7s"
      },
      tech: ["Next.js", "Tailwind CSS", "Calendly", "Vercel"]
    },
    {
      id: 3,
      title: "Artisan Home Builder", 
      category: "Trades",
      tags: ["Construction", "Portfolio", "Lead Gen"],
      image: "/api/placeholder/600/400",
      description: "Custom home builder showcase with project portfolio and lead generation system.",
      problem: "Needed to showcase high-end custom homes and capture qualified leads effectively.",
      approach: "Built immersive portfolio experience with detailed project galleries and smart lead forms.",
      outcome: "150% increase in qualified leads, 60% faster project inquiry process.",
      metrics: {
        conversions: "+150%",
        lighthouse: "94", 
        lcp: "1.1s"
      },
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"]
    },
    {
      id: 4,
      title: "TechStart Analytics",
      category: "SaaS",
      tags: ["B2B", "Dashboard", "Integrations"], 
      image: "/api/placeholder/600/400",
      description: "SaaS analytics platform with interactive dashboards and API integrations.",
      problem: "Startup needed professional website to establish credibility with enterprise customers.",
      approach: "Created sophisticated marketing site with interactive demos and clear value proposition.",
      outcome: "400% increase in trial signups, 50% improvement in sales qualification rate.",
      metrics: {
        conversions: "+400%",
        lighthouse: "95",
        lcp: "1.0s" 
      },
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
      id: 5,
      title: "Creative Designer Portfolio",
      category: "Portfolio",
      tags: ["Creative", "Animation", "Showcase"],
      image: "/api/placeholder/600/400", 
      description: "Interactive portfolio for creative professional with smooth animations and case studies.",
      problem: "Designer needed portfolio that reflected their creative skills and attracted premium clients.",
      approach: "Designed immersive experience with subtle animations and detailed project breakdowns.",
      outcome: "250% increase in client inquiries, 40% higher average project value.",
      metrics: {
        conversions: "+250%",
        lighthouse: "93",
        lcp: "1.2s"
      },
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
      id: 6,
      title: "Urban Fashion Store", 
      category: "E-commerce",
      tags: ["Retail", "Shopify", "Mobile-first"],
      image: "/api/placeholder/600/400",
      description: "Mobile-first e-commerce store for urban fashion brand with seamless checkout.",
      problem: "Fashion startup needed e-commerce site that worked flawlessly on mobile devices.",
      approach: "Mobile-first design with optimized product discovery and streamlined checkout process.",
      outcome: "180% increase in mobile conversions, 65% improvement in checkout completion.",
      metrics: {
        conversions: "+180%",
        lighthouse: "97", 
        lcp: "0.8s"
      },
      tech: ["Shopify", "Liquid", "Tailwind CSS", "Shopify Plus"]
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            title="Our Work"
            description="Real projects, real results. See how we've helped businesses transform their digital presence."
            centered
          />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <Button
                key={filterItem}
                variant={filter === filterItem ? "default" : "outline"}
                onClick={() => setFilter(filterItem)}
                className={filter === filterItem ? "bg-primary text-primary-foreground" : ""}
              >
                {filterItem}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card-soft group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-subtle rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground/30">{project.title.split(' ').map(w => w[0]).join('')}</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{project.metrics.conversions}</div>
                    <div className="text-xs text-muted-foreground">Conversions</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">{project.metrics.lighthouse}</div>
                    <div className="text-xs text-muted-foreground">Lighthouse</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">{project.metrics.lcp}</div>
                    <div className="text-xs text-muted-foreground">LCP</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="text-xs text-muted-foreground">+{project.tech.length - 2}</span>
                    )}
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join our success stories?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can create similar results for your business.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <a href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;