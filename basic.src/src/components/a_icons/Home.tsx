import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgHome = (props: SvgProps) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} {...props}>
    <Path fill='none' d='M0 0h24v24H0V0z' />
    <Path d='m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
  </Svg>
);
export default SvgHome;
