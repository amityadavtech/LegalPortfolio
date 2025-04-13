import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface ClientsSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const clients = [
  {
    logo: "https://i.ibb.co/bjjn9jMs/1.jpg",
    name: "Travel Agency"
  },
  {
    logo: "https://i.ibb.co/Fbs9tLJN/7.jpg",
    name: "Maurya Krishi & Steels"
  },
  {
    logo: "https://i.ibb.co/FbvjWCHH/3.jpg",
    name: "The Desire Company"
  },
  {
    logo: "https://i.ibb.co/230yZgxd/4.jpg",
    name: "Avtar Steels"
  },
  {
    logo: "https://i.ibb.co/s9tb8g0D/5.jpg",
    name: "Jindal Steel & Power"
  },
  {
    logo: "https://i.ibb.co/JjvxSJBP/6.jpg",
    name: "Rivigo"
  }
];

const locations = [
  {
    city: "Lucknow",
    address: "Vibhuti Khand, Gomti Nagar Oppostie High Court Bench Lucknow Gate No. 06",
    phone: "+91 9554505557",
    directionsLink: "https://maps.app.goo.gl/LX6DDXXxRvsRd2RR6?g_st=awb"
  },
  {
    city: "Lakhimpur Kheri",
    address: "Civil Court's Near: Neta Ji Subash Chandra Bose Chamber's Chamber's Compound Lakhimpur Kheri 262701",
    phone: "+91 9554505557",
    directionsLink: "https://maps.app.goo.gl/JZWFQpLHNQUSPHKK7?g_st=awb"
  },
  {
    city: "Delhi",
    address: "Tis Hazaari Court Near District Bar Association Delhi, New Delhi 110054 Mob No. 9554505557",
    phone: "+91 9554505557",
    directionsLink: "https://maps.app.goo.gl/jvA5TVHaArU4T7aw5?g_st=awb"
  }
];

const ClientsSection = ({ registerSection }: ClientsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    registerSection('clients', sectionRef.current);
  }, [registerSection]);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our <span className="text-[#E6AF2E]">Clients</span></h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            We are proud to provide legal counsel to a diverse range of businesses and organizations across various industries.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F8F9FA] flex items-center justify-center overflow-hidden">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium">{client.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-[#F8F9FA] p-4 rounded-lg">
            <p className="text-gray-700 italic">
              "We trust Aftab Alam Law Firm with our legal matters. Their expertise and dedication are unmatched."
            </p>
            <p className="mt-2 font-medium">— CEO, Rivigo</p>
          </div>
        </motion.div>

        {/* Office Locations Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Office <span className="text-[#E6AF2E]">Locations</span></h3>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">We are available at the following locations; you can come and take help from us without any hesitation</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-[#F8F9FA] rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 mr-2 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📍</span>
                  </div>
                  <h4 className="text-lg font-bold">{loc.city}</h4>
                </div>
                <p className="text-sm text-gray-700 mb-2">{loc.address}</p>
                <p className="text-sm text-gray-700 mb-4">{loc.phone}</p>
                <a href={loc.directionsLink} className="text-[#E6AF2E] font-medium hover:underline text-sm">Get Directions</a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
