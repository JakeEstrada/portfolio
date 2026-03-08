import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_albev6a';
const EMAILJS_TEMPLATE_ID = 'template_8oxgqzt';

interface ContactFormProps {
  publicKey?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm({ publicKey }: ContactFormProps) {
  const EMAILJS_PUBLIC_KEY = publicKey ?? import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    if (!EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setErrorMessage('Contact form is not configured. Please set PUBLIC_EMAILJS_PUBLIC_KEY.');
      return;
    }
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      });
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left">
      <div className="code-block p-6 md:p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-mono text-sm text-neutral-700 dark:text-neutral-300 mb-2">
              <span className="terminal-prompt">$</span> <span>Name:</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 font-mono text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Your name"
            />
          </div>

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
