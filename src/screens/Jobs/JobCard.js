import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function JobCard({
  jobTitle,
  salaryRange,
  experienceRange,
  education,
  companyName,
  employeeRange,
  recruiterImage,
  recruiterName,
  recruiterPosition,
  address,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{jobTitle}</Text>
        <Text style={styles.salaryText}>{salaryRange}</Text>
      </View>
      <View style={styles.criteriaContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{experienceRange}</Text>
        </View>
        <View style={[styles.badge, styles.badgeLeftSpacing]}>
          <Text style={styles.badgeText}>{education}</Text>
        </View>
      </View>
      <View style={styles.companyInfoContainer}>
        <View style={styles.column}>
          <View style={styles.companyInfoTextContainer}>
            <Text style={styles.companyText}>{companyName}</Text>
            <Text style={styles.employeeText}>{employeeRange}</Text>
          </View>

          <View style={styles.recruiterInfoContainer}>
            <Image
              resizeMode="cover"
              source={{uri: recruiterImage}}
              style={styles.recruiterImage}
            />
            <Text style={styles.recruiterNameText}>{recruiterName}</Text>
          </View>
        </View>

        <View style={styles.siteContainer}>
          <View style={styles.remoteBadge}>
            <Feather name="home" color="white" size={14} />

            <Text style={styles.remoteText}>Remote</Text>
          </View>
          <Text style={styles.addressText}>{address}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Looking for react native developer with 3+ years of experience
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  column: {
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  salaryText: {
    color: '#0D9B57',
    fontSize: 18,
    fontWeight: 'bold',
  },
  criteriaContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#151715',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  badgeLeftSpacing: {
    marginLeft: 20,
  },
  badgeText: {
    fontSize: 14,
    color: 'white',
    opacity: 0.4,
  },
  companyInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingBottom: 12,
  },
  companyInfoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyText: {
    color: 'white',
  },
  employeeText: {
    color: 'white',
    marginLeft: 15,
  },
  recruiterInfoContainer: {
    marginTop: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recruiterImage: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  recruiterNameText: {
    color: 'white',
    marginLeft: 10,
  },
  siteContainer: {
    marginTop: 3,
  },
  remoteBadge: {
    backgroundColor: '#0D9B57',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  remoteText: {
    color: 'white',
    fontSize: 13,
    marginLeft: 4,
  },
  addressText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
  descriptionContainer: {
    marginTop: 15,
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
  },
});

export default JobCard;
