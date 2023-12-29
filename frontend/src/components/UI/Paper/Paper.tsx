import { HTMLAttributes, forwardRef } from 'react';
import s from './Paper.module.scss';
import cn from 'classnames';

export const Paper = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(s.root, className)} {...props} />;
  },
);
