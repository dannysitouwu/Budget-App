import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExpenseList({ navigation }) {
  const [search, setSearch] = useState('');
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'Groceries', amount: '$50.00' },
    { id: '2', title: 'Transport', amount: '$20.00' },
    { id: '3', title: 'Utilities', amount: '$100.00' },
    { id: '4', title: 'Dining Out', amount: '$30.00' },
    { id: '5', title: 'Subscriptions', amount: '$15.00' },
    { id: '6', title: 'Entertainment', amount: '$40.00' },
    { id: '7', title: 'Gym Membership', amount: '$25.00' },
    { id: '8', title: 'Insurance', amount: '$60.00' },
  ]);

  const handleDelete = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const renderExpense = ({ item }) => (
    <View style={styles.expenseItem}>
      <View style={styles.expenseDetails}>
        <View style={styles.circle} />
        <View>
          <Text style={styles.expenseTitle}>{item.title}</Text>
          <Text style={styles.expenseAmount}>{item.amount}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Ionicons name="close-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="search for:"
            placeholderTextColor="#555"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Expense List */}
        <View style={styles.listContainer}>
          <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={renderExpense}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#A8A3DD',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E8FD',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#5A4B81',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#F3E8FD',
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#5A4B81',
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#5A4B81',
  },
  expenseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#A8A3DD',
    marginRight: 10,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  expenseAmount: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    marginLeft: 10,
  },
});