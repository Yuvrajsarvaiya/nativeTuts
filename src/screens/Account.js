import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const accountsData = [
  {
    icon: <Feather name="user" size={26} />,
    title: 'Profile',
    description: 'Edit your Password, Name, Shoe Size, Email, Username',
  },
  {
    icon: <Feather name="lock" size={26} />,
    title: 'Security',
    description: 'Two-Step Verification',
  },
  {
    icon: <Feather name="shopping-bag" size={26} />,
    title: 'Buying',
    description: 'Active Birds, In-Progress, Completed Orders',
  },
  {
    icon: <Feather name="package" size={26} />,
    title: 'Selling',
    description: 'Active Asks, Sales, Seller Profile',
  },
  {
    icon: <Feather name="trello" size={26} />,
    title: 'Portfolio',
    description: 'See the value of your items',
  },
  {
    icon: <Feather name="check-circle" size={26} />,
    title: 'Following',
    description: "Products you're watching",
  },
  {
    icon: <Feather name="settings" size={26} />,
    title: 'Settings',
    description: 'Billing, Shipping, Payout, Notifications',
  },
  {
    icon: <Feather name="tv" size={26} />,
    title: 'Blog',
  },
  {
    icon: <Feather name="help-circle" size={26} />,
    title: 'Help',
  },
];

const Divider = () => {
  return (
    <View
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CCCCCC',
      }}
    />
  );
};

export function Account() {
  const navigation = useNavigation();

  const onAccountItemPressed = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        {accountsData.map((account) => {
          return (
            <Fragment key={account.title}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={onAccountItemPressed}>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <View style={styles.iconContainer}>{account.icon}</View>
                    <View style={{flex: 1}}>
                      <Text style={styles.title}>{account.title}</Text>
                      {account?.description && (
                        <Text style={styles.description}>
                          {account.description}
                        </Text>
                      )}
                    </View>
                  </View>
                  <Divider />
                </View>
              </TouchableOpacity>
            </Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopColor: '#CCCCCC',
    borderWidth: StyleSheet.hairlineWidth,
  },
  rowContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  description: {
    fontSize: 15,
    color: 'gray',
    marginTop: 2,
    maxWidth: '75%',
  },
  iconContainer: {
    marginRight: 20,
  },
});
