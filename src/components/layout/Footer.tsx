import { Separator } from "@/components/ui/separator";
import { Github, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer1 = () => {
  const footerLinks = {
    Product: [
      { name: "How it Works", href: "/" },
      { name: "Privacy", href: "/" },
      { name: "File Sharing", href: "/" },
      { name: "API", href: "/" },
    ],
    Company: [
      { name: "About", href: "/" },
      { name: "Blog", href: "/" },
      { name: "Open Source", href: "/" },
      { name: "Contact", href: "/" },
    ],
    Support: [
      { name: "Help Center", href: "/" },
      { name: "FAQ", href: "/" },
      { name: "Status", href: "/" },
      { name: "Community", href: "/" },
    ],
  };

  return (
    <footer
      id="contact"
      className="bg-background border-t border-border max-w-5xl mx-auto"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div aria-label="Footer navigation" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" >
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2  mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zappy
              </h1>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Share anything, instantly. No sign-up. No hassle.
              <br />
              Privacy-first text sharing that expires in 48 hours.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/binay-das/zappy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                Github
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <Separator />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Zappy. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      <Separator />

      <div className="my-4 flex justify-center items-center gap-1 text-muted-foreground text-sm">
        Built with love by
        <a
          href="https://github.com/binay-das"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-primary hover:underline"
        >
          <Github className="h-4 w-4" />
          Binay
        </a>
      </div>
    </footer>
  );
};

export default Footer1;
