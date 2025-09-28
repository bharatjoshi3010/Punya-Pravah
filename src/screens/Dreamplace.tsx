import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { JSX, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import { databases } from '../../lib/appwrite';
import { APPWRITE_DATABASE_ID, APPWRITE_TABLE_DP, APPWRITE_TABLE_TN } from '@env'
import { useAuth } from '../../context/AuthContext';
import { Query } from 'appwrite';
import {data} from '../assets/templeList'

export default function Dreamplace() {

    const {user} = useAuth()

    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getTokenList = async (userId) => {
        try {
            const response = await databases.listDocuments(
                APPWRITE_DATABASE_ID,
                APPWRITE_TABLE_DP,
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
        <SafeAreaView>
            <Navbar headerText='Dreamplaces'/>
            <ScrollView>
    <View style={styles.container}>
      {tokenData.map((token) => {
        // Find matching temple details
        const temple = data.find(item => item.id.toString() === token.templeId.toString());

        // If temple not found, skip rendering
        if (!temple) return null;

        return (
          <View key={token.$id} style={styles.card}>
            {/* From Temple Master List */}
            <Text style={styles.templeName}>{temple.name}</Text>
            <Text style={styles.templeLocation}>{temple.location}</Text>
            <Text style={styles.templeFamous}>Famous for: {temple.famousFor}</Text>

            {/* From Token Data */}
            
          </View>
        );
      })}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  templeName: {
    color:'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  templeLocation: {
    fontSize: 14,
    color: '#444',
  },
  templeFamous: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  bookingDate: {
    fontSize: 14,
    color: '#2563EB',
  },
  peopleCount: {
    fontSize: 14,
    color: '#333',
  },
});