import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-white/70 md:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
