import { Text } from 'react-native';
import { useMemo } from 'react';

import { styles } from './styles';
import { IHeaderProps } from './types';
import {useParseHtmlTags} from '../../hooks/useParseHtmlTags';

const Header = ({ data, fontFamily, style, ...rest }: IHeaderProps) => {
  const headingStyleByLevel = useMemo(() => styles[`h${data.level}`], []);

  const { parseHtmlTag, defaultListTags } = useParseHtmlTags();

  const parsedText = useMemo(() => parseHtmlTag(defaultListTags, data.text), []);

  return (
    <Text
      accessible={true}
      accessibilityRole="header"
      allowFontScaling={true}
      style={[
        styles.container,
        headingStyleByLevel,
        style,
        { fontFamily: fontFamily },
      ]}
      {...rest}
    >
      {parsedText}
    </Text>
  );
};

export { Header };
