import { Paragraph } from './styles';

function FallbackMessage({ children }) {
  return <Paragraph>{children}</Paragraph>;
}

export default FallbackMessage;
