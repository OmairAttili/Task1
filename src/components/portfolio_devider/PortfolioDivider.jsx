import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import GradeIcon from '@mui/icons-material/Grade';

const Root = styled('div')(({ theme }) => ({
  width: '25%',
  ...theme.typography.body2,
  color: '#2c3e50',
  '& .MuiDivider-root': {
    '&::before, &::after': {
      borderColor: '#2c3e50',
      borderTopWidth: '5px',
      borderRadius: '10px',
    },
  },
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function PortfolioDivider() {

  return (
    <Root>
      <Divider><GradeIcon/></Divider>
    </Root>
  );
}