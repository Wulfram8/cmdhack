import { useGetCategoriesQuery } from '@/store/services/categoriesApi';
import style from './Filter.module.scss';
import { useState } from 'react';
import { useAppDispatch, useTypedSelector } from '@/store';
import { changeFilterValue } from '@/store/filter/filterSlice';

const Filter = () => {
  const categoriesData = useGetCategoriesQuery();
  const res = categoriesData.data;
  const dispatch = useAppDispatch();
  // const [catElement, setCatElement] = useState(0)
  let catElement = useTypedSelector(changeFilterValue);
  return (
    <div className={style.categoriesCont}>
      <ul>
        {res?.map((el: any) => (
          <li
            key={el.id}
            className={el.id === catElement.payload.filter.value ? style.active : ''}
            onClick={() => dispatch(changeFilterValue(el.id))}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
