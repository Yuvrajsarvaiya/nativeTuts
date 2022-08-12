import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function Products() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.screenContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </ScrollView>
  );
}

function ProductCard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image
          source={require('../assets/images/tata_genuine.png')}
          resizeMode="contain"
          style={styles.cardImage}
        />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitleText}>886754000006</Text>
          <TouchableOpacity activeOpacity={0.9}>
            <Feather name="bookmark" color="gray" size={20} />
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptionText}>TEMP SENSOR CONN PIGTAIL</Text>

        <View style={styles.priceInfoContainer}>
          <View style={styles.priceRowContainer}>
            <Text style={styles.priceInfoTextHeader}>HSN:</Text>
            <Text>8544.30.00</Text>
          </View>

          <View style={styles.priceRowContainer}>
            <Text style={styles.priceInfoTextHeader}>GST:</Text>
            <Text style={styles.gstText}>SLAB 18%</Text>
          </View>
        </View>

        <Text style={styles.totalAmount}>$108.00</Text>
      </View>

      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'lightgray',
        }}
      />

      <View style={styles.cardFooter}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <CartButton />
          <TouchableOpacity
            activeOpacity={1}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="shopping-cart" color="blue" size={16} />
            <Text
              style={{
                color: 'blue',
                fontSize: 14,
                marginLeft: 4,
              }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function CartButton() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddCart = (action) => {
    if (action === 'ADD') {
      setCartCount((prevCount) => prevCount + 1);
    } else if (action === 'REMOVE' && cartCount > 0) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <View style={styles.cartBtnContainer}>
      <Pressable style={styles.cartBtn} onPress={() => handleAddCart('REMOVE')}>
        <Feather name="minus" color="blue" size={16} />
      </Pressable>

      <Text style={styles.cartCountText}>{cartCount}</Text>

      <Pressable style={styles.cartBtn} onPress={() => handleAddCart('ADD')}>
        <Feather name="plus" color="blue" size={16} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    marginVertical: 12,
    paddingHorizontal: 10,
  },

  // card styles start
  cardContainer: {
    marginVertical: 13,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    overflow: 'hidden',

    shadowColor: 'blue',
    elevation: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },

  cardHeader: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  cardImage: {
    height: 150,
  },

  cardBody: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    fontWeight: '800',
    color: 'blue',
  },
  descriptionText: {
    fontSize: 15,
    textTransform: 'uppercase',
    marginVertical: 4,
  },
  cardFooter: {
    padding: 20,
  },

  // cartButton
  cartBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
    width: 80,
  },
  cartBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCountText: {},
  priceInfoContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },

  priceRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceInfoTextHeader: {
    fontWeight: '700',
    color: 'black',
    textTransform: 'uppercase',
  },
  gstText: {
    textTransform: 'uppercase',
  },
  totalAmount: {
    fontWeight: 'bold',
    color: 'black',
  },
});
