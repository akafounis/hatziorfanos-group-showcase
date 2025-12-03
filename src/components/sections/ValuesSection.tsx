import { TrendingUp, Lightbulb, Target, Award, Handshake } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description:
      "We are committed to continuous development, expanding our presence through strategic investments and long-term business planning.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurial Vision",
    description:
      "With a forward-thinking approach, we explore new opportunities, foster innovation, and drive business expansion.",
  },
  {
    icon: Target,
    title: "Strategic Investments",
    description:
      "We actively invest in new ventures and partnerships, strengthening our position in the market and creating long-term value.",
  },
  {
    icon: Award,
    title: "Leadership & Innovation",
    description:
      "We lead with expertise, embracing change and adopting cutting-edge solutions to stay ahead in an evolving business landscape.",
  },
  {
    icon: Handshake,
    title: "Enduring Partnerships",
    description:
      "We build strong collaborations based on trust, shared vision, and mutual success.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="label-uppercase mb-4 block">What We Stand For</span>
          <h2 className="heading-section text-foreground mb-4">Our Values</h2>
          <div className="line-separator mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-8 bg-card border border-border rounded-sm hover-lift ${
                index === values.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <value.icon className="w-6 h-6 text-foreground group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="heading-card text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
