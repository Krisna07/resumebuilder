import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1
  }
});

// Create Document Component
const Format = () => {
  return <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <h2 className='text-[32px] font-semibold'>Resume heading</h2>
        <div className='flex items-center justify-between'>
            <span>12232132</span>
            <span>eamil@email.com</span>
            <span>link.con</span>
        </div>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>}


export default Format