import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export function Light(args) {
  return <Heading {...args} />;
}
export function Dark(args) {
  return <Heading {...args} />;
}

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O testo está claro',
  colorDark: false,
};
