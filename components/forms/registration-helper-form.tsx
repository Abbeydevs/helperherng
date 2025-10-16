"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  User,
  MapPin,
  GraduationCap,
  Heart,
  CheckCircle,
  AlertCircle,
  Loader2,
  Info,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const RegisterHelperForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",

    // Background Information
    maritalStatus: "",
    numberOfChildren: "",
    educationLevel: "",
    previousExperience: "",

    // Skills and Services
    skills: [] as string[],
    availability: [] as string[],
    preferredWorkArea: "",

    // References and Additional Info
    hasReferences: "",
    referenceDetails: "",
    additionalInfo: "",

    // Consent and Agreement
    consentToTraining: false,
    agreeToTerms: false,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const availableSkills = [
    "House Cleaning",
    "Cooking (Local dishes)",
    "Cooking (Continental dishes)",
    "Laundry & Ironing",
    "Childcare",
    "Elder Care",
    "Pet Care",
    "Grocery Shopping",
    "General Domestic Assistance",
  ];

  const availabilityOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekends",
    "Flexible hours",
    "Emergency/On-call",
  ];

  const educationLevels = [
    "No formal education",
    "Primary education",
    "Secondary education (WAEC/NECO)",
    "OND/NCE",
    "HND/Bachelor's degree",
    "Postgraduate",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSkillsChange = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleAvailabilityChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter((a) => a !== option)
        : [...prev.availability, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const templateParams = {
        to_name: "Helpher.ng Team",
        // Personal Information
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth,
        address: formData.address,

        // Background
        marital_status: formData.maritalStatus,
        number_of_children: formData.numberOfChildren || "Not specified",
        education_level: formData.educationLevel,
        previous_experience:
          formData.previousExperience || "No previous experience specified",

        // Skills and Availability
        skills: formData.skills.join(", ") || "No skills selected",
        availability:
          formData.availability.join(", ") || "No availability specified",
        preferred_work_area: formData.preferredWorkArea || "Not specified",

        // References
        has_references: formData.hasReferences,
        reference_details:
          formData.referenceDetails || "No reference details provided",
        additional_info:
          formData.additionalInfo || "No additional information provided",

        message: `New helper registration from ${formData.fullName}`,
      };

      await emailjs.send(
        "service_28v4a1i", // EmailJS service ID
        "template_8yqfiqc", // EmailJS template ID
        templateParams,
        "6M_qKeA9zoTF9AVb-" // EmailJS public key
      );

      setStatus("success");
      setMessage(
        "Your registration has been submitted successfully! We'll contact you within 48 hours to schedule your initial interview and training."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        maritalStatus: "",
        numberOfChildren: "",
        educationLevel: "",
        previousExperience: "",
        skills: [],
        availability: [],
        preferredWorkArea: "",
        hasReferences: "",
        referenceDetails: "",
        additionalInfo: "",
        consentToTraining: false,
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setMessage(
        "Sorry, there was an error submitting your registration. Please try again or contact us directly."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join as a <span className="text-orange-500">Helper</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Take the first step towards financial independence. Join our
              community of empowered women providing dignified domestic services
              across Lagos.
            </p>

            {/* Info Box */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-orange-800 text-left">
                  <p className="font-medium mb-1">
                    What happens after registration:
                  </p>
                  <ul className="space-y-1">
                    <li>• Free skills training and certification</li>
                    <li>• Background verification process</li>
                    <li>• Job matching with suitable families</li>
                    <li>• Ongoing support and career development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-orange-500 mr-3" />
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <MapPin className="inline h-4 w-4 mr-2" />
                    Home Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full address in Lagos"
                  />
                </div>
              </div>

              {/* Background Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="h-6 w-6 text-orange-500 mr-3" />
                  Background Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="maritalStatus"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Marital Status *
                    </label>
                    <select
                      id="maritalStatus"
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select marital status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="numberOfChildren"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Number of Children
                    </label>
                    <select
                      id="numberOfChildren"
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select number of children</option>
                      <option value="0">None</option>
                      <option value="1">1 child</option>
                      <option value="2">2 children</option>
                      <option value="3">3 children</option>
                      <option value="4+">4 or more children</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="educationLevel"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Education Level *
                    </label>
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select education level</option>
                      {educationLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredWorkArea"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Work Area in Lagos
                    </label>
                    <input
                      type="text"
                      id="preferredWorkArea"
                      name="preferredWorkArea"
                      value={formData.preferredWorkArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Victoria Island, Lekki, Ikeja"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="previousExperience"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Previous Work Experience
                    </label>
                    <textarea
                      id="previousExperience"
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Describe any previous work experience, domestic work, or relevant skills you have..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Skills and Services */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-orange-500 mr-3" />
                  Skills and Services
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    What services can you provide? (Select all that apply) *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {availableSkills.map((skill) => (
                      <label
                        key={skill}
                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill)}
                          onChange={() => handleSkillsChange(skill)}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          {skill}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    When are you available to work? (Select all that apply) *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {availabilityOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.availability.includes(option)}
                          onChange={() => handleAvailabilityChange(option)}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  References
                </h3>

                <div className="mb-6">
                  <label
                    htmlFor="hasReferences"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Do you have any references? *
                  </label>
                  <select
                    id="hasReferences"
                    name="hasReferences"
                    value={formData.hasReferences}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes, I have references</option>
                    <option value="no">No, I don&apos;t have references</option>
                  </select>
                </div>

                {formData.hasReferences === "yes" && (
                  <div>
                    <label
                      htmlFor="referenceDetails"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Reference Details
                    </label>
                    <textarea
                      id="referenceDetails"
                      name="referenceDetails"
                      value={formData.referenceDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please provide names, phone numbers, and relationship of your references..."
                    />
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us anything else you'd like us to know about you, your goals, or your situation..."
                />
              </div>

              {/* Consent and Agreement */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Agreement
                </h3>

                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="consentToTraining"
                      checked={formData.consentToTraining}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded mt-1"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      I consent to participate in the free training program and
                      understand that completion of training is required before
                      job placement. *
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded mt-1"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      I agree to the terms and conditions and privacy policy of
                      Helpher.ng. I understand that my information will be used
                      to match me with suitable employment opportunities. *
                    </span>
                  </label>
                </div>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <p className="text-green-800">{message}</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                  <p className="text-red-800">{message}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={
                    status === "loading" ||
                    !formData.consentToTraining ||
                    !formData.agreeToTerms ||
                    formData.skills.length === 0 ||
                    formData.availability.length === 0
                  }
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Registration...
                    </>
                  ) : (
                    <>
                      <Heart className="mr-2 h-5 w-5" />
                      Submit Registration
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 mt-3">
                  We&apos;ll review your application and contact you within 48
                  hours to schedule your interview and training.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterHelperForm;
