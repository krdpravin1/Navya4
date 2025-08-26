import { useState } from "react";

export default function OnboardingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please complete all fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Welcome to Navya
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="consent"
          className="mr-2 rounded border-gray-300 focus:ring-green-400"
          checked={for
