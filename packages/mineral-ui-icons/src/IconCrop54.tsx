import React from 'react';
import Icon from 'mineral-ui/Icon';

import { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconCrop54(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/>
      </g>
    </Icon>
  );
}

IconCrop54.displayName = 'IconCrop54';
IconCrop54.category = 'image';
