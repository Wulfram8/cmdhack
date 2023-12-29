import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

export type UseFormReturn<FormState extends object> = {
  handleChange: ChangeEventHandler<HTMLInputElement & HTMLFormElement>;
  setValues: Dispatch<SetStateAction<FormState>>;
  setFieldValue: <Name extends keyof FormState>(name: Name, value: FormState[Name]) => void;
  values: FormState;
  reset: () => void;
};

export const useForm = <FormState extends object>(
  initialFormState: FormState,
): UseFormReturn<FormState> => {
  const [values, setValues] = useState(initialFormState);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const setFieldValue = useCallback(
    <Name extends keyof FormState>(name: Name, value: FormState[Name]) => {
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [],
  );

  const reset = useCallback(() => {
    setValues(initialFormState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleChange,
    setValues,
    setFieldValue,
    values,
    reset,
  };
};
