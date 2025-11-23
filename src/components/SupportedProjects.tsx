import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';

const projects = [
  {
    name: "Directus",
    description: "The flexible backend for all your projects. Turn your DB into a headless CMS, admin panels, or apps.",
    command: "cd directus && bash setup.sh"
  },
  {
    name: "N8N",
    description: "Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code.",
    command: "cd n8n && bash setup.sh"
  }
];

export const SupportedProjects = () => {
  return (
    <section className="px-4 pt-16 pb-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-400"
        >
          &lt;SupportedModules /&gt;
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TerminalWindow key={index} title={`deploy-${project.name.toLowerCase()}.sh`}>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-300">{project.command}</span>
                </div>
                <div className="text-gray-400 pl-4 border-l-2 border-gray-800">
                  <p className="mb-2 text-green-300">Initializing {project.name} deployment sequence...</p>
                  <p>{project.description}</p>
                  <p className="mt-2 text-gray-500">Status: <span className="text-green-500">Ready to deploy</span></p>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">More modules coming soon...</p>
          <a 
            href="https://github.com/nikdelvin/deploit"
            className="inline-block px-6 py-2 border border-gray-700 rounded hover:border-green-500 text-sm text-gray-300 hover:text-green-400 transition-colors"
          >
            Request a Module
          </a>
        </div>
      </div>
    </section>
  );
};
