import { Text } from 'react-native';
import { useMemo } from 'react';

import { styles } from './styles';
import { IHeaderProps } from './types';

const Header = ({ data, fontFamily, style, ...rest }: IHeaderProps) => {
  const stylesByHeadingLevel = useMemo(() => styles[`h${data.level}`], []);

  return (
    <Text
      accessible={true}
      accessibilityRole="header"
      allowFontScaling={true}
      style={[
        style,
        { ...styles.global, ...stylesByHeadingLevel, fontFamily }
      ]}
      {...rest}
    >
      {data.text}
    </Text>
  );
};

export { Header };
