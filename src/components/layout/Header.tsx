import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="max-w-5xl mx-auto sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zappy
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="text-sm opacity-70 mr-4 text-foreground"
            >
              Contact
            </Link>
            <Link
              to="/text"
              className="text-sm opacity-70 mr-4 text-foreground"
            >
              Start Sharing
            </Link>
            <Link
              to="/text/code"
              className="text-sm opacity-70 mr-4 text-foreground"
            >
              Have a code?
            </Link>
            <Link
              to={"/text"}
              className="py1 px-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
