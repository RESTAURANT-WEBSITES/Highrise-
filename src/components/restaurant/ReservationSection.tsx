import { useState } from "react";
import { CalendarDays, Clock, Users, User } from "lucide-react";
import { toast } from "sonner";

const ReservationSection = () => {
  const [form, setForm] = useState({ date: "", time: "", guests: "2", name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.time || !form.name) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success(`Table reserved for ${form.name} on ${form.date} at ${form.time} for ${form.guests} guests.`);
    setForm({ date: "", time: "", guests: "2", name: "", email: "", phone: "" });
  };

  const inputClass = "w-full bg-surface-elevated border border-border rounded-sm px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <section id="reservation" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Reservations</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Book a Table</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>
        <form onSubmit={handleSubmit} className="bg-surface-elevated border border-border rounded-sm p-8 lg:p-12 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <CalendarDays size={14} className="text-gold" /> Date *
              </label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <Clock size={14} className="text-gold" /> Time *
              </label>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <Users size={14} className="text-gold" /> Guests
              </label>
              <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <User size={14} className="text-gold" /> Name *
              </label>
              <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required maxLength={100} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-sans">Email</label>
              <input type="email" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-sans">Phone</label>
              <input type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} maxLength={20} />
            </div>
          </div>
          <button type="submit" className="w-full py-4 bg-gold text-primary-foreground font-sans font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors duration-300">
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
