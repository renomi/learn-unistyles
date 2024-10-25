import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type UnistylesBoxProps = object;

export const UnistylesBox: React.FunctionComponent<UnistylesBoxProps> = () => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.box} />;
};

const stylesheet = createStyleSheet((theme) => ({
  box: {
    backgroundColor: theme.colors.accent,
    width: 10,
    height: 10,
  },
}));
