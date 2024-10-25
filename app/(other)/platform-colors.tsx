import { Text, View, PlatformColor, Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { isWeb } from '~/common';
import { DemoScreen } from '~/components';

export default function PlatformColors() {
  const { styles } = useStyles(stylesheet);

  return (
    <DemoScreen>
      <View style={styles.container}>
        <Text>Unistyles supports also PlatformColor!</Text>
      </View>
    </DemoScreen>
  );
}

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        color: !isWeb ? PlatformColor('label') : undefined,
        backgroundColor: !isWeb ? PlatformColor('systemTealColor') : undefined,
      },
      android: {
        color: !isWeb ? PlatformColor('?android:attr/textColor') : undefined,
        backgroundColor: !isWeb ? PlatformColor('@android:color/holo_blue_bright') : undefined,
      },
      default: {
        color: 'black',
        backgroundColor: 'orange',
      },
    }),
  },
  text: {
    color: {
      sm: !isWeb ? PlatformColor('label') : undefined,
      md: !isWeb ? PlatformColor('systemTealColor') : undefined,
    },
  },
});
