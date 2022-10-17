import { screen } from '@testing-library/react';

import Home from '.';
import { renderTheme } from '../../styles/render-theme';

test('Renders main page correctly', () => {
  renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', {
    name: 'Home',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    display: 'flex',
  });
  expect(headingContainer).toMatchSnapshot();
});
