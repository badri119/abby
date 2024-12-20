import Image from "next/image";
import { TestimonialType } from "@/types";

const testimonial: TestimonialType = {
  quote: "My garden is my most beautiful masterpiece",
  author: "Claude Monet",
  role: "Artist",
  image: "/api/placeholder/150/150",
};

const ownerInfo = {
  name: "Danny Siggers",
  role: "Owner operator since 2008",
  phone: "604 657 8636",
  email: "Email",
};

const Testimonial: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="text-4xl font-serif mb-4">
              &quot;{testimonial.quote}&quot;
            </p>
            <footer className="text-lg">~ {testimonial.author}</footer>
          </blockquote>

          <div className="mt-12">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src={testimonial.image}
                alt={ownerInfo.name}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{ownerInfo.name}</h3>
            <p className="text-gray-300">
              {ownerInfo.role}
              <br />
              {ownerInfo.phone}
              <br />
              {ownerInfo.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
