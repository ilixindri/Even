import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{display:"flex"}}>
			<View style = {{ flexDirection: "column"}}>
				<View style = {{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: "row", float:'left'}}>
					<Text>Open!</Text>
				</View>
				<View style = {{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: "row", float:'rigth'}}>
					<Text>Openworking on your app!</Text>
				</View>
			</View>
			<View style = {{ flexDirection: "column"}}>
				<View style = {{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: "row"}}>
					<Text>Open up App.js to start working on your app!</Text>
				</View>
				<View style = {{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: "row"}}>
					<Text>Open up App.js to start working on your app!</Text>
				</View>
			</View>
    </View>
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
