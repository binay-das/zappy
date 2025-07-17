"use client";

import { useState } from "react";

import { toast } from "sonner";
import { Share2, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import generateCode from "@/lib/generateCode";
import { supabase } from "@/lib/supabaseClient";
import { CopyButton } from "@/components/CopyButton";
import { Link } from "react-router-dom";


export default function ShareText() {
  const [message, setMessage] = useState<string>("");
  const [code, setCode] = useState<string | null>(null);
  const [expiryTime, setExpiryTime] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [charCount, setCharCount] = useState<number>(0);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleShare = async () => {
    if (!message.trim()) {
      toast.error("Cannot share empty text!");
      return;
    }
    setLoading(true);
    try {
      if (!message || message.trim() === "") {
        toast.error("Text cannot be empty");
        return;
      }
      const code = generateCode();
      const { error } = await supabase.from("shared_texts").insert([
        {
          code,
          content: message,
        },
      ]);
      if (error) {
        toast.error(error.message || "Error, couldn't share this");
        return;
      }

      setMessage("");
      setCharCount(0);
      toast.success(
        "Successfully shared! Get the code to access it for the next 48 hrs."
      );
      const now = new Date();
      const expiry = new Date(now.getTime() + 48 * 60 * 60 * 1000);
      setExpiryTime(expiry);
      setCode(code);
      setDialogOpen(false);
    } catch (error: any) {
      console.error("Error sharing:", error);
      toast.error(error.response?.data?.error || "Error sharing your text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-0">
      <Card className="w-full max-w-3xl mx-auto my-8 shadow-lg border-2 border-primary/20 rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-4xl font-bold mt-4 flex gap-4 justify-center items-center">
            <Share2 className="w-8 h-8 text-primary" />
            Share Your Text
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Write something and share it with the world securely.
          </CardDescription>
          <Link
            to={"/text/code"}
            className="text-muted-foreground text-right underline text-sm italic"
          >
            Have a code? Click here to access it
          </Link>
        </CardHeader>

        {code ? (
          <CardContent className="flex flex-col items-center gap-4 animate-fade-in p-6 bg-primary/10 rounded-lg m-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h3 className="text-2xl font-semibold text-green-700">
              Successfully Shared!
            </h3>
            <p className="text-muted-foreground text-center">
              Here is your unique code and link. Share it with anyone.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="font-mono text-lg bg-background px-4 py-2 rounded-lg border">
                {code}
              </span>
              <CopyButton text={code} />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="font-mono text-base bg-background px-4 py-2 rounded-lg border truncate">
                {`${window.location.origin}/text/${code}`}
              </span>
              <CopyButton text={`${window.location.origin}/text/${code}`} />
            </div>
            <span className="text-sm text-muted-foreground mt-4 text-center">
              This text will be automatically deleted after <b>48 hours</b> (
              {expiryTime ? expiryTime.toLocaleString() : ""}).
            </span>
            <Button onClick={() => setCode(null)} className="mt-4">
              Share Another Text
            </Button>
          </CardContent>
        ) : (
          <CardContent className="p-6">
            <div className="grid w-full gap-4">
              <Label htmlFor="message" className="text-lg font-medium">
                Your Message
              </Label>
              <Textarea
                placeholder="Type or paste your message here..."
                id="message"
                className="min-h-[200px] text-base p-4 rounded-lg border-2 focus:border-primary transition-colors"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setCharCount(e.target.value.length);
                }}
                maxLength={5000}
                disabled={loading}
              />
              <div className="text-right text-sm text-muted-foreground">
                {charCount}/5000
              </div>
            </div>
          </CardContent>
        )}

        {!code && (
          <CardFooter className="flex justify-end p-6">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full group text-lg px-8 py-6"
                  disabled={loading || !message.trim()}
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Confirm Your Share
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-muted-foreground">
                    This shared text will be automatically deleted from our
                    servers after <b>48 hours</b>. Are you sure you want to
                    proceed?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-6">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    onClick={handleShare}
                    disabled={loading}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {loading ? "Sharing..." : "Confirm & Share"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        )}
      </Card>
      {/* <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style> */}
    </div>
  );
}
