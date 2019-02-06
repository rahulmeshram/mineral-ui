import React from 'react';
import Icon from 'mineral-ui/Icon';

import { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSignalCellularConnectedNoInternet0Bar(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path fillOpacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/>
      </g>
    </Icon>
  );
}

IconSignalCellularConnectedNoInternet0Bar.displayName = 'IconSignalCellularConnectedNoInternet0Bar';
IconSignalCellularConnectedNoInternet0Bar.category = 'device';
