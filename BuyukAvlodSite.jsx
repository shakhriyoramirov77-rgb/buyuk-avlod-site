import { useState } from "react";

// --- Simple UI primitives ---
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center">
    {eyebrow && <p className="text-sm uppercase tracking-widest text-gray-500">{eyebrow}</p>}
    <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${className}`}>{children}</div>
);

const Button = ({ children, href, onClick, type, variant = "primary", className = "" }) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring";
  const styles = {
    primary: "bg-black text-white hover:bg-gray-900 focus:ring-black/30",
    ghost: "bg-white text-gray-900 border hover:bg-gray-50",
    subtle: "bg-gray-900/5 text-gray-900 hover:bg-gray-900/10"
  };
  if (href) return <a href={href} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
  return <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
};

export default function BuyukAvlodSite() {
  // Library state & data
  const TAGS = ["Soft Power","Human Rights","Eco","Diplomacy","Uzbekistan","Korea","Japan","USA","Education","Trade","Youth","Reading Circle","EDC","Research","Presentations","Books"];
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  const ITEMS = [
    { type: "Research", title: "Soft Power & Economic Growth: Korea & Japan", author: "Editorial Team", year: 2024, tags: ["Soft Power","Korea","Japan","Research"], link: "https://drive.google.com/drive/folders/14xcohyDBxwII5BBdSGrYq22vqbz7Blut" },
    { type: "Presentation", title: "Soft Power in Global Economics — Slides", author: "EDC", year: 2025, tags: ["Soft Power","EDC","Presentations"], link: "https://drive.google.com/drive/folders/14xcohyDBxwII5BBdSGrYq22vqbz7Blut" },
    { type: "Book", title: "Nietzsche — The Gay Science (Notes)", author: "Reading Circle", year: 2025, tags: ["Reading Circle","Books","Education"], link: "https://drive.google.com/drive/folders/14xcohyDBxwII5BBdSGrYq22vqbz7Blut" },
    { type: "Research", title: "Human Rights Basics for Youth", author: "BA Legal Fellows", year: 2025, tags: ["Human Rights","Youth","Research"], link: "https://drive.google.com/drive/folders/14xcohyDBxwII5BBdSGrYq22vqbz7Blut" },
    { type: "Presentation", title: "Eco Activism Toolkit — Park Sessions", author: "Eco Team", year: 2025, tags: ["Eco","Presentations","Uzbekistan"], link: "https://drive.google.com/drive/folders/14xcohyDBxwII5BBdSGrYq22vqbz7Blut" },
  ];

  const toggleTag = (t) => {
    setActiveTags((prev) => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const normalized = (s) => (s || "").toLowerCase();
  const filteredItems = ITEMS.filter((it) => {
    const matchesQuery = !query || normalized(it.title + " " + it.author + " " + it.type).includes(normalized(query));
    const matchesTags = activeTags.length === 0 || activeTags.every(t => it.tags.includes(t));
    return matchesQuery && matchesTags;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 text-gray-900">
      {/* Hero Section with cover image */}
      <section id="home" className="relative h-[90vh] w-full overflow-hidden">
        {/* Replace with your static path when deploying */}
        <img
          src="/mnt/data/20251027_174058.jpg"
          alt="Buyuk Avlod Hero"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-75"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Buyuk Avlod</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            The Great Generation building the Silk Road of Ideas — youth from Central Asia leading global change.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="https://t.me/Buyuk_Avlodmiz">Join on Telegram</Button>
            <Button href="https://www.instagram.com/buyuk_avlod_?igsh=Z2RpN2luZ2NlNGYz" variant="ghost">Follow on Instagram</Button>
            <Button href="#library" variant="subtle">Open Library</Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <SectionTitle eyebrow="Gallery" title="Moments from Our Clubs" subtitle="Snapshots from Buyuk Avlod sessions and initiatives." />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl overflow-hidden">
              <img src="/mnt/data/IMG_20251029_074644_215.jpg" alt="Exploring the World session" className="object-cover w-full h-64" />
              <p className="mt-2 text-center text-sm text-gray-600">Exploring Diplomacy Session — Tech Tribe</p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="/mnt/data/20251027_174058.jpg" alt="Korean soft power session" className="object-cover w-full h-64" />
              <p className="mt-2 text-center text-sm text-gray-600">Soft Power & Korea — Human Rights and Culture</p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="/mnt/data/IMG_20251029_074810_576.jpg" alt="Eco and speaking club" className="object-cover w-full h-64" />
              <p className="mt-2 text-center text-sm text-gray-600">Outdoor English & Eco Activism — MDIS Sessions</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button href="https://www.instagram.com/buyuk_avlod_?igsh=Z2RpN2luZ2NlNGYz" variant="subtle">View More Photos on Instagram</Button>
          </div>
        </Container>
      </section>

      {/* Library Section */}
      <section id="library" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle eyebrow="Library" title="Buyuk Avlod Library" subtitle="Research papers, slide decks, and books that fuel our sessions." />

          {/* Search & Filters */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by title, author, topic..." className="w-full md:max-w-md rounded-xl border px-3 py-2" />
              <div className="flex flex-wrap gap-2 text-sm">
                {TAGS.map((t)=>{
                  const active = activeTags.includes(t);
                  return (
                    <button key={t} onClick={()=>toggleTag(t)} className={`rounded-full border px-3 py-1 ${active ? 'bg-black text-white' : ''}`}>{t}</button>
                  );
                })}
              </div>
            </div>
            {activeTags.length > 0 && (
              <div className="text-sm text-gray-600">Active tags: {activeTags.join(', ')} <button className="ml-2 underline" onClick={()=>setActiveTags([])}>Clear</button></div>
            )}
          </div>

          {/* Items Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {filteredItems.map((a, idx) => (
              <Card key={idx}>
                <div className="text-xs uppercase tracking-wide text-gray-500">{a.type}</div>
                <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
                <p className="mt-1 text-gray-600">{a.author} • {a.year}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {a.tags.map((tg) => (
                    <span key={tg} className="rounded-full border px-2 py-1">{tg}</span>
                  ))}
                </div>
                <a href={a.link} className="mt-3 inline-block text-sm font-semibold underline">Open</a>
              </Card>
            ))}
            {filteredItems.length === 0 && (
              <div className="md:col-span-3 text-center text-sm text-gray-500">No items match your search.</div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="https://drive.google.com/drive/folders/14xcohyDBxwII5BBdSGrYq22vqbz7Blut" variant="subtle">View All on Google Drive</Button>
            <Button href="#join" variant="ghost">Submit your paper</Button>
          </div>

          {/* Embedded Drive preview */}
          <div className="mt-8">
            <div className="rounded-2xl border overflow-hidden">
              <iframe
                src="https://drive.google.com/embeddedfolderview?id=14xcohyDBxwII5BBdSGrYq22vqbz7Blut#list"
                className="w-full h-[480px]"
                title="Buyuk Avlod Drive Library"
              ></iframe>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">If the embed doesn't load, make sure the Drive folder sharing is set to "Anyone with the link – Viewer".</p>
        </Container>
      </section>

      {/* Join Section with email submission */}
      <section id="join" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle eyebrow="Join" title="Join Buyuk Avlod" subtitle="Заполни форму — и мы свяжемся с тобой. Письмо пойдет на наш общий почтовый ящик." />
          <Card className="mx-auto mt-10 max-w-3xl">
            <form
              action="mailto:Buyuk.avlodmiz@gmail.com"
              method="POST"
              encType="text/plain"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Full name</label>
                <input name="name" required placeholder="Your name" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Your email</label>
                <input name="email" required type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">City / Country</label>
                <input name="location" placeholder="Tashkent, Uzbekistan" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">How do you want to help?</label>
                <select name="role" className="mt-1 w-full rounded-xl border px-3 py-2">
                  <option>Writer / Editor</option>
                  <option>Organizer</option>
                  <option>Speaker</option>
                  <option>Designer</option>
                  <option>Volunteer</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" placeholder="Tell us about your interests or idea..." className="mt-1 w-full rounded-xl border px-3 py-2" rows={4} />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-sm text-gray-500">Submitting will open your email app and prepare a message to <span className="font-semibold">Buyuk.avlodmiz@gmail.com</span>.</div>
                <Button type="submit">Send email</Button>
              </div>
            </form>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
              <Button href="mailto:Buyuk.avlodmiz@gmail.com" variant="ghost">Write us directly</Button>
              <Button href="https://t.me/Buyuk_Avlodmiz" variant="subtle">Join on Telegram</Button>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center">Для полноценной отправки без почтового клиента можно позже подключить Formspree / EmailJS. Пока используется простой mailto.</p>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-black" />
            <div>
              <div className="text-sm font-semibold">Buyuk Avlod</div>
              <div className="text-xs text-gray-500">© {new Date().getFullYear()} — Youth movement built with love in Central Asia</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://t.me/Buyuk_Avlodmiz" className="hover:opacity-70">Telegram</a>
            <a href="https://www.instagram.com/buyuk_avlod_?igsh=Z2RpN2luZ2NlNGYz" className="hover:opacity-70">Instagram</a>
            <a href="mailto:Buyuk.avlodmiz@gmail.com" className="hover:opacity-70">Email</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}