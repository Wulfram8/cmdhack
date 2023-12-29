import { InputField } from '@/components/UI/InputField/InputField';
import { Paper } from '@/components/UI/Paper/Paper';
import { Button } from '@/components/UI/TabMenu/button/Button';
import { useForm } from '@/lib/hooks/useForm';
import { useRegisterMutation } from '@/store/services/api';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const form = useForm({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });
  const [register, registerExtra] = useRegisterMutation();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await register({
        first_name: form.values.firstName,
        username: form.values.username,
        last_name: form.values.lastName,
        password: form.values.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-full p-4 flex items-center'>
      <Paper className='w-full max-w-[400px] mx-auto py-10'>
        <h1 className='text-3xl font-bold text-center'>Регистрация</h1>
        <form className='grid gap-4 mt-5' onChange={form.handleChange} onSubmit={submitHandler}>
          <InputField name='username' placeholder='Логин' value={form.values.username} />
          <InputField name='firstName' placeholder='Имя' value={form.values.firstName} />
          <InputField name='lastName' placeholder='Фамилия' value={form.values.lastName} />
          <InputField
            name='password'
            placeholder='Пароль'
            type='password'
            value={form.values.password}
          />
          <InputField
            name='confirmPassword'
            placeholder='Подтвердите пароль'
            type='password'
            value={form.values.confirmPassword}
          />
          <Button
            type='submit'
            style={{ color: 'var(--primary-text)' }}
            disabled={registerExtra.isLoading}
          >
            Регистрация
          </Button>
        </form>
        <Link to='/auth/login' className='text-center mt-2 inline-block w-full'>
          Уже есть аккаунт? Войти
        </Link>
      </Paper>
    </div>
  );
};
