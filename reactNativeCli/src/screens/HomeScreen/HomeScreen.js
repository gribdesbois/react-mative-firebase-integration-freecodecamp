import React from 'react'
import { Text, View } from 'react-native'
export default function HomeScreen(props) {
  const [entityText, setEntityText] = useState('')
  const [entities, setEntities] = useState([])

  const entityRef = firebase.firestore().collection('entities')
  const userID = props.extraData.id

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new entity"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEntityText(text)}
          value={entityText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {entities && (
        <View style={styles.listContainer}>
          <FlatList
            data={entities}
            renderItem={renderEntity}
            keyExtractor={item => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  )
}
