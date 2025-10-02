// Common types used throughout the application
import { ErrorInfo } from 'react';

export interface NavigationLink {
  href: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface ProcessStep {
  phase: string;
  details: string[];
}

export interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

export interface SuccessMetric {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

export interface ProcessStepInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface AnimatedNumbers {
  conversion: number;
  weeks: string;
  satisfaction: number;
  mobile: number;
}

export interface Position {
  scale: number;
  x: number;
  y: number;
  opacity: number;
}

export interface PerformanceMetrics {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export interface MemoryUsage {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface RateLimitEntry {
  count: number;
  lastReset: number;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

// Component prop types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

// Utility types
export type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export type AnimationDuration = 'fast' | 'normal' | 'slow' | 'very_slow';

// API types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
  error?: string;
}

// Performance monitoring types
export interface PerformanceMonitoringHook {
  measureRender: () => number;
  measureImageLoad: (imageSrc: string) => number;
}
