import { MenuItem } from '@/components/MenuItem';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Menu = () => {
  return (
    <SafeAreaView>
      <Text>Menu</Text>
      <View style={styles.container}>
        <MenuItem title="Add a Guest" />
        <MenuItem title="View Lists" />
        <MenuItem title="Settings" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
});

export default Menu;
