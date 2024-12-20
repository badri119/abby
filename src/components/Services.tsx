import ServiceItem from "./ServiceItem";
import MobileServiceList from "./MobileServiceList";
import { categorizedServices } from "@/app/services/categorized-services";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {categorizedServices.map((category) => (
            <MobileServiceList key={category.name} category={category} />
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorizedServices.map((category) =>
            category.services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
