import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {faker} from '@faker-js/faker';

import JobCard from './JobCard';

const JobsData = [
  {
    id: faker.database.mongodbObjectId(),
    jobTitle: 'React Native',
    salaryRange: 'Rs 4 - 9 LPA',
    experienceRange: '3-5 Years',
    education: 'Graduation/Diploma',
    companyName: 'Doodleblue',
    employeeRange: '500-1000 Employees',
    recruiterImage: faker.image.people(30, 30, true),
    recruiterName: 'Ramya stree',
    recruiterPosition: 'HR',
    address: 'Chennai, TN',
  },
  {
    id: faker.database.mongodbObjectId(),
    jobTitle: 'React Native',
    salaryRange: 'Rs 4 - 9 LPA',
    experienceRange: '3-5 Years',
    education: 'Graduation/Diploma',
    companyName: 'Doodleblue',
    employeeRange: '500-1000 Employees',
    recruiterImage: faker.image.people(30, 30, true),
    recruiterName: 'Ramya stree',
    recruiterPosition: 'HR',
    address: 'Chennai, TN',
  },

  {
    id: faker.database.mongodbObjectId(),
    jobTitle: 'React Native',
    salaryRange: 'Rs 4 - 9 LPA',
    experienceRange: '3-5 Years',
    education: 'Graduation/Diploma',
    companyName: 'Doodleblue',
    employeeRange: '500-1000 Employees',
    recruiterImage: faker.image.people(30, 30, true),
    recruiterName: 'Ramya stree',
    recruiterPosition: 'HR',
    address: 'Chennai, TN',
  },

  {
    id: faker.database.mongodbObjectId(),
    jobTitle: 'React Native',
    salaryRange: 'Rs 4 - 9 LPA',
    experienceRange: '3-5 Years',
    education: 'Graduation/Diploma',
    companyName: 'Doodleblue',
    employeeRange: '500-1000 Employees',
    recruiterImage: faker.image.people(30, 30, true),
    recruiterName: 'Ramya stree',
    recruiterPosition: 'HR',
    address: 'Chennai, TN',
  },

  {
    id: faker.database.mongodbObjectId(),
    jobTitle: 'React Native',
    salaryRange: 'Rs 4 - 9 LPA',
    experienceRange: '3-5 Years',
    education: 'Graduation/Diploma',
    companyName: 'Doodleblue',
    employeeRange: '500-1000 Employees',
    recruiterImage: faker.image.people(30, 30, true),
    recruiterName: 'Ramya stree',
    recruiterPosition: 'HR',
    address: 'Chennai, TN',
  },

  {
    id: faker.database.mongodbObjectId(),
    jobTitle: 'React Native',
    salaryRange: 'Rs 4 - 9 LPA',
    experienceRange: '3-5 Years',
    education: 'Graduation/Diploma',
    companyName: 'Doodleblue',
    employeeRange: '500-1000 Employees',
    recruiterImage: faker.image.people(30, 30, true),
    recruiterName: 'Ramya stree',
    recruiterPosition: 'HR',
    address: 'Chennai, TN',
  },
  {
    id: faker.database.mongodbObjectId(),
    jobTitle: 'React Native',
    salaryRange: 'Rs 4 - 9 LPA',
    experienceRange: '3-5 Years',
    education: 'Graduation/Diploma',
    companyName: 'Doodleblue',
    employeeRange: '500-1000 Employees',
    recruiterImage: faker.image.people(30, 30, true),
    recruiterName: 'Ramya stree',
    recruiterPosition: 'HR',
    address: 'Chennai, TN',
  },
];

function Jobs() {
  return (
    <View style={styles.container}>
      <FlatList
        data={JobsData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <JobCard key={item.id} {...item} />;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.jobListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  jobListContainer: {
    paddingTop: 10,
  },
});

export default Jobs;
