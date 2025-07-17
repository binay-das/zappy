import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EnterCode() {
  const [inputCode, setInputCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!inputCode.trim()) {
      setError("Please enter a code.");
      toast.error("Please enter a code.");
      return;
    }
    setLoading(true);
    const { data, error: dbError } = await supabase
      .from("shared_texts")
      .select("content")
      .eq("code", inputCode.trim())
      .single();
    setLoading(false);
    if (dbError || !data) {
      setError("Enter a valid code.");
      toast.error("Enter a valid code.");
      return;
    }
    navigate(`/text/${inputCode.trim()}`);
  };

  return (
    <div className="max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-0">
      <Card
        className="w-full max-w-md mx-auto my-8 border border-black/5 dark:border-white/10 bg-white dark:bg-[rgba(255,255,255,0.03)] 
          backdrop-blur-sm rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.05)]"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-4xl font-bold mt-4">
            Have a code?
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Enter your code below to view the shared text.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6">
            <div className="grid gap-4">
              <Label htmlFor="code" className="text-lg font-medium">
                Enter Code
              </Label>
              <Input
                id="code"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="e.g. 123abc"
                autoFocus
                disabled={loading}
                className="text-lg p-4 rounded-xl border border-border bg-muted/30 dark:bg-white/5 
                  focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all"
              />
              {error && (
                <span className="text-destructive text-sm mt-1">{error}</span>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end p-6">
            <Button
              type="submit"
              disabled={
                loading || !inputCode.trim() || inputCode.trim().length < 6
              }
              className="w-full text-lg py-6 rounded-full group transition-all duration-300"
            >
              {loading ? "Checking..." : "Go"}
              <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
