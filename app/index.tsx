import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const index = () => {

    const [input, setInput] = useState('')
    const [todoAdd, setTodoAdd] = useState<string[]>([])

    const addTodo = () => {
        console.log(input);
        todoAdd.push(input)
        setTodoAdd([...todoAdd])
        setInput('')
        console.log(todoAdd);
    }

const deleteTodo = (index: number) => {
    console.log('Deleted : ', index)
    todoAdd.splice(index , 1)
    setTodoAdd([...todoAdd])
}

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.mainHeading}>Todo App</Text>

            <TextInput
                style={styles.input}
                onChangeText={setInput}
                value={input}
                placeholder='Enter Todo...'
            />

            <TouchableOpacity style={styles.button} onPress={addTodo}>
                <Text>Press Here</Text>
            </TouchableOpacity>

            {todoAdd.length > 0 ? (<FlatList
                data={todoAdd}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{item}</Text>
                        <TouchableOpacity style={styles.button} >
                            <Text>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => deleteTodo(index)} >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View >
                )}
                keyExtractor={(index) => index.toString()}

            />) : (<Text>No Todo found!</Text>)}

        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainHeading: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'orange',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})

export default index