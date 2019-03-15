import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import carInfo from '../../../stores/defineStore';

class BottomView extends React.Component {

    render() {
        return (
            <View style={[styles.container, styles.margintopbig]}>
                <Text style={[styles.ztext, styles.margintop]}>备注</Text>
                <Text style={[styles.commontext, styles.margintop]}>{carInfo.beizhu}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    margintop: {
        marginTop: 10,
    },
    margintopbig: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 50,
    },
    commontext: {
        fontSize: 16,
        color: 'gray'
    },
});

export default BottomView;