import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weekly revenue</Text>
        <Text style={styles.totalAmount}>Total amount: $33,56</Text>
      </View>

      {/* Chart Section */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Weekly revenue</Text>
        <View style={styles.chart}>
          {/* Example bars */}
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
            <View key={index} style={styles.chartBarContainer}>
              <View style={[styles.chartBar, index === 2 && styles.highlightBar]} />
              <Text style={styles.chartDay}>{day}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {['Billet', 'Entries', 'Expenses', 'Retiring'].map((label, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Ionicons name="wallet" size={20} color="white" />
            <Text style={styles.buttonText}>{label}</Text>
            <Ionicons name="chevron-down" size={20} color="white" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="cash-outline" size={24} color="white" />
          <Text style={styles.footerText}>Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="stats-chart-outline" size={24} color="white" />
          <Text style={styles.footerText}>Statistic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.footerText}>Spent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8A3DD', // Lavender background
    padding: 20,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  totalAmount: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  chartContainer: {
    backgroundColor: '#6F3B8E',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    bottom: true,
  },
  chartLabel: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartBarContainer: {
    alignItems: 'center',
  },
  chartBar: {
    width: 20,
    height: 50,
    backgroundColor: '#A8A3DD',
    borderRadius: 5,
  },
  highlightBar: {
    backgroundColor: '#FF6F61', // Highlighted bar color
    height: 80,
  },
  chartDay: {
    marginTop: 5,
    fontSize: 12,
    color: 'white',
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6F3B8E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6F3B8E',
    padding: 10,
    borderRadius: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
});

export default MainScreen;