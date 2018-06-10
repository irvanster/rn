import { StackNavigator,TabNavigator} from 'react-navigation';

import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'

import { Main as MainMarket } from '../modules/markets/screens/index'
import { HomeMain } from '../modules/homes'
import DetailCoin from '../modules/markets/screens/details/main'

import { Account,Home } from '../main/screens/index'

import {primaryColor} from '../modules/commons/const_style'
import { Icon, Root } from 'native-base';
import React from 'react'

const tabOptions = {    
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  backBehavior: 'none',
  activeTintColor:'white',
  inactiveTintColor:'#D3D3D3',
  tabBarOptions: {
      activeTintColor:'white',
      inactiveTintColor:'#D3D3D3',
      style:{
          backgroundColor: primaryColor,
      },
      indicatorStyle: {
          backgroundColor: 'red',
      },
  },
}
const MainNavigator = StackNavigator({
  Home :{
    screen : HomeMain,
    navigationOptions:{
      header:null
    }
  },
  Market: {
    screen: MainMarket,
    navigationOptions:{
      title:'Markets',
      headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    }
  },DetailCoin:{
    screen : DetailCoin,
    navigationOptions:({navigation})=>({
      title : typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'Detail Market': navigation.state.params.title
    })
  }
})
const RootNavigator = TabNavigator({
  HomeMain: {
    screen : MainNavigator,
    navigationOptions:{
      title: 'Home',
      header: null,
      tabBarIcon: ({focues,tintColor})=>(
        <Icon style={{color:'white'}} name="md-home"></Icon>
      )
    }
  },
  ContactsList: {
    screen: ContactsList,
    navigationOptions: {
      title: 'Market',
      header: null,
      tabBarIcon: ({focues,tintColor})=>(
        <Icon style={{color:'white'}} name="md-home"></Icon>
      )
    }
  },
  Market: {
    screen: MainMarket,
    navigationOptions: {
      title: 'Trades',
      header: null,
      tabBarIcon: ({focues,tintColor})=>(
        <Icon style={{color:'white'}} name="md-home"></Icon>
      )
    }
  },
  ContactsDetail: {
    screen: ContactsDetail,
    navigationOptions: {
      title: 'Funds',
      header: null,
      tabBarIcon: ({focues,tintColor})=>(
        <Icon style={{color:'white'}} name="md-home"></Icon>
      )
    }
  },Account: {
    screen: ContactsDetail,
    navigationOptions: {
      title: 'Funds',
      header: null,
      tabBarIcon: ({focues,tintColor})=>(
        <Icon style={{color:'white'}} name="md-home"></Icon>
      )
    }
  }
  },tabOptions)





export default RootNavigator
