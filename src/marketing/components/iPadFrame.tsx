import type { ReactNode } from 'react';

type iPadFrameProps = {
  children: ReactNode;
  className?: string;
  /** Portrait (3:4) for tall content, landscape (4:3) for form demos and wide video */
  orientation?: 'portrait' | 'landscape';
};

/**
 * iPad-style tablet frame: dark bezel, rounded corners, camera on top.
 */
export function iPadFrame({ children, className = '', orientation = 'portrait' }: iPadFrameProps) {
  const isLandscape = orientation === 'landscape';
  return (
    <div
      className={`relative mx-auto flex justify-center ${className}`}
      style={{ perspective: '800px' }}
    >
      <div
        className="relative w-full overflow-hidden rounded-[1.25rem] border-[12px] border-[#1a1a1a] bg-[#1a1a1a] shadow-xl"
        style={{
          transform: 'rotateY(-4deg) rotateX(2deg)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)',
          aspectRatio: isLandscape ? '4/3' : '3/4',
          maxWidth: isLandscape ? '420px' : '360px',
        }}
      >
        {/* Camera and sensor on top bezel */}
        <div className="absolute left-1/2 top-1.5 z-10 flex -translate-x-1/2 gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#333] ring-1 ring-[#555]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#333] ring-1 ring-[#555]" />
        </div>
        {/* Screen area */}
        <div className="absolute inset-3 overflow-hidden rounded-lg bg-black">
          <div className="flex h-full w-full items-center justify-center [&>video]:h-full [&>video]:w-full [&>video]:object-contain">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
