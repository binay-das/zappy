import { Zap, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "../ModeToggle";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="max-w-5xl mx-auto sticky top-0 z-50 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Zappy
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-x-2">
            <Button asChild variant="ghost" className="text-base font-medium px-3">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild variant="ghost" className="text-base font-medium px-3">
              <Link to="/text">Start Sharing</Link>
            </Button>
            <Button asChild variant="ghost" className="text-base font-medium px-3">
              <Link to="/text/code">Have a code?</Link>
            </Button>
            <Button asChild className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base font-semibold px-5 py-2 rounded-md shadow">
              <Link to="/text">Get Started</Link>
            </Button>
            <span className="mx-2 h-6 border-l border-border" />
            <ModeToggle />
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 max-w-xs w-full rounded-lg">
                <nav className="flex flex-col gap-2 p-6">
                  <Button asChild variant="ghost" className="justify-start text-base font-medium px-3 w-full" onClick={() => setOpen(false)}>
                    <Link to="/contact">Contact</Link>
                  </Button>
                  <Button asChild variant="ghost" className="justify-start text-base font-medium px-3 w-full" onClick={() => setOpen(false)}>
                    <Link to="/text">Start Sharing</Link>
                  </Button>
                  <Button asChild variant="ghost" className="justify-start text-base font-medium px-3 w-full" onClick={() => setOpen(false)}>
                    <Link to="/text/code">Have a code?</Link>
                  </Button>
                  <Button asChild className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base font-semibold px-5 py-2 rounded-md shadow w-full" onClick={() => setOpen(false)}>
                    <Link to="/text">Get Started</Link>
                  </Button>
                </nav>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
