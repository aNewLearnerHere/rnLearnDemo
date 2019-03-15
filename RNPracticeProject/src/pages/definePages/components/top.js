import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { Color } from '@souche-ui/srn-ui';

import carInfo from '../../../stores/defineStore';

const arrow_url = 'https://assets.souche.com/assets/sccimg//arrow.png';

class TopView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{carInfo.title}</Text>
                <Text style={[styles.stitle, styles.margintop]}>{carInfo.secondTitle}</Text>
                <View style={[styles.redview, styles.margintop]}>
                    <Text style={styles.redkuang}>A++</Text>
                    <Text style={[styles.redkuang, styles.marginleft]}>有泡水</Text>
                </View>
                <View style={[styles.redview, styles.margintop, styles.alignend]}>
                    <Text style={styles.title}>已拒绝</Text>
                    <Text style={[styles.stitle, styles.marginleft]}>{carInfo.rejectTime} </Text>
                </View>
                <Text style={[styles.stitle, styles.margintop]}>{carInfo.rejectReason}</Text>
                <View style={[styles.line, styles.margintop]} />
                {/* 估价助手 */}
                <View style={styles.zshou}>
                    <Text style={styles.ztext}>估价助手</Text>
                    <View style={styles.view} />
                    <Image style={styles.arrow}
                        source={{ uri: arrow_url }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    margintop: {
        marginTop: 10,
    },
    marginleft: {
        marginLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    view: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    stitle: {
        color: 'gray',
    },
    redkuang: {
        borderColor: Color.Red1,
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
        textAlign: 'center',
        color: Color.Red1,
    },
    redview: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
    line: {
        height: 1,
        alignSelf: 'stretch',
        backgroundColor: Color.G2,
    },
    zshou: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    ztext: {
        fontSize: 18
    },
    arrow: {
        width: 30,
        height: 30
    },
    alignend: {
        alignItems: 'flex-end'
    }
});

export default TopView;