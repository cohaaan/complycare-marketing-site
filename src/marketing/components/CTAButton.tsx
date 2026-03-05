import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../utils/cx';

type CTAButtonProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

const variantClasses: Record<NonNullable<CTAButtonProps['variant']>, string> = {
  primary:
    'bg-black text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] hover:bg-[#1F2937] focus-visible:outline-[#2E4057]',
  secondary:
    'border-2 border-black bg-white text-black hover:bg-[#F6F7F1] focus-visible:outline-[#2E4057]/40',
  ghost:
    'text-[#4E6478] hover:bg-[#F2F6FA] focus-visible:outline-[#5BBFA0]/30',
};

export function CTAButton({ to, children, variant = 'primary', className }: CTAButtonProps) {
  return (
    <Link
      to={to}
      className={cx(
        'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
