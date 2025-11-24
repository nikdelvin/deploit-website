import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';

const steps = [
  {
    title: "User Input",
    description: "Script prompts for domain and email.",
    code: "Enter domain: app.example.com\nEnter email: admin@example.com"
  },
  {
    title: "Configuration",
    description: "Generates docker-compose.yml and nginx.conf.",
    code: "Generating configuration files...\n[OK] docker-compose.yml created\n[OK] nginx.conf created"
  },
  {
    title: "SSL Certificate",
    description: "Obtains Let's Encrypt certificate via Certbot.",
    code: "Requesting certificate for app.example.com...\n[OK] Certificate obtained successfully"
  },
  {
    title: "Deployment",
    description: "Launches containers with Docker Compose.",
    code: "Starting services...\n[+] Running 3/3\n ⠿ Container db      Started\n ⠿ Container app     Started\n ⠿ Container proxy   Started"
  }
];

export const HowItWorks = () => {
  return (
    <section className="px-4 pt-16 pb-8" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-12 text-center text-green-400"
        >
          &lt;ExecutionFlow /&gt;
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-green-900/50 border border-green-500 flex items-center justify-center text-green-400 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-0.5 h-full bg-gray-800 my-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-200 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-green-500/10 blur-xl rounded-full"></div>
            <TerminalWindow title="setup.sh execution" className="relative z-10 h-full flex flex-col">
              <div className="space-y-6 font-mono text-sm">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 1.5, duration: 0.5 }}
                  >
                    <div className="text-gray-500 mb-1"># {step.title}</div>
                    <div className="whitespace-pre-wrap text-green-300">{step.code}</div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: steps.length * 1.5 + 0.5 }}
                  className="-mt-5 text-white animate-pulse"
                >
                  _
                </motion.div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
};
