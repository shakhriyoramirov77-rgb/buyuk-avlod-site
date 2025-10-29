import { useState, useMemo } from "react";

/* ---------- helpers ---------- */
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Button = ({ href, children, variant = "primary", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring";
  const style =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-900 focus:ring-black/30"
      : variant === "ghost"
      ? "bg-white text-gray-900 border hover:bg-gray-50"
      : "bg-gray-900/5 text-gray-900 hover:bg-gray-900/10";
  if (href)
    return (
      <a href={href} {...props} className={`${base} ${style}`} rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
    <button {...props} className={`${base} ${style}`}>
      {children}
    </button>
  );
};
const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center">
    {eyebrow && <p className="text-sm uppercase tracking-widest text-gray-500">{eyebrow}</p>}
    <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">{subtitle}</p>}
  </div>
);

/* ---------- data ---------- */
const DRIVE_FOLDER = "https://drive.google.com/drive/folders/14xcohyDBxwII5BBdSGrYq22vqbz7Blut";
const ITEMS = [
  { type: "Research", title: "Soft Power & Economic Growth: Korea & Japan", author: "Editorial Team", year: 2024, tags: ["Soft Power","Korea","Japan","Research"], link: DRIVE_FOLDER },
  { type: "Presentation", title: "Soft Power in Global Economics — Slides", author: "EDC", year: 2025, tags: ["Soft Power","EDC","Presentations"], link: DRIVE_FOLDER },
  { type: "Book", title: "Nietzsche — The Gay Science (Notes)", author: "Reading Circle", year: 2025, tags: ["Reading Circle","Books","Education"], link: DRIVE_FOLDER },
  { type: "Research", title: "Human Rights Basics for Youth", author: "BA Legal Fellows", year: 2025, tags: ["Human Rights","Youth","Research"], link: DRIVE_FOLDER },
  { type: "Presentation", title: "Eco Activism Toolkit — Park Sessions", author: "Eco Team", year: 2025, tags: ["Eco","Presentations","Uzbekistan"], link: DRIVE_FOLDER },
];
const TAGS = ["Soft Power","Human Rights","Eco","Diplomacy","Uzbekistan","Korea","Japan","USA","Education","Youth","Reading Circle","EDC","Research","Presentations","Books"];

