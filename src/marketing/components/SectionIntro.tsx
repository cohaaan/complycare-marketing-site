import { cx } from '../utils/cx';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionIntro({ eyebrow, title, description, align = 'left', className }: SectionIntroProps) {
  return (
    <div className={cx(align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4E6478]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#2E4057] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-[#4E6478]">{description}</p> : null}
    </div>
  );
}
