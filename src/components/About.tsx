import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    { label: "Years Experience", value: "7+" },
    { label: "Faster Releases", value: "20%" },
    { label: "MTTR Reduction", value: "30%" },
    { label: "Multi-Cloud", value: "AWS•Azure•GCP" },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a DevOps Engineer with <strong className="text-foreground">7+ years of experience</strong> in
              multi-cloud platforms, CI/CD automation, Linux administration, and DevSecOps. I specialize in building
              secure, scalable systems with AWS, Azure, Kubernetes, Terraform, Jenkins, and modern observability
              stacks.
            </p>

            <p>
              My expertise lies in <strong className="text-foreground">EKS/AKS migrations</strong>, modular
              Infrastructure as Code with Terraform, advanced Jenkins/GitHub Actions pipelines, and comprehensive
              monitoring with Prometheus, Grafana, and ELK. I've successfully reduced deployment times by 20% and
              Mean Time To Recovery by 30% through automation and DevOps best practices.
            </p>

            <p>
              I thrive in building <strong className="text-foreground">reliable, scalable systems</strong> while
              ensuring security compliance, cost optimization, and team collaboration. From incident response to
              mentoring teams on DevOps workflows, I bring a holistic approach to infrastructure and operations.
            </p>
          </div>

          {/* Metrics Row with stagger */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg bg-card border border-border hover-lift text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 3) * 100}ms` : "0ms",
                }}
              >
                <div className="text-3xl font-bold text-primary mb-1 transition-transform duration-300 hover:scale-110">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-16 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
          <blockquote className="text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto">
            "DevOps isn't just a job — it's how I think and build scalable systems."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
