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
                        Alert.alert('Modal has been closed.');
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
                            <TouchableOpacity
                                style={[styles.buttons, styles.buttonClose]} activeOpacity={0.5}
                                onPress={() => editTodo(index)}>
                                <Text style={styles.textStyle}>Updated</Text>
                            </TouchableOpacity>
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
        paddingTop: 20
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
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    buttons: {
        borderRadius: 12,
        padding: 10,
        margin: 12,
        width: 280,
        elevation: 2,
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




















// import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Pressable, Alert } from 'react-native'
// import React, { useState } from 'react'

// const index = () => {

//     const [input, setInput] = useState('')
//     const [todoAdd, setTodoAdd] = useState<string[]>([])
//     const [modalVisible, setModalVisible] = useState(false);
//     const [updatedTodo, setUpdatedTodo] = useState('')
//     const [selectedIndex, setSelectedIndex] = useState(0) // Renamed from 'index'

//     const addTodo = () => {
//         if (input.trim()) { // Added check to ensure non-empty input
//             todoAdd.push(input) // Directly mutating the array with push
//             setTodoAdd([...todoAdd]) // Setting the updated state
//             setInput('') // Clear input
//         }
//     }

//     const deleteTodo = (idx: number) => {
//         console.log('Deleted : ', idx)
//         const updatedTodos = todoAdd.filter((_, index) => index !== idx) // Immutably remove todo
//         setTodoAdd(updatedTodos)
//     }

//     const editTodo = (idx: number) => {
//         console.log(updatedTodo, idx)
//         const updatedTodos = [...todoAdd]
//         updatedTodos[idx] = updatedTodo // Updating the todo at specific index
//         setTodoAdd(updatedTodos)
//         setModalVisible(false)
//     }

//     return (
//         <SafeAreaView style={styles.container}>

//             <Text style={styles.mainHeading}>Todo App</Text>

//             <TextInput
//                 style={styles.input}
//                 onChangeText={setInput}
//                 value={input}
//                 placeholder='Enter Todo...'
//             />

//             <TouchableOpacity style={styles.button} onPress={addTodo}>
//                 <Text>Press Here</Text>
//             </TouchableOpacity>

//             {todoAdd.length > 0 ? (
//                 <FlatList
//                     data={todoAdd}
//                     renderItem={({ item, index }) => (
//                         <View>
//                             <Text>{item}</Text>
//                             <TouchableOpacity style={styles.button} onPress={() => {
//                                 setModalVisible(true)
//                                 setSelectedIndex(index) // Updated to selectedIndex
//                             }}>
//                                 <Text>Edit</Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity style={styles.button} onPress={() => deleteTodo(index)}>
//                                 <Text>Delete</Text>
//                             </TouchableOpacity>
//                         </View>
//                     )}
//                     keyExtractor={(index) => index.toString()}
//                 />
//             ) : (<Text>No Todo found!</Text>)}

//             <View style={styles.centeredView}>
//                 <Modal animationType="slide"
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => {
//                         Alert.alert('Modal has been closed.');
//                         setModalVisible(!modalVisible);
//                     }}>
//                     <View style={styles.centeredView}>
//                         <View style={styles.modalView}>
//                             <Text style={styles.modalText}>Update Todo</Text>
//                             <TextInput
//                                 style={styles.updateInput}
//                                 onChangeText={setUpdatedTodo}
//                                 value={updatedTodo}
//                             />
//                             <Pressable
//                                 style={[styles.buttons, styles.buttonClose]}
//                                 onPress={() => editTodo(selectedIndex)}> {/* Using selectedIndex */}
//                                 <Text style={styles.textStyle}>Updated</Text>
//                             </Pressable>
//                         </View>
//                     </View>
//                 </Modal>
//             </View>

//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     mainHeading: {
//         textAlign: 'center',
//         paddingVertical: 10,
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: 'orange',
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
//     button: {
//         alignItems: 'center',
//         backgroundColor: '#DDDDDD',
//         padding: 10,
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 22,
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     buttons: {
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,
//     },
//     buttonClose: {
//         backgroundColor: '#2196F3',
//     },
//     textStyle: {
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     updateInput: {
//         margin: 20,
//         width: 200,
//         borderWidth: 1,
//     },
// })

// export default index
