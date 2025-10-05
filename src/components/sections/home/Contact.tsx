'use client';

/**
 * @editableContentMap
 * { "text-0": "badge", "text-1": "title", "text-2": "description", "text-3": "primaryCTA", "text-4": "secondaryCTA" }
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle, Zap, Shield, Rocket } from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };

  const handleSecondaryAction = () => {
    setIsVideoPlaying(true);
  };
  // ACTION_PLACEHOLDER_END

  const badge = 'Revolutionary AI Platform';
  const title = 'Transform Your Business with Next-Generation AI Technology';
  const description =
    'Acme Tech Solutions delivers cutting-edge artificial intelligence that automates complex workflows, reduces operational costs by 60%, and scales with your enterprise needs.';
  const primaryCTA = 'Start Free Trial';
  const secondaryCTA = 'Watch Demo';

  const features = [
    {
      icon: Zap,
      text: '10x faster processing with quantum-enhanced algorithms',
    },
    {
      icon: Shield,
      text: 'Enterprise-grade security with zero-trust architecture',
    },
    {
      icon: Rocket,
      text: 'Deploy in minutes with our cloud-native infrastructure',
    },
  ];

  const stats = [
    { value: '500K+', label: 'Active Users' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '60%', label: 'Cost Reduction' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/20 text-primary bg-primary/5"
                data-editable-id="text-0"
              >
                {badge}
              </Badge>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                data-editable-id="text-1"
              >
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                data-editable-id="text-2"
              >
                {description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handlePrimaryAction}
                size="lg"
                className="text-base px-8 py-6 group"
                data-editable-id="text-3"
              >
                {primaryCTA}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleSecondaryAction}
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 group"
                data-editable-id="text-4"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                {secondaryCTA}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 overflow-hidden border border-border/50">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                {/* Floating Elements */}
                <div className="absolute top-6 left-6 size-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                  <Zap className="size-8 text-primary" />
                </div>

                <div className="absolute top-20 right-8 size-12 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                  <Shield className="size-6 text-accent" />
                </div>

                <div className="absolute bottom-20 left-8 size-14 rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center">
                  <Rocket className="size-7 text-secondary" />
                </div>

                {/* Central Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isVideoPlaying ? (
                    <div className="text-center space-y-4">
                      <div
                        className="size-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center mx-auto cursor-pointer hover:bg-primary/30 transition-colors group"
                        onClick={handleSecondaryAction}
                      >
                        <Play className="size-10 text-primary ml-1 group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">See AI in Action</p>
                    </div>
                  ) : (
                    <div className="size-20 rounded-full bg-primary flex items-center justify-center animate-pulse">
                      <CheckCircle className="size-10 text-primary-foreground" />
                    </div>
                  )}
                </div>

                {/* Animated Dots */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="size-2 rounded-full bg-primary/40 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 size-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 size-32 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-xl"></div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
