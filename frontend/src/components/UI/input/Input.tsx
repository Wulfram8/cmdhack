import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import LocationIcon from '../../../assets/icons/location-icon.svg';
import SearchIcon from '../../../assets/icons8-поиск-60 (1).png';

interface iInputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  placeholder?: string;
  className?: string | undefined;
}

const Input: FC<iInputProps> = (props) => {
  const { placeholder, className } = props;

  return (
    <div className={styles.inputContainer}>
      <img src={LocationIcon} alt='search-icon' />
      <input className={styles[className!]} type='text' placeholder={placeholder} />
      <img src={SearchIcon} alt='search-icon' />
    </div>
  );
};

export default Input;
