import * as Styled from './styles';
import Icon from '../Icon';

interface SearchProps {
  placeholder: string;
  onClick?: () => void;
}

export default function SearchBar({
  placeholder,
  ...props
}:SearchProps) {
  return (
    <Styled.SearchBar
      className="search-container"
      {...props}
    >
      <Icon name="gen-search" />
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"/>
    </Styled.SearchBar>
  );
}
