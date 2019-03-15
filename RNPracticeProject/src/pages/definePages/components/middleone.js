import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

import SImage from '@souche-f2e/SImage';
import {Color} from '@souche-ui/srn-ui';

const image_url = 'https://assets.souche.com/assets/sccimg//66af72b7cf46609b757f7e4551b421aa_02.png';

const win = Dimensions.get('window').width;

class MiddleViewOne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mHeight: 50
        };
    }

    componentDidMount() {
        Image.getSize(image_url, (width, height) => {
            this.setState((state) => {
                return {
                    mHeight: Math.floor(win / width * height)
                };
            });
        });
    }

    render(){
        return (
            <View style={[styles.container, styles.margintopbig]}>
                    <Text style={styles.ztext}>车辆分类</Text>
                    <Text style={[styles.commontext, styles.margintop]}>常规竞价车</Text>
                    <View style={[styles.line, styles.margintop]} />
                    <Text style={[styles.ztext, styles.margintop]}>收车凭证</Text>
                    <View style={[styles.redview, styles.margintop]}>
                        <SImage
                            style={{ width: win / 4, height: this.state.mHeight / 4 }}
                            source={{ uri: image_url }} />
                        <SImage
                            style={[{ width: win / 4, height: this.state.mHeight / 4 }, styles.marginleft]}
                            source={{ uri: image_url }} />
                        <SImage
                            style={[{ width: win / 4, height: this.state.mHeight / 4 }, styles.marginleft]}
                            source={{ uri: image_url }} />
                    </View>
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
    marginleft: {
        marginLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    redview: {
        flex: 1,
        flexDirection: 'row',
    },
    line: {
        height: 1,
        alignSelf: 'stretch',
        backgroundColor: Color.G2,
    },
    ztext: {
        fontSize: 18
    },
    commontext: {
        fontSize: 16,
        color: 'gray'
    },
});

export default MiddleViewOne;