import React from "react";
import * as Styled from './styles';

interface MessageProps {
  message: string;
  link?: string;
  onClick?: () => void;
}

export default function Message({
  message,
  link,
  ...props
}:MessageProps) {
  function messageLink(){
    return (
      <a href={link} className='link'>here</a>
    );
  }
  return (
    <Styled.Message {...props} className='message'>
      <>
        <p className="text">{message}{link? ' ': ''}{ link? messageLink(): ''}</p>
      </>
    </Styled.Message>
  );
}
