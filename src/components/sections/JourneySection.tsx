const timelineEvents = [{
  year: "1989",
  title: "The Beginning",
  description: "Group's entry into the kitchen furniture & wardrobe market in Greece."
}, {
  year: "1998",
  title: "Strategic Partnerships",
  description: "Becomes the official representative of Bauformat, Ballerina, and Burger kitchens."
}, {
  year: "2000",
  title: "Retail Expansion",
  description: "Expands retail presence by owning 3 stores in the Attica region."
}, {
  year: "2005",
  title: "Premium Portfolio",
  description: "Introduces SieMatic to the Greek market as its exclusive representative."
}, {
  year: "2009",
  title: "Biente Acquisition",
  description: "Acquisition of Biente, expanding the Group's influence in the furniture sector."
}, {
  year: "2010",
  title: "Nationwide Presence",
  description: "Rapid growth leads to 10 owned stores across Greece."
}, {
  year: "2017",
  title: "Brand Unification",
  description: "Merger of Biente and Möbel Art, forming a unified and stronger furniture brand."
}, {
  year: "2020",
  title: "High-End Design",
  description: "Begins representation of Àper and Boffi in Greece."
}, {
  year: "2023",
  title: "Real Estate Venture",
  description: "Launches A.State Boutique Real Estate Agency, marking expansion into luxury real estate."
}, {
  year: "2025",
  title: "The Future",
  description: "Stay tuned for the next chapter in our journey!"
}];
const JourneySection = () => {
  return <section id="journey" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="label-uppercase mb-4 block font-mono">Our History</span>
          <h2 className="heading-section text-foreground mb-4 font-mono">
            A Journey of Growth
          </h2>
          <div className="line-separator mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => <div key={event.year} className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Year Marker */}
                <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background transform -translate-x-1/2 mt-2 z-10`} />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <span className="text-accent font-serif text-2xl font-medium">
                    {event.year}
                  </span>
                  <h3 className="text-xl text-foreground mt-1 mb-2 font-mono">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-mono">
                    {event.description}
                  </p>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default JourneySection;