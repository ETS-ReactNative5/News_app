import React, { Component } from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab, Body, Title} from 'native-base';
import {Image,Text,View} from 'react-native'
import Tab1 from './tabs/general';
import Tab2 from './tabs/technology';
import Tab3 from './tabs/business';
import Tab4 from './tabs/entertainment'
import Tab5 from './tabs/sports';
import Tab6 from './tabs/health';
import Tab7 from './tabs/science';


export default class ScrollTab extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#3F51B5'}} hasTabs>
            <Image
                 style={{width: 50, height: 50, borderRadius: 30, alignSelf:"center",marginLeft:12}}
                 source={{uri: "https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
             />
          <Body style={{backgroundColor:"#FFFFFF",borderColor:"#000000",borderWidth:2,borderRadius:50,marginLeft:20,marginRight:150}}>
             <Title style={{alignSelf:'center',}}>
               <Text style={{color: '#8c03fc', fontSize: 20, fontFamily: 'CircularStd-Bold', fontWeight: '900',}}>
               News
               </Text>
               <Text style={{color: '#ec03fc', fontSize: 20, fontFamily: 'CircularStd-Bold', fontWeight: '900',}}>
                Sky
               </Text>
             </Title>
          </Body>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="General">
            <Tab1 />
          </Tab>
          <Tab heading="Technology">
            <Tab2 />
          </Tab>
          <Tab heading="Business">
            <Tab3 />
          </Tab>
          <Tab heading="Entertainment">
            <Tab4 />
          </Tab>
          <Tab heading="Sport">
            <Tab5 />
          </Tab>
          <Tab heading="Health">
            <Tab6 />
          </Tab>
          <Tab heading="Science">
            <Tab7 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}