import { useGetClientsQuery } from '@/store/services/clientApi';
import { Autocomplete } from '@mui/material';
import { InputField } from '../UI/InputField/InputField';
import { Client } from '@root/dto';

type SelectClientProps = {
  value: Client | null;
  onChange: (value: Client | null) => void;
};

export const SelectClient = ({ value, onChange }: SelectClientProps) => {
  const clientsQuery = useGetClientsQuery();
  const clients = clientsQuery.data;

  return (
    <Autocomplete
      renderInput={(params) => {
        return (
          <div ref={params.InputProps.ref}>
            <InputField type='text' {...params.inputProps} style={{ width: '100%' }} />
          </div>
        );
      }}
      options={clients || []}
      getOptionLabel={(option) => option.user.first_name + ' ' + option.user.last_name}
      value={value}
      onChange={(_, value) => {
        onChange(value);
      }}
    />
  );
};
