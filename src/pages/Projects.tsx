import { Rocket, Star } from 'lucide-react';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';

const Projects = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
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
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
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
                <p className="text-xl text-slate-300 leading-relaxed">
                  Thanks for your patience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;