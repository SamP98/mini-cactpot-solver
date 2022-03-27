import { StyleSheet, Text, View , Platform, StatusBar} from 'react-native';
import { Header } from './Header.js';
import { Board } from './Board.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Board/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', //horizontal
    justifyContent: 'flex-start', //vertical
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
