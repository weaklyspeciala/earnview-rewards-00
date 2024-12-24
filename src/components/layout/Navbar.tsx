import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">AdRewards</div>
        <div className="space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};