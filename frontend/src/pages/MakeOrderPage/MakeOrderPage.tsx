import { Paper } from '@/components/UI/Paper/Paper';
import s from './MakeOrderPage.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/router/routerConfig';
import { InputField } from '@/components/UI/InputField/InputField';
import cn from 'classnames';
import { GroupButtons } from '@/components/UI/GroupButtons/GroupButtons';
import { useForm } from '@/lib/hooks/useForm';
import { SlPresent } from 'react-icons/sl';

export const MakeOrderPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    delivery: {
      id: 1,
      label: 'Доставка',
    },
    payment: {
      id: 1,
      label: 'Оплата онлайн',
    },
    time: {
      id: 1,
      label: 'В ближайшее время',
    },
    user: {
      id: 1,
      label: 'Себе',
    },
  });

  return (
    <div className={s.root}>
      <button className={s.backButton} onClick={() => navigate(RoutePath.cart)}>
        <IoIosArrowBack />в корзину
      </button>
      <div className={s.titleWrapper}>
        <div className={s.verticalLine} />
        <h1 className={s.title}>Оформление заказа</h1>
      </div>
      <div className={s.formWrapper}>
        <Paper>
          <h2 className={s.formSectionTitle}>1. Контактная информация</h2>
          <div className='grid grid-cols-2 mt-5'>
            <GroupButtons
              options={[
                { id: 1, label: 'Себе' },
                {
                  id: 2,
                  label: (
                    <div className='flex gap-2 items-center justify-center'>
                      <span>Другу</span> <SlPresent />
                    </div>
                  ),
                },
              ]}
              onChange={(value) =>
                form.setFieldValue('user', value as { id: number; label: string })
              }
              selectLabel={(option) => option.label}
              selectOptionCompare={(option) => option.id}
              selectKey={(option) => option.id}
              value={form.values.user}
            />
          </div>
          {form.values.user.id === 2 && (
            <div className='grid sm:grid-cols-2 gap-4 mt-8'>
              <InputField placeholder='Имя*' />
              <InputField placeholder='Телефон*' />
            </div>
          )}
        </Paper>
        <Paper>
          <h2 className={s.formSectionTitle}>2. Доставка</h2>
          <div className='grid grid-cols-2'>
            <GroupButtons
              className='mt-8'
              options={[
                { id: 1, label: 'Доставка' },
                { id: 2, label: 'Самовывоз' },
              ]}
              onChange={(value) => form.setFieldValue('delivery', value)}
              selectLabel={(option) => option.label}
              selectOptionCompare={(option) => option.id}
              selectKey={(option) => option.id}
              value={form.values.delivery}
            />
          </div>
          <h3 className={cn(s.formSectionTitle2, 'mt-7')}>Адрес доставки</h3>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <InputField placeholder='Укажите улицу*' className='col-span-2' />
            <InputField placeholder='Номер дома*' />
            <InputField placeholder='№ квартиры/офиса' />
            <InputField placeholder='Подъезд' />
            <InputField placeholder='Этаж' />
            <InputField placeholder='Комментарий' className='col-span-3' />
          </div>
        </Paper>
        <Paper>
          <h2 className={s.formSectionTitle}>3. Оплатить</h2>
          <div className='grid'>
            <GroupButtons
              className='mt-8'
              options={[
                { id: 1, label: 'Оплата онлайн' },
                { id: 2, label: 'Курьеру картой' },
                { id: 3, label: 'Наличными' },
              ]}
              onChange={(value) => form.setFieldValue('payment', value)}
              selectLabel={(option) => option.label}
              selectOptionCompare={(option) => option.id}
              selectKey={(option) => option.id}
              value={form.values.payment}
            />
          </div>
          <h3 className={cn(s.formSectionTitle2, 'mt-7')}>Адрес доставки</h3>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <InputField placeholder='Сдача с' />
          </div>
        </Paper>
        <Paper>
          <h2 className={s.formSectionTitle}>4. Когда доставить</h2>
          <div className='grid grid-cols-3 gap-4 mt-8 '>
            <GroupButtons
              className='col-span-2'
              options={[
                { id: 1, label: 'В ближайшее время' },
                { id: 2, label: 'Ко времени' },
              ]}
              onChange={(value) => form.setFieldValue('time', value)}
              selectLabel={(option) => option.label}
              selectOptionCompare={(option) => option.id}
              selectKey={(option) => option.id}
              value={form.values.time}
            />
            {form.values.time.id === 2 && <InputField placeholder='Укажите время' />}
          </div>
        </Paper>
      </div>
    </div>
  );
};
