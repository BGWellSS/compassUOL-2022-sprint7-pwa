import React from "react";
import * as Styled from './styles';
import mItemsData from './menuItems.json';
import MenuItem from "../MenuItem";
import { v4 as uuidv4 } from 'uuid';

interface MenuProps {
  mItems?: Array<typeof mItemsData[0]>;
  onClick?: () => void;
}

export default function Menu({
  mItems = mItemsData,
  ...props
}:MenuProps) {
  return (
    <Styled.Menu {...props}>
      <ul className="container">
        {mItems.map((item) => (
          <MenuItem key={uuidv4()} link={item.link}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </Styled.Menu>
  );
}
