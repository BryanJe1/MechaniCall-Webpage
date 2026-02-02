import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { AboutSection } from '@/components/about-section';
import { CTASection } from '@/components/cta-section';
import { DownloadSection } from '@/components/download-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AboutSection />
        <CTASection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
