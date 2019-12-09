//Utiliza class ao invés de function
import React , { Component } from 'react';
import { StyleSheet, Text, View , TextInput, SafeAreaView , Button , Alert , TouchableHighlight , Image } from 'react-native';

export default class App extends Component {
  state = { result: 1,
            label: 'Geração ',
            generation: 1,
            resultDefault: 1,
            generationDefault: 1};
  render() {
    return (
      <SafeAreaView style={{display:"flex",flex:1}}>
      <View style = {{ flexDirection: "row",flex:1,backgroundColor:'blue'}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1}}
              underlayColor="#193441">
          <Text style = {{ alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>{this.state.result}</Text>
        </TouchableHighlight>
      </View>
      <View style = {{ flexDirection: "row",flex:1}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => this.setState(previousState => (
                              {
                                result: previousState.resultDefault,
                                generation: 1
                              }
                                ))
                              }>
          <Text style = {{ alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>C</Text>
        </TouchableHighlight>
      </View>
      <View style = {{ flexDirection: "row",flex:1}}>
        <TouchableHighlight style = {{ alignItems: 'center',justifyContent: 'center',flexDirection: "column",flex:1,backgroundColor:'#7FFF00'}}
              underlayColor="#193441"
                  onPress={() => this.setState(previousState => (
                              {
                                result: previousState.result + previousState.generationDefault,
                                generation: previousState.generation+1
                              }
                                ))
                              }>
          <Text style = {{ alignItems: 'center', fontSize: 50, fontWeight: 'bold'}}>{this.state.label + this.state.generation}</Text>
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
