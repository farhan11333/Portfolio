import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPhone, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-navy-blue to-light-blue py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>
        
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              className="p-8 lg:p-12"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-3xl font-semibold text-white mb-6">Get in Touch</h3>
              <ContactInfo icon={<FaPhone className="text-gold" />} text="(+92) 316-1991044" />
              <ContactInfo icon={<FaLinkedin className="text-gold" />} text="LinkedIn Profile" link="https://www.linkedin.com/in/farhan-ali-1138531b0/" />
              <ContactInfo icon={<FaEnvelope className="text-gold" />} text="farhanali11333@gmail.com" link="mailto:farhanali11333@gmail.com" />
              <ContactInfo icon={<FaMapMarkerAlt className="text-gold" />} text="River Gardens, Islamabad" />
              
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.308894892837!2d73.12940931520195!3d33.65651798071431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df952e017d0acd%3A0xf20be4a76782ceaf!2sRiver%20Garden%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1651234567890!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl shadow-md"
                ></iframe>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8 lg:p-12 bg-white bg-opacity-5"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-white mb-6">Send a Message</h3>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="bg-green-500 text-white p-6 rounded-xl shadow-md"
                  >
                    <h4 className="text-xl font-semibold mb-2">Thank you for reaching out!</h4>
                    <p>I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <InputField
                      label="Name"
                      name="name"
                      register={register}
                      required="Name is required"
                      error={errors.name}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      register={register}
                      required="Email is required"
                      pattern={{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }}
                      error={errors.email}
                    />
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        {...register("message", { required: "Message is required" })}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gold bg-opacity-80 bg-white backdrop-filter backdrop-blur-sm"
                      ></textarea>
                      {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full bg-gold text-navy-blue py-3 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactInfo = ({ icon, text, link }) => (
  <motion.div 
    className="flex items-center space-x-4 mb-6"
    whileHover={{ x: 5 }}
  >
    <div className="text-2xl text-gold">{icon}</div>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors duration-300">
        {text}
      </a>
    ) : (
      <span className="text-white">{text}</span>
    )}
  </motion.div>
);

const InputField = ({ label, name, type = "text", register, required, pattern, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-white mb-1">{label}</label>
    <input
      type={type}
      id={name}
      {...register(name, { required, pattern })}
      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-gold bg-opacity-80 bg-white backdrop-filter backdrop-blur-sm"
    />
    {error && <span className="text-red-400 text-sm">{error.message}</span>}
  </div>
);

export default Contact;
