import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AttorneyCard from './AttorneyCard';

interface TeamSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const attorneys = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "James Wilson",
    title: "Founding Partner",
    bio: "With over 15 years of experience, James has established a reputation for excellence in corporate law and intellectual property. Harvard Law School graduate and recognized by Super Lawyers 2018-2023.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "james@wilsonlaw.com"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    name: "Sarah Johnson",
    title: "Senior Associate",
    bio: "Sarah specializes in litigation and employment law. With her background in both corporate and non-profit sectors, she brings valuable insights to complex cases. Yale Law School graduate.",
    socialLinks: {
      linkedin: "#",
      email: "sarah@wilsonlaw.com"
    }
  },
  {
    image: "/assets/michael_chen.jpg",
    name: "Michael Chen",
    title: "Partner",
    bio: "Michael's expertise in real estate law and estate planning has helped numerous clients protect their assets and secure their futures. Columbia Law School graduate with 10 years of experience.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "michael@wilsonlaw.com"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Alexandra Davis",
    title: "Associate",
    bio: "Alexandra focuses on intellectual property and technology law. Her background in computer science provides her with unique insights into tech-related legal matters. Stanford Law School graduate.",
    socialLinks: {
      linkedin: "#",
      email: "alexandra@wilsonlaw.com"
    }
  }
];

const TeamSection = ({ registerSection }: TeamSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    registerSection('team', sectionRef.current);
  }, [registerSection]);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#F8F9FA] to-[#F0F2F5]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2"
          >
            <span className="px-4 py-1.5 bg-[#E6AF2E]/10 text-[#E6AF2E] rounded-full text-sm font-medium">Meet Our Team</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our <span className="text-[#E6AF2E]">Legal Team</span></h2>
          
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mb-8 relative">
            <motion.div 
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#E6AF2E]"
              animate={{ 
                x: [0, 20, 0], 
                opacity: [1, 0.5, 1] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-[#E6AF2E]"
              animate={{ 
                x: [0, -20, 0], 
                opacity: [1, 0.5, 1] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1 
              }}
            />
          </div>
          
          <motion.p 
            className="max-w-3xl mx-auto text-lg text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Meet our experienced attorneys who are dedicated to providing exceptional legal representation and achieving the best outcomes for our clients.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {attorneys.map((attorney, index) => (
            <AttorneyCard
              key={index}
              image={attorney.image}
              name={attorney.name}
              title={attorney.title}
              bio={attorney.bio}
              socialLinks={attorney.socialLinks}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2463] text-white rounded-lg font-medium shadow-lg hover:bg-[#0A2463]/90 transition-all"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(10, 36, 99, 0.2)",
              scale: 1.02 
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.i 
              className="fas fa-users mr-1"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            ></motion.i>
            Join Our Team
            <i className="fas fa-arrow-right"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;