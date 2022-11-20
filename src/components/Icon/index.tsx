import React from "react";
import * as Styled from './styles';

interface IconProps {
  name:
    "gen-placeholder" |
    "gen-eye" |
    "gen-delete" |
    "gen-delete-small" |
    "gen-review" |
    "gen-book-open" |
    "gen-credit-card" |
    "gen-coins-hand" |
    "gen-view-small" |
    "gen-cross-small" |
    "gen-auto-fill" |
    "gen-download" |
    "gen-ellipses" |
    "gen-logout" |
    "gen-orders" |
    "gen-edit" |
    "gen-minus-small" |
    "gen-plus" |
    "gen-plus-small" |
    "gen-cross" |
    "gen-microphone" |
    "gen-chevron-up" |
    "gen-chevron-bottom" |
    "gen-chevron-left" |
    "gen-chevron-right" |
    "gen-chevron-right-small" |
    "gen-star" |
    "gen-sort" |
    "gen-filter" |
    "gen-location" |
    "gen-del" |
    "gen-arrow" |
    "gen-add-to-homescreen" |
    "gen-profile" |
    "gen-profile-fill" |
    "gen-menu" |
    "gen-notification" |
    "gen-search" |
    "nav-home" |
    "nav-home-fill" |
    "nav-wishlist" |
    "nav-wishlist-fill" |
    "nav-categories" |
    "nav-categories-fill" |
    "nav-bag" |
    "nav-bag-fill" |
    "cat-watch" |
    "cat-watch-fill" |
    "cat-handbags" |
    "cat-handbags-fill" |
    "cat-jewellery" |
    "cat-jewellery-fill" |
    "cat-skincare" |
    "cat-skincare-fill";
  onClick?: () => void;
}
export default function Icon(
  {
    name = "gen-placeholder",
    ...props
  }: IconProps) {

  return (
    <Styled.Icon {...props} className='icons'>
      <img
        src={`/images/icons/${name}.svg`}
        alt={`${name.slice(3)} icon`}
        className="icon-item"
      />
    </Styled.Icon>
  );
}
