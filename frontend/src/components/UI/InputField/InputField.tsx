import { HTMLAttributes, forwardRef } from 'react';
import s from './InputField.module.scss';
import cn from 'classnames';

export const InputField = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={cn(s.input, className)} {...props} />;
  },
);
