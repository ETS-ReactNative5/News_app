import React, {Component} from 'react';
import {Dimensions, Modal, Share, View, Text} from 'react-native';
import { WebView } from 'react-native-webview'
import { Container,Header,Content, Left, Body, Right,Icon,Title,Button } from 'native-base';
const webViewHeight = Dimensions.get('window').height -56;
class ModalComponent extends Component {

  constructor(props) {
    super(props);
  }
  handleClose = () => {
      return this.props.onClose();
  }
  handleShare = () => {
      const {url ,title} = this.props.articleData;
      let message = `$(title)\n Read More @${url}\n\nshared Via RN News App`;
      return Share.share(
          {title ,message ,url: message},
          {dialogTitle:`share ${title}`}
      );
  }
  render() {

    const  {showModal,articleData} = this.props;
    const {url} = articleData;
    if(url != undefined) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose()}
            >
                <Container style={{margin: 15, marginBottom: 0, backgroundColor: '#FFFFFF'}}>
                    <Header style={{backgroundColor: '#FFFFFF'}}>
                        <Left>
                            <Button onPress={this.handleClose()}>
                                <Icon name="close" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare()}>
                                <Icon name="share" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{height:webViewHeight}}>
                        <WebView source={{uri: url}}
                                 style={{flex: 1}}
                                 onError={this.handleClose()}
                                 startInLoadingState
                                 scalesPageToFit
                        />
                    </Content>
                </Container>


            </Modal>
        );
    }else{
        return null;
    }
  }
}
export default ModalComponent;