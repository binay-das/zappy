import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Share2,
  Link,
  FileText,
  Users,
  Timer,
  Lock,
  Code,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access signup:", email);
    setEmail("");
  };

  return (
    <div className="max-w-5xl mx-auto min-h-screen w-full transition-colors duration-500 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            <Shield className="w-4 h-4 mr-1" />
            No Sign-Up Required
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Share anything,
            <br />
            instantly.
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The fastest way to share text and files with anyone, anywhere.
            <br />
            <span className="text-blue-600 font-semibold">
              No accounts. No tracking. No hassle.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl"
            >
              Start Sharing Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg rounded-xl"
            >
              <Code className="mr-2 h-5 w-5" />
              Access by Code
            </Button>
          </div>
          <p className="text-xs lg:text-sm text-gray-600 mb-8 max-w-3xl mx-auto">
            Share text and files with anyone using simple codes that
            automatically expire after 48 hours for your privacy.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              10k+ daily users
            </div>
            <div className="flex items-center">
              <Timer className="w-4 h-4 mr-1" />
              Auto-expires in 48h
            </div>
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-1" />
              End-to-end secure
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Built for <span className="text-blue-600">speed</span> and{" "}
            <span className="text-purple-600">privacy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to share content quickly and securely, without
            compromising your privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Instant Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Paste your text, click share, and get a unique code in seconds.
                No registration, no waiting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your data is automatically deleted after 48 hours. No tracking,
                no ads, no permanent storage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Auto-Expires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                All shared content automatically expires after 48 hours,
                ensuring your privacy and security.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Multiple Ways to Share</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Share via unique code or direct link. Recipients can access
                content instantly from any device.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-gradient-to-br from-indigo-50 to-indigo-100">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Link className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Direct Links</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get shareable links that work everywhere. Perfect for messaging
                apps, emails, or social media.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-gradient-to-br from-pink-50 to-pink-100">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Files Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                File sharing is coming soon! Sign up below to get early access
                when it launches.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Three steps to{" "}
              <span className="text-blue-600">instant sharing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              It's so simple, you'll wonder why other platforms make it so
              complicated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Write or Paste
              </h3>
              <p className="text-gray-600 text-lg">
                Type your message or paste any text into our clean,
                distraction-free editor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Click Share
              </h3>
              <p className="text-gray-600 text-lg">
                Hit the share button and instantly get a unique code and
                shareable link.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Share Anywhere
              </h3>
              <p className="text-gray-600 text-lg">
                Send the code or link to anyone. They can access it instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-16 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get early access to file sharing
          </h2>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be the first to experience seamless file sharing with the same
            privacy-first approach.
          </p>

          <form onSubmit={handleEarlyAccess} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
                required
              />
              <Button
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
              >
                Get Early Access
              </Button>
            </div>
          </form>

          <p className="text-sm mt-4 opacity-70">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Ready to share without limits?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of users who trust Zappy for their daily sharing needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl"
            onClick={() => navigate("/text")}
          >
            Start Sharing Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg rounded-xl"
          >
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
