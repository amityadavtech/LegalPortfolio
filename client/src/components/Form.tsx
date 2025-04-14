'use client';

import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react'; // Optional: You can use any loader here

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const data = {
      name: formData.name,
      phone: formData.phone,
      preferredTime: formData.preferredTime,
      message: formData.message,
    };

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwdIps6AiebQGwGkeJ-3zkEeajAollYgxsAlnjTllifGrZ9_P22HxZ91JMs9ZLSZ0XslA/exec',
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          preferredTime: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
      }}
      className="space-y-6 bg-white p-6 md:p-10 rounded-2xl shadow-xl max-w-xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A2463] mb-2">
        Request a Callback
      </h2>
      <p className="text-sm text-center text-gray-500 mb-6">
        Fill in your details and we'll get in touch shortly.
      </p>

      {/* Name */}
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#E6AF2E] focus:outline-none"
        />
      </motion.div>

      {/* Phone */}
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
        <div className="flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-600 rounded-l-md text-sm">
            +91
          </span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="9876543210"
            className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-[#E6AF2E] focus:outline-none"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">We'll only call for clarification.</p>
      </motion.div>

      {/* Preferred Time */}
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
        <select
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#E6AF2E] focus:outline-none"
        >
          <option value="">Choose a time</option>
          <option value="morning">Morning (9AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 4PM)</option>
          <option value="evening">Evening (4PM - 6PM)</option>
        </select>
      </motion.div>

      {/* Message */}
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
        <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description</label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your requirement..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-[#E6AF2E] focus:outline-none"
        />
      </motion.div>

      {/* Submission Status */}
      {status && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm text-center font-medium ${
            status === 'success' ? 'text-green-600' : 'text-green-600'
          }`}
        >
          {status === 'success'
            ? 'Form submitted successfully. We’ll contact you soon!'
            : ''}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
        <motion.button
          type="submit"
          className="w-full bg-[#E6AF2E] text-[#0A2463] font-semibold py-2.5 rounded-md hover:bg-yellow-500 transition duration-300 shadow-md flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin h-5 w-5" />}
          {loading ? 'Submitting...' : 'Request Callback'}
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default Form;
