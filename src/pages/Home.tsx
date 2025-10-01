import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Shield, Code2, Users, Rocket, CheckCircle, Star, TrendingUp, Clock, Award, Sparkles, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import logo from '@/assets/auralogo-transparentbg.png';
import { useState, useEffect, useRef } from 'react';

const Home = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const slogans = ['Modern', 'Fast', 'Secure'];
  const [animatedNumbers, setAnimatedNumbers] = useState({
    conversion: 0,
    weeks: "1-2",
    satisfaction: 0,
    mobile: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => {
        const next = (prev + 1) % slogans.length;
        console.log('Changing slogan to:', slogans[next]);
        return next;
      });
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Animated numbers effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [isVisible]);

  const animateNumbers = () => {
    const targets = {
      conversion: 40,
      weeks: "1-2", // Keep this static
      satisfaction: 98,
      mobile: 100
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedNumbers({
        conversion: Math.floor(targets.conversion * progress),
        weeks: "1-2", // Always keep this static
        satisfaction: Math.floor(targets.satisfaction * progress),
        mobile: Math.floor(targets.mobile * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets);
      }
    }, stepDuration);
  };

  // Cursor glow effect - Hero section only
  useEffect(() => {
    const heroSection = document.querySelector('.cursor-glow');
    if (!heroSection) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      heroSection.style.setProperty('--mouse-x', x + 'px');
      heroSection.style.setProperty('--mouse-y', y + 'px');
    };

    const handleMouseLeave = () => {
      heroSection.style.setProperty('--mouse-x', '-100px');
      heroSection.style.setProperty('--mouse-y', '-100px');
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const capabilities = [
    {
      icon: <Code2 className="h-8 w-8 text-white" />,
      title: "Modern Tech Stack",
      description: "React, Next.js, TypeScript"
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Performance First",
      description: "Lightning fast loading"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Secure by Design",
      description: "Enterprise-grade security"
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Mobile Responsive",
      description: "Perfect on all devices"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "SEO Optimized",
      description: "Search engine ready"
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Scalable Architecture",
      description: "Grows with your business"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "User Experience",
      description: "Intuitive and engaging"
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Quality Code",
      description: "Clean and maintainable"
    }
  ];

  const differentiators = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal Touch",
      description: "Direct access to our team throughout your project. No account managers, no middlemen – just real people who care about your success.",
      highlight: "Direct Communication"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Speed Without Compromise",
      description: "We deliver in 1-2 weeks what others take months to build, without cutting corners on quality or attention to detail.",
      highlight: "Fast & Quality"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Business-Focused Design",
      description: "Every pixel serves a purpose. We design for conversions, not just aesthetics, ensuring your website drives real business results.",
      highlight: "Results-Driven"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Future-Proof Technology",
      description: "Built with modern, scalable technologies that grow with your business. No technical debt, no outdated frameworks.",
      highlight: "Modern Stack"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Ongoing Partnership",
      description: "We're not just a one-time vendor. We provide ongoing support, updates, and optimizations to keep your site performing at its best.",
      highlight: "Long-term Support"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Transparent Process",
      description: "Clear timelines, regular updates, and honest communication. You always know exactly what's happening and when it'll be done.",
      highlight: "No Surprises"
    }
  ];

  const successMetrics = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "40%",
      label: "Average Conversion Increase",
      description: "Our clients see significant improvements in their conversion rates"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "1-2",
      label: "Weeks to Launch",
      description: "From concept to live website in record time"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Happy clients who recommend us to others"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      number: "100%",
      label: "Mobile Optimized",
      description: "Every site is perfectly responsive across all devices"
    }
  ];

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Space-Themed Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-teal-900 to-purple-900 cursor-glow" style={{ paddingTop: '0', marginTop: '0', position: 'relative', zIndex: '1' }}>
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
          <div className="bg-star bg-star-13"></div>
          <div className="bg-star bg-star-14"></div>
          <div className="bg-star bg-star-15"></div>
          <div className="bg-star bg-star-16"></div>
          <div className="bg-star bg-star-17"></div>
          <div className="bg-star bg-star-18"></div>
          <div className="bg-star bg-star-19"></div>
          <div className="bg-star bg-star-20"></div>
          
          {/* Floating Particles */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
          
          {/* Nebula Effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Purple Splashes */}
          <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-2/3 right-1/6 w-48 h-48 bg-gradient-to-r from-purple-500/18 to-indigo-500/18 rounded-full blur-3xl animate-pulse delay-2500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10" style={{ paddingTop: '100px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-white text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Crafting Digital Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Design. Build. Launch
                <span className="gradient-text"> — <span key={currentSlogan} className="cool-text-animation">{slogans[currentSlogan]}</span></span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Aura Designs creates high-performing websites for small businesses and professionals using modern development workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/contact">
                    Launch Your Project
                    <Rocket className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-ghost border-cyan-400/70 text-white bg-cyan-500/20 hover:bg-cyan-500/30 hover:border-cyan-300/80">
                  <Link to="/projects">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full max-w-[500px] h-[400px] mx-auto relative flex items-center justify-center">
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-teal-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-spin-slow"></div>
                
                {/* Central Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                
                {/* Logo with Space Effects */}
                <div className="relative z-10 group">
                  <img 
                    src={logo} 
                    alt="Aura Designs Logo" 
                    className="w-full max-w-[450px] h-auto object-contain animate-float"
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-purple-500/0 rounded-full blur-xl group-hover:from-teal-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                </div>
                
                {/* Floating Stars around logo */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                <div className="absolute top-16 right-12 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle delay-500"></div>
                <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-teal-300 rounded-full animate-twinkle delay-1000"></div>
                <div className="absolute bottom-12 right-8 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1500"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle delay-2000"></div>
                <div className="absolute top-1/3 right-4 w-1.5 h-1.5 bg-violet-300 rounded-full animate-twinkle delay-2500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Capabilities Carousel */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-6 border border-cyan-500/30">
              <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Powered by Modern Technology</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge technology stack that scales with your business and delivers exceptional performance.
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden text-blur-fade">
            <div className="flex animate-scroll space-x-8">
              {[...capabilities, ...capabilities].map((capability, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-48 h-48 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      {capability.icon}
                    </div>
                    <div className="text-lg font-bold text-white text-center leading-tight">{capability.title}</div>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Aura Designs */}
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
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Heart className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              The <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Aura Difference</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We're not just another web agency. We're your strategic partner in digital success, combining technical excellence with business acumen.
            </p>
          </div>
          
          {/* Hexagonal Grid Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {differentiators.slice(0, 3).map((item, index) => (
                <div key={index} className="group relative">
                  {/* Space-themed Hexagonal Card */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 rounded-3xl overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Rounded Hexagon shape using CSS clip-path */}
                    <div className="p-8 text-center relative z-10" style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '2rem',
                      paddingBottom: '2rem'
                    }}>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Central Connecting Element with Dividers */}
            <div className="flex items-center justify-center mb-8 hidden lg:flex">
              {/* Left Divider */}
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/50"></div>
              
              {/* Central Element */}
              <div className="mx-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30 backdrop-blur-md shadow-2xl">
                <img 
                  src={logo} 
                  alt="Aura Designs Logo" 
                  className="w-24 h-24 object-contain animate-pulse"
                />
              </div>
              
              {/* Right Divider */}
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-purple-500/50"></div>
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.slice(3, 6).map((item, index) => (
                <div key={index + 3} className="group relative">
                  {/* Space-themed Hexagonal Card */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 rounded-3xl overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Rounded Hexagon shape using CSS clip-path */}
                    <div className="p-8 text-center relative z-10" style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '2rem',
                      paddingBottom: '2rem'
                    }}>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
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
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <TrendingUp className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Proven Results</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Numbers That <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Speak Volumes</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our track record speaks for itself. Here's what our clients achieve with our solutions.
            </p>
          </div>
          <div ref={metricsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => {
              let displayNumber = metric.number;
              
              // Map the animated numbers to the correct metrics
              if (index === 0) displayNumber = `${animatedNumbers.conversion}%`;
              else if (index === 1) displayNumber = `${animatedNumbers.weeks}`;
              else if (index === 2) displayNumber = `${animatedNumbers.satisfaction}%`;
              else if (index === 3) displayNumber = `${animatedNumbers.mobile}%`;
              
              return (
                <div key={index} className="text-center h-full">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl h-full flex flex-col relative overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                        {metric.icon}
                      </div>
                      <div className="text-5xl font-bold text-white mb-3 flex-shrink-0">
                        {displayNumber}
                      </div>
                      <div className="text-lg font-semibold text-cyan-300 mb-4 flex-shrink-0">{metric.label}</div>
                      <p className="text-slate-300 text-sm leading-relaxed flex-grow">{metric.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-slate-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-violet-400 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Your digital transformation starts with a single conversation. Let's create a website that not only looks incredible but drives real business growth.
          </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
            <Link to="/contact">
                    Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
                <Button asChild size="lg" className="border-2 border-cyan-400 text-cyan-300 bg-cyan-500/10 px-10 py-6 rounded-2xl font-semibold text-lg backdrop-blur-sm hover:bg-cyan-500/10 hover:border-cyan-400">
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
              <div className="mt-10 flex justify-center items-center space-x-8 text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">24h Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;