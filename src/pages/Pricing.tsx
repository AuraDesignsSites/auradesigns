import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Sparkles, Rocket, Zap, Target, Heart, Clock, Award, TrendingUp, Shield, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState, useEffect, useRef } from 'react';
import logo from '@/assets/auralogo-transparentbg.png';

const Pricing = () => {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    satisfaction: 0,
    delivery: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  const animateStats = () => {
    const targets = {
      projects: 50,
      satisfaction: 100,
      delivery: 98,
      support: 24
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        delivery: Math.floor(targets.delivery * progress),
        support: Math.floor(targets.support * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, stepDuration);
  };

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
      {/* Space-Themed Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-indigo-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
          <div className="shooting-star shooting-star-4"></div>
          <div className="shooting-star shooting-star-5"></div>
          
          {/* Background Stars */}
          <div className="bg-star bg-star-1"></div>
          <div className="bg-star bg-star-2"></div>
          <div className="bg-star bg-star-3"></div>
          <div className="bg-star bg-star-4"></div>
          <div className="bg-star bg-star-5"></div>
          <div className="bg-star bg-star-6"></div>
          <div className="bg-star bg-star-7"></div>
          <div className="bg-star bg-star-8"></div>
          <div className="bg-star bg-star-9"></div>
          <div className="bg-star bg-star-10"></div>
          <div className="bg-star bg-star-11"></div>
          <div className="bg-star bg-star-12"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Clear, One-Time Build Pricing
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              No hidden fees, no surprises. Choose the plan that fits your needs and get started today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-6 rounded-2xl font-semibold text-lg backdrop-blur-sm">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
          
          {/* Animated Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: animatedStats.projects, label: "Projects Delivered", icon: <Rocket className="h-6 w-6" />, suffix: "+" },
              { number: animatedStats.satisfaction, label: "Client Satisfaction", icon: <Heart className="h-6 w-6" />, suffix: "%" },
              { number: animatedStats.delivery, label: "On-Time Delivery", icon: <Target className="h-6 w-6" />, suffix: "%" },
              { number: animatedStats.support, label: "Response Time", icon: <Zap className="h-6 w-6" />, suffix: "h" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-lg">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-3">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-lg font-semibold text-cyan-300">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards - Space Theme */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Stars */}
          <div className="absolute top-16 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-24 right-1/3 w-1 h-1 bg-violet-300 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Award className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Choose Your Plan</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Pricing <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Plans</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. All plans include hosting, SSL, and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-2xl">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:-translate-y-2">
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center mb-8 flex-shrink-0">
                      <h3 className="text-3xl font-bold mb-2 text-white">{plan.name}</h3>
                      <p className="text-cyan-300 font-medium mb-4">{plan.subtitle}</p>
                      <div className="text-5xl font-bold mb-4 text-white">{plan.price}</div>
                      <p className="text-slate-300 text-lg">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex-shrink-0">
                      <Button 
                        asChild 
                        className={`w-full ${plan.popular 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105' 
                          : 'border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm'
                        }`}
                      >
                        <Link to="/contact">
                          {plan.cta}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <p className="text-slate-300 mb-6 text-lg">
                  Have a custom request? We'll scope it and send a quote within 24 hours.
                </p>
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  <Link to="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Space Theme */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-violet-400 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Globe className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our process, timelines, and what's included.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <Accordion type="multiple" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="group-hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 text-left font-semibold hover:no-underline bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-cyan-500/20">
                      <span className="text-white group-hover:text-cyan-300 transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                        <p className="text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 font-medium">
                    Still have questions? We're here to help!
                  </span>
                </div>
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Space Theme */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Stars */}
          <div className="absolute top-16 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-24 right-1/3 w-1 h-1 bg-violet-300 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Glassmorphism Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                <Rocket className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Ready to Launch?</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Get <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Started?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Join hundreds of businesses who've transformed their digital presence with Aura Designs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-6 rounded-2xl font-semibold text-lg backdrop-blur-sm">
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
              <div className="mt-10 flex justify-center items-center space-x-8 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;