'use client';

/**
 * @editableContentMap
 * { "text-0": "badge", "text-1": "title", "text-2": "subtitle", "text-3": "description", "text-4": "primaryCTA", "text-5": "secondaryCTA" }
 */

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default props for editable content
  const badge = 'New: AI-Powered Platform';
  const title = 'Transform Your Business with Smart Technology';
  const subtitle = 'Next-Generation Solutions';
  const description =
    'Streamline operations, boost productivity, and scale effortlessly with our cutting-edge SaaS platform designed for modern enterprises.';
  const primaryCTA = 'Start Free Trial';
  const secondaryCTA = 'Watch Demo';

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              <span data-editable-id="text-0">{badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span data-editable-id="text-1">{title}</span>
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                <span data-editable-id="text-2">{subtitle}</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              <span data-editable-id="text-3">{description}</span>
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                'Cloud-Native Architecture',
                'Enterprise Security',
                'Real-Time Analytics',
                '24/7 Expert Support',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-7 text-base"
                onClick={handlePrimaryAction}
                data-editable-id="text-4"
              >
                {primaryCTA}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={handleSecondaryAction}
                data-editable-id="text-5"
              >
                <Play className="mr-2 size-5" /> {secondaryCTA}
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Dashboard mockup */}
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop"
                  alt="Acme Tech Solutions Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Live indicator */}
              <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium shadow backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2"></span>
                Live Platform
              </div>
            </div>

            {/* Floating metrics */}
            <div className="absolute -right-6 -top-6 hidden w-40 rounded-xl border bg-background/95 p-4 shadow-xl backdrop-blur-sm sm:block">
              <p className="text-xs text-muted-foreground">Performance Boost</p>
              <p className="text-lg font-bold text-primary">
                <span>300%</span>
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-40 rounded-xl border bg-background/95 p-4 shadow-xl backdrop-blur-sm sm:block">
              <p className="text-xs text-muted-foreground">Uptime Guarantee</p>
              <p className="text-lg font-bold text-primary">
                <span>99.9%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="relative max-w-4xl mx-4 bg-card rounded-xl shadow-2xl border">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <Play className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
