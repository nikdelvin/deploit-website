import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Palette, Terminal } from 'lucide-react';

const contacts = [
  {
    icon: <Mail size={24} />,
    label: "EMAIL",
    value: "the@nikdelv.in",
    href: "mailto:the@nikdelv.in",
    color: "text-purple-400",
    bgColor: "bg-purple-900/20"
  },
  {
    icon: <Github size={24} />,
    label: "GITHUB",
    value: "@nikdelvin",
    href: "https://github.com/nikdelvin",
    color: "text-gray-200",
    bgColor: "bg-gray-700/30"
  },
  {
    icon: <Terminal size={24} />,
    label: "DEV BLOG",
    value: "@nikdelvin",
    href: "https://dev.to/nikdelvin",
    color: "text-green-400",
    bgColor: "bg-green-900/20"
  },
  {
    icon: <Palette size={24} />,
    label: "BEHANCE",
    value: "@nikdelvin",
    href: "https://www.behance.net/nikdelvin",
    color: "text-blue-400",
    bgColor: "bg-blue-900/20"
  },
  {
    icon: <Send size={24} />,
    label: "TELEGRAM",
    value: "@nikdelvin",
    href: "https://t.me/nikdelvin",
    color: "text-cyan-400",
    bgColor: "bg-cyan-900/20"
  },
  {
    icon: <Linkedin size={24} />,
    label: "LINKEDIN",
    value: "@nikdelvin",
    href: "https://linkedin.com/in/nikdelvin",
    color: "text-blue-500",
    bgColor: "bg-blue-800/20"
  }
];

export const Contact = () => {
  return (
    <section className="px-4 py-16 pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
            &lt;ConnectWithCreator /&gt;
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with the developer behind Deploit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl hover:border-green-500/50 hover:bg-gray-900/60 transition-all group flex items-center gap-6"
            >
              <div className={`p-4 rounded-lg ${contact.bgColor} ${contact.color} group-hover:scale-110 transition-transform`}>
                {contact.icon}
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold tracking-wider mb-1">{contact.label}</div>
                <div className="text-gray-200 font-mono group-hover:text-green-400 transition-colors">
                  {contact.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
