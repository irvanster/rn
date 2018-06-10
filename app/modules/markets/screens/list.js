import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity} from 'react-native'

import {Column as Col,Row} from 'react-native-flexbox-grid'
import { Left, Right } from 'native-base';
import { primaryColor } from '../../commons/const_style';
import { connect } from 'react-redux'

const temp_data = []
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    pair: 'EOS',
                    target_pair :'BTC',
                    last_price : 104000,
                    volume_btc: 16.902,
                    isWin: true,
                    isLose: false,
                },
                {
                    pair: 'EOS',
                    target_pair :'BTC',
                    last_price : 10000,
                    volume_btc: 16.902,
                    isLose:true,
                    isWin:false
                },
                {
                    pair: 'EOS',
                    target_pair :'BTC',
                    last_price : 1000000000,
                    volume_btc: 16.902
                }
            ]
        }
        temp_data = this.props.data

    }
    
  render() {

    return (
        <View style={{backgroundColor:primaryColor,flex:1}}>
        <View style={{padding:10}}>
            <Row size={3}>
                <Col sm={1}>
                <Text style={{color:'white',textAlign:'left'}}>Pair</Text>
                </Col>
                <Col sm={1}>
                <Text style={{color:'white'}}>Last Price</Text>
                </Col>
                <Col sm={1}>
                <Text style={{color:'white',textAlign:'right'}}>24h Chg%</Text>
            </Col>
            </Row>  
        </View>

        {this.props.data.slice(0,(this.props.size)).map((item,index)=>{
            return(
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailCoin',{item,title:`${item.pair_from.name} / ${item.pair_target.name}`})}>
                    <View key={index} style={{marginLeft:10,marginRight:10,marginTop:10, paddingBottom:10, borderBottomColor:'white',borderBottomWidth:0.5}}>
                    <Row size={3}>
                        <Col sm={1}>
                        <Row size={2}> 
                            <Text style={[style.text_content,{color:'white',textAlign:'left'}]}>{item.pair_from.name}</Text>
                            <Text style={[style.text_target_pair]}> / {item.pair_target.name}</Text>
                            
                        </Row>
                        {this.props.isDetail && (
                            <Text style={[style.text_target_pair]}>Vol {item.volume}</Text>
                        )}
                        </Col>
                        <Col sm={1}>
                        <Text style={[style.text_content,{color:'white'}]}>{item.last_price}</Text>
                        {this.props.isDetail && (
                            <Text style={[style.text_target_pair]}> $ {item.price_in_dollar}</Text>
                        )}
                        </Col>

                        <Col sm={1}>
                        {item.difference > 0 ? (
                            <View style={{backgroundColor:'green',borderRadius: 5,height:35,width:100,alignSelf:'flex-end'}}>
                                <Text style={[style.text_content,{textAlign:'center'}]}>+{item.difference}</Text>
                            </View>
                        ):(
                            <View style={{backgroundColor:'red',borderRadius: 5,height:35,width:100,alignSelf:'flex-end'}}>
                                <Text style={[style.text_content,{textAlign:'center'}]}>-{item.difference}</Text>
                            </View>
                        )}
                        </Col>
                    </Row>      
                    </View> 
                </TouchableOpacity> 
            )                        
        })}
        </View>
    )
  }
};
const style={
    title:{
        color:'white'
    },
    text_header:{
        color:'white',
    },
    text_content:{
        color:'white',
        fontSize: 15,
    },
    text_target_pair:{
        color:'#acacac',textAlign:'left',fontSize:12,marginTop:3
    }
}
