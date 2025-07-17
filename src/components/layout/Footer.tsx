import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto bg-background text-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Zappy</h3>
              </div>
              <p>Effortless text and file sharing with privacy at its core.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link to="/" className="block hover:underline text-foreground">Features</Link>
                <Link to="/" className="block hover:underline text-foreground">Pricing</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Privacy</h4>
              <div className="space-y-2">
                <Link to="/" className="block hover:underline text-foreground" >Privacy Policy</Link>
                <Link to="/" className="block hover:underline text-foreground" >Terms of Service</Link>
                <Link to="/" className="block hover:underline text-foreground" >Security</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link to="/" className="block hover:underline text-foreground">Help Center</Link>
                <Link to="/" className="block hover:underline text-foreground">Contact</Link>
                <Link to="/" className="block hover:underline text-foreground">Status</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center border-border">
            <p>&copy; {new Date().getFullYear()} Zappy. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}

