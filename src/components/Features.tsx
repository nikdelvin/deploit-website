import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Box, Lock, Cpu, Puzzle, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-yellow-400" size={32} />,
    title: "Simple & Fast",
    description: "Deploy complex applications with a single shell script. No manual configuration hell."
  },
  {
    icon: <Box className="text-blue-400" size={32} />,
    title: "Containerized",
    description: "Uses Docker and Docker Compose for clean, isolated, and reproducible environments."
  },
  {
    icon: <Lock className="text-green-400" size={32} />,
    title: "Secure by Default",
    description: "Automatically provisions and renews Let's Encrypt SSL certificates for HTTPS."
  },
  {
    icon: <Cpu className="text-red-400" size={32} />,
    title: "High-Performance",
    description: "Uses Nginx as a powerful and efficient reverse proxy for your applications."
  },
  {
    icon: <Puzzle className="text-purple-400" size={32} />,
    title: "Extensible",
    description: "Easily add new scripts for any Docker-based application you need."
  },
  {
    icon: <Globe className="text-cyan-400" size={32} />,
    title: "Free & Open Source",
    description: "100% free to use and modify. No vendor lock-in, you own your data."
  }
];

export const Features = () => {
  return (
    <section className="px-4 pt-16 pb-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-400"
        >
          &lt;SystemCapabilities /&gt;
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-green-500/50 transition-colors group"
            >
              <div className="mb-4 p-3 bg-gray-800/50 rounded-lg w-fit group-hover:bg-gray-800 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-100">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
