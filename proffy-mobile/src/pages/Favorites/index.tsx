import React, { useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });
    
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView
                style={styles.teachersList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => (
                    <TeacherItem 
                        key={teacher.id}
                        teacher={teacher} 
                        favorited
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Favorites;