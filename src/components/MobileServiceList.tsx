"use client";

import { useState } from "react";
import { Leaf, ChevronDown } from "lucide-react";
import { ServiceCategory } from "@/app/services/categorized-services";

interface MobileServiceListProps {
  category: ServiceCategory;
}

const MobileServiceList = ({ category }: MobileServiceListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">
          {category.name}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-2 bg-white rounded-lg shadow-sm">
          {category.services.map((service) => (
            <div
              key={service.id}
              className="flex items-start gap-2 p-4 border-b last:border-b-0"
            >
              <Leaf className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-700">{service.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileServiceList;
