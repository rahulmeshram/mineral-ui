import React from 'react';
import Icon from 'mineral-ui/Icon';

import { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconChangeHistory(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/>
      </g>
    </Icon>
  );
}

IconChangeHistory.displayName = 'IconChangeHistory';
IconChangeHistory.category = 'action';
