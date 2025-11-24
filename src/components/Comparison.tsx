import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Clock, ShieldAlert, Zap } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="px-4 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-12 text-center text-green-400"
        >
          &lt;EfficiencyAnalysis /&gt;
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manual Way */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-950/10 border border-red-900/30 rounded-lg p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Clock size={120} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <ShieldAlert size={24} />
              Manual Setup
            </h3>
            <ul className="space-y-4 text-gray-400 font-mono text-sm">
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                <span>SSH into server & update packages</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                <span>Install Docker & Docker Compose manually</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                <span>Write complex Nginx configuration files</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                <span>Run Certbot & configure auto-renewal</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                <span>Debug connection issues between containers</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                <span>~45-60 minutes per service</span>
              </li>
            </ul>
          </motion.div>

          {/* Deploit Way */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-950/10 border border-green-500/30 rounded-lg p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap size={120} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <Check size={24} />
              With Deploit
            </h3>
            <ul className="space-y-4 text-gray-300 font-mono text-sm">
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>Clone repository</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>Run one setup script</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>Auto-configured Docker & Nginx</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>Automatic SSL generation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>Production-ready defaults</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span className="text-green-400 font-bold">~60 seconds per service</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
