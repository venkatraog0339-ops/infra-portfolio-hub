import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Venkata Rao Gonugunta — DevOps & Cloud Engineer";

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText, fullText]);

  const handleResumeView = () => {
    window.open("/assets/Venkata_Rao_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Venkata_Rao_Resume.pdf";
    link.download = "Venkata_Rao_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-slide-up order-2 lg:order-1">
            {/* Typing Effect Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[180px] md:min-h-[200px]">
              <span className="text-foreground">{displayText}</span>
              {!isTypingComplete && (
                <span className="inline-block w-1 h-10 md:h-12 ml-1 bg-primary animate-pulse" />
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I design, automate, and secure multi-cloud infrastructures using AWS, Azure, Kubernetes, and Terraform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={handleResumeView}
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-glow transition-all"
              >
                View Resume
              </Button>
              <Button
                onClick={handleResumeDownload}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg transition-all"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover-lift"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover-lift"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:venkatraog0339@gmail.com"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover-lift"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-scale-in order-1 lg:order-2">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500 animate-glow" />

              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 shadow-lg">
                <img
                  src="/assets/profile.jpg"
                  alt="Venkata Rao Gonugunta - DevOps Engineer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
