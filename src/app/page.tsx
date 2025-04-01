import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6 md:p-12">
      <main className="max-w-3xl w-full flex flex-col items-center text-center gap-12">
        {/* Square Text Logo with More Rounded Corners */}
        <div className="mb-4">
          <div className="bg-black text-white w-16 h-16 flex items-center justify-center rounded-2xl">
            <h1 className="text-l font-bold tracking-tight">SubsTo</h1>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            One Dashboard.<br />
            All Subscriptions.<br />
            Total Clarity.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Never miss a renewal. Monitor expenses. Regain control of your digital spending.
            The simple way to manage everything you subscribe to.
          </p>
        </div>
        
        {/* Waitlist Form */}
        <div className="w-full max-w-md space-y-4">
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
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
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
      
      <footer className="mt-20 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} SubsTo. All rights reserved.</p>
      </footer>
    </div>
  );
}
