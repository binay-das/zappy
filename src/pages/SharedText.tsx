import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';
import { CopyButton } from '@/components/CopyButton';
import { FileText, AlertTriangle, Loader2, Calendar, Home } from 'lucide-react';

export default function SharedText() {
  const { code } = useParams();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [createdAt, setCreatedAt] = useState<string | null>(null);

  useEffect(() => {
    if (code) {
      const fetchText = async () => {
        setLoading(true);
        const { data, error: dbError } = await supabase
          .from('shared_texts')
          .select('content, created_at')
          .eq('code', code)
          .single();
        setLoading(false);
        if (dbError || !data) {
          setError('No text found with this code or it has expired.');
          toast.error('No text found with this code or it has expired.');
          return;
        }
        setText(data.content);
        setCreatedAt(data.created_at);
      };
      fetchText();
    }
  }, [code]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="text-lg text-muted-foreground mt-4">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
        <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
        <p className="text-destructive text-xl mb-6">{error}</p>
        <div className="flex gap-4">
          <Link to="/text/code">
            <Button variant="outline">Enter another code</Button>
          </Link>
          <Link to="/">
            <Button>Go to Homepage</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-0">
      <Card className="w-full max-w-3xl mx-auto my-8 shadow-lg border-2 border-primary/20 rounded-2xl">
        <CardHeader className="text-center">
        <CardTitle className="text-xl sm:text-4xl font-bold mt-4 flex gap-4 justify-center items-center">
          <FileText className="w-8 h-8 text-primary" />
          Shared Text</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            This is the text that was shared with you.
            {createdAt && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar className="w-4 h-4" />
                <span>Created on: {new Date(createdAt).toLocaleString()}</span>
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="bg-muted p-6 rounded-lg whitespace-pre-wrap break-words text-base sm:text-lg leading-relaxed">
            {text}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center p-6 gap-4">
          <CopyButton text={text} />
          <Link to="/">
            <Button variant="outline" className="group">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
