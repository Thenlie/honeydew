import { MenuItem } from '@/components/MenuItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, SafeAreaView, StyleSheet } from 'react-native';

const Menu = () => {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <ThemedText style={{ fontSize: 24 }}>Menu</ThemedText>
      </View>
      <ThemedView style={styles.container}>
        <MenuItem title="Add a Guest" startIcon="people" isFirstItem={true} />
        <MenuItem title="View Lists" startIcon="list" />
        <MenuItem title="Settings" startIcon="cog" isLastItem={true} />
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    margin: 8,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    margin: 8,
    borderRadius: 8,
  },
});

export default Menu;
