import { InputField } from '@/components/UI/InputField/InputField';
import { Paper } from '@/components/UI/Paper/Paper';
import { Button } from '@/components/UI/TabMenu/button/Button';
import { useForm } from '@/lib/hooks/useForm';
import { useLoginMutation } from '@/store/services/api';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const form = useForm({
    username: '',
    password: '',
  });
  const [login, loginExtra] = useLoginMutation();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    try {
      await login(form.values).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-h-full p-4 flex items-center'>
      <Paper className='w-full max-w-[400px] mx-auto py-10'>
        <h1 className='text-3xl font-bold text-center'>Авторизация</h1>
        <form className='grid gap-4 mt-5' onChange={form.handleChange} onSubmit={submitHandler}>
          <InputField name='username' placeholder='Логин' value={form.values.username} />
          <InputField
            name='password'
            placeholder='Пароль'
            type='password'
            value={form.values.password}
          />
          <Button
            type='submit'
            style={{ color: 'var(--primary-text)' }}
            disabled={loginExtra.isLoading}
          >
            Войти
          </Button>
        </form>
        <Link to='/auth/register' className='text-center mt-2 inline-block w-full'>
          Зарегистрироваться
        </Link>
      </Paper>
    </div>
  );
};
