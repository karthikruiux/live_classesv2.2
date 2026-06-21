import React from 'react';

export function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`rounded-[24px] font-medium transition ${className}`} {...props}>{children}</button>;
}
