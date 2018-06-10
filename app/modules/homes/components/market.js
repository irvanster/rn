import React, { Component } from 'react';
import { View, Text, Button }  from 'react-native'
import { Column as Col, Row} from 'react-native-flexbox-grid';
import { Tabs, Tab } from 'native-base';
import { primaryColor } from '../../commons/const_style';
import { getAllData } from '../../markets/btc/action'
import { connect } from 'react-redux'  
import List from '../../markets/screens/list'

const filteredData = []

class Market extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
        }
    }

    handleStatusColor(isWin,isLose){
        if(isWin){
            return "green"
        }
        if(isLose){
            return "red"
        }
        return "white"
    }
    
    
    componentWillMount() {
        // this.props.fetch()
    }
    
    filterGain(){
    }
    filterLoser(){

    }
    
  render() {
      console.log( this.props)
    return (
        <View>
        <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:'yellow'}}>
            <Tab heading="Gainers" activeTextStyle={{color:'yellow',width:'100%',borderRightColor:'white',borderRightWidth:1,textAlign:'center'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active}>
                <List  data={this.props.reducer.data} size={5} isGain={true}/>
            </Tab>
            <Tab heading="Loosers"activeTextStyle={{color:'yellow',width:'100%',textAlign:'center'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
                <List data={this.props.reducer.data} size={5} isGain={false}/>
            </Tab>
        </Tabs>
        <View style={{justifyContent:'center',height:50}}>
            <Text style={{textAlign:'center',color:'white'}} onPress={()=>alert(JSON.stringify(this.props.nav))}>More</Text>
        </View>
            {/* 
                <View style={{height:50,justifyContent:'center',backgroundColor:'#1a212a'}}>
                <Row size={2}>
                    <Col sm={1}>
                    <View style={{justifyContent:'center',borderRightColor:'white',borderRightWidth:0.4}}>
                        <Text style={{color:'white',textAlign:'center'}}>Gainers</Text>
                    </View>
                    </Col>
                    <Col sm={1}>
                    <View style={{justifyContent:'center',borderRightColor:'white',borderRightWidth:0.4}}>
                        <Text style={{color:'white',textAlign:'center'}}>Gainers</Text>
                    </View>
                    </Col>
                </Row>
            </View>
        <View style={{padding:10,backgroundColor:'#141921ss'}}>
            <Row size={3}>
                <Col sm={1}>
                <Text style={{color:'white',textAlign:'left'}}>Pair</Text>
                </Col>
                <Col sm={1}>
                <Text style={{color:'white'}}>Last Price</Text>
                </Col>
                <Col sm={1}>
                <Text style={{color:'white',textAlign:'right'}}>24 Chg%</Text>
            </Col>
            </Row>  
        </View>
        {this.state.data.map((item,index)=>{
            return(
                <View key={index} style={{marginLeft:10,marginRight:10,marginTop:10, paddingBottom:10, borderBottomColor:'white',borderBottomWidth:0.5}}>
                <Row size={12}>
                    <Col sm={4}>
                    <Row>
                    <Text style={[style.text_content,{color:'white',textAlign:'left'}]}>{item.pair}</Text>
                    <View style={{justifyContent:'center',flex:1}}>
                        <Text style={[style.text_content,{color:'#acacac',textAlign:'left',fontSize:14}]}> / {item.target_pair} </Text>
                    </View>
                    </Row>
                    </Col>
                    <Col sm={5}>
                    <Text style={[style.text_content,{color:'white'}]}>{item.last_price}</Text>
                
                    </Col>

                    <Col sm={3} style={{justifyContent:'center'}}>
                    <View style={{backgroundColor:'red',borderRadius: 10,height:35}}>

                    </View>
                     </Col>
                </Row> 
                  
                </View>  
            )
        })} */}
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
        fontSize: 18,
    }, tab_header:{
        backgroundColor:primaryColor
      },
      tab_header_active:{
        backgroundColor:primaryColor
      },
      text_header:{
        color:'white',
        fontSize:12
      },
      header:{
        alignItems: 'center',
        backgroundColor:primaryColor
      }
}
function mapStateToProps(state){
    return{
        reducer : state.btcReducer,
        root : state
    }
}

function dispatchToProps(dispatch){
    return{
        fetch : ()=>dispatch(getAllData())
    }
}
export default connect(mapStateToProps,dispatchToProps)(Market)