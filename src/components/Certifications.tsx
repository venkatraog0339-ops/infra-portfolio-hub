import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      level: "Associate",
      image: "/assets/certs/aws-saa.png",
      description: "Validates expertise in designing distributed systems on AWS with best practices for security, reliability, and cost optimization.",
      verifyUrl: "#",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      level: "CKA",
      image: "/assets/certs/cka.png",
      description: "Demonstrates proficiency in Kubernetes cluster administration, including installation, configuration, and troubleshooting.",
      verifyUrl: "#",
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        >
          Professional <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative rounded-xl p-8 bg-card border border-border hover-lift overflow-hidden ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Verified Badge */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-8 py-1 transform rotate-45 translate-x-4 -translate-y-4 shadow-lg">
                  Verified
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

              <div className="relative flex flex-col items-center text-center">
                {/* Logo */}
                <div className="w-24 h-24 mb-6 rounded-lg bg-background p-4 flex items-center justify-center border border-border shadow-md">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-primary font-semibold">{cert.level}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(cert.verifyUrl, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Verify Credential
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Pills */}
        <div className={`mt-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Jenkins",
              "GitHub Actions", "GitLab CI", "ArgoCD", "Ansible", "Prometheus",
              "Grafana", "ELK Stack", "Python", "Bash", "CloudFormation"
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-all hover-lift cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
