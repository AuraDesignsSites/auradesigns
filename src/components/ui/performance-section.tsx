import { ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks';
import { cn } from '@/lib/utils';

interface PerformanceSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  freezeOnceVisible?: boolean;
  animationDelay?: number;
}

export function PerformanceSection({
  children,
  className,
  threshold = 0.1,
  freezeOnceVisible = true,
  animationDelay = 0,
}: PerformanceSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    freezeOnceVisible,
  });

  return (
    <section
      ref={elementRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isIntersecting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: `${animationDelay}ms`,
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {children}
    </section>
  );
}
