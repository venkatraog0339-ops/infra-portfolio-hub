import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      company: "GM Financials",
      role: "DevOps Cloud Engineer",
      period: "Jan 2024 – Present",
      location: "Commerce, TX",
      highlights: [
        "Reduced Java microservice build/deploy times by ~20% using Jenkins with Gradle",
        "Migrated workloads to AWS EKS & Azure AKS, achieving ~20% cost savings via autoscaling",
        "Built modular Terraform modules for VPC, EKS, and networking with S3 + DynamoDB remote state",
        "Implemented ALB/Nginx Ingress with TLS and Route 53 custom domains",
        "Created Dynatrace dashboards and alerts, reducing MTTR by ~30%",
      ],
    },
    {
      company: "Technox Technologies",
      role: "DevOps Engineer",
      period: "Aug 2019 – Aug 2022",
      location: "Remote",
      highlights: [
        "Deployed Prometheus, Grafana, and ELK stack for comprehensive monitoring",
        "Provisioned AWS infrastructure using Terraform with automated deployments",
        "Hardened IAM policies and conducted AWS Inspector security assessments",
        "Optimized AWS costs through rightsizing and reserved instances",
        "Automated OS patching and configuration management with Ansible",
      ],
    },
    {
      company: "NeoXam",
      role: "Linux Systems Administrator",
      period: "Feb 2017 – Jul 2019",
      location: "India",
      highlights: [
        "Administered RHEL/CentOS servers and maintained high availability",
        "Automated system tasks with Bash and Python scripting",
        "Configured and optimized nginx and Apache reverse proxies",
        "Performed on-call operations support and incident management",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        >
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-20 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-glow" />

                {/* Content Card */}
                <div className="p-6 rounded-xl bg-card border border-border hover-lift">
                  <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground font-medium">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
