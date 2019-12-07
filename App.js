import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
			<View style = {{ flex: 1 , flexDirection: "row"}}>
				<View style = {{ flex: 1 , flexDirection: "column"}}>
					<View style = {{ flex: 1 , flexDirection: "row"}}>
						<View>
							<Text>Open up App.js to start working on your app!</Text>
						</View>
						<View>
							<Text>Open up App.js to start working on your app!</Text>
						</View>
					</View>
					<View style = {{ flex: 1 , flexDirection: "row"}}>
						<View>
							<Text>Open up App.js to start working on your app!</Text>
						</View>
						<View>
							<Text>Open up App.js to start working on your app!</Text>
						</View>
					</View>
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
