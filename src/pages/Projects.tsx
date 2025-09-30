import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-indigo-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="shooting-star" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="shooting-star" style={{ top: '40%', left: '20%', animationDelay: '2s' }}></div>
          <div className="shooting-star" style={{ top: '60%', left: '15%', animationDelay: '4s' }}></div>
          <div className="shooting-star" style={{ top: '30%', left: '80%', animationDelay: '1s' }}></div>
          <div className="shooting-star" style={{ top: '70%', left: '85%', animationDelay: '3s' }}></div>
          <div className="shooting-star" style={{ top: '50%', left: '90%', animationDelay: '5s' }}></div>
          
          {/* Background Stars */}
          <div className="bg-star" style={{ top: '10%', left: '5%' }}></div>
          <div className="bg-star" style={{ top: '25%', left: '25%' }}></div>
          <div className="bg-star" style={{ top: '15%', left: '45%' }}></div>
          <div className="bg-star" style={{ top: '35%', left: '65%' }}></div>
          <div className="bg-star" style={{ top: '20%', left: '85%' }}></div>
          <div className="bg-star" style={{ top: '45%', left: '10%' }}></div>
          <div className="bg-star" style={{ top: '65%', left: '30%' }}></div>
          <div className="bg-star" style={{ top: '55%', left: '50%' }}></div>
          <div className="bg-star" style={{ top: '75%', left: '70%' }}></div>
          <div className="bg-star" style={{ top: '85%', left: '90%' }}></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 font-medium text-lg">
                  Something amazing is coming soon
                </span>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto mb-12">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Rocket Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Coming Soon Text */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Coming Soon
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  We're working on something spectacular. Our portfolio of amazing projects will be here soon, showcasing the incredible work we've done for our clients.
                </p>
                
                {/* Features Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Real Results</h3>
                    <p className="text-slate-400 text-sm">See actual performance metrics and client success stories</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Diverse Portfolio</h3>
                    <p className="text-slate-400 text-sm">From e-commerce to SaaS, see our range of expertise</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Case Studies</h3>
                    <p className="text-slate-400 text-sm">Detailed breakdowns of our process and approach</p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex justify-center">
                  <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2">
                    <Link to="/contact">
                      <span>Get Notified When Ready</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-slate-400 text-lg mb-6">
                In the meantime, check out our services or get in touch to discuss your project
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-xl">
                  <Link to="/services">View Services</Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-xl">
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;