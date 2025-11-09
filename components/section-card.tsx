import type { SongSection } from "@/app/song-data";
import styles from "./section-card.module.css";

type SectionCardProps = {
  section: SongSection;
};

const sectionTypeClassName: Record<SongSection["title"], string> = {
  Вступление: styles.intro,
  Куплет: styles.verse,
  Припев: styles.chorus,
  Бридж: styles.bridge,
  Финал: styles.outro
};

export function SectionCard({ section }: SectionCardProps) {
  const decorativeClass = sectionTypeClassName[section.title];

  return (
    <article className={`${styles.card} ${decorativeClass}`}>
      <header className={styles.header}>
        <span className={styles.label}>{section.title}</span>
        <span className={styles.vibe}>{section.vibe}</span>
      </header>

      <div className={styles.lyrics}>
        {section.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </article>
  );
}
