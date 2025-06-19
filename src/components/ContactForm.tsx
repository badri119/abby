"use client";

import { Leaf, Paperclip, X } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    formData.delete("attachment");

    files.forEach((file) => {
      formData.append("attachment", file);
    });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      formRef.current.reset();
      setFiles([]);

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
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles);

    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...newFiles];
      return updatedFiles.slice(0, 3);
    });

    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl relative overflow-hidden h-full w-screen md:w-7/12">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-100 rounded-full opacity-50" />

      <form
        ref={formRef}
        className="relative space-y-8 p-8"
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
            multiple
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
            {files.length === 0
              ? "Attach Files (PDF, PNG, JPEG) - Max 3"
              : "Add more files"}
          </label>

          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <span className="text-sm truncate max-w-[80%]">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {files.length >= 3 && (
                <p className="text-xs text-amber-600">
                  Maximum of 3 files reached
                </p>
              )}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 mt-8"
        >
          <Leaf className="w-5 h-5" />
          Send Message
        </button>
      </form>
      {/* Contact Information */}
      <div className=" py-6 p-4 md:p-4 h-full flex flex-col md:my-5">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Contact Information
        </h2>

        <div className="flex justify-center md:gap-44 flex-grow">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Address</h3>
              <p className="text-gray-600">
                4355 Halley Ave.
                <br />
                Burnaby B.C.
                <br />
                V5G-3C8
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">(604) 657-8636</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <a
                  href="mailto:danny@a-bby.com"
                  className="text-gray-600 hover:text-green-600 rounded-md transition duration-500 hover:scale-110 flex"
                >
                  Danny@a-bby.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
