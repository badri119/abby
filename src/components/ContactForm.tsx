"use client";

import { Leaf, Paperclip } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Create FormData object
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData, // Send formData directly instead of JSON
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Clear the form
      formRef.current.reset();
      setFileName("");

      toast({
        title: "Message sent",
        description: "Your message has been sent successfully!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden h-full">
      {/* Decorative Elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-100 rounded-full opacity-50" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-50 rounded-full opacity-50" />

      <form
        ref={formRef}
        className="relative space-y-8"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            className="w-full pb-2 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors peer placeholder-transparent"
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-1 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-sm transition-all"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="w-full pb-2 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors peer placeholder-transparent"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-1 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-sm transition-all"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full pb-2 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors peer placeholder-transparent"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 -top-1 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-sm transition-all"
          >
            Phone Number
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Address"
            className="w-full pb-2 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors peer placeholder-transparent"
          />
          <label
            htmlFor="address"
            className="absolute left-0 -top-1 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-sm transition-all"
          >
            Address
          </label>
        </div>

        <div className="relative">
          <textarea
            id="service"
            name="service"
            rows={4}
            required
            placeholder="Service Interest"
            className="w-full pb-2 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors peer placeholder-transparent resize-none"
          />
          <label
            htmlFor="service"
            className="absolute left-0 -top-1 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-sm transition-all"
          >
            What Product or Service are you interested in?
          </label>
        </div>

        <div className="relative">
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
          />
          <label
            htmlFor="attachment"
            className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-green-600 transition-colors"
          >
            <Paperclip className="w-4 h-4" />
            {fileName || "Attach File (PDF, PNG, JPEG)"}
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 mt-8"
        >
          <Leaf className="w-5 h-5" />
          Send Message
        </button>
      </form>
    </div>
  );
}
