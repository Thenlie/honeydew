import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface MenuItemProps {
  title: string;
  startIcon?: keyof typeof Ionicons.glyphMap;
  isLastItem?: boolean;
}

/**
 * A single item within the menu
 */
const MenuItem = ({ title, startIcon, isLastItem = false }: MenuItemProps) => {
  const pressHandler = () => {
    console.log('Pressed!');
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? 'lightgrey' : 'white' },
      ]}
      onPress={pressHandler}>
      {({ pressed }) => (
        <>
          {startIcon && (
            <View style={styles.iconContainer}>
              <Ionicons name={startIcon} size={24} />
            </View>
          )}
          <View style={[styles.borderWrapper, isLastItem && { borderBottomWidth: 0 }]}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.iconContainer}>
              <Ionicons name="chevron-forward" size={18} color="grey" />
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
    width: '90%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    height: 40,
  },
  text: {
    padding: 4,
    fontWeight: '500',
  },
});

export { MenuItem };
