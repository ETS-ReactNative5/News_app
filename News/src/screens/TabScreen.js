import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,Left, Body, Right, Title  } from 'native-base';
import Tab1 from './tabs/general';
import Tab2 from './tabs/technology';
import Tab3 from './tabs/business';
export default class TabsAdvancedExample extends Component {
  render() {
    return (

      <Container  >
        <Header style={{backgroundColor:'#3F51B5'}} hasTabs>
          <Body>
             <Title style={{color:'#FFFFFF',alignSelf:'center'}}>News App</Title>
          </Body>
        </Header>
        <Tabs >
          <Tab  tabStyle={{backgroundColor:'#FFFFFF'}}
                activeTabStyle={{backgroundColor:'#999999'}}
                heading={ <TabHeading><Icon name="business" /><Text>General</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#FFFFFF'}}
               heading={ <TabHeading><Icon name="camera" /><Text>Technology</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="business" /><Text>Business</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}