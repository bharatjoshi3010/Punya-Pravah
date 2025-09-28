import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { JSX, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import { databases } from '../../lib/appwrite';
import { APPWRITE_DATABASE_ID, APPWRITE_TABLE_DP, APPWRITE_TABLE_TN } from '@env'
import { useAuth } from '../../context/AuthContext';
import { Query } from 'appwrite';
import {data} from '../assets/templeList'

export default function Token() {

    const {user} = useAuth()

    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getTokenList = async (userId) => {
        try {
            const response = await databases.listDocuments(
                APPWRITE_DATABASE_ID,
                APPWRITE_TABLE_TN,
                [
                    Query.equal('userId', userId)
                ]
            );
            return response.documents;
        } catch (error) {
            console.error("Error fetching guard list:", error);
        }
    };

const [tokenData, setTokenData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tokens = await getTokenList(user.email); // Fetch token list
      setTokenData(tokens || []); // Save to state
    };

    fetchData();
  }, []);

    

     return (
    <View style={styles.container}>
      {tokenData.map((token) => {
        // Find matching temple details
        const temple = data.find(item => item.id === token.templeId);

        // If temple not found, skip rendering
        if (!temple) return (<Text>heloosjbjn</Text>);

        return (
          <View key={token.$id} style={styles.card}>
            {/* From Temple Master List */}
            <Text style={styles.templeName}>{temple.name}</Text>
            <Text style={styles.templeLocation}>{temple.location}</Text>
            <Text style={styles.templeFamous}>Famous for: {temple.famousFor}</Text>

            {/* From Token Data */}
            <Text style={styles.bookingDate}>Booking Date: {token.date}</Text>
            <Text style={styles.peopleCount}>People: {token.noOfpepole}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({})