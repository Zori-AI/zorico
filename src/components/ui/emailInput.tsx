import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { EmailInputProps } from '@/types/ui';

export function EmailInput({ 
  className, 
  onButtonClick,
  value,
  onChange,
  placeholder = "your email",
  variant = "desktop"
}: EmailInputProps) {
  const isMobile = variant === "mobile";
  
  return (
    <div 
      className={cn(
        "glass-effect",
        "box-border content-stretch flex items-center justify-between relative rounded-[16px] size-full",
        isMobile 
          ? "pl-[16px] pr-[8px] py-[8px]" 
          : "pl-[16px] pr-[8px] py-[8px]",
        className
      )}
      data-name="top"
      data-node-id={isMobile ? "8932:57121" : "8932:47003"}
    >
      {isMobile ? (
        <p className="font-['JetBrains_Mono:Regular',_sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-[rgba(255,251,249,0.25)] text-nowrap uppercase whitespace-pre flex-1">
          your email
        </p>
      ) : (
        <input
          type="email"
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent font-['JetBrains_Mono:Regular',_sans-serif] font-normal leading-[1.2] relative shrink-0 text-[16px] text-[rgba(255,251,249,0.25)] text-nowrap uppercase outline-none flex-1 placeholder-[rgba(255,251,249,0.25)] focus:text-[rgba(255,251,249,0.8)] transition-colors z-10"
          data-node-id="8932:47004"
        />
      )}
      <div 
        className="relative shrink-0 size-[44px] cursor-pointer hover:opacity-80 transition-opacity z-10"
        data-name="button" 
        data-node-id={isMobile ? "8932:57123" : "8932:47005"}
        onClick={onButtonClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onButtonClick?.();
          }
        }}
        aria-label="Submit email"
      >
        <Image
          alt="Submit button"
          src="/images/ui/button-arrow.svg"
          width={44}
          height={44}
          className="block max-w-none size-full"
        />
      </div>
    </div>
  );
}
