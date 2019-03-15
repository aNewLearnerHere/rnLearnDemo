import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MiddleViewTwo extends React.Component {

    render() {
        return (
            <View style={[styles.container, styles.margintopbig]}>
                <Text style={[styles.ztext, styles.margintop]}>拍卖方式</Text>
                <Text style={[styles.commontext, styles.margintop]}>竞价</Text>
                <Text style={[styles.commontext, styles.margintop]}>保留价：21.00万</Text>
                <Text style={[styles.commontext, styles.margintop]}>采购价：21.00万</Text>
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
        padding: 20
    },
    commontext: {
        fontSize: 16,
        color: 'gray'
    },
});

export default MiddleViewTwo;