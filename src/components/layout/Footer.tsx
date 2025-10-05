'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

/**
 * @editableContentMap
 * { "text-0": "brandName", "text-1": "description", "text-2": "email", "text-3": "phone", "text-4": "address", "text-5": "newsletterTitle", "text-6": "newsletterPlaceholder", "text-7": "newsletterDisclaimer", "text-8": "ctaText", "text-9": "copyright", "text-10": "madeWithText", "text-11": "followText" }
 */

export default function Footer() {
  const router = useRouter();

  // Brand and content props
  const brandName = 'Acme Tech Solutions';
  const description =
    'Delivering cutting-edge technology solutions for modern businesses. Trusted by industry leaders to transform operations and drive innovation through advanced software development.';
  const email = 'solutions@acmetech.com';
  const phone = '+1 (555) 847-2900';
  const address = '2500 Innovation Drive, Tech Hub 200';
  const newsletterTitle = 'Tech Insights';
  const newsletterPlaceholder = 'Your business email';
  const newsletterDisclaimer =
    'Receive industry insights and solution updates. Unsubscribe anytime.';
  const ctaText = 'Get Started';
  const copyright = '© 2024 Acme Tech Solutions. All rights reserved.';
  const madeWithText = 'Engineered with';
  const followText = 'Connect with us:';

  // Main navigation items
  const mainNavigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Contact', href: '/' },
  ];

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Software', href: '/' },
        { name: 'Cloud Migration', href: '/' },
        { name: 'System Integration', href: '/' },
        { name: 'Data Analytics', href: '/' },
        { name: 'API Development', href: '/' },
        { name: 'Technical Consulting', href: '/' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Financial Services', href: '/' },
        { name: 'Healthcare', href: '/' },
        { name: 'Manufacturing', href: '/' },
        { name: 'Retail & E-commerce', href: '/' },
        { name: 'Government', href: '/' },
        { name: 'Education', href: '/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Technical Documentation', href: '/' },
        { name: 'Developer Portal', href: '/' },
        { name: 'Case Studies', href: '/' },
        { name: 'White Papers', href: '/' },
        { name: 'Implementation Guides', href: '/' },
        { name: 'System Status', href: '/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Privacy Policy', href: '/' },
        { name: 'Service Agreement', href: '/' },
        { name: 'Security Standards', href: '/' },
        { name: 'Compliance', href: '/' },
        { name: 'Technical Support', href: '/' },
        { name: 'Professional Services', href: '/' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    router.push('/');
  };

  const handleNewsletterSignup = () => {
    // Handle newsletter subscription
    console.log('Newsletter signup initiated');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <footer className="bg-background border-t border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-bold text-xl" data-editable-id="text-0">
                  {brandName}
                </span>
              </Link>
              <p
                className="text-muted-foreground text-sm leading-relaxed mb-6"
                data-editable-id="text-1"
              >
                {description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-2">
                  {email}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-3">
                  {phone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-4">
                  {address}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable-id="text-5">
                {newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={newsletterPlaceholder}
                  data-editable-id="text-6"
                  className="flex-1 px-3 py-2 text-sm border border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground" data-editable-id="text-7">
                {newsletterDisclaimer}
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable-id="text-9">{copyright}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <span data-editable-id="text-10">{madeWithText}</span>{' '}
                <Heart className="size-3 text-red-500 fill-current" /> by our team
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable-id="text-11">
                {followText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border/30">
            {mainNavigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCTA}
              className="text-xs h-auto p-0 text-muted-foreground hover:text-foreground"
              data-editable-id="text-8"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
