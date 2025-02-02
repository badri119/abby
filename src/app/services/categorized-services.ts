import { Service } from "@/types";
import { services } from "@/components/servicesList";

export interface ServiceCategory {
  name: string;
  services: Array<Service>;
}

const categories: { name: string; serviceIds: string[] }[] = [
  {
    name: "Hedge and Tree Care",
    serviceIds: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    name: "Lawn and Garden",
    serviceIds: ["8", "9", "10", "11", "12"],
  },
  {
    name: "Landscaping Installation (Hardscape)",
    serviceIds: [
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ],
  },
  {
    name: "Construction, Fence and Paver repairs",
    serviceIds: [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
    ],
  },
];

export const categorizedServices: ServiceCategory[] = categories.map(
  (category) => ({
    name: category.name,
    services: services.filter((service) =>
      category.serviceIds.includes(service.id)
    ),
  })
);
