import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic">
            Start Your Journey
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {[
              { icon: MapPin, label: "Classes Conducted At", value: "Your Place (Club House)" },
              { icon: Phone, label: "Phone / WhatsApp", value: "6366372370", href: "tel:6366372370" },
              { icon: Mail, label: "Email", value: "rhythmpathmusicschool@gmail.com", href: "mailto:rhythmpathmusicschool@gmail.com" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="glass-card p-6 rounded-xl group hover:border-primary/20 transition-all duration-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/[0.08] border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-500">
                    <item.icon className="text-primary/60" size={18} />
                  </div>
                  <div>
                    <p className="text-foreground/40 text-xs font-body tracking-wider uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm font-body font-light break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground/70 text-sm font-body font-light">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 glass-card p-8 md:p-10 rounded-2xl gold-border-glow space-y-5"
          >
            <h3 className="font-display text-2xl font-light text-foreground/80 italic mb-2">Send an Enquiry</h3>
            {[
              { key: "name", label: "Your Name", type: "text" },
              { key: "email", label: "Email Address", type: "email" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs text-foreground/30 font-body tracking-wider uppercase mb-2 block">{f.label}</label>
                <input
                  type={f.type}
                  required
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary/30 border border-border/30 text-foreground/80 placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/30 focus:bg-secondary/50 transition-all duration-500 text-sm font-body font-light"
                />
              </div>
            ))}
            <div>
              <label className="text-xs text-foreground/30 font-body tracking-wider uppercase mb-2 block">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/30 border border-border/30 text-foreground/80 placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/30 focus:bg-secondary/50 transition-all duration-500 text-sm font-body font-light resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-glow w-full py-4 rounded-xl bg-primary text-primary-foreground font-body font-medium flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-500 relative z-10 tracking-wide"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
