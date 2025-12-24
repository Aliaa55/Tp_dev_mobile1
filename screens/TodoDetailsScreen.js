import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../store/todosSlice';

export default function TodoDetailsScreen({ route, navigation }) {
  const { id, title } = route.params || {};
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>{title}</Text>
      <Text style={{ fontSize: 16, color: 'gray', marginTop: 8 }}>ID : {id}</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Supprimer" color="red" onPress={handleDelete} />
      </View>
    </View>
  );
}


