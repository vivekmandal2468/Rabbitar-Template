// WOW this shit

import React from 'react';
import { cn } from '../lib/utils';

export const SubHeading = ({children, className, as="p"}) => {

    const Tag = as;
  return (
    <div>
        <Tag className={cn("text-base px-4 py-8 md:text-lg text-neutral-400 dark:text-neutral-400  font-inter max-w-4xl", className)}>
            {children}
        </Tag>
    </div>
  )
}

