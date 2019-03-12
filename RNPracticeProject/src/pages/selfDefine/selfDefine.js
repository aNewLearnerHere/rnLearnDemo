import React from 'react'

import {View,Text,StyleSheet,InteractionManager,DatePickerIOS} from 'react-native'

// import SRNNative from '@souche-f2e/srn-native'
import {SRNPage,observer} from '@souche-f2e/srn-framework'

// 从新版组件库进入button组件
import {Button} from '@souche-ui/srn-ui'

// 引入子组件
import CarItemView from '../Index/components/CarItemView'

// 引入当前页面关联的store
import indexStore from '../../stores/indexStore'
import IndexStore from '../../stores/indexStore';

/*
 * 如果组件需要与store自动联动，请添加此注解 @abserver,否则 不需要
 */
@observer

class test extends SRNPage {
    // 定义此页面的title，navigation中的所有元素都可以在此定义
    static navigation = {
        title : {
            text : '自定义页'
        }
    };

    /*
     * constructor 组件的构造函数，第一个被调用的生命周期
     */
    constructor() {
        super();
        // 务必在此 实例化页面的store
        this.store = new IndexStore();
    };

    /*
     * 构造函数，组件即将加载的生命周期
     */
    componentWillMount() {
        // 将页面数据放在此方法内，可以保证性能（在动画完成后执行）
        InteractionManager.runAfterInteraction(() =>{
            // this.getData();
        })
    };
    
    render() {
        return(
            <View style={Styles.container}>
                <CarItemView recommendCar={this.store.recommendCar} />
                <Button onPress={
                    () =>{
                        this.toList();
                    }
                } >点我 </Button>
            </View>

        )
    };

    getData() {
        this.store.fetch();
    };

    toList(){

    };


}
// 自定义样式
const styles = StyleSheet.create({
    container: {}
});


