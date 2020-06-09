import React, {Component} from "react";
import { ListItem, Thumbnail, Text, Left, Body, Right,Button } from 'native-base';
import {View} from 'react-native'
import TimeAgo from './time';



export class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
        }

        handlePress = () =>{
          const {url, title } = this.data;
          this.props.onPress({url, title});
        }

    render() {
      return (
          <ListItem thumbnail>
             <Left>
             <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage :'https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} style={{width:100,height:100}}/>
              </Left>
              <Body>
                <Text note numberOfLines={2} style={{color:'#000000'}}>{this.data.title}</Text>
                <Text note numberOfLines={3}  style={{color:'#383752'}}>{this.data.description}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text note style={{color:'#1586d6'}}>{this.data.source.name}</Text>
                    <TimeAgo time={this.data.publishedAt}/>
                </View>
              </Body>
              <Right/>
           </ListItem>
      );
    }
}