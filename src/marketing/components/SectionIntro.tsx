import { cx } from '../utils/cx';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  /** Dark section background — light text for contrast */
  tone?: 'default' | 'dark';
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  tone = 'default',
}: SectionIntroProps) {
  const isDark = tone === 'dark';
  return (
    <div className={cx(align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}>
      {eyebrow ? (
        <p
          className={cx(
            'text-xs font-semibold uppercase tracking-[0.28em]',
            isDark ? 'text-[#B8C5D4]' : 'text-[#4E6478]',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cx(
          'mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl',
          isDark ? 'text-white' : 'text-[#2E4057]',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cx('mt-4 text-base leading-relaxed', isDark ? 'text-[#D1DCE8]' : 'text-[#4E6478]')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
