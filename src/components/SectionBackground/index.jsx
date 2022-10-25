import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { Container } from './styles';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
