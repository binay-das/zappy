import { useState } from "react";
import { toast } from "sonner";
import { Share2, CheckCircle, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import generateCode from "@/lib/generateCode";
import { supabase } from "@/lib/supabaseClient";
import { CopyButton } from "@/components/CopyButton";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

export default function ShareText() {
  const [message, setMessage] = useState<string>("");
  const [code, setCode] = useState<string | null>(null);
  const [expiryTime, setExpiryTime] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [charCount, setCharCount] = useState<number>(0);

  const handleShare = async () => {
    if (!message.trim()) {
      toast.error("Cannot share empty text!");
      return;
    }
    setLoading(true);
    try {
      const generatedCode = generateCode();
      const { error } = await supabase.from("shared_texts").insert([
        {
          code: generatedCode,
          content: message,
        },
      ]);

      if (error) {
        toast.error(error.message || "Error, couldn't share this");
        return;
      }

      const now = new Date();
      const expiry = new Date(now.getTime() + 48 * 60 * 60 * 1000);
      setExpiryTime(expiry);
      setCode(generatedCode);
      setMessage("");
      setCharCount(0);

      toast.success(
        "Successfully shared! Get the code to access it for the next 48 hrs."
      );
    } catch (error: any) {
      console.error("Error sharing:", error);
      toast.error(error.response?.data?.error || "Error sharing your text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-0">
      <Card className="w-full max-w-3xl mx-auto my-8 border border-black/5 dark:border-white/10 rounded-2xl shadow-bg-white dark:bg-[rgba(255,255,255,0.03)] 
        backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.05)]"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-4xl font-bold mt-4 flex gap-4 justify-center items-center">
            <Share2 className="w-8 h-8 text-primary" />
            Share Your Text
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Write something and share it with the world securely.
          </CardDescription>
        </CardHeader>

        {code ? (
          <CardContent className="flex flex-col items-center gap-6 p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mb-2" />
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Successfully Shared!
            </h3>
            <p className="text-muted-foreground text-center mb-2">
              Here is your unique code and link. Share it with anyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              <div className="flex-1 flex flex-col items-center">
                <Label className="mb-1 text-sm">Code</Label>
                <div className="flex gap-2 items-center w-full">
                  <Input
                    readOnly
                    value={code}
                    className="font-mono text-lg text-center cursor-pointer bg-background border border-primary/30 px-4 py-2 rounded-lg w-full"
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                  />
                  <CopyButton text={code} />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <Label className="mb-1 text-sm">Link</Label>
                <div className="flex gap-2 items-center w-full">
                  <Input
                    readOnly
                    value={`${window.location.origin}/text/${code}`}
                    className="font-mono text-base cursor-pointer bg-background border border-primary/30 px-4 py-2 rounded-lg w-full"
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                  />
                  <CopyButton text={`${window.location.origin}/text/${code}`} />
                </div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground mt-2 text-center">
              This text will be automatically deleted after <b>48 hours</b> (
              {expiryTime ? expiryTime.toLocaleString() : ""}).
            </span>
            <Button
              onClick={() => setCode(null)}
              className="mt-4 w-full sm:w-auto"
            >
              Share Another Text
            </Button>
          </CardContent>
        ) : (
          <CardContent className="p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleShare();
              }}
              className="grid w-full gap-6"
            >
              <div>
                <Label
                  htmlFor="message"
                  className="text-lg font-medium mb-2 block"
                >
                  Your Message
                </Label>
                <Textarea
                  placeholder="Type or paste your message here..."
                  id="message"
                  className="min-h-[200px] text-base p-4 rounded-xl border border-border bg-muted/30 focus:border-primary transition-colors backdrop-blur-sm"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setCharCount(e.target.value.length);
                  }}
                  maxLength={5000}
                  disabled={loading}
                  required
                />
                <div className="text-right text-xs text-muted-foreground mt-1">
                  {charCount}/5000
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="rounded-full group text-lg px-8 py-6 w-full sm:w-auto"
                disabled={loading || !message.trim()}
              >
                {loading ? "Sharing..." : "Share"}
                <Share2 className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        )}

        <CardFooter className="flex justify-center p-6">
          <Link
            to="/text/code"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Have a code? Enter it here <ArrowRight className="inline w-4 h-4" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
