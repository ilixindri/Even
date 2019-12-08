//utiliza button ao invés de TouchableHighlight
import React from 'react';
import { StyleSheet, Text, View , TextInput, SafeAreaView , Button , InputButton } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{display:"flex",flex:1}}>
			<View style = {{ alignItems: 'center',flexDirection: "row",flex:1,backgroundColor:'blue'}}>
				<View style = {{ alignItems: 'center',flexDirection: "column",flex:1}}>
					<Button style = {{  }}
					  title="Press me"
					  onPress={() => Alert.alert('Simple Button pressed')}
					/>
				</View>
				<View style = {{ alignItems: 'center',flexDirection: "column",flex:1}}>
					<Text>Openworking on your app!</Text>
				</View>
			</View>
			<View style = {{ alignItems: 'center',flexDirection: "row",flex:1}}>
				<View style = {{ alignItems: 'center',flexDirection: "column",flex:1}}>
					<Text>Open up App.js to start working on your app!</Text>
				</View>
				<View style = {{ alignItems: 'center',flexDirection: "column",flex:1}}>
					<Text>Open up App.js to start working on your app!</Text>
				</View>
			</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
