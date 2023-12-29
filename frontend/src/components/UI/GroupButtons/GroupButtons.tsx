import React from 'react';
import s from './GroupButtons.module.scss';
import cn from 'classnames';

export type GroupButtonsProps<Options extends unknown[]> = {
  options: Options;
  onChange: (value: Options[number]) => void;
  selectLabel: (option: Options[number]) => string | number;
  selectOptionCompare: (option: Options[number]) => unknown;
  selectKey: (option: Options[number]) => React.Key;
  value: Options[number];
  className?: string;
};

export const GroupButtons = <Options extends unknown[]>({
  options,
  onChange,
  selectLabel,
  value,
  selectOptionCompare,
  selectKey,
  className,
}: GroupButtonsProps<Options>) => {
  return (
    <div className={cn(s.root, className)}>
      {options.map((option) => {
        return (
          <button
            key={selectKey(option)}
            className={cn(s.button, {
              [s.buttonActive]: selectOptionCompare(option) === selectOptionCompare(value),
            })}
            onClick={() => onChange(option)}
          >
            {selectLabel(option)}
          </button>
        );
      })}
    </div>
  );
};