/* ---------- page ---------- */
export default function BuyukAvlodSite() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (t) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS.filter((i) => {
      const text = (i.title + " " + i.author + " " + i.type).toLowerCase();
      const okQ = !q || text.includes(q);
      const okTags = activeTags.length === 0 || activeTags.every((t) => i.tags.includes(t));
      return okQ && okTags;
    });
  }, [query, activeTags]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <a href="#home" className="font-bold">Buyuk Avlod</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#library" className="hover:opacity-70">Library</a>
            <a href="#join" className="hover:opacity-70">Join</a>
            <a href="https://t.me/Buyuk_Avlodmiz" className="hover:opacity-70" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://www.instagram.com/buyuk_avlod_?igsh=Z2RpN2luZ2NlNGYz" className="hover:opacity-70" target="_blank" rel="noreferrer">Instagram</a>
          </nav>
          <Button href="#join" variant="subtle" className="hidden sm:inline-flex">Apply</Button>
        </Container>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white px-6 py-24 sm:rounded-b-[2rem] sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">The Great Generation</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Youth from Central Asia building a <span className="font-semibold">Silk Road of Ideas</span> — research, diplomacy,
                human rights, eco-activism and open discussions.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Button href="#library">Open Library</Button>
                <Button href="https://t.me/Buyuk_Avlodmiz" variant="ghost" target="_blank" rel="noreferrer">Join Telegram</Button>
                <Button href="https://www.instagram.com/buyuk_avlod_?igsh=Z2RpN2luZ2NlNGYz" variant="subtle" target="_blank" rel="noreferrer">Instagram</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle eyebrow="About" title="Who we are" subtitle="Student-led initiative for learning, dialogue and action." />
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">What we do</h3>
              <p className="mt-2 text-gray-600">
                Clubs and sessions on soft power, diplomacy, human rights & eco-activism. Reading circles and presentations.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">Our mission</h3>
              <p className="mt-2 text-gray-600">
                Empower youth to research, speak, and build projects that benefit their communities and the region.
              </p>
            </div>
          </div>

          {/* Галерея — заменишь блоки на <img src="/photos/club1.jpg" .../> когда загрузишь фото в /public/photos */}
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="aspect-[4/3] w-full rounded-2xl border bg-gray-100" />
            <div className="aspect-[4/3] w-full rounded-2xl border bg-gray-100" />
            <div className="aspect-[4/3] w-full rounded-2xl border bg-gray-100" />
          </div>
          <p className="mt-3 text-center text-xs text-gray-500">
            Tip: загрузите фото в репозиторий в папку <code>/public/photos</code> и поменяйте <code>src</code> на <code>/photos/имя_файла.jpg</code>.
          </p>
        </Container>
      </section>

      {/* LIBRARY */}
      <section id="library" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle eyebrow="Library" title="Buyuk Avlod Library" subtitle="Research papers, slide decks, and books that fuel our sessions." />

          {/* поиск + теги */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, author, topic…"
                className="w-full md:max-w-md rounded-xl border px-3 py-2"
              />
              <div className="flex flex-wrap gap-2 text-sm">
                {TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`rounded-full border px-3 py-1 ${activeTags.includes(t) ? "bg-black text-white" : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            {activeTags.length > 0 && (
              <div className="text-sm text-gray-600">
                Active tags: {activeTags.join(", ")}
                <button className="ml-2 underline" onClick={() => setActiveTags([])}>
                  Clear
                </button>
              </div>
            )}
          </div>

          {/* карточки */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {filtered.map((a, idx) => (
              <div key={idx} className="rounded-2xl border p-5 shadow-sm">
                <div className="text-xs uppercase tracking-wide text-gray-500">{a.type}</div>
                <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
                <p className="mt-1 text-gray-600">
                  {a.author} • {a.year}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {a.tags.map((tg) => (
                    <span key={tg} className="rounded-full border px-2 py-1">
                      {tg}
                    </span>
                  ))}
                </div>
                <a href={a.link} className="mt-3 inline-block text-sm font-semibold underline" target="_blank" rel="noreferrer">
                  Open
                </a>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="md:col-span-3 text-center text-sm text-gray-500">No items match your search.</div>
            )}
          </div>

          {/* врезка с Google Drive */}
          <div className="mt-10 overflow-hidden rounded-2xl border">
            <iframe
              src="https://drive.google.com/embeddedfolderview?id=14xcohyDBxwII5BBdSGrYq22vqbz7Blut#list"
              className="h-[480px] w-full"
              title="Buyuk Avlod Drive Library"
            />
          </div>
          <p className="mt-2 text-center text-xs text-gray-500">
            Если embed не грузится — проверь общий доступ папки Drive: “Anyone with the link – Viewer”.
          </p>
        </Container>
      </section>

      {/* JOIN */}
      <section id="join" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle eyebrow="Join" title="Join Buyuk Avlod" subtitle="Заполни форму — письмо уйдёт на наш общий ящик." />
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border p-6 shadow-sm">
            <form
              action="mailto:Buyuk.avlodmiz@gmail.com"
              method="POST"
              encType="text/plain"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div>
                <label className="text-sm font-medium">Full name</label>
                <input name="name" required placeholder="Your name" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Your email</label>
                <input name="email" required type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">City / Country</label>
                <input name="location" placeholder="Tashkent, Uzbekistan" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Role</label>
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
                <textarea name="message" rows={4} placeholder="Tell us about your interests or idea…" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Submitting opens your mail app and prepares a message to <b>Buyuk.avlodmiz@gmail.com</b>.
                </div>
                <Button type="submit">Send email</Button>
              </div>
            </form>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
              <Button href="mailto:Buyuk.avlodmiz@gmail.com" variant="ghost">Write us directly</Button>
              <Button href="https://t.me/Buyuk_Avlodmiz" variant="subtle" target="_blank" rel="noreferrer">Join on Telegram</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
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
            <a href="https://t.me/Buyuk_Avlodmiz" className="hover:opacity-70" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://www.instagram.com/buyuk_avlod_?igsh=Z2RpN2luZ2NlNGYz" className="hover:opacity-70" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:Buyuk.avlodmiz@gmail.com" className="hover:opacity-70">Email</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
