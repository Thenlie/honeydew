import { MenuItem } from '@/components/MenuItem';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Menu = () => {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24 }}>Menu</Text>
      </View>
      <View style={styles.container}>
        <MenuItem title="Add a Guest" startIcon="people" />
        <MenuItem title="View Lists" startIcon="list" />
        <MenuItem title="Settings" startIcon="cog" isLastItem={true} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    margin: 4,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 4,
    backgroundColor: 'white',
  },
});

export default Menu;
