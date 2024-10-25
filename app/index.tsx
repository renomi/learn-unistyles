import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { UnistylesRegistry, UnistylesRuntime, UnistylesThemes } from 'react-native-unistyles';

import { isWeb } from '~/common';
import { DemoGroup, DemoLink } from '~/components';
import { breakpoints, darkTheme, lightTheme, premiumTheme } from '~/styles';
import { autoGuidelinePlugin } from '~/styles/plugins';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    if (isWeb) {
      UnistylesRuntime.statusBar.setColor('#000000', 0.2);
      UnistylesRuntime.navigationBar.setColor('#000000', 0.2);
      UnistylesRuntime.setRootViewBackgroundColor('#ff9ff3');
    } else {
      console.log(
        'Warnings about deprecated syntax comes from StyleSheet.create. Unistyles 🦄 will handle it for you!'
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        <View style={styles.titleContainer}>
          <Text style={styles.unicorn}>🦄</Text>
          <Text style={styles.header}>Welcome to Unistyles 2.0!</Text>
          <Text style={styles.text}>/ Select demo /</Text>
        </View>
        <DemoGroup title="Themes">
          <DemoLink description="No themes" onPress={() => router.navigate('/no-themes')} />
          <DemoLink
            description="Single theme"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                // we need to cast it to UnistylesThemes as we already registered 3 themes with TypeScript under styles/index.ts,
                // but we want to demonstrate how to register a single theme
              } as UnistylesThemes);

              router.navigate('/single-theme');
            }}
          />
          <DemoLink
            description="Two themes"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                premium: premiumTheme,
                // we need to cast it to UnistylesThemes as we already registered 3 themes with TypeScript under styles/index.ts,
                // but we want to demonstrate how to register two themes
              } as UnistylesThemes).addConfig({
                initialTheme: 'light',
              });

              router.navigate('/two-themes');
            }}
          />
          <DemoLink
            description="Light/Dark themes"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                // we need to cast it to UnistylesThemes as we already registered 3 themes with TypeScript under styles/index.ts,
                // but we want to demonstrate how to register two themes
              } as UnistylesThemes).addConfig({
                adaptiveThemes: true,
              });

              router.navigate('/light-dark-themes');
            }}
          />

          <DemoLink
            description="Multiple themes"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              });

              router.navigate('/multiple-themes');
            }}
          />
          <DemoLink
            description="Multiple themes and adaptive modes"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              }).addConfig({
                adaptiveThemes: true,
              });

              router.navigate('/multiple-themes-adaptive');
            }}
          />

          <DemoLink
            description="Update theme at runtime"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              }).addConfig({
                adaptiveThemes: true,
              });

              router.navigate('/update-themes');
            }}
          />
        </DemoGroup>

        <DemoGroup title="Breakpoints">
          <DemoLink
            description="No breakpoints"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              });

              router.navigate('/no-breakpoints');
            }}
          />
          <DemoLink
            description="With breakpoints"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                });

              router.navigate('/breakpoints');
            }}
          />

          <DemoLink
            description="With orientation breakpoints"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              }).addConfig({
                adaptiveThemes: true,
              });

              router.navigate('/orientation-breakpoints');
            }}
          />
        </DemoGroup>

        <DemoGroup title="Media queries">
          <DemoLink
            description="Width and Height"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                });

              router.navigate('/mediaqueries-width-height');
            }}
          />
          <DemoLink
            description="Mixed with breakpoints"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                });

              router.navigate('/mixed-mediaqueries');
            }}
          />
          {isWeb && (
            <DemoLink
              description="CSS Media Queries"
              onPress={() => {
                UnistylesRegistry.addThemes({
                  light: lightTheme,
                  dark: darkTheme,
                  premium: premiumTheme,
                })
                  .addBreakpoints(breakpoints)
                  .addConfig({
                    adaptiveThemes: true,
                    experimentalCSSMediaQueries: true,
                  });

                router.navigate('/web-mediaqueries');
              }}
            />
          )}
        </DemoGroup>

        <DemoGroup title="Variants">
          <DemoLink
            description="With selected variant"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                });

              router.navigate('/variants');
            }}
          />
          <DemoLink
            description="Default variant"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                });

              router.navigate('/default-variant');
            }}
          />

          <DemoLink
            description="Boolean variants"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                });

              router.navigate('/boolean-variants');
            }}
          />
        </DemoGroup>

        <DemoGroup title="Plugins">
          <DemoLink
            description="Auto guideline"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                  // plugin can be registry enabled
                  plugins: UnistylesRuntime.enabledPlugins.includes(autoGuidelinePlugin.name)
                    ? []
                    : [autoGuidelinePlugin],
                });

              router.navigate('/auto-guideline-plugin');
            }}
          />
          <DemoLink
            description="High contrast"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  adaptiveThemes: true,
                });

              router.navigate('/high-contrast-plugin');
            }}
          />
        </DemoGroup>

        <DemoGroup title="Runtime">
          <DemoLink
            description="Runtime values"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                  windowResizeDebounceTimeMs: 0,
                });

              router.navigate('/runtime');
            }}
          />
          <DemoLink
            description="Layout"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/layout');
            }}
          />
          <DemoLink
            description="With StyleSheet"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/runtime-with-stylesheet');
            }}
          />
        </DemoGroup>

        <DemoGroup title="Other">
          <DemoLink
            description="Memoization"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/memoization');
            }}
          />
          <DemoLink
            description="Content Size Category"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/content-size-category');
            }}
          />
          {!isWeb && (
            <DemoLink
              description="PlatformColor"
              onPress={() => {
                UnistylesRegistry.addThemes({
                  light: lightTheme,
                  dark: darkTheme,
                  premium: premiumTheme,
                })
                  .addBreakpoints(breakpoints)
                  .addConfig({
                    initialTheme: 'light',
                  });

                router.navigate('/platform-colors');
              }}
            />
          )}

          <DemoLink
            description="Compatibility with StyleSheet"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/style-sheet');
            }}
          />

          <DemoLink
            description="No StyleSheet"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/no-style-sheet');
            }}
          />

          <DemoLink
            description="Change status/navigation bar color"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/android-statusbar');
            }}
          />

          <DemoLink
            description="Keyboard screen"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                  disableAnimatedInsets: true,
                });

              router.navigate('/keyboard');
            }}
          />
        </DemoGroup>

        <DemoGroup title="Benchmark">
          <DemoLink
            description="Startup time with single theme"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/benchmark');
            }}
          />
          <DemoLink
            description="Unistyles with all features"
            onPress={() => {
              UnistylesRegistry.addThemes({
                light: lightTheme,
                dark: darkTheme,
                premium: premiumTheme,
              })
                .addBreakpoints(breakpoints)
                .addConfig({
                  initialTheme: 'light',
                });

              router.navigate('/benchmark-all-features');
            }}
          />
        </DemoGroup>
        <View style={styles.fakeSpacer} />
      </ScrollView>
    </View>
  );
}

// oh, no! StyleSheet.create in unistyles demo!?
// yup, it's just a wrapper for all the demos, I want to demonstrate startup time
// and I don't want to use unistyles for this screen
// by the way, now you can appreciate what unistyles does for you!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9ff3',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  unicorn: {
    fontSize: 80,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B53471',
    marginTop: 10,
  },
  text: {
    color: '#2f3542',
    fontWeight: 'bold',
  },
  list: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  fakeSpacer: {
    height: 100,
  },
});
