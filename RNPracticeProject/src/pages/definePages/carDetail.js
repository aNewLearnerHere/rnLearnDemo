import React from 'react';
import { Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

import { SRNPage, SRNConfig } from '@souche-f2e/srn-framework';
import SImage from '@souche-f2e/SImage';

import TopView from './components/top';
import MiddleViewOne from './components/middleone';
import MiddleViewTwo from './components/middletwo';
import BottomView from './components/bottom';

let image_url = 'https://assets.souche.com/assets/sccimg/66af72b7cf46609b757f7e4551b421aa_02.png';

// create a component
class B extends SRNPage {
    constructor(props) {
        super(props);
        // console.log(SRNConfig.appName);
        this.state = {
            mHeight: 250
        };
    }

    static navigation = {
        title: '车辆详情',
        left: {
            showArrow: true
        }
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

    render() {
        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                style={styles.container}>
                <SImage
                    style={{ width: win, height: this.state.mHeight }}
                    source={{ uri: image_url }} />
                <TopView />
                <MiddleViewOne />
                <MiddleViewTwo />
                <BottomView />
            </ScrollView>
        );
    }
}

const win = Dimensions.get('window').width;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

//make this component available to the app
export default B;