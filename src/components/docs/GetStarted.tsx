import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from '../TerminalWindow';
import { ArrowLeft, Server, Globe, Shield, CheckCircle } from 'lucide-react';

export const GetStarted = () => {
  return (
    <section className="pt-16 pb-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <a href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started with <span className="text-green-400">Deploit</span>
          </h1>
          <p className="text-xl text-gray-400">
            Follow this guide to deploy your first application in minutes.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Prerequisites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-green-900/30 text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-green-500/30">1</span>
              Prerequisites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                <Server className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-200 mb-2">Linux Server</h3>
                <p className="text-gray-400 text-sm">VPS or dedicated server running Ubuntu 20.04+ or Debian 11+.</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                <Globe className="text-purple-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-200 mb-2">Domain Name</h3>
                <p className="text-gray-400 text-sm">A domain pointing to your server's public IP address.</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                <Shield className="text-red-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-200 mb-2">Root Access</h3>
                <p className="text-gray-400 text-sm">Sudo privileges to install Docker and configure system.</p>
              </div>
            </div>
          </motion.div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-green-900/30 text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-green-500/30">2</span>
              Clone the Repository
            </h2>
            <p className="text-gray-400 mb-6">
              Connect to your server via SSH and clone the Deploit repository.
            </p>
            <TerminalWindow title="terminal">
              <div className="text-gray-300 space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-400">user@server:~$</span>
                  <span>git clone https://github.com/nikdelvin/deploit.git</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">user@server:~$</span>
                  <span>cd deploit</span>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-green-900/30 text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-sm border border-green-500/30">3</span>
              Run the Setup Script
            </h2>
            <p className="text-gray-400 mb-6">
              Navigate to the project folder you want to deploy (e.g., Directus) and run the setup script.
            </p>
            <TerminalWindow title="terminal">
              <div className="text-gray-300 space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-400">user@server:~/deploit$</span>
                  <span>cd directus</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">user@server:~/deploit/directus$</span>
                  <span>bash setup.sh</span>
                </div>
              </div>
            </TerminalWindow>
            <div className="mt-6 bg-blue-900/20 border border-blue-800 p-4 rounded-lg text-blue-200 text-sm">
              <strong>Note:</strong> The script will prompt you for your domain name and email address for SSL configuration.
            </div>
          </motion.div>

          {/* Success */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-900/10 border border-green-500/30 p-8 rounded-xl text-center"
          >
            <div className="inline-flex p-4 rounded-full bg-green-900/30 text-green-400 mb-6">
              <CheckCircle size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Deployment Complete!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your application should now be accessible at your domain with a valid HTTPS certificate.
              Docker Compose is running in the background.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
