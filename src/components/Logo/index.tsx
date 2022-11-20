import React from "react";
import * as Styled from './styles';

interface LogoProps {
  link?: string;
  onClick?: () => void;
}

export default function Logo({
  link = '404/html',
  ...props
}:LogoProps) {
  return (
    <Styled.Logo {...props}>
      <a href={link}>
        <img
          src={`/images/logo/logo.svg`}
          alt={`logo`}
          className="logo"
        />
      </a>
    </Styled.Logo>
  );
}
