import React from 'react';
import {View,InteractionManager,StyleSheet} from 'react-native';
import {Button} from '@souche-ui/srn-ui'
import {SRNPage} from '@souche-f2e/srn-framework'

class verifyTestOne extends SRNPage{

    static navigation = {
        title:{
            text:'各级页面入口'
        },
        left:{
            showArrow:true
        }
    }

    constructor(){
        super();
    };

    componentWillMount(){
        InteractionManager.runAfterInteractions(()=>{

        });
    };

    render(){
        return(
            <View style = {defineStyle.container}>
            <Button onPress = {
                ()=>{
                    this.toCarDetail()
                }
            }>车辆详情</Button>
            </View>
        );
    }
    
    toCarDetail() {//definePages/carDetail
        this.route.open('/definePages/carDetail')
    }

}
const defineStyle = StyleSheet.create({
    container:{}
});
export default verifyTestOne;