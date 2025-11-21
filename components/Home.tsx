import React, { useState, useEffect } from 'react';
import { ArrowRight, Dumbbell, Crown, Music, Leaf, Flame, Clock, Gem, User, Users, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", // Bodybuilder Back
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop", // Woman Squat
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop", // B&W Muscular
    "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=2070&auto=format&fit=crop", // Dumbbell Rack
    "https://images.unsplash.com/photo-1517963879466-e825c2fea75b?q=80&w=2070&auto=format&fit=crop", // Man lifting
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden">
        
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div 
              key={img}
              className={`absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Gradient Overlay for Text Area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10 w-full lg:w-3/4"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-0">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              <span className="text-brand-red">Pulse</span> <span className="text-white">&</span> <span className="text-brand-red">Power</span>
            </h1>
            
            <div className="mt-8 mb-8 pl-2 border-l-4 border-brand-red">
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                "Daccan Fitness Center" is the ultimate destination for those who refuse to quit.
              </p>
            </div>

            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              Forge your body, sharpen your mind, and unleash your true potential with our elite facilities and AI-powered training programs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setPage('AI_TRAINER')}
                className="bg-brand-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                Get AI Trainer
              </button>
              <button className="border border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Join Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Red Grid */}
      <section className="py-24 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">Our Services</h2>
              <div className="h-1 w-20 bg-brand-red"></div>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">
              Everything you need to push your limits and achieve your goals.
            </p>
          </div>

          {/* The requested 6-item Red Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Personal", icon: <Dumbbell className="h-16 w-16" /> },
              { title: "Exclusive", icon: <Crown className="h-16 w-16" /> },
              { title: "Yoga", icon: <Leaf className="h-16 w-16" /> },
              { title: "Open 24/7", icon: <Clock className="h-16 w-16" /> },
            ].map((feature, idx) => (
              <div key={idx} className="bg-brand-red aspect-square flex flex-col items-center justify-center p-8 hover:bg-red-700 transition-colors cursor-default group">
                <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Packages Section */}
      <section className="py-24 bg-black text-white border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">Membership Package</h2>
            <div className="h-1 w-24 bg-brand-red mx-auto"></div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Platinum */}
            <div className="border border-zinc-700 rounded-2xl p-8 flex flex-col items-center text-center bg-zinc-950/50 hover:border-brand-red transition-colors">
              <div className="mb-6 p-4 bg-zinc-900 rounded-full">
                <Dumbbell className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Platinum Membership</h3>
              <p className="text-3xl font-black text-brand-red mb-6">$120/month</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                2 training sessions a month, health check, and 10% off gym gear.
              </p>
            </div>

            {/* Gold */}
            <div className="border-2 border-white rounded-2xl p-8 flex flex-col items-center text-center bg-zinc-900 transform scale-105 shadow-2xl z-10">
              <div className="mb-6 p-4 bg-white rounded-full">
                <Gem className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Gold Membership</h3>
              <p className="text-3xl font-black text-brand-red mb-6">$90/month</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlimited gym access, 3 free classes per week, 1 personal training session per month, and a free health assessment.
              </p>
            </div>

            {/* Silver */}
            <div className="border border-zinc-700 rounded-2xl p-8 flex flex-col items-center text-center bg-zinc-950/50 hover:border-brand-red transition-colors">
              <div className="mb-6 p-4 bg-zinc-900 rounded-full">
                <Dumbbell className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Silver Membership</h3>
              <p className="text-3xl font-black text-brand-red mb-6">$60/month</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlimited gym access, 1 class per week, & access to standard locker rooms.
              </p>
            </div>
          </div>

          {/* Additional Services Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-800 pt-12 mb-12">
            {/* Individual Classes */}
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 text-center md:text-left">Individual Classes</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-lg text-white">Yoga & Pilates</p>
                  <p className="text-xl font-black text-brand-red mt-1">$15/session</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Spin Class</p>
                  <p className="text-xl font-black text-brand-red mt-1">$18/session</p>
                </div>
              </div>
            </div>

            {/* Personal Training */}
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 text-center md:text-left">Personal Training</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-lg text-white">Buddy Training</p>
                  <p className="text-xl font-black text-brand-red mt-1">$75/hour</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-white">One-on-One Session</p>
                  <p className="text-xl font-black text-brand-red mt-1">$50/hour</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offers Footer */}
          <div className="bg-zinc-900 rounded-xl p-8 md:p-12 border border-zinc-800">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h3 className="text-5xl font-black uppercase leading-none text-white">
                  Special <br />
                  <span className="text-brand-red">Offers</span>
                </h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <div className="flex items-center gap-2 mb-2">
                     <Sparkles className="text-brand-red h-5 w-5" />
                     <h4 className="font-bold text-lg uppercase">Free Week Trial</h4>
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed">
                     Sign up by August 31st and get 20% off your first three months of Platinum Membership.
                   </p>
                </div>
                <div>
                   <div className="flex items-center gap-2 mb-2">
                     <Users className="text-brand-red h-5 w-5" />
                     <h4 className="font-bold text-lg uppercase">Refer a Friend</h4>
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed">
                     New members can enjoy a one-week free trial with unlimited access to the gym and classes.
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[50vh] relative overflow-hidden flex items-center justify-center">
         <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Gym Motivation" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
         <div className="relative z-10 text-center px-4">
            <h2 className="text-5xl md:text-7xl font-black italic text-white tracking-tighter uppercase mb-6">
                No Pain <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-800">No Gain</span>
            </h2>
            <button className="mt-4 text-white border-b-2 border-brand-red hover:text-brand-red transition-colors pb-1 uppercase tracking-widest text-sm font-bold">
              Start Your Transformation
            </button>
         </div>
      </section>
    </div>
  );
};

export default Home;