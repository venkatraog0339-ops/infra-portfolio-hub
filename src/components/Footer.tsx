import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-primary hover:bg-primary-glow shadow-lg hover:shadow-glow animate-scale-in"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </Button>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-surface/80 backdrop-blur-sm">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Venkata Rao Gonugunta. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <button
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Back to Top
              </button>
              <a
                href="/assets/Venkata_Rao_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Resume
              </a>
              <a
                href="mailto:venkatraog0339@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
