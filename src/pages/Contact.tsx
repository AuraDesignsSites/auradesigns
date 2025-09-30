import { useState, useEffect, useRef } from 'react';
import { Mail, Clock, CheckCircle, ArrowRight, Phone, Sparkles, Rocket, Zap, Target, Heart, Globe, Users, Shield, Layers, Compass, Telescope, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import logo from '@/assets/auralogo-transparentbg.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    response: 0,
    satisfaction: 0,
    projects: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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
      response: 24,
      satisfaction: 100,
      projects: 50,
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
        response: Math.floor(targets.response * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        projects: Math.floor(targets.projects * progress),
        support: Math.floor(targets.support * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, stepDuration);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const processSteps = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Send us a message",
      description: "Tell us about your project and goals"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24-48 hour response", 
      description: "We'll review and get back to you quickly"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Discovery call",
      description: "30-minute call to discuss your needs and timeline"
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
              <span className="text-sm font-medium text-cyan-300">Let's Create Something Amazing</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Ready to Transform Your<br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Digital Presence?</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Tell us about your project and we'll get back to you within 24 hours. Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                <a href="#contact-form">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-6 rounded-2xl font-semibold text-lg backdrop-blur-sm">
                <a href="tel:+1-555-123-4567">Call Us Now</a>
              </Button>
            </div>
          </div>
          
          {/* Animated Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: animatedStats.response, label: "Hour Response", icon: <Zap className="h-6 w-6" />, suffix: "h" },
              { number: animatedStats.satisfaction, label: "Client Satisfaction", icon: <Heart className="h-6 w-6" />, suffix: "%" },
              { number: animatedStats.projects, label: "Projects Delivered", icon: <Rocket className="h-6 w-6" />, suffix: "+" },
              { number: animatedStats.support, label: "Support Hours", icon: <Clock className="h-6 w-6" />, suffix: "/7" }
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

      {/* Contact Form & Info - Space Theme */}
      <section id="contact-form" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <Globe className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Whether you're a startup looking to make a splash or an established business ready to modernize, we're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-white">Get in touch</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    Our team responds to all inquiries personally and promptly. We're here to help you succeed.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">Email us directly</p>
                        <a 
                          href="mailto:hello@auradesigns.studio" 
                          className="text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          hello@auradesigns.studio
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">Call us directly</p>
                        <a 
                          href="tel:+1-555-123-4567" 
                          className="text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">Business Hours</p>
                        <p className="text-slate-300">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-6 text-white">What to expect:</h4>
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                          {step.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 text-white text-lg">{step.title}</h5>
                          <p className="text-slate-300">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-white">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white font-semibold">Name *</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required 
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white font-semibold">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required 
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-white font-semibold">Company</Label>
                      <Input 
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-white font-semibold">Current Website</Label>
                      <Input 
                        id="website"
                        type="url"
                        placeholder="https://"
                        value={formData.website}
                        onChange={(e) => handleChange('website', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-white font-semibold">Budget Range</Label>
                      <Select onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-cyan-400 focus:ring-cyan-400/20">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                          <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-plus">$10,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-white font-semibold">Timeline</Label>
                      <Select onValueChange={(value) => handleChange('timeline', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-cyan-400 focus:ring-cyan-400/20">
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-semibold">Tell us about your project *</Label>
                    <Textarea 
                      id="message"
                      rows={5}
                      placeholder="Describe your project goals, target audience, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Honeypot field for spam protection */}
                  <input 
                    type="text" 
                    name="website_url" 
                    style={{ display: 'none' }} 
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-slate-300 text-center">
                    We'll get back to you within 24-48 hours with next steps.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Space Theme */}
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
                Let's Build Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Dream Project</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your digital presence? Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  <a href="#contact-form">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-6 rounded-2xl font-semibold text-lg backdrop-blur-sm">
                  <a href="/projects">View Our Work</a>
                </Button>
              </div>
              <div className="mt-10 flex justify-center items-center space-x-8 text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
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

export default Contact;