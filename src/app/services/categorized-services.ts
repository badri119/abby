import { Service } from "@/types";
import { services } from "@/components/services";

export interface ServiceCategory {
  name: string;
  services: Array<Service>;
}

// Define the categories and their service IDs
const categories: { name: string; serviceIds: string[] }[] = [
  {
    name: "Garden & Tree Care",
    serviceIds: ["1", "2", "3", "4", "5", "12"],
  },
  {
    name: "Landscaping & Installation",
    serviceIds: ["6", "7", "8", "21", "22", "26", "27"],
  },
  {
    name: "Lawn Maintenance",
    serviceIds: ["9", "10", "11", "23"],
  },
  {
    name: "Construction & Repair",
    serviceIds: ["13", "14", "15", "16", "17", "18", "19", "20", "24", "25"],
  },
];

// Create categorized services array
export const categorizedServices: ServiceCategory[] = categories.map(
  (category) => ({
    name: category.name,
    services: services.filter((service) =>
      category.serviceIds.includes(service.id)
    ),
  })
);
