/* eslint-disable react-hooks/exhaustive-deps */
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
import { useTypedSelector } from '@/store';
import { selectCartProducets, selectCartTotalPrice } from '@/store/cart/cartSlice';
import { Button } from '@/components/UI/TabMenu/button/Button';
import { selectClient } from '@/store/auth/authSlice';
import { useEffect } from 'react';
import { useCreateOrderMutation } from '@/store/services/orderApi';

export const MakeOrderPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    name: '',
    phone: '',
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
    cardNumber: '',
    cartMonth: '',
    cartYear: '',
    cvv: '',
    deliveryTime: '',
    street: '',
    homeNumber: '',
    flatNumber: '',
    pod: '',
    floor: '',
  });
  const cartProducts = useTypedSelector(selectCartProducets);
  const cartTotalPrice = useTypedSelector(selectCartTotalPrice);
  const client = useTypedSelector(selectClient);
  const [createOrder, createOrderExtra] = useCreateOrderMutation();

  useEffect(() => {
    if (form.values.user.id === 1) {
      form.setFieldValue('name', client?.user.first_name || '');
      form.setFieldValue('phone', client?.phone || '');
    } else {
      form.setFieldValue('name', '');
      form.setFieldValue('phone', '');
    }
  }, [client?.user, form.values.user]);

  const submitHanlder = async () => {
    try {
      await createOrder({
        client_id: client!.id,
        address: `${form.values.street}, д. ${form.values.homeNumber}, ${form.values.flatNumber}, ${form.values.pod}. ${form.values.floor}`,
      }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

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
          <div className='grid sm:grid-cols-2 gap-4 mt-8'>
            <InputField
              name='name'
              placeholder='Имя*'
              value={form.values.name}
              onChange={form.handleChange}
            />
            <InputField
              name='phone'
              placeholder='Телефон*'
              value={form.values.phone}
              onChange={form.handleChange}
            />
          </div>
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
          {form.values.delivery.id === 1 && (
            <>
              <h3 className={cn(s.formSectionTitle2, 'mt-7')}>Адрес доставки</h3>
              <div className='grid grid-cols-3 gap-4 mt-5'>
                <InputField
                  onChange={form.handleChange}
                  value={form.values.street}
                  name='street'
                  placeholder='Укажите улицу*'
                  className='col-span-2'
                />
                <InputField
                  onChange={form.handleChange}
                  value={form.values.homeNumber}
                  name='homeNumber'
                  placeholder='Номер дома*'
                />
                <InputField
                  onChange={form.handleChange}
                  value={form.values.flatNumber}
                  name='flatNumber'
                  placeholder='№ квартиры/офиса'
                />
                <InputField
                  onChange={form.handleChange}
                  value={form.values.pod}
                  name='pod'
                  placeholder='Подъезд'
                />
                <InputField
                  onChange={form.handleChange}
                  value={form.values.flatNumber}
                  name='flatNumber'
                  placeholder='Этаж'
                />
                <InputField
                  onChange={form.handleChange}
                  value={form.values.street}
                  name='street'
                  placeholder='Комментарий'
                  className='col-span-3'
                />
              </div>
            </>
          )}
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
          {form.values.payment.id === 3 && (
            <div className='grid grid-cols-3 gap-4 mt-5'>
              <InputField placeholder='Сдача с' />
            </div>
          )}
          {form.values.payment.id === 1 && (
            <div className='grid grid-cols-6 mt-5'>
              <div className='col-span-4 grid grid-cols-4 gap-4'>
                <InputField
                  name='cardNumber'
                  className='col-span-4'
                  placeholder='2200 0000 0000 0000'
                  onChange={form.handleChange}
                  value={form.values.cardNumber}
                />
                <InputField
                  name='cartMonth'
                  className='col-span-1'
                  placeholder='29'
                  onChange={form.handleChange}
                  value={form.values.cartMonth}
                />
                <InputField
                  name='cartYear'
                  className='col-span-1'
                  placeholder='2026'
                  onChange={form.handleChange}
                  value={form.values.cartYear}
                />
                <InputField
                  name='cvv'
                  className='col-span-2'
                  placeholder='CVV'
                  onChange={form.handleChange}
                  value={form.values.cvv}
                />
              </div>
            </div>
          )}
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
            {form.values.time.id === 2 && (
              <InputField
                name='deliveryTime'
                placeholder='Укажите время'
                value={form.values.deliveryTime}
                onChange={form.handleChange}
              />
            )}
          </div>
        </Paper>
        <Paper>
          <h2 className={s.formSectionTitle}>5. Итого</h2>
          <div className='mt-8 grid gap-3'>
            {cartProducts.map((product) => {
              return (
                <div key={product.meal.id} className={s.cartProduct}>
                  <img src={product.meal.image} className={s.cartImage} />
                  <div className={s.cartRight}>
                    <div>
                      <p className={s.cartName}>{product.meal.name}</p>
                      <p className={s.cartDescription}>{product.meal.description}</p>
                      <p className={cn(s.cartName, 'text-base')}>Цена: {product.meal.price} ₽</p>
                      <p className={s.cartDescription}>Количество {product.quantity}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <p className={s.cartName}>
              Итоговая сумма: {Intl.NumberFormat().format(cartTotalPrice)} ₽
            </p>
          </div>
        </Paper>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};
