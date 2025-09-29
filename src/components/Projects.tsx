import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "CI/CD Pipeline Optimization",
      subtitle: "GM Financials - Enterprise Pipeline Automation",
      image: "/assets/projects/p1.jpg",
      description:
        "Architected and optimized enterprise CI/CD pipelines for Java microservices, achieving significant improvements in build and deployment efficiency.",
      outcomes: [
        "Reduced build/deployment times by 20% using Jenkins with Gradle optimization",
        "Standardized Git branching strategies and automated webhooks",
        "Implemented multi-stage pipeline with automated testing and quality gates",
        "Containerized services with Docker and orchestrated deployments on Kubernetes",
      ],
      tech: ["Jenkins", "GitHub Actions", "Gradle", "Docker", "Kubernetes", "SonarQube"],
      caseStudy:
        "This project involved modernizing legacy deployment processes for a financial services platform. By implementing GitOps principles and infrastructure as code, we established a reliable, repeatable deployment pipeline that reduced manual intervention and improved release frequency.",
    },
    {
      title: "Kubernetes Cloud Migration",
      subtitle: "Multi-Cloud EKS/AKS Implementation",
      image: "/assets/projects/p2.jpg",
      description:
        "Led the migration of containerized workloads to managed Kubernetes services across AWS and Azure, implementing best practices for scalability and cost optimization.",
      outcomes: [
        "Migrated 50+ microservices to AWS EKS and Azure AKS",
        "Achieved 20% infrastructure cost savings through autoscaling and resource optimization",
        "Implemented Ingress controllers (ALB/Nginx) with TLS termination",
        "Configured custom domains with Route 53 and Azure DNS",
      ],
      tech: ["AWS EKS", "Azure AKS", "Terraform", "Helm", "Istio", "ArgoCD"],
      caseStudy:
        "The migration strategy involved careful capacity planning, gradual rollout with blue-green deployments, and comprehensive monitoring setup. We established GitOps workflows with ArgoCD for declarative configuration management and implemented service mesh for enhanced observability.",
    },
    {
      title: "Infrastructure as Code Modules",
      subtitle: "Terraform Cloud Architecture",
      image: "/assets/projects/p3.jpg",
      description:
        "Designed and implemented reusable Terraform modules for AWS infrastructure, enabling consistent and secure cloud resource provisioning across multiple environments.",
      outcomes: [
        "Created modular Terraform code for VPC, subnets, security groups, and EKS clusters",
        "Implemented remote state management with S3 and DynamoDB locking",
        "Enabled safe team collaboration through Terraform workspaces",
        "Automated infrastructure provisioning with Python (Boto3) integration",
      ],
      tech: ["Terraform", "AWS", "Python", "Boto3", "CloudFormation", "Ansible"],
      caseStudy:
        "This initiative standardized infrastructure deployment across development, staging, and production environments. The modular approach reduced provisioning time from days to hours and eliminated configuration drift through version-controlled infrastructure definitions.",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-surface/50">
      <div className="container-custom">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden bg-card border border-border hover-lift ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-2">{project.title}</DialogTitle>
                      <p className="text-primary">{project.subtitle}</p>
                    </DialogHeader>

                    <div className="space-y-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                        loading="lazy"
                      />

                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Overview</h4>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Key Outcomes</h4>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">✓</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Case Study</h4>
                        <p className="text-muted-foreground">{project.caseStudy}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
