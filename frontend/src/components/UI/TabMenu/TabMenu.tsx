import styles from './TabMenu.module.scss';
import customClasses from '@/lib/customClasses/customClasses';
import { FC } from 'react';

interface iTabMenuProps {
  className?: string;
}

export const TabMenu: FC<iTabMenuProps> = (props) => {
  const { className } = props;

  return <div className={customClasses(styles.TabMenu, {}, [className!])}></div>;
};
