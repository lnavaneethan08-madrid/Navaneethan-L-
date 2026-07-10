import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cloud, Leaf, Satellite, Shield, TrendingUp, Zap } from "lucide-react";

/**
 * Farm-Level Yield Estimation | SIH 2026
 * Design Philosophy: Agricultural Intelligence
 * - Deep Agricultural Green (#2d5f3f) as primary trust/growth color
 * - Warm Saffron (#d97706) for energy and India's identity
 * - Sky Blue (#0ea5e9) for technology and precision
 * - Warm Cream (#faf8f3) for approachability
 * - Poppins (bold headlines) + Inter (body text)
 * - Asymmetric layouts with data-forward design
 */

export default function Home() {
  const handleExplore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProblemStatement = () => {
    alert('Problem Statement ID: 25263\n\nFarm level yield estimation using very-high spatial resolution data and robust crop models\n\nOrganization: Ministry of Agriculture & Farmers Welfare\nDepartment: DoA&FW (PMFBY)\nCategory: Software\nTheme: Agriculture, FoodTech & Rural Development');
  };

  const handleLearnMore = () => {
    const technologySection = document.getElementById('technology');
    if (technologySection) {
      technologySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/manus-storage/logo-mark_3fe19c65.png" 
              alt="YIELD TECH Logo" 
              className="w-10 h-10"
            />
            <span className="font-display font-bold text-lg text-primary hidden sm:inline">
              YIELD TECH
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#technology" className="text-sm font-medium hover:text-primary transition-colors">Technology</a>
            <a href="#impact" className="text-sm font-medium hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button onClick={handleLearnMore} className="bg-primary hover:bg-primary/90 text-white">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
                Know Your Yield <span className="text-primary">Before Harvest</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Satellite data. Real-time insights. Fair insurance. Transform crop loss assessment from guesswork into data-driven certainty using very-high spatial resolution imagery and robust crop models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={handleExplore} size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Explore Solution <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button onClick={handleProblemStatement} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  View Problem Statement
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/manus-storage/hero-satellite-field_25f497e6.png" 
                alt="Satellite view of agricultural fields" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional crop yield estimation relies on manual Crop Cutting Experiments (CCEs) and village-level assessments, leading to delays, inaccuracies, and unfair insurance payouts for farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Manual Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Village-level yield estimates lack precision and are prone to human error, leading to inconsistent insurance claims.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Delayed Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Slow assessment processes delay insurance payouts, straining farmers' finances during critical periods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Unfair Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Insurance Unit-level assessments don't capture field-specific variations, disadvantaging individual farmers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-background to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Our Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining satellite remote sensing, weather data, and ground-level field inputs to deliver precise, fair crop yield estimates at the farm level.
            </p>
          </div>

          {/* Feature 1: Satellite Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="/manus-storage/feature-weather-data_1551dc9e.png" 
                alt="Weather and satellite data integration" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit">
                <Satellite className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Satellite Technology</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-foreground">
                Very-High Spatial Resolution Imagery
              </h3>
              <p className="text-lg text-muted-foreground">
                Leveraging Sentinel-2 satellite data and advanced remote sensing techniques to capture crop health, vegetation indices, and field-level variations with unprecedented precision. Real-time monitoring enables early detection of crop stress and yield anomalies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Multi-spectral analysis of crop health and growth stages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>NDVI and vegetation index calculations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Time-series analysis for crop development tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2: Weather Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full w-fit">
                <Cloud className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Weather Intelligence</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-foreground">
                Real-Time Weather Data Integration
              </h3>
              <p className="text-lg text-muted-foreground">
                Combine satellite imagery with granular weather data—rainfall, temperature, humidity, and soil moisture—to understand environmental factors affecting crop yield. Weather patterns are critical indicators of crop performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Precipitation and irrigation monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Temperature and growing degree-days analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Soil moisture and drought risk assessment</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/manus-storage/feature-yield-prediction_7e1c2169.png" 
                alt="Yield prediction visualization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature 3: Ground-Level Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/manus-storage/feature-insurance-integration_3c90c91a.png" 
                alt="Insurance integration and farmer protection" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full w-fit">
                <Leaf className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Ground Truth</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-foreground">
                Ground-Level Field Inputs
              </h3>
              <p className="text-lg text-muted-foreground">
                Integrate farmer-provided field data—crop variety, planting date, irrigation practices, and soil conditions—with satellite and weather data to build robust, localized crop models that capture farm-specific variations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Crop variety and cultivar-specific models</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Soil health and nutrient status integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Farm-level yield prediction at Insurance Unit level</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              YES-TECH integration with advanced crop models for standardized, scalable yield estimation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-primary">Satellite Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sentinel-2 multispectral imagery with 10m resolution for vegetation monitoring and crop health assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-secondary">Weather APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real-time and historical weather data integration for rainfall, temperature, and soil moisture monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-accent">Crop Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Robust, crop-specific yield estimation models validated at village and Insurance Unit levels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-primary">PMFBY Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Seamless integration with Pradhan Mantri Fasal Bima Yojana for standardized crop loss assessment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Impact & Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming India's agricultural insurance and crop loss assessment through technology-driven precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Precision Yield Estimation</h3>
              <p className="text-muted-foreground">
                Field-level yield predictions replace village-level estimates, capturing farm-specific variations and improving accuracy.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Faster Payouts</h3>
              <p className="text-muted-foreground">
                Automated, data-driven assessment accelerates insurance claim processing, providing timely financial support to farmers.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Fair Insurance</h3>
              <p className="text-muted-foreground">
                Objective, satellite-based assessments eliminate bias and ensure equitable insurance payouts for all farmers.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Farmer Empowerment</h3>
              <p className="text-muted-foreground">
                Real-time crop health insights enable farmers to make informed decisions and optimize agricultural practices.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Scalability</h3>
              <p className="text-muted-foreground">
                Cloud-based YES-TECH system scales seamlessly across regions, supporting PMFBY's national agricultural insurance mandate.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Rural Development</h3>
              <p className="text-muted-foreground">
                Technology-driven agriculture strengthens rural livelihoods and supports India's FoodTech and agricultural innovation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
              Project Details
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Problem Statement ID</p>
                  <p className="text-2xl font-bold text-foreground">25263</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Category</p>
                  <p className="text-2xl font-bold text-foreground">Software</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Organization</p>
                  <p className="text-2xl font-bold text-foreground">Ministry of Agriculture & Farmers Welfare</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Department</p>
                  <p className="text-2xl font-bold text-foreground">DoA&FW (PMFBY)</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Theme</h3>
                <p className="text-lg text-muted-foreground">
                  Agriculture, FoodTech & Rural Development
                </p>
              </div>

              <div className="mt-8 p-6 bg-white border-2 border-primary/20 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">About YES-TECH</h3>
                <p className="text-muted-foreground mb-4">
                  YES-TECH (Yield Estimation System Based on Technology) is India's pioneering technology-driven crop yield estimation framework integrated into the Pradhan Mantri Fasal Bima Yojana (PMFBY). It merges satellite remote sensing, weather data, and ground-level field inputs to deliver objective, precise crop yield estimates at the farm level.
                </p>
                <p className="text-muted-foreground">
                  This solution modernizes India's agricultural insurance system, ensuring fair payouts and farmer empowerment through data-driven decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Agricultural Insurance?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join us in revolutionizing India's crop loss assessment through satellite precision, weather intelligence, and robust crop models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleExplore} size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button onClick={handleLearnMore} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/manus-storage/logo-mark_3fe19c65.png" 
                  alt="YIELD TECH Logo" 
                  className="w-8 h-8"
                />
                <span className="font-display font-bold text-lg">YIELD TECH</span>
              </div>
              <p className="text-white/70 text-sm">
                Transforming agricultural insurance through satellite precision and data-driven innovation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#technology" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Organization</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Ministry of Agriculture & Farmers Welfare</li>
                <li>Department of Agriculture & Farmers Welfare</li>
                <li>PMFBY (Pradhan Mantri Fasal Bima Yojana)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Smart India Hackathon 2026</li>
                <li>Problem Statement ID: 25263</li>
                <li>Category: Software</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>
              © 2026 Farm-Level Yield Estimation | SIH 2026. Empowering Indian agriculture through technology and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
