import React from "react";
import * as Styled from './styles';

interface MenuItemProps {
  children: string;
  link?: string;
  onClick?: () => void;
}

export default function MenuItem({
  children,
  link = '404/html',
  ...props
}:MenuItemProps) {
  return (
    <Styled.MenuItem {...props} className='item'>
      <a href={link} className='link'>
        {children}
      </a>
    </Styled.MenuItem>
  );
}
