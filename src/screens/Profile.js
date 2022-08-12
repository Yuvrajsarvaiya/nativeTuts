import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const gamesData = [
  {
    id: 1,
    image: require('../assets/images/spiderman.webp'),
  },
  {
    id: 2,
    image: require('../assets/images/spiderman.webp'),
  },
  {
    id: 3,
    image: require('../assets/images/spiderman.webp'),
  },
  {
    id: 4,
    image: require('../assets/images/spiderman.webp'),
  },
  {
    id: 5,
    image: require('../assets/images/spiderman.webp'),
  },
  {
    id: 6,
    image: require('../assets/images/spiderman.webp'),
  },
  {
    id: 7,
    image: require('../assets/images/spiderman.webp'),
  },
  {
    id: 8,
    image: require('../assets/images/spiderman.webp'),
  },
];
export function Profile() {
  const [active, setActive] = useState('FREE');

  const renderGameItem = () => {
    return (
      <View style={[styles.gameItemContainer]}>
        <View style={styles.gameItemLeftContainer}>
          <Image
            source={require('../assets/images/spiderman.webp')}
            style={styles.gameItemImage}
            resizeMode="contain"
          />
          <View style={styles.gameItemDescriptionContainer}>
            <Text style={styles.gameTitleText}>Marvel</Text>
            <Text style={styles.gameDescriptionText}>SPIDER MAN</Text>
          </View>
        </View>

        <Pressable style={styles.gameActionButton}>
          <Text style={styles.gameActionBtnText}>$29.59</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{padding: 20}}
          data={gamesData}
          renderItem={(item) => renderGameItem(item)}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: 8}}></View>
          )}
          ListHeaderComponent={() => (
            <>
              <View style={styles.profileHeaderContainer}>
                <Text style={styles.profileHeaderText}>Hello John Doe</Text>
                <ImageBackground
                  source={require('../assets/images/user-profile.jpg')}
                  style={styles.userProfileImage}
                  imageStyle={styles.userProfileImageRadius}
                />
              </View>

              <View style={styles.textInput}>
                <Feather name="search" size={20} style={styles.searchIcon} />
                <TextInput placeholder="Search" style={{flex: 1}} />
              </View>

              <View style={styles.toggleContainer}>
                <Pressable
                  onPress={() => {
                    setActive('FREE');
                  }}
                  style={[
                    styles.toggleButtonContainer,
                    active === 'FREE'
                      ? styles.activeStyle
                      : styles.inactiveStyle,
                  ]}>
                  <Text
                    style={[
                      styles.toggleButtonText,
                      active === 'FREE'
                        ? styles.activeStyleText
                        : styles.inactiveStyleText,
                    ]}>
                    Free to play
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => setActive('PAID')}
                  style={[
                    styles.toggleButtonContainer,
                    active === 'PAID'
                      ? styles.activeStyle
                      : styles.inactiveStyle,
                  ]}>
                  <Text
                    style={[
                      styles.toggleButtonText,
                      active === 'PAID'
                        ? styles.activeStyleText
                        : styles.inactiveStyleText,
                    ]}>
                    Paid game
                  </Text>
                </Pressable>
              </View>

              <View style={styles.vertical} />
            </>
          )}
          // ListFooterComponent={() => {
          //   return <FooterComp />;
          // }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

function FooterComp() {
  const renderGameItem = () => {
    return (
      <View style={[styles.gameItemContainer]}>
        <View style={styles.gameItemLeftContainer}>
          <Image
            source={require('../assets/images/spiderman.webp')}
            style={styles.gameItemImage}
            resizeMode="contain"
          />
          <View style={styles.gameItemDescriptionContainer}>
            <Text style={styles.gameTitleText}>Marvel</Text>
            <Text style={styles.gameDescriptionText}>SPIDER MAN</Text>
          </View>
        </View>

        <Pressable style={styles.gameActionButton}>
          <Text style={styles.gameActionBtnText}>$29.59</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{padding: 20}}
      data={gamesData}
      renderItem={(item) => renderGameItem(item)}
      ItemSeparatorComponent={() => <View style={{marginVertical: 8}}></View>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '100%',
  },
  inner: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexGrow: 1,
  },

  profileHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileHeaderText: {
    fontFamily: 'Inter',
    fontWeight: '800',
  },
  userProfileImage: {
    width: 35,
    height: 35,
  },
  userProfileImageRadius: {
    borderRadius: 50,
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  toggleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
  },
  toggleButtonContainer: {
    flex: 0.5,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  activeStyle: {
    backgroundColor: 'purple',
  },
  inactiveStyle: {
    backgroundColor: '#c9c9c9',
  },
  activeStyleText: {
    color: 'white',
  },
  inactiveStyleText: {
    color: 'purple',
  },
  toggleButtonText: {fontSize: 15, fontWeight: '400'},
  vertical: {
    marginVertical: 10,
  },

  // flatlist game styles

  gameItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameItemLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameItemImage: {
    width: 55,
    height: 55,
    borderRadius: 6,
  },
  gameItemDescriptionContainer: {
    marginLeft: 6,
  },
  gameTitleText: {
    fontSize: 15,
    color: '#3d3d3d',
  },
  gameDescriptionText: {
    fontSize: 15,
    color: '#3d3d3d',
    textTransform: 'uppercase',
  },
  gameActionButton: {
    backgroundColor: 'green',
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 6,
  },
  gameActionBtnText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    fontWeight: '400',
    color: 'white',
  },
});

export default Profile;
