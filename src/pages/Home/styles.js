import colors from '../../styles/colors';

export const Parent = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  background: colors.BACKGROUND,
  color: colors.BLACK,
};

export const Header = {
  display: 'flex',
  background: 'blue',
  height: '7%',
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Container = {
  display: 'flex',
  height: '100vh',
  width: '50%',
  justifyContent: 'center',
  background: colors.BACKGROUND,
  color: colors.BLACK,
};

export const Container1 = {
  display: 'flex',
  flex: 1.3,
  background: 'red',
};

export const Container2 = {
  display: 'flex',
  flex: 1,
  background: 'green',
};
