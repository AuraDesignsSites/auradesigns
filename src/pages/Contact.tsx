import { useState } from 'react';
import { Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import SectionHeader from '@/components/Common/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const processSteps = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Send us a message",
      description: "Tell us about your project and goals"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24-48 hour response", 
      description: "We'll review and get back to you quickly"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Discovery call",
      description: "30-minute call to discuss your needs and timeline"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            title="Let's Build Something Great Together"
            description="Ready to transform your digital presence? Tell us about your project and we'll get back to you within 24 hours."
            centered
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you're a startup looking to make a splash or an established business 
                  ready to modernize, we're here to help. Our team responds to all inquiries 
                  personally and promptly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email us directly</p>
                      <a 
                        href="mailto:hello@auradesigns.studio" 
                        className="text-primary hover:underline"
                      >
                        hello@auradesigns.studio
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">What to expect:</h4>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{step.title}</h5>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Current Website</Label>
                    <Input 
                      id="website"
                      type="url"
                      placeholder="https://"
                      value={formData.website}
                      onChange={(e) => handleChange('website', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                        <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-plus">$10,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select onValueChange={(value) => handleChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea 
                    id="message"
                    rows={5}
                    placeholder="Describe your project goals, target audience, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                  />
                </div>

                {/* Honeypot field for spam protection */}
                <input 
                  type="text" 
                  name="website_url" 
                  style={{ display: 'none' }} 
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24-48 hours with next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success State - Hidden by default, would show after form submission */}
      <div className="hidden">
        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thanks for reaching out!</h2>
            <p className="text-xl text-muted-foreground mb-6">
              We've received your message and will get back to you within 24 hours.
            </p>
            <p className="text-muted-foreground">
              In the meantime, feel free to check out our <a href="/projects" className="text-primary hover:underline">recent work</a> or 
              learn more <a href="/about" className="text-primary hover:underline">about our process</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;