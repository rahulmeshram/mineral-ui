import React from 'react';
import Icon from 'mineral-ui/Icon';

import { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconChevronRight(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </g>
    </Icon>
  );
}

IconChevronRight.displayName = 'IconChevronRight';
IconChevronRight.category = 'navigation';
