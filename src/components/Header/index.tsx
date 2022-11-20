import React from "react";
import Icon from "../Icon";
import Logo from "../Logo";
import Menu from "../Menu";
import SearchBar from "../SearchBar";
import * as Styled from './styles';

interface HeaderProps {
  onClick?: () => void;
}

export default function Header({
  ...props
}:HeaderProps) {
  return (
    <Styled.Header {...props}>
      <div className="sides sideA">
        <Logo link="/"/>
        <Menu />
      </div>
      <div className="sides sideB">
        <SearchBar placeholder="Search for products or brands....."/>
        <nav className="nav-icons">
          <Icon name="nav-wishlist"/>
          <Icon name="gen-profile"/>
          <Icon name="nav-bag"/>
        </nav>
      </div>
    </Styled.Header>
  );
}
