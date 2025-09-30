import { Users, Target, Clock, Award, CheckCircle, Sparkles, Zap, Heart, Rocket, Code2, Palette, ArrowRight, Star, Globe, Shield, Layers, Compass, Telescope, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '@/assets/auralogo-transparentbg.png';
import saturnImage from '@/assets/saturn.png';
import moonImage from '@/assets/moon.png';

const About = () => {
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([]);
  const [saturnPosition, setSaturnPosition] = useState({ scale: 1, x: 0, y: 0, opacity: 0.2 });
  const [moonPosition, setMoonPosition] = useState({ scale: 0, x: 0, y: 0, opacity: 0 });
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const auraDifferenceRef = useRef<HTMLDivElement>(null);


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

  // Timeline animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-timeline-index') || '0');
          if (entry.isIntersecting) {
            setVisibleTimelineItems(prev => 
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleTimelineItems(prev => 
              prev.filter(item => item !== index)
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Saturn scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!heroSectionRef.current) return;

      const section = heroSectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Start animation when section is 80% visible (earlier trigger)
      const triggerPoint = windowHeight * 0.8; // Start when section top is at 80% of viewport height
      
      if (sectionTop > triggerPoint) {
        // Reset to initial position when section is still mostly visible
        setSaturnPosition({ scale: 1, x: 0, y: 0, opacity: 0.2 });
        return;
      }
      
      // Calculate scroll progress from trigger point to completely past section
      const scrollFromTrigger = Math.max(0, triggerPoint - sectionTop);
      const maxScroll = triggerPoint + sectionHeight; // Total scroll distance
      const scrollProgress = Math.min(1, scrollFromTrigger / maxScroll);
      
      let newPosition = { scale: 1, x: 0, y: 0, opacity: 0.2 };
      
      if (scrollProgress < 0.3) {
        // Phase 1: Zoom in (starts earlier)
        const phaseProgress = scrollProgress / 0.3;
        newPosition.scale = 1 + (1.5 * phaseProgress); // Scale from 1 to 2.5
        newPosition.x = 0;
        newPosition.y = 0;
        newPosition.opacity = 0.2 + (0.3 * phaseProgress); // Increase opacity
      } else {
        // Phase 2: Move left and down, then fade out
        const phaseProgress = (scrollProgress - 0.3) / 0.7;
        newPosition.scale = 2.5; // Keep zoomed in
        newPosition.x = -300 * phaseProgress; // Move left
        newPosition.y = 200 * phaseProgress; // Move down
        newPosition.opacity = 0.5 - (0.5 * phaseProgress); // Fade out
      }
      
      setSaturnPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Moon scroll animation for The Aura Difference section
  useEffect(() => {
    const handleScroll = () => {
      if (!auraDifferenceRef.current) return;

      const section = auraDifferenceRef.current;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Start animation when section comes into view
      const triggerPoint = windowHeight * 0.8; // Start when section top is at 80% of viewport height
      
      if (sectionTop > triggerPoint) {
        // Reset to initial position when section is not yet visible
        setMoonPosition({ scale: 0, x: 0, y: 0, opacity: 0 });
        return;
      }
      
      // Calculate scroll progress from trigger point to completely past section
      const scrollFromTrigger = Math.max(0, triggerPoint - sectionTop);
      const maxScroll = triggerPoint + sectionHeight; // Total scroll distance
      const scrollProgress = Math.min(1, scrollFromTrigger / maxScroll);
      
      let newPosition = { scale: 0, x: 0, y: 0, opacity: 0 };
      
      if (scrollProgress < 0.2) {
        // Phase 1: Zoom in and appear
        const phaseProgress = scrollProgress / 0.2;
        newPosition.scale = 1 + (1 * phaseProgress); // Scale from 1 to 2 (smaller final size)
        newPosition.x = 0;
        newPosition.y = 0;
        newPosition.opacity = 0.2 + (0.3 * phaseProgress); // Increase opacity
      } else {
        // Phase 2: Move right and down, then fade out (starts earlier)
        const phaseProgress = (scrollProgress - 0.2) / 0.8;
        newPosition.scale = 2; // Keep zoomed in (smaller size)
        newPosition.x = 500 * phaseProgress; // Move right (more drastic)
        newPosition.y = 400 * phaseProgress; // Move down (more drastic)
        newPosition.opacity = 0.5 - (0.5 * phaseProgress); // Fade out
      }
      
      setMoonPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Space-Themed Hero Section */}
      <section ref={heroSectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-indigo-900 to-purple-900">
        {/* Saturn in top right */}
        <div 
          className="absolute top-8 right-8 w-48 h-48 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${saturnPosition.scale}) translate(${saturnPosition.x}px, ${saturnPosition.y}px)`,
            opacity: saturnPosition.opacity
          }}
        >
          <img 
            src={saturnImage} 
            alt="Saturn"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
          <div className="shooting-star shooting-star-4"></div>
          <div className="shooting-star shooting-star-5"></div>
          <div className="shooting-star shooting-star-6"></div>
          <div className="shooting-star shooting-star-7"></div>
          <div className="shooting-star shooting-star-8"></div>
          
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
          <div className="bg-star bg-star-21"></div>
          <div className="bg-star bg-star-22"></div>
          <div className="bg-star bg-star-23"></div>
          <div className="bg-star bg-star-24"></div>
          <div className="bg-star bg-star-25"></div>
          <div className="bg-star bg-star-26"></div>
          <div className="bg-star bg-star-27"></div>
          <div className="bg-star bg-star-28"></div>
          <div className="bg-star bg-star-29"></div>
          <div className="bg-star bg-star-30"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">About Aura Designs</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              We're not just developers,<br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">we're digital architects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Every business deserves a digital presence that not only looks amazing but drives real results. 
              We bridge the gap between cutting-edge technology and thoughtful design strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-cyan-400 text-cyan-300 bg-cyan-500/10 px-10 py-6 rounded-2xl font-semibold text-lg backdrop-blur-sm">
                <Link to="/projects">See Our Work</Link>
              </Button>
            </div>
          </div>
          
        </div>
      </section>

      {/* The Aura Difference - Space Theme */}
      <section ref={auraDifferenceRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
        {/* Moon in top left */}
        <div 
          className="absolute top-8 left-8 w-32 h-32 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${moonPosition.scale}) translate(${moonPosition.x}px, ${moonPosition.y}px)`,
            opacity: moonPosition.opacity
          }}
        >
          <img 
            src={moonImage} 
            alt="Moon"
            className="w-full h-full object-contain"
          />
        </div>
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
              {[
                { icon: <Zap className="h-8 w-8" />, title: "Speed with Quality", description: "Fast delivery without compromising on excellence" },
                { icon: <Heart className="h-8 w-8" />, title: "Transparent Communication", description: "Honest, clear communication throughout every project" },
                { icon: <Target className="h-8 w-8" />, title: "Results-Driven Design", description: "Every decision made with your business goals in mind" }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  {/* Space-themed Hexagonal Card */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
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
              {[
                { icon: <Rocket className="h-8 w-8" />, title: "Clarity over Complexity", description: "Simple solutions that work beautifully" },
                { icon: <Shield className="h-8 w-8" />, title: "Security First", description: "Built with enterprise-grade security standards" },
                { icon: <Globe className="h-8 w-8" />, title: "Global Reach", description: "Scalable solutions for worldwide audiences" }
              ].map((item, index) => (
                <div key={index + 3} className="group relative">
                  {/* Space-themed Hexagonal Card */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
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

      {/* Dream Team - Space Theme */}
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Users className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Meet Our Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              The <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate professionals dedicated to turning your vision into digital reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg flex-shrink-0">
                      <Users className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white flex-shrink-0">{member.name}</h3>
                    <p className="text-cyan-300 font-semibold mb-4 text-lg flex-shrink-0">{member.role}</p>
                    <p className="text-slate-300 leading-relaxed flex-grow">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Bring Ideas to Life - Space Theme */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
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
              <Code2 className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Our Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              How We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Bring Ideas to Life</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that transforms your vision into a digital masterpiece
            </p>
          </div>
          
          {/* Animated Vertical Timeline */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-teal-500"></div>
              
              
              {/* Timeline Items */}
              <div className="space-y-12">
            {process.map((phase, index) => (
                  <div 
                    key={index} 
                    ref={(el) => (timelineRefs.current[index] = el)}
                    data-timeline-index={index}
                    className={`relative group transition-all duration-1000 ${
                      visibleTimelineItems.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Timeline Node with Number */}
                    <div className={`absolute left-6 w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full border-2 border-slate-900 shadow-lg z-10 group-hover:scale-125 transition-all duration-1000 ${
                      visibleTimelineItems.includes(index) 
                        ? 'opacity-100' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{
                      top: index === 0 ? '0rem' : '0.5rem', // First dot at very top
                      left: 'calc(2rem - 1.25rem)', // Center on timeline line
                      transitionDelay: `${index * 200}ms`
                    }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="ml-16 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden">
                      {/* Glassmorphism Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                      
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Phase Header */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                </div>
                        
                        {/* Phase Details */}
                        <ul className="space-y-3">
                  {phase.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3 text-slate-300">
                              <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>
                    
                    {/* Connecting Arrow (except for last item) */}
                    {index < process.length - 1 && (
                      <div className="absolute left-7 top-20 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/50"></div>
                    )}
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;