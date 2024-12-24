import { Button } from "@/components/ui/button";
import { Guidelines } from "@/components/shared/Guidelines";
import { Navbar } from "@/components/layout/Navbar";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Earn Rewards Watching Ads
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our trusted platform to earn rewards while watching advertisements
          </p>
          <Button
            size="lg"
            className="bg-success hover:bg-success/90 text-white"
            onClick={() => navigate("/register")}
          >
            Start Earning Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Verified Platform
            </h3>
            <p className="text-gray-600">
              Our platform is fully compliant with advertising policies and
              regulations
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Real Rewards
            </h3>
            <p className="text-gray-600">
              Earn points for genuine engagement, redeemable for real rewards
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Secure & Fair
            </h3>
            <p className="text-gray-600">
              Advanced security measures ensure a fair environment for all users
            </p>
          </div>
        </div>

        <Guidelines />
      </main>

      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 AdRewards. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;