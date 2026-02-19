import { useState, useRef, useEffect } from 'react';

interface FormData {
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    message: '',
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [RecaptchaComponent, setRecaptchaComponent] = useState<React.ComponentType<any> | null>(null);
  const [isClient, setIsClient] = useState(false);
  const recaptchaRef = useRef<any>(null);

  useEffect(() => {
    // Only run on client side
    setIsClient(true);
    
    // Dynamically import ReCAPTCHA only on client side
    import('react-google-recaptcha').then((mod) => {
      const Component = mod.default || mod;
      if (Component) {
        setRecaptchaComponent(Component);
      }
    }).catch((err) => {
      console.error('Failed to load ReCAPTCHA:', err);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!captchaValue) {
      setStatus('error');
      setErrorMessage('Please complete the CAPTCHA');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captcha: captchaValue,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', subject: '', message: '' });
        setCaptchaValue(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setCaptchaValue(null);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left">
      <div className="code-block p-6 md:p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block font-mono text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              <span className="terminal-prompt">$</span> <span>Email:</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 font-mono text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-mono text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              <span className="terminal-prompt">$</span> <span>Subject:</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 font-mono text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              <span className="terminal-prompt">$</span> <span>Message:</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 font-mono text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
              placeholder="Tell me about your project, question, or just say hi..."
            />
          </div>

          <div className="flex justify-center py-4">
            {isClient && RecaptchaComponent ? (
              <RecaptchaComponent
                ref={recaptchaRef}
                sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || ''}
                onChange={(value: string | null) => setCaptchaValue(value)}
              />
            ) : (
              <div className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">
                Loading CAPTCHA...
              </div>
            )}
          </div>

          {status === 'error' && errorMessage && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
              <p className="font-mono text-sm text-red-700 dark:text-red-400">
                <span className="terminal-prompt">!</span> {errorMessage}
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
              <p className="font-mono text-sm text-green-700 dark:text-green-400">
                <span className="terminal-prompt">✓</span> Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <span className="font-mono">$ sending...</span>
            ) : (
              <span className="font-mono">$ send message</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

