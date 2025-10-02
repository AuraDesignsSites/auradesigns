import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Award, Globe, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { useState } from 'react';

const Pricing = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
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
        "One month of free hosting",
        "SSL and basic security included",
        "1 week turnaround",
        "14 days of support"
      ],
      cta: "Choose Starter",
      popular: false
    },
    {
      name: "Small Business", 
      subtitle: "Recommended",
      price: "$1,999",
      description: "Ideal for small businesses and professionals",
      features: [
        "Up to 6 pages (Home, About, Services, Projects, Pricing, Contact)",
        "Custom sections and layouts",
        "Custom form integration",
        "SEO essentials and optimization",
        "Mobile optimized",
        "Basic animations",
        "2 rounds of revisions included",
        "2-3 weeks turnaround",
        "SSL and basic security included",
        "Image optimization and performance enhancements",
        "Analytics integration",
        "30 days of support"
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
        "Everything in Starter and Small Business",
        "Unlimited pages and sections",
        "Custom design system and animations",
        "Advanced integrations (CRM, CMS, etc.)",
        "Custom components and functionality",
        "Headless CMS or e-commerce setup",
        "Priority support and maintenance",
        "Performance + accessibility audit",
        "3-4 weeks turnaround",
        "60 days of support"
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
      answer: "Yes! We do everything for setup if you want an external provider, or we can handle hosting internally for $10-$30/month (SSL included). We can also help with domain registration and DNS setup."
    },
    {
      question: "How many revisions are included?",
      answer: "Starter includes 1 round, Small Business includes 2 rounds, and Pro includes unlimited revisions. Additional revision rounds can be purchased if needed."
    },
    {
      question: "What if I need changes after launch?",
      answer: "All plans include post-launch support (30-60 days). After that, we offer maintenance packages for ongoing updates, security, and support at a price depending on your needs."
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
      question: "Do you offer bundling services like business cards, menus, etc.?",
      answer: "Yes! We offer additional design services including business cards, menus, flyers, and other marketing materials. These are custom quoted based on your specific needs and requirements."
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Pricing Cards - Space Theme */}
      <section className="pricing-hero py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Simple, Transparent Pricing</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Pricing <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Plans</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              Choose the plan that fits your needs.
            </p>
          </div>
          
          <div className="pricing-grid grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-2xl whitespace-nowrap">
                      <Star className="h-4 w-4 fill-current flex-shrink-0" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className={`pricing-card pricing-card-container bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 min-h-[600px] flex flex-col relative overflow-hidden group-hover:-translate-y-2 ${plan.popular ? 'border-2 border-cyan-400 shadow-cyan-500/30' : 'border border-white/20'}`}>
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">{plan.name}</h3>
                      <p className="text-cyan-300 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{plan.subtitle}</p>
                      <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 text-white">{plan.price}</div>
                      <p className="text-slate-300 text-base sm:text-lg">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex-shrink-0">
                      <Button 
                        asChild 
                        className={`w-full ${plan.popular 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105' 
                          : 'bg-gradient-to-r from-slate-600/40 to-slate-500/40 hover:from-slate-600/60 hover:to-slate-500/60 text-slate-200 border border-slate-400/40 hover:border-slate-300 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 hover:shadow-lg'
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
          
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <p className="text-slate-300 mb-4 sm:mb-6 text-base sm:text-lg">
                  Have a custom request? We'll scope it and send a quote within 24 hours.
                </p>
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  <Link to="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Space Theme */}
      <section className="pricing-faq py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">FAQ</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to know about our process, timelines, and what's included.
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const itemValue = `item-${index}`;
              const isOpen = openItems.includes(itemValue);
              
              return (
                <div key={index} className="group">
                  <div className="faq-item group-hover:bg-white/10 transition-all duration-300 rounded-2xl p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-cyan-500/20">
                    <button
                      onClick={() => toggleItem(itemValue)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-white group-hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-2">
                        {isOpen ? (
                          <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                        ) : (
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                        <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 font-medium text-sm sm:text-base">
                    Still have questions? We're here to help!
                  </span>
                </div>
                <div className="flex justify-center">
                  <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>
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