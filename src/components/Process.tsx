import { Check } from "lucide-react";
import { ProcessPoint } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Tables from "../../public/tables.jpg";
import Grass from "../../public/grass.jpg";

const processPoints: ProcessPoint[] = [
  {
    id: "1",
    text: "Our goal is building long-term client relations, to develop and maintain your outdoor space as it matures.",
  },
  {
    id: "2",
    text: "We inform and explain what's achievable, what works and what doesn't. Then, we collaborate to find a solution for your unique space that you'll be satisfied with. Whether it's a challenging environment, low maintenance goals, keeping up with the Joneses, specific budget constraints, or you simply want a really nice yard!",
  },
  {
    id: "3",
    text: "For 22 years, we have been honing our landscaping skills in our local area. It's a source of great pride for us to provide services to the neighborhoods we grew up in.",
  },
];

const additionalPoints: ProcessPoint[] = [
  {
    id: "4",
    text: "Drug, Smoke and Alcohol free",
  },
  {
    id: "5",
    text: "Small Job specialist",
  },
  {
    id: "6",
    text: "We rarely if ever use subcontractors",
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {processPoints.map((point) => (
              <div key={point.id} className="flex items-start gap-3">
                <Check className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-lg">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Grass}
              alt="Professional hedge maintenance"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Tables}
              alt="Garden transformation"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="text-center mb-8">
              <p className="text-2xl font-serif mb-4">
                Go with the rest and pick the Best!
                <br />
                Choose A-BBY
                <br />
                Fair Rates, Reliable Service
              </p>
              <Link
                href="/contact"
                className="text-2xl font-bold  hover:bg-green-600 hover:text-white hover:rounded-md px-4 py-2 duration-500 text-green-600"
              >
                Contact us now
              </Link>
            </div>

            <div className="space-y-4">
              {additionalPoints.map((point) => (
                <div key={point.id} className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
