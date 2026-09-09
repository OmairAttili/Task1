import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import GradeIcon from '@mui/icons-material/Grade';

const Root = styled('div')(({ theme }) => ({
  width: '50%',
  ...theme.typography.body2,
  color: 'white',
  '& .MuiDivider-root': {
    '&::before, &::after': {
      borderColor: 'white',
      borderTopWidth: '5px',
      borderRadius: '10px',
    },
  },
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {

  return (
    <Root>
      <Divider><GradeIcon/></Divider>
    </Root>
  );
}
