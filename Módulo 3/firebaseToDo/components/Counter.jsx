import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { increment, decrement} from "../context/actions/counterAction"
import { connect } from "react-redux";

const Counter = ({count, increment, decrement}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>
            Adicione tarefas cumpridas: {count}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>
            Zerar contagem
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'grey', 
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

const mapStateToProps = (state) =>({
    count: state.counter.count,
});

const mapDispatchToProps = {
    increment,
    decrement,
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
