import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLogin = (props: SvgProps) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} {...props}>
    <Path fill='none' d='M0 0h24v24H0z' />
    <Path d='M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z' />
  </Svg>
);
export default SvgLogin;
