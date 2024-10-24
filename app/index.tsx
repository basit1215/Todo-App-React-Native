import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'

const index = () => {

    const [input, setInput] = useState('')
    const [todoAdd, setTodoAdd] = useState<string[]>([])
    const [modalVisible, setModalVisible] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState('')
    const [index, setIndex] = useState(0)

    const addTodo = () => {
        if (input === null || input.trim() === "") {
            alert('Please Enter Todo!')
            return;
        }
        console.log(input);
        todoAdd.push(input)
        setTodoAdd([...todoAdd])
        setInput('')
        console.log(todoAdd);


    }

    const deleteTodo = (index: number) => {
        console.log('Deleted : ', index)
        todoAdd.splice(index, 1)
        setTodoAdd([...todoAdd])
    }

    const editTodo = (index: number) => {
        if (updatedTodo === null || updatedTodo.trim() === "") {
            alert('Try Again!\nEnter new Edited Todo!')
            return;
        }
        console.log(updatedTodo, index)
        todoAdd.splice(index, 1, updatedTodo)
        setTodoAdd([...todoAdd])
        setModalVisible(false)
        setUpdatedTodo('')
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

            <TouchableOpacity style={styles.button} onPress={addTodo} activeOpacity={0.5}>
                <Text style={styles.textsStyles}>Add Todo</Text>
            </TouchableOpacity>

            {todoAdd.length > 0 ? (<FlatList
                data={todoAdd}
                renderItem={({ item, index }) => (
                    <View style={styles.childContainer}>
                        <Text style={styles.todoTitle}>{item}</Text>
                        <View style={styles.btnsContainer}>
                            <TouchableOpacity style={styles.EDbutton} activeOpacity={0.5} onPress={() => {
                                setModalVisible(true)
                                setIndex(index)
                            }} >
                                <Text style={styles.textStyles}>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.EDbutton} onPress={() => deleteTodo(index)} activeOpacity={0.5} >
                                <Text style={styles.textStyles}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                )}
                keyExtractor={(item, index) => index.toString()}

            />) : (<Text style={styles.notFound}>No Todo found!</Text>)}

            <View style={styles.centeredView}>
                <Modal animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Edit Todo</Text>
                            <TextInput
                                style={styles.updateInput}
                                onChangeText={setUpdatedTodo}
                                value={updatedTodo}
                                placeholder='Enter Updated Todo...'
                            />
                            <View style={styles.btnsContainers}>
                                <TouchableOpacity
                                    style={[styles.buttons, styles.buttonClose]} activeOpacity={0.5}
                                    onPress={() => editTodo(index)}>
                                    <Text style={styles.textStyle}>Updated</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.buttons, styles.buttonClose]} activeOpacity={0.5}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>

        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8bc34a',
        paddingTop: 60
    },
    mainHeading: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'yellow',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 11,
        borderColor: 'yellow',
        borderRadius: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#cddc39',
        padding: 10,
        margin: 12,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    notFound: {
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 188,
        textAlign: 'center',


    },
    btnsContainer: {
        flexDirection: 'row'

    },
    btnsContainers: {
        flexDirection: 'row'
    },
    EDbutton: {
        textAlign: 'center',
        borderRadius: 10,
        padding: 10,
        margin: 12,
        color: 'white',
        backgroundColor: '#cddc39',
        flex: 1,

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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        margin: 2,
        borderRadius: 20,
        padding: 10,
    },
    modalView: {
        backgroundColor: '#eff986',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,  
        },
        shadowOpacity: 0.6,  
        shadowRadius: 8,  
        elevation: 10,

    },
    buttons: {
        borderRadius: 12,
        padding: 10,
        margin: 12,
        width: 125,
        elevation: 2,
        borderColor: 'yellow',
        borderWidth: 1,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'black',
    },
    textStyle: {
        color: '#cddc39',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyles: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textsStyles: {
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    updateInput: {
        width: 280,
        borderWidth: 1,
        borderColor: 'yellow',
        padding: 10,
        margin: 12,
        color: '#cddc39',
        borderRadius: 12,
        marginBottom: 16,
        backgroundColor: 'black',

    },
    childContainer: {
        backgroundColor: 'black',
        padding: 10,
        margin: 12,
        borderRadius: 10,
        color: 'white',
    },
    todoTitle: {
        color: '#cddc39',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 15

    },
})

export default index
