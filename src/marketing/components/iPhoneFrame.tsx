import type { ReactNode } from 'react';

type iPhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * iPhone-style device frame that wraps content (video, UI preview, etc.).
 * Matches the reference: dark bezel, rounded corners, notch area.
 */
export function iPhoneFrame({ children, className = '' }: iPhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto flex justify-center ${className}`}
      style={{ perspective: '800px' }}
    >
      <div
        className="relative w-full max-w-[200px] rounded-[2.5rem] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] shadow-xl"
        style={{
          transform: 'rotateY(-4deg) rotateX(2deg)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)',
          aspectRatio: '9/19.5',
        }}
      >
        {/* Dynamic Island / notch */}
        <div
          className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a] px-8 py-2"
          style={{ width: '36%' }}
        />
        {/* Screen area */}
        <div className="relative overflow-hidden rounded-[1.75rem] bg-black" style={{ aspectRatio: '9/19.5' }}>
          <div className="absolute inset-0 flex items-center justify-center bg-[#f8f9fa] [&>video]:h-full [&>video]:w-full [&>video]:object-contain">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
