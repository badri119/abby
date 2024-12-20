import { Check } from "lucide-react";
import { ProcessPoint } from "@/types";
import Image from "next/image";

const processPoints: ProcessPoint[] = [
  {
    id: "1",
    text: "Our goal is building long-term client relations, to develop and maintain your outdoor space as it matures.",
  },
  {
    id: "2",
    text: "We inform and explain what's achievable, what works and what doesn't. Then, we collaborate to find a solution for your unique space that you'll be satisfied with.",
  },
  {
    id: "3",
    text: "For 22 years, we have been honing our landscaping skills in our local area. It's a source of great pride for us to provide services to the neighborhoods we grew up in.",
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {processPoints.map((point) => (
              <div key={point.id} className="flex items-start gap-3">
                <Check className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-lg">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-full overflow-hidden">
            <Image
              src=""
              alt="Landscaping process"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-serif">
            Go with the rest and pick the Best!
            <br />
            Choose A-BBY
            <br />
            Fair Rates, Reliable Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
