import Icon from "../Icon";

interface SearchProps {
  placeholder: string;
  onClick?: () => void;
}

export default function Search({
  placeholder,
  ...props
}:SearchProps) {
  return (
    <div
      className="search-container"
      {...props}
    >
      <Icon name="gen-search" />
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"/>
    </div>
  );
}
