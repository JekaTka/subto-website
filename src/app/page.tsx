"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6 md:p-12">
      <main className="max-w-3xl w-full flex flex-col items-center text-center gap-12">
        {/* Square Text Logo with Animation */}
        <div 
          className={`mb-4 transform transition-all duration-700 ease-in-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="bg-black text-white w-16 h-16 flex items-center justify-center rounded-2xl">
            <h1 className="text-l font-bold tracking-tight">SubsTo</h1>
          </div>
        </div>
        
        {/* Hero Section with Animation */}
        <div 
          className={`space-y-6 transform transition-all duration-700 delay-300 ease-in-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            One Dashboard.<br />
            All Subscriptions.<br />
            Total Clarity.
          </h2>
          
          <p 
            className={`text-lg md:text-xl text-gray-600 max-w-xl mx-auto transform transition-all duration-700 delay-500 ease-in-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Never miss a renewal. Monitor expenses. Regain control of your digital spending.
            The simple way to manage everything you subscribe to.
          </p>
        </div>
        
        {/* Waitlist Form with Animation */}
        <div 
          className={`w-full max-w-md space-y-4 transform transition-all duration-700 delay-700 ease-in-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <p className="text-sm text-gray-500 font-medium">Join our waitlist for early access</p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow border-gray-300 focus:border-gray-500 focus:ring-gray-500"
              required
            />
            <Button 
              type="submit" 
              className="bg-black hover:bg-gray-800 text-white"
            >
              Join Waitlist
            </Button>
          </form>
        </div>
        
        {/* Features with Animation */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8 transform transition-all duration-700 delay-900 ease-in-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Track Everything</h3>
            <p className="text-gray-600">All your subscriptions in one place, organized and easy to manage.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Renewal Alerts</h3>
            <p className="text-gray-600">Get notified before you're charged. No more surprise bills.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Spending Insights</h3>
            <p className="text-gray-600">Visualize your subscription costs and find opportunities to save.</p>
          </div>
        </div>
      </main>
      
      <footer 
        className={`mt-20 text-sm text-gray-500 transform transition-all duration-700 delay-1000 ease-in-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <p>© {new Date().getFullYear()} SubsTo. All rights reserved.</p>
      </footer>
    </div>
  );
}
