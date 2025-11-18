import { Button } from "./ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import profileImage from "figma:asset/45ba7c5572d9ebe06c2b557fb4cee4a494b88875.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
                Based in Sweden
              </div>
              <h1 className="text-gray-900">
                Hi, I'm Busher —
                <br />
                <span className="text-blue-600">Full Stack Developer</span>
                <br />
                .NET | C# | ASP.NET Core | React | AI Integrations
              </h1>
              <p className="text-gray-600 max-w-lg">
                Passionate about building scalable APIs, architecting clean
                solutions, and integrating AI into real-world applications. I
                combine discipline, problem-solving, and a deep technical
                curiosity to deliver structured, maintainable software.
              </p>
              <div className="italic text-gray-500 border-l-4 border-blue-600 pl-4">
                "Simplicity is the ultimate sophistication"
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Explore Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://dl.dropboxusercontent.com/scl/fi/qxsap55hwf7rzm3sbl22w/BusherCV2025-IT.pdf?rlkey=mozxrxvhisb4jirrm1hlhmqzy&st=qkc68qvf&dl=0",
                    "_blank"
                  )
                }
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-gray-900">4+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-gray-900">100%</div>
                <div className="text-gray-600">Commitment</div>
              </div>
              <div>
                <div className="text-gray-900">Clean</div>
                <div className="text-gray-600">Architecture</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Busher Abo Dan"
                className="relative rounded-3xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
