    // toastConfig.js
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

const CustomToast = ({ text1, text2, type }: {
      text1: string;
      text2: string;
      type: 'success' | 'error';
    }) => (
      <View style={[styles.container, { backgroundColor: type === 'success' ? 'green' : 'red' }]}>
        <Text style={styles.title}>{text1}</Text>
        <Text style={styles.message}>{text2}</Text>
      </View>
    );

    const toastConfig = {
      success: (props: 
        { text1: string; text2: string; type: 'success' | 'error' }
      ) => <CustomToast {...props} />,
      error: (props: 
        { text1: string; text2: string; type: 'success' | 'error' }
      ) => <CustomToast {...props} />,
    };

    const styles = StyleSheet.create({
      container: {
        padding: 16,
        borderRadius: 8,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      message: {
        fontSize: 14,
        color: 'white',
      },
    });

    export default toastConfig;