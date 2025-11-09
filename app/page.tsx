import { song } from "./song-data";
import { SectionCard } from "@/components/section-card";

const songFacts = [
  { label: "Настроение", value: song.mood },
  { label: "Локация", value: song.location },
  { label: "Темп", value: `${song.tempo} BPM` },
  { label: "Тональность", value: song.key }
];

export default function Home() {
  return (
    <main className="container">
      <div className="header">
        <h1 className="title">{song.title}</h1>
        <p className="subtitle">{song.subtitle}</p>
        <p className="subtitle">{song.description}</p>
      </div>

      <ul className="metadata">
        {songFacts.map((fact) => (
          <li key={fact.label}>
            <span>{fact.label}:</span>
            <span>{fact.value}</span>
          </li>
        ))}
      </ul>

      <section className="sections">
        {song.sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </section>

      <aside className="callout">
        <strong>История песни:</strong> героиня бежит от серых будней к
        северному сиянию, чтобы вспомнить, как звучит её собственный
        свет. Музыка строится на постепенном раскрытии гармонии: от хрупких
        синтезаторных пульсаций до полного хорового звучания в припеве.
      </aside>
    </main>
  );
}
