import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import Search from '../assets/search.png';
import Tick from '../assets/tick.png';
import Note from '../assets/note.png';
import MaleAvatar from '../assets/male.png'; 
import FemaleAvatar from '../assets/female.png'; 

export default function Screen02() {
    const route = useRoute();
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [editTaskId, setEditTaskId] = useState(null); 
    const [editedTaskDescription, setEditedTaskDescription] = useState(''); 

    useEffect(() => {
        if (route.params && route.params.userData) {
            setUserData(route.params.userData);
            fetchUserTasks(route.params.userData.id);
        }
    }, [route.params]);

    useEffect(() => {
        if (route.params && route.params.newTask) {
            setTasks(prevTasks => [...prevTasks, route.params.newTask]);
        }
    }, [route.params.newTask]);

    useEffect(() => {
        setSearchQuery('');
    }, [route.params]);

    const goToAddTaskScreen03 = () => {
        setSearchQuery('');
        navigation.navigate('Screen03', {
            userId: userData.id,
            name: userData.name,
            description: userData.description, 
            gender: userData.gender,
        });
    };

    const handleEditTask = (task) => {
        setEditTaskId(task.id);
        setEditedTaskDescription(task.description);
    };

    const handleSaveEdit = async () => {
      if (editTaskId && editedTaskDescription) {
        const updatedTask = { description: editedTaskDescription };
        const result = await updateTask(editTaskId, updatedTask);
          if (result) {
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === editTaskId ? { ...task, description: editedTaskDescription } : task
                )
            );
            setEditTaskId(null);
            setEditedTaskDescription('');
        } else {
            console.error('Failed to update task');
        }
      } else {
        console.error('Edit task ID or description is missing');
      }
    };

    const updateTask = async (taskId, updatedTask) => {
    try {
        const response = await fetch(`https://6572afdf192318b7db40971d.mockapi.io/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        });
        
        if (!response.ok) {
            throw new Error('Error updating task');
        }

        const updatedTaskResponse = await response.json();
        return updatedTaskResponse; 
    } catch (error) {
        console.error('Error updating task', error);
        return null; 
    }
};

    const filteredTasks = tasks.filter(task => 
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const fetchUserTasks = async (userId) => {
        try {
            const response = await fetch('https://6572afdf192318b7db40971d.mockapi.io/users');
            const usersData = await response.json();

            const user = usersData.find(user => user.id === userId);

            if (user) {
                setTasks(user.task); 
            } else {
                setTasks([]);
            }
        } catch (error) {
            console.error('Error fetching user tasks', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 20, marginLeft: 30 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Screen01') }}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                    <Image 
                        source={userData.gender === 'Male' ? MaleAvatar : FemaleAvatar} 
                        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} 
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Epilogue', fontSize: 20, fontWeight: '700' }}>Hi {userData.name}</Text>
                        <Text style={{ fontFamily: 'Epilogue', fontSize: 14, fontWeight: '700' }}>{userData.description}</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: 334, height: 43, marginTop: 50, alignItems: 'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 12, flexDirection: 'row' }}>
                    <Image source={Search} style={{ width: 20, height: 20, margin: 15 }} />
                    <TextInput 
                        style={{ width: 280, height: 43, borderRadius: 12, padding: 10 }} 
                        placeholder='Search' 
                        value={searchQuery} 
                        onChangeText={(text) => setSearchQuery(text)} 
                    />
                </View>
            </View>
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <FlatList  
                    data={filteredTasks} 
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={{ width: 334, height: 43, alignItems: 'center', borderColor: '#9095A0', borderWidth: 1, borderRadius: 12, flexDirection: 'row', marginTop: 10, backgroundColor: '#F0F0F0' }}>
                            <Image source={Tick} style={{ width: 20, height: 20, marginLeft: 20 }} />
                            <View style={{ width: 250, height: 43, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: 'Epilogue', fontSize: 14, fontWeight: '700', padding: 20 }}>{item.description}</Text>
                            </View>
                            <TouchableOpacity onPress={() => handleEditTask(item)}>
                                <Image source={Note} style={{ width: 20, height: 20, marginRight: 20 }} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            {editTaskId && (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TextInput 
                        style={{ width: 334, height: 40, borderColor: 'grey', borderWidth: 1, borderRadius: 12, padding: 10 }} 
                        placeholder='Edit task' 
                        value={editedTaskDescription} 
                        onChangeText={(text) => setEditedTaskDescription(text)} 
                    />
                    <TouchableOpacity onPress={handleSaveEdit}>
                        <Text style={{ marginTop: 10, color: 'blue' }}>Save</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 69, height: 69, borderRadius: 69, backgroundColor: '#00BDD6', justifyContent: 'center', alignItems: 'center' }} onPress={goToAddTaskScreen03}>
                    <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
