import React, { Component } from "react";


class Footer extends Component {
    state = {
      url: "/",
      url2: "/",
      url3: "/",
      url4: "/"
    };
    _handlePress = () => {
      Linking.openURL(this.state.url);
      this.state.onPress && this.state.onPress();
    };
    _handlePress2 = () => {
      Linking.openURL(this.state.url2);
      this.state.onPress && this.state.onPress();
    };
    _handlePress3 = () => {
      Linking.openURL(this.state.url3);
      this.state.onPress && this.state.onPress();
    };
    _handlePress4 = () => {
      Linking.openURL(this.state.url4);
      this.state.onPress && this.state.onPress();
    };
    render() {
      return (
        <View>
          <View style={styles.container}>
            <View style={styles.left}>
              <View style={styles.headerImage}>
                <Image
                  style={styles.Image}
                  source={{
                    uri: ""
                  }}
                />
              </View>
            </View>
            <View style={styles.middle}>
              <Text
                title="Title 1"
                onPress={this._handlePress}
                style={styles.link}
              >
                Title 1
              </Text>
              <Text
                title="Title 2"
                onPress={this._handlePress2}
                style={styles.link}
              >
                Title 2
              </Text>
              <Text
                title="Title 3"
                onPress={this._handlePress3}
                style={styles.link}
              >
                Title 3
              </Text>
              <Text
                title="Title 4"
                onPress={this._handlePress4}
                style={styles.link}
              >
                Title 4
              </Text>
            </View>
            <View style={styles.rigth}>
              <Text
                title="Title 5"
                onPress={this._handlePress}
                style={styles.link}
              >
                Title 5
              </Text>
              <Text
                title="Title 6"
                onPress={this._handlePress2}
                style={styles.link}
              >
                Title 6
              </Text>
              <Text
                title="Title 7"
                onPress={this._handlePress3}
                style={styles.link}
              >
                Title 7
              </Text>
              <Text
                title="Title 8"
                onPress={this._handlePress4}
                style={styles.link}
              >
                Title 8
              </Text>
            </View>
          </View>
          <View style={styles.blockinfo}>
            <Text style={styles.info}>
              Copyright 2023 Jason Aul,©All Rights Reserved.
            </Text>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginRight: "15%",
      marginLeft: "15%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    headerImage: {
      maxHeight: 140,
      width: "100%",
      overflow: "hidden"
    },
    Image: {
      height: 120,
      width: 324
    },
    blockinfo: {
      display: "flex",
      flexDirection: "row",
      height: 50,
      alignItems: "center",
      backgroundColor: "#ac0101"
    },
    link: {
      paddingBottom: "1em"
    },
    info: {
      width: "100%",
      textAlign: "center",
      color: "white"
    },
    middle: {
      paddingBottom: "1em"
    },
    rigth: {
      paddingBottom: "1em"
    },
    left: {
      paddingBottom: "1em"
    }
  });
  
  export default Footer;
  