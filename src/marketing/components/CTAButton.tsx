import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../utils/cx';

type CTAButtonProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Default `md` matches global CTAs; `lg` for hero and other emphasis. */
  size?: 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

const variantClasses: Record<NonNullable<CTAButtonProps['variant']>, string> = {
  primary:
    'bg-black text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] hover:bg-[#1F2937] focus-visible:outline-[#2E4057]',
  secondary:
    'border-2 border-black bg-white text-black hover:bg-[#F6F7F1] focus-visible:outline-[#2E4057]/40',
  ghost:
    'text-[#4E6478] hover:bg-[#F2F6FA] focus-visible:outline-[#5BBFA0]/30',
};

const sizeClasses: Record<NonNullable<CTAButtonProps['size']>, string> = {
  md: 'px-5 py-3 text-sm font-semibold tracking-wide',
  lg: 'px-7 py-3.5 text-base font-bold tracking-wide sm:px-8 sm:py-4 sm:text-lg',
};

export function CTAButton({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: CTAButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cx(
        'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
