import { ListItem, ListItemButton, ListItemContent, Typography } from '@mui/joy';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  to: string;
};

export const SidebarItem = ({ icon, label, to }: SidebarItemProps) => {
  const navigate = useNavigate();
  return (
    <ListItem>
      <ListItemButton onClick={() => navigate(to)}>
        {icon}
        <ListItemContent>
          <Typography level='title-sm'>{label}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};
