//Utiliza class ao invés de function
import React , { Component } from 'react';
import { StyleSheet, Text, View , TextInput, SafeAreaView , Button , Alert , TouchableHighlight , Image } from 'react-native';

export default class App extends Component {
  render() {
    var result = 0;
    return (
      <SafeAreaView style={{display:"flex",flex:1}}>
      <View style = {{ flexDirection: "row",flex:1,backgroundColor:'blue'}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'flex-end',flexDirection: "column",flex:1}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{ alignItems: 'center'}}>{this.result}</Text>
        </TouchableHighlight>
      </View>
      <View style = {{ flexDirection: "row",flex:1}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{ alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>%</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>C</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Image
            style={{width: 70, height: 70}}
            source={require('./assets/backspace.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./assets/dividir.png')}
          />
        </TouchableHighlight>
      </View>
      <View style = {{ flexDirection: "row",flex:1}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{ alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>7</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>8</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>9</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>x</Text>
        </TouchableHighlight>
      </View>
      <View style = {{ flexDirection: "row",flex:1}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{ alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>5</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>6</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>-</Text>
        </TouchableHighlight>
      </View>
      <View style = {{ flexDirection: "row",flex:1}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{ alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>3</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>+</Text>
        </TouchableHighlight>
      </View>
      <View style = {{ flexDirection: "row",flex:1}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./assets/plus-minus.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>0</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>.</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style = {{  alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>=</Text>
        </TouchableHighlight>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
