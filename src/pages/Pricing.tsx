import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionHeader from '@/components/Common/SectionHeader';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "Individual",
      price: "$999",
      description: "Perfect for freelancers and personal brands",
      features: [
        "1-3 pages (Home, About, Contact)",
        "Clean one-pager or portfolio design",
        "Mobile-responsive layout",
        "Contact form integration", 
        "Basic SEO optimization",
        "Launch on Vercel (included)",
        "1 week turnaround",
        "30 days of support"
      ],
      cta: "Choose Starter",
      popular: false
    },
    {
      name: "Small Business", 
      subtitle: "Most Popular",
      price: "$1,999",
      description: "Ideal for small businesses and professionals",
      features: [
        "Up to 6 pages (Home, About, Services, Projects, Pricing, Contact)",
        "Custom sections and layouts",
        "Google Analytics integration",
        "SEO essentials and optimization",
        "Basic copy assistance",
        "2 rounds of revisions included",
        "2-3 weeks turnaround",
        "60 days of support"
      ],
      cta: "Choose Small Business",
      popular: true
    },
    {
      name: "Pro",
      subtitle: "Fully Custom", 
      price: "$4,999+",
      description: "For businesses needing advanced functionality",
      features: [
        "Unlimited pages and sections",
        "Bespoke design system and animations",
        "Advanced integrations (CRM, CMS, etc.)",
        "Custom components and functionality",
        "Headless CMS or e-commerce setup",
        "Priority support and maintenance",
        "Performance + accessibility audit",
        "3-4 weeks turnaround"
      ],
      cta: "Request Custom Quote",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What's the typical timeline for a project?",
      answer: "Starter projects typically take 1 week, Small Business projects 2-3 weeks, and Pro projects 3-4 weeks. Timeline depends on complexity and how quickly you provide feedback and content."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "We'll need your branding assets (logo, colors), content (text, images), and any specific functionality requirements. Don't worry if you don't have everything ready - we can help guide you through the process."
    },
    {
      question: "Do you handle hosting and domain setup?",
      answer: "Yes! We deploy all sites on Vercel with SSL certificates included. We can also help with domain registration and DNS setup. Hosting costs are separate and typically run $10-30/month depending on traffic."
    },
    {
      question: "How many revisions are included?",
      answer: "Starter includes 1 round, Small Business includes 2 rounds, and Pro includes unlimited revisions. Additional revision rounds can be purchased if needed."
    },
    {
      question: "What if I need changes after launch?",
      answer: "All plans include post-launch support (30-60 days). After that, we offer maintenance packages starting at $150/month for ongoing updates, security, and support."
    },
    {
      question: "Can you work with my existing brand?",
      answer: "Absolutely! We can work with your existing brand guidelines, or if needed, we can help refresh and modernize your brand as part of our Brand & Collateral service."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer 50% upfront and 50% on completion for all projects. For Pro projects over $10k, we can discuss custom payment schedules."
    },
    {
      question: "What technologies do you use?",
      answer: "We primarily use Next.js, React, Tailwind CSS, and deploy on Vercel. For e-commerce, we often integrate with Shopify or Stripe. All sites are built with modern, maintainable code."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            title="Simple, Transparent Pricing"
            description="Clear, one-time build pricing with optional maintenance. No hidden fees, no surprises."
            centered
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`card-soft relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{plan.subtitle}</p>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${plan.popular ? 'btn-hero' : 'btn-ghost'}`}
                >
                  <Link to="/contact">
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have a custom request? We'll scope it and send a quote within 24 hours.
            </p>
            <Button asChild variant="outline" className="btn-ghost">
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader 
            title="Frequently Asked Questions"
            description="Everything you need to know about our process, timelines, and what's included."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <Accordion type="multiple" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="group-hover:bg-white/50 transition-all duration-300 rounded-xl p-6 text-left font-semibold hover:no-underline bg-white/30 backdrop-blur-sm border border-white/20 shadow-soft">
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-soft">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-soft">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Still have questions? We're here to help!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of businesses who've transformed their digital presence with Aura Designs.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;