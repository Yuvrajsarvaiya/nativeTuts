import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const shoeSizes = [
  {
    id: 1,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 2,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 3,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 4,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 5,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 6,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 7,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 8,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 9,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 10,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 11,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 12,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 13,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 14,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 15,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 16,
    title: 'US M 3.5',
    price: '$237',
  },
  {
    id: 17,
    title: 'US M 3.5',
    price: '$237',
  },
];

export const EcomProduct = () => {
  return (
    <View style={styles.container}>
      {/* Add Flex here */}

      {/* Size List */}
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View style={styles.shadow}>
              <View style={styles.imageContainer}>
                <Image
                  style={{width: '100%', height: 150, padding: 20}}
                  resizeMode="contain"
                  source={require('../assets/images/jordan.png')}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 14,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: 'Inter-Bold',
                    color: '#000000',
                  }}>
                  Select Size
                </Text>
              </View>
            </View>
          );
        }}
        columnWrapperStyle={{
          paddingHorizontal: 8,
        }}
        // contentContainerStyle={{paddingHorizontal: 8, paddingVertical: 10}}
        numColumns={4}
        data={shoeSizes}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <ShoeSizeCard {...item} />}
      />
    </View>
  );
};

function ShoeSizeCard() {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        paddingVertical: 12,
        paddingHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        flex: 0.25,
        margin: 4,
      }}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: '700',
          fontFamily: 'Inter-Bold',
          color: '#101010',
        }}>
        US M 3.5
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '700',
          fontFamily: 'Inter-Bold',
          color: '#328c50',
          marginTop: 4,
        }}>
        $237
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
  shadow: {
    minHeight: SCREEN_HEIGHT / 3.5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 8,
    backgroundColor: 'white',
    marginBottom: 20,
  },
});
