// WOW this shit

import React from 'react';
import { cn } from '../lib/utils';

export const Heading = ({children, className, as="h2"}) => {

    const Tag = as;
  return (
    <div>
        <Tag className={cn("text-2xl md:text-4xl lg:text-5xl tracking-tight font-display font-bold px-4", className, 'text-shadow-sm text-shadow-neutral-300', 'dark:text-shadow-neutral-600', 'selection:bg-cyan-400 selection:text-white ')}>
            {children}
        </Tag>
    </div>
  )
}

