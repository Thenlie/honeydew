import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface MenuItemProps {
  title: string;
}

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>{title}</Text>
        <Ionicons name="chevron-forward" size={16} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    textAlignVertical: 'center',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export { MenuItem };
