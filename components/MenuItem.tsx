import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from '@/hooks/useColorScheme';

interface MenuItemProps {
  title: string;
  startIcon?: keyof typeof Ionicons.glyphMap;
  isFirstItem?: boolean;
  isLastItem?: boolean;
}

/**
 * A single item within the menu
 */
const MenuItem = ({ title, startIcon, isFirstItem = false, isLastItem = false }: MenuItemProps) => {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({ light: undefined, dark: undefined }, 'background');
  const iconColor = useThemeColor({ light: undefined, dark: undefined }, 'icon');

  const pressHandler = () => {
    console.log('Pressed!');
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed
            ? colorScheme === 'light'
              ? 'lightgrey'
              : 'dimgrey'
            : backgroundColor,
          borderTopLeftRadius: isFirstItem ? 8 : 0,
          borderTopRightRadius: isFirstItem ? 8 : 0,
          borderBottomLeftRadius: isLastItem ? 8 : 0,
          borderBottomRightRadius: isLastItem ? 8 : 0,
        },
      ]}
      onPress={pressHandler}>
      {({ pressed }) => (
        <>
          {startIcon && (
            <View style={styles.iconContainer}>
              <Ionicons name={startIcon} size={24} color={iconColor} />
            </View>
          )}
          <View
            style={[
              styles.borderWrapper,
              isLastItem && { borderBottomWidth: 0 },
              { borderBottomColor: colorScheme === 'light' ? 'lightgrey' : 'dimgrey' },
            ]}>
            <ThemedText style={styles.text}>{title}</ThemedText>
            <View style={styles.iconContainer}>
              <Ionicons name="chevron-forward" size={18} color={iconColor} />
            </View>
          </View>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconContainer: {
    padding: 8,
  },
  borderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '88%',
    borderBottomWidth: 0.5,
    height: 50,
  },
  text: {
    padding: 4,
    fontWeight: '500',
  },
});

export { MenuItem };
