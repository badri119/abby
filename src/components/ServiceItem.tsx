"use client";

import { Leaf } from "lucide-react";
import { Service } from "@/types";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <div className="group relative flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 transition-all duration-300">
      <div className="flex items-start gap-3 w-full">
        <div className="relative">
          <Leaf className="w-6 h-6 text-green-600 transform rotate-45 transition-transform duration-300 group-hover:rotate-90" />
        </div>
        <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          {service.title}
        </span>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-100 rounded-lg transition-colors duration-300" />
    </div>
  );
};

export default ServiceItem;
