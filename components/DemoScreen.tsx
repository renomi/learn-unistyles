import { useRouter } from 'expo-router';
import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Timer } from './Timer';

export const DemoScreen: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const [renderTime, setRenderTime] = useState(0);

  return (
    <Timer onMeasureEnd={setRenderTime}>
      <View
        style={{
          ...styles.container,
          paddingTop: top,
        }}>
        <View style={styles.goBackContainer}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.text}>← Go back</Text>
          </Pressable>
          {Boolean(renderTime) && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Render time: {renderTime}ms</Text>
            </View>
          )}
        </View>
        {children}
      </View>
    </Timer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  goBackContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#d63031',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  badgeText: {
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
