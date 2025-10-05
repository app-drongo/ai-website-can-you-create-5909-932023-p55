'use client';

/**
 * @editableContentMap
 * { "text-0": "badge", "text-1": "mainTitle", "text-2": "subtitle", "text-3": "description", "text-4": "primaryCTA", "text-5": "secondaryCTA", "text-6": "feature1", "text-7": "feature2", "text-8": "feature3", "text-9": "feature4" }
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
  ArrowRight,
  CheckCircle,
  Play,
} from 'lucide-react';

export default function Features() {
  const badge = 'AI-Powered Platform';
  const mainTitle = 'Transform Your Business';
  const subtitle = 'with Intelligent Automation';
  const description =
    'Acme Tech Solutions delivers cutting-edge AI automation tools that streamline operations, boost productivity, and accelerate growth for forward-thinking enterprises.';
  const primaryCTA = 'Start Free Trial';
  const secondaryCTA = 'Watch Demo';
  const feature1 = 'Deploy in under 5 minutes';
  const feature2 = '99.9% uptime guarantee';
  const feature3 = 'Enterprise-grade security';
  const feature4 = '24/7 expert support';

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleWatchDemo = () => {
    window.location.href = '/demo';
  };

  const stats = [
    { value: '500K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50ms', label: 'Response Time' },
    { value: '150+', label: 'Integrations' },
  ];

  const keyFeatures = [feature1, feature2, feature3, feature4];

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="w-fit px-4 py-2 bg-primary/10 border-primary/20 text-primary"
                data-editable-id="text-0"
              >
                <Zap className="size-4 mr-2" />
                {badge}
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span data-editable-id="text-1">{mainTitle}</span>
                  <br />
                  <span
                    className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    data-editable-id="text-2"
                  >
                    {subtitle}
                  </span>
                </h1>

                <p
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg"
                  data-editable-id="text-3"
                >
                  {description}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-primary flex-shrink-0" />
                  <span
                    className="text-foreground font-medium"
                    data-editable-id={`text-${6 + index}`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleStartTrial}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                data-editable-id="text-4"
              >
                {primaryCTA}
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWatchDemo}
                className="group px-8 py-4 border-2 border-border rounded-xl font-semibold hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2"
                data-editable-id="text-5"
              >
                <Play className="size-5" />
                {secondaryCTA}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <Card className="relative overflow-hidden border-border/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BarChart3 className="size-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Live Dashboard</Badge>
                </div>
                <CardTitle className="text-2xl">Performance Analytics</CardTitle>
                <CardDescription className="text-base">
                  Real-time insights into your automation workflows
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Mock Chart */}
                <div className="h-48 bg-muted/30 rounded-lg flex items-end justify-between p-4 gap-2">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-primary to-primary/60 rounded-t flex-1 transition-all duration-1000 hover:from-accent hover:to-accent/60"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Feature Icons */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Shield, label: 'Security', color: 'text-green-500' },
                    { icon: Globe, label: 'Global', color: 'text-blue-500' },
                    { icon: Zap, label: 'Fast', color: 'text-yellow-500' },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-muted/20">
                      <item.icon className={`size-6 mx-auto mb-2 ${item.color}`} />
                      <div className="text-sm font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 size-16 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 size-20 bg-accent/20 rounded-full blur-xl" />

            {/* Small Feature Cards */}
            <Card className="absolute -top-8 -left-8 p-4 bg-card/80 backdrop-blur-sm border-border/50 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Code2 className="size-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">API Ready</div>
                  <div className="text-xs text-muted-foreground">Easy Integration</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-8 -right-8 p-4 bg-card/80 backdrop-blur-sm border-border/50 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Headphones className="size-4 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm">24/7 Support</div>
                  <div className="text-xs text-muted-foreground">Always Here</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
