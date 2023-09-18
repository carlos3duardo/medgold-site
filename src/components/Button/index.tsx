import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import spinner from './spinner.svg';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const button = tv({
  base: 'relative inline-flex items-center justify-center gap-2 rounded transition duration-200 relative whitespace-nowrap disabled:cursor-not-allowed disabled:not(data-[processing=true]):opacity-50',
  variants: {
    color: {
      default: '',
      primary: '',
      secondary: '',
      success: '',
      danger: '',
      warning: '',
      info: '',
    },
    variant: {
      solid: '',
      outline: 'border',
      ghost: '',
      link: '',
      gradient: '',
    },
    size: {
      xs: 'h-10 font-semibold text-xs ps-3 pe-3',
      sm: 'h-13 font-semibold text-sm ps-3 pe-3',
      md: 'h-[3.75rem] font-medium text-lg ps-8 pe-8',
      lg: 'h-17 font-semibold text-lg ps-4 pe-4',
    },
  },
  compoundVariants: [
    /* Default */
    {
      color: 'default',
      variant: 'solid',
      className:
        'bg-zinc-500 text-white hover:bg-zinc-600 active:bg-zinc-700 disabled:bg-zinc-200 disabled:text-zinc-700',
    },
    {
      color: 'default',
      variant: 'outline',
      className:
        'bg-transparent text-zinc-700 border-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 disabled:text-zinc-700 disabled:border-zinc-700 disabled:bg-transparent',
    },
    {
      color: 'default',
      variant: 'gradient',
      className:
        'bg-gradient-to-r from-zinc-400 to-zinc-600 text-white hover:from-zinc-500 hover:to-zinc-700 active:from-zinc-600 active:to-zinc-800 disabled:text-zinc-700 disabled:from-zinc-100 disabled:to-zinc-300',
    },
    {
      color: 'default',
      variant: 'ghost',
      className:
        'bg-transparent text-zinc-700 border-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 disabled:text-zinc-700 disabled:border-zinc-700 disabled:bg-transparent',
    },
    {
      color: 'default',
      variant: 'link',
      className:
        'bg-transparent text-zinc-700 border-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 disabled:text-zinc-700 disabled:border-zinc-700 disabled:bg-transparent underline',
    },
    /* Primary */
    {
      color: 'primary',
      variant: 'solid',
      className:
        'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 disabled:not(data-[processing=true]):bg-primary-200 disabled:not(data-[processing=true]):text-primary-700',
    },
    {
      color: 'primary',
      variant: 'outline',
      className:
        'bg-transparent text-primary-700 border-primary-700 hover:bg-primary-100 active:bg-primary-200 disabled:text-primary-700 disabled:border-primary-700 disabled:bg-transparent',
    },
    {
      color: 'primary',
      variant: 'gradient',
      className:
        'bg-gradient-to-r from-primary-400 to-primary-600 text-white hover:from-primary-500 hover:to-primary-700 active:from-primary-600 active:to-primary-800 disabled:text-primary-700 disabled:from-primary-100 disabled:to-primary-300',
    },
    {
      color: 'primary',
      variant: 'ghost',
      className:
        'bg-transparent text-primary-700 border-primary-700 hover:bg-primary-100 active:bg-primary-200 disabled:text-primary-700 disabled:border-primary-700 disabled:bg-transparent',
    },
    {
      color: 'primary',
      variant: 'link',
      className:
        'bg-transparent text-primary-700 border-primary-700 hover:bg-primary-100 active:bg-primary-200 disabled:text-primary-700 disabled:border-primary-700 disabled:bg-transparent underline',
    },
    /* Secondary */
    {
      color: 'secondary',
      variant: 'solid',
      className:
        'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-200 disabled:text-secondary-700',
    },
    {
      color: 'secondary',
      variant: 'outline',
      className:
        'bg-transparent text-secondary-700 border-secondary-700 hover:bg-secondary-100 active:bg-secondary-200 disabled:text-secondary-700 disabled:border-secondary-700 disabled:bg-transparent',
    },
    {
      color: 'secondary',
      variant: 'gradient',
      className:
        'bg-gradient-to-r from-secondary-400 to-secondary-600 text-white hover:from-secondary-500 hover:to-secondary-700 active:from-secondary-600 active:to-secondary-800 disabled:text-secondary-700 disabled:from-secondary-100 disabled:to-secondary-300',
    },
    {
      color: 'secondary',
      variant: 'ghost',
      className:
        'bg-transparent text-secondary-700 border-secondary-700 hover:bg-secondary-100 active:bg-secondary-200 disabled:text-secondary-700 disabled:border-secondary-700 disabled:bg-transparent',
    },
    {
      color: 'secondary',
      variant: 'link',
      className:
        'bg-transparent text-secondary-700 border-secondary-700 hover:bg-secondary-100 active:bg-secondary-200 disabled:text-secondary-700 disabled:border-secondary-700 disabled:bg-transparent underline',
    },
    /* Success */
    {
      color: 'success',
      variant: 'solid',
      className:
        'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 disabled:bg-emerald-200 disabled:text-emerald-700',
    },
    {
      color: 'success',
      variant: 'outline',
      className:
        'bg-transparent text-emerald-700 border-emerald-700 hover:bg-emerald-100 active:bg-emerald-200 disabled:text-emerald-700 disabled:border-emerald-700 disabled:bg-transparent',
    },
    {
      color: 'success',
      variant: 'gradient',
      className:
        'bg-gradient-to-r from-emerald-400 to-emerald-600 text-white hover:from-emerald-500 hover:to-emerald-700 active:from-emerald-600 active:to-emerald-800 disabled:text-emerald-700 disabled:from-emerald-100 disabled:to-emerald-300',
    },
    {
      color: 'success',
      variant: 'ghost',
      className:
        'bg-transparent text-emerald-700 border-emerald-700 hover:bg-emerald-100 active:bg-emerald-200 disabled:text-emerald-700 disabled:border-emerald-700 disabled:bg-transparent',
    },
    {
      color: 'success',
      variant: 'link',
      className:
        'bg-transparent text-emerald-700 border-emerald-700 hover:bg-emerald-100 active:bg-emerald-200 disabled:text-emerald-700 disabled:border-emerald-700 disabled:bg-transparent underline',
    },
    /* Danger */
    {
      color: 'danger',
      variant: 'solid',
      className:
        'bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 disabled:bg-rose-200 disabled:text-rose-700',
    },
    {
      color: 'danger',
      variant: 'outline',
      className:
        'bg-transparent text-rose-700 border-rose-700 hover:bg-rose-100 active:bg-rose-200 disabled:text-rose-700 disabled:border-rose-700 disabled:bg-transparent',
    },
    {
      color: 'danger',
      variant: 'gradient',
      className:
        'bg-gradient-to-r from-rose-400 to-rose-600 text-white hover:from-rose-500 hover:to-rose-700 active:from-rose-600 active:to-rose-800 disabled:text-rose-700 disabled:from-rose-100 disabled:to-rose-300',
    },
    {
      color: 'danger',
      variant: 'ghost',
      className:
        'bg-transparent text-rose-700 border-rose-700 hover:bg-rose-100 active:bg-rose-200 disabled:text-rose-700 disabled:border-rose-700 disabled:bg-transparent',
    },
    {
      color: 'danger',
      variant: 'link',
      className:
        'bg-transparent text-rose-700 border-rose-700 hover:bg-rose-100 active:bg-rose-200 disabled:text-rose-700 disabled:border-rose-700 disabled:bg-transparent underline',
    },
    /* Warning */
    {
      color: 'warning',
      variant: 'solid',
      className:
        'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 disabled:bg-amber-200 disabled:text-amber-700',
    },
    {
      color: 'warning',
      variant: 'outline',
      className:
        'bg-transparent text-amber-700 border-amber-700 hover:bg-amber-100 active:bg-amber-200 disabled:text-amber-700 disabled:border-amber-700 disabled:bg-transparent',
    },
    {
      color: 'warning',
      variant: 'gradient',
      className:
        'bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:from-amber-500 hover:to-amber-700 active:from-amber-600 active:to-amber-800 disabled:text-amber-700 disabled:from-amber-100 disabled:to-amber-300',
    },
    {
      color: 'warning',
      variant: 'ghost',
      className:
        'bg-transparent text-amber-700 border-amber-700 hover:bg-amber-100 active:bg-amber-200 disabled:text-amber-700 disabled:border-amber-700 disabled:bg-transparent',
    },
    {
      color: 'warning',
      variant: 'link',
      className:
        'bg-transparent text-amber-700 border-amber-700 hover:bg-amber-100 active:bg-amber-200 disabled:text-amber-700 disabled:border-amber-700 disabled:bg-transparent underline',
    },
    /* Info */
    {
      color: 'info',
      variant: 'solid',
      className:
        'bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 disabled:bg-cyan-200 disabled:text-cyan-700',
    },
    {
      color: 'info',
      variant: 'outline',
      className:
        'bg-transparent text-cyan-700 border-cyan-700 hover:bg-cyan-100 active:bg-cyan-200 disabled:text-cyan-700 disabled:border-cyan-700 disabled:bg-transparent',
    },
    {
      color: 'info',
      variant: 'gradient',
      className:
        'bg-gradient-to-r from-cyan-400 to-cyan-600 text-white hover:from-cyan-500 hover:to-cyan-700 active:from-cyan-600 active:to-cyan-800 disabled:text-cyan-700 disabled:from-cyan-100 disabled:to-cyan-300',
    },
    {
      color: 'info',
      variant: 'ghost',
      className:
        'bg-transparent text-cyan-700 border-cyan-700 hover:bg-cyan-100 active:bg-cyan-200 disabled:text-cyan-700 disabled:border-cyan-700 disabled:bg-transparent',
    },
    {
      color: 'info',
      variant: 'link',
      className:
        'bg-transparent text-cyan-700 border-cyan-700 hover:bg-cyan-100 active:bg-cyan-200 disabled:text-cyan-700 disabled:border-cyan-700 disabled:bg-transparent underline',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    color: 'default',
  },
});

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    success?: boolean;
    isSubmitting?: boolean;
    submittingText?: string;
  };

export function Button({
  type = 'button',
  color,
  size,
  variant,
  success = false,
  isSubmitting = false,
  submittingText,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      data-success={success}
      data-processing={isSubmitting}
      disabled={success || isSubmitting || disabled}
      className={button({ size, color, variant, className })}
      {...rest}
    >
      {isSubmitting && (
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-primary-600 rounded text-white">
          <div className="flex gap-2">
            <Image
              src={spinner}
              width={24}
              height={24}
              alt=""
              className="animate-[spin_0.5s_linear_infinite]"
            />
            {submittingText && (
              <span className="animate-pulse">{submittingText}</span>
            )}
          </div>
        </div>
      )}

      {success && (
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-emerald-600 rounded text-white">
          <CheckCircle2 size={18} />
        </div>
      )}
      {children}
    </button>
  );
}
