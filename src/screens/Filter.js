import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {FilterBox} from '../components';

const {width: WIDTH} = Dimensions.get('window');

const FilterOptions = {
  WORKPLACE_POLICY: [
    {
      id: 'All',
      label: 'All',
      value: 'All',
      isChecked: true,
    },
    {
      id: 'Remote',
      label: 'Remote',
      value: 'Remote',
      isChecked: false,
    },
    {
      id: 'On-Site',
      label: 'On-Site',
      value: 'On-Site',
      isChecked: false,
    },
  ],
  REQUIRED_EDUCATION: [
    {
      id: 'All',
      label: 'All',
      value: 'All',
      isChecked: true,
    },
    {
      id: 'Doctorate',
      label: 'Doctorate',
      value: 'Doctorate',
      isChecked: false,
    },
    {
      id: 'Post-Graduation',
      label: 'Post-Graduation',
      value: 'Post-Graduation',
      isChecked: false,
    },
    {
      id: 'Graduation/Diploma',
      label: 'Graduation/Diploma',
      value: 'Graduation/Diploma',
      isChecked: false,
    },
    {
      id: 'Higher Secondary',
      label: 'Higher Secondary',
      value: 'Higher Secondary',
      isChecked: false,
    },
    {
      id: 'School',
      label: 'School',
      value: 'School',
      isChecked: false,
    },
  ],
  OFFERED_SALARY: [
    {
      id: 'All',
      label: 'All',
      value: 'All',
      isChecked: true,
    },
    {
      id: 'Rs 0-2 LPA',
      label: 'Rs 0-2 LPA',
      value: 'Rs 0-2 LPA',
      isChecked: false,
    },
    {
      id: 'Rs 2-5 LPA',
      label: 'Rs 2-5 LPA',
      value: 'Rs 2-5 LPA',
      isChecked: false,
    },
    {
      id: 'Rs 5-10 LPA',
      label: 'Rs 5-10 LPA',
      value: 'Rs 5-10 LPA',
      isChecked: false,
    },
    {
      id: 'Rs 10-20 LPA',
      label: 'Rs 10-20 LPA',
      value: 'Rs 10-20 LPA',
      isChecked: false,
    },
    {
      id: 'Rs 20-30 LPA',
      label: 'Rs 20-30 LPA',
      value: 'Rs 20-30 LPA',
      isChecked: false,
    },
    {
      id: 'Rs 30 LPA+',
      label: 'Rs 30 LPA+',
      value: 'Rs 30 LPA+',
      isChecked: false,
    },
  ],
  REQUIRED_EXPERIENCE: [
    {
      id: 'Any Experience',
      label: 'Any Experience',
      value: 'Any Experience',
      isChecked: true,
    },
    {
      id: 'Fresher',
      label: 'Fresher',
      value: 'Fresher',
      isChecked: false,
    },
    {
      id: '0-1 Year',
      label: '0-1 Year',
      value: '0-1 Year',
      isChecked: false,
    },
    {
      id: '1-3 Years',
      label: '1-3 Years',
      value: '1-3 Years',
      isChecked: false,
    },
    {
      id: '3-5 Years',
      label: '3-5 Years',
      value: '3-5 Years',
      isChecked: false,
    },
    {
      id: '5-10 Years',
      label: '5-10 Years',
      value: '5-10 Years',
      isChecked: false,
    },
    {
      id: '10+ Years',
      label: '10+ Years',
      value: '10+ Years',
      isChecked: false,
    },
  ],
  INDUSTRY: [
    {
      id: 'All',
      label: 'All',
      value: 'All',
      isChecked: true,
    },
    {
      id: 'Pharmaceutical Firm',
      label: 'Pharmaceutical Firm',
      value: 'Pharmaceutical Firm',
      isChecked: false,
    },
    {
      id: 'Hospital/Nursing/Clinics',
      label: 'Hospital/Nursing/Clinics',
      value: 'Hospital/Nursing/Clinics',
      isChecked: false,
    },
    {
      id: 'Games',
      label: 'Games',
      value: 'Games',
      isChecked: false,
    },
    {
      id: 'Training institutions',
      label: 'Training institutions',
      value: 'Training institutions',
      isChecked: false,
    },
    {
      id: 'Media & Entertainment',
      label: 'Media & Entertainment',
      value: 'Media & Entertainment',
      isChecked: false,
    },
    {
      id: 'Electronics',
      label: 'Electronics',
      value: 'Electronics',
      isChecked: false,
    },
    {
      id: 'Supply Chain',
      label: 'Supply Chain',
      value: 'Supply Chain',
      isChecked: false,
    },
    {
      id: 'Gas / oil / Electricity / Thermal',
      label: 'Gas / oil / Electricity / Thermal',
      value: 'Gas / oil / Electricity / Thermal',
      isChecked: false,
    },
    {
      id: 'Mobile Internet',
      label: 'Mobile Internet',
      value: 'Mobile Internet',
      isChecked: false,
    },
    {
      id: 'Telecom',
      label: 'Telecom',
      value: 'Telecom',
      isChecked: false,
    },
    {
      id: 'Finance / Audit / Tax',
      label: 'Finance / Audit / Tax',
      value: 'Finance / Audit / Tax',
      isChecked: false,
    },
    {
      id: 'Machine Learning/Artificial Intelligence',
      label: 'Machine Learning/Artificial Intelligence',
      value: 'Machine Learning/Artificial Intelligence',
      isChecked: false,
    },
    {
      id: 'FinTech',
      label: 'FinTech',
      value: 'FinTech',
      isChecked: false,
    },
    {
      id: 'Daily/Household/FMCG',
      label: 'Daily/Household/FMCG',
      value: 'Daily/Household/FMCG',
      isChecked: false,
    },
    {
      id: 'Newspaper/Books/Magazines',
      label: 'Newspaper/Books/Magazines',
      value: 'Newspaper/Books/Magazines',
      isChecked: false,
    },
    {
      id: 'Consulting/Management',
      label: 'Consulting/Management',
      value: 'Consulting/Management',
      isChecked: false,
    },
    {
      id: 'Mobile App Development',
      label: 'Mobile App Development',
      value: 'Mobile App Development',
      isChecked: false,
    },
  ],
  COMPANY_STRENGTH: [
    {
      id: 'All',
      label: 'All',
      value: 'All',
      isChecked: true,
    },
    {
      id: '0-19 Employees',
      label: '0-19 Employees',
      value: '0-19 Employees',
      isChecked: false,
    },
    {
      id: '20-99 Employees',
      label: '20-99 Employees',
      value: '20-99 Employees',
      isChecked: false,
    },
    {
      id: '100-199 Employees',
      label: '100-199 Employees',
      value: '100-199 Employees',
      isChecked: false,
    },
    {
      id: '200-499 Employees',
      label: '200-499 Employees',
      value: '200-499 Employees',
      isChecked: false,
    },
    {
      id: '500-1000 Employees',
      label: '500-1000 Employees',
      value: '500-1000 Employees',
      isChecked: false,
    },
    {
      id: 'Over 1000 Employees',
      label: 'Over 1000 Employees',
      value: 'Over 1000 Employees',
      isChecked: false,
    },
  ],
  FINANCING_STAGE: [
    {
      id: 'All',
      label: 'All',
      value: 'All',
      isChecked: true,
    },
    {
      id: 'Self Funding',
      label: 'Self Funding',
      value: 'Self Funding',
      isChecked: false,
    },
    {
      id: 'Seed Funding',
      label: 'Seed Funding',
      value: 'Seed Funding',
      isChecked: false,
    },
    {
      id: 'Series A',
      label: 'Series A',
      value: 'Series A',
      isChecked: false,
    },
    {
      id: 'Series B',
      label: 'Series B',
      value: 'Series B',
      isChecked: false,
    },
    {
      id: 'Series C',
      label: 'Series C',
      value: 'Series C',
      isChecked: false,
    },
    {
      id: 'Series D',
      label: 'Series D',
      value: 'Series D',
      isChecked: false,
    },
    {
      id: 'IPO',
      label: 'IPO',
      value: 'IPO',
      isChecked: false,
    },
    {
      id: 'No Need for financing',
      label: 'No Need for financing',
      value: 'No Need for financing',
      isChecked: false,
    },
  ],
};

function getActiveFilters(filtersArr) {
  return filtersArr.filter((filterItem) => filterItem.isChecked);
}

function getActiveFilterCount(allFilters) {
  const activeFilterCounts = allFilters.map((filter) =>
    filter.reduce(
      (acc, filterItem) =>
        filterItem.id === 'All' ||
        filterItem.id === 'Any Experience' ||
        filterItem.isChecked === false
          ? acc
          : acc + 1,
      0,
    ),
  );
  return activeFilterCounts.reduce((acc, sum) => acc + sum, 0);
}

export function Filter() {
  // const [testState, setTestState] = useState(0);
  const navigation = useNavigation();

  const [workplacePolicy, setWorkplacePolicy] = useState(
    () => FilterOptions.WORKPLACE_POLICY,
  );
  const [requiredEducation, setRequiredEducation] = useState(
    () => FilterOptions.REQUIRED_EDUCATION,
  );
  const [offeredSalary, setOfferedSalary] = useState(
    () => FilterOptions.OFFERED_SALARY,
  );
  const [requiredExperience, setRequiredExperience] = useState(
    () => FilterOptions.REQUIRED_EXPERIENCE,
  );
  const [industry, setIndustry] = useState(() => FilterOptions.INDUSTRY);
  const [companyStrength, setCompanyStrength] = useState(
    () => FilterOptions.COMPANY_STRENGTH,
  );
  const [financingStage, setFinancingStage] = useState(
    () => FilterOptions.FINANCING_STAGE,
  );

  useLayoutEffect(() => {
    const filterCount =
      getActiveFilterCount([
        workplacePolicy,
        requiredEducation,
        offeredSalary,
        requiredExperience,
        industry,
        companyStrength,
        financingStage,
      ]) || '';

    navigation.setOptions({
      headerTitle: () => {
        return (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleText}>Filter</Text>
            {filterCount ? (
              <>
                <View style={styles.filterDot} />
                <Text style={styles.filterCount}>{filterCount}</Text>
              </>
            ) : null}
          </View>
        );
      },
      headerLeft: () => (
        <Feather
          name="x"
          color="white"
          size={24}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [
    navigation,
    companyStrength,
    financingStage,
    industry,
    offeredSalary,
    requiredEducation,
    requiredExperience,
    workplacePolicy,
  ]);

  // const onPress = useCallback(function onPress(type, activeFilters) {
  //   const activeData = activeFilters?.filter((data) => data.isChecked);
  //   switch (type) {
  //     case 'WORKPLACE_POLICY':
  //       setWorkplacePolicy(activeData);
  //       return;
  //     case 'REQUIRED_EDUCATION':
  //       setRequiredEducation(activeData);
  //       return;
  //     case 'OFFERED_SALARY':
  //       setOfferedSalary(activeData);
  //       return;
  //     case 'REQUIRED_EXPERIENCE':
  //       setRequiredExperience(activeData);
  //       return;
  //     case 'INDUSTRY':
  //       setIndustry(activeData);
  //       return;
  //     case 'COMPANY_STRENGTH':
  //       setCompanyStrength(activeData);
  //       return;
  //     case 'FINANCING_STAGE':
  //       setFinancingStage(activeData);
  //       return;
  //     default:
  //       return;
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.innerContainer} bounces={false}>
        {/* <Button
          title="Test button"
          onPress={() => {
            setTestState((prev) => prev + 1);
          }}
        /> */}

        <FilterBox
          title="Workplace Policy"
          filterOptions={FilterOptions.WORKPLACE_POLICY}
          column={3}
          horizontalSpacing={20}
          verticalSpacing={10}
          // onPress={onPress}
          // type="WORKPLACE_POLICY"
          selectedOptions={workplacePolicy}
          setSelectedOptions={setWorkplacePolicy}
        />

        <FilterBox
          title="Required Education"
          filterOptions={FilterOptions.REQUIRED_EDUCATION}
          column={2}
          horizontalSpacing={20}
          verticalSpacing={10}
          // onPress={onPress}
          // type="REQUIRED_EDUCATION"
          selectedOptions={requiredEducation}
          setSelectedOptions={setRequiredEducation}
          multiple
        />

        <FilterBox
          title="Offered Salary (Annually)"
          filterOptions={FilterOptions.OFFERED_SALARY}
          column={2}
          horizontalSpacing={20}
          verticalSpacing={10}
          // onPress={onPress}
          // type="OFFERED_SALARY"
          selectedOptions={offeredSalary}
          setSelectedOptions={setOfferedSalary}
        />

        <FilterBox
          title="Required Experience"
          filterOptions={FilterOptions.REQUIRED_EXPERIENCE}
          column={2}
          horizontalSpacing={20}
          verticalSpacing={10}
          multiple
          // onPress={onPress}
          // type="REQUIRED_EXPERIENCE"
          selectedOptions={requiredExperience}
          setSelectedOptions={setRequiredExperience}
        />

        <FilterBox
          title="Industry"
          filterOptions={FilterOptions.INDUSTRY}
          column={1}
          horizontalSpacing={20}
          verticalSpacing={10}
          multiple
          // onPress={onPress}
          // type="INDUSTRY"
          selectedOptions={industry}
          setSelectedOptions={setIndustry}
        />

        <FilterBox
          title="Company Strength"
          filterOptions={FilterOptions.COMPANY_STRENGTH}
          column={2}
          horizontalSpacing={20}
          verticalSpacing={10}
          multiple
          // onPress={onPress}
          // type="COMPANY_STRENGTH"
          selectedOptions={companyStrength}
          setSelectedOptions={setCompanyStrength}
        />

        <FilterBox
          title="Financing Stage"
          filterOptions={FilterOptions.FINANCING_STAGE}
          column={2}
          horizontalSpacing={20}
          verticalSpacing={10}
          // onPress={onPress}
          // type="FINANCING_STAGE"
          selectedOptions={financingStage}
          setSelectedOptions={setFinancingStage}
          multiple
        />
      </ScrollView>

      <View style={styles.filterActionContainer}>
        <View style={styles.row}>
          <Pressable
            onPress={() => {
              setWorkplacePolicy(FilterOptions.WORKPLACE_POLICY);
              setRequiredEducation(FilterOptions.REQUIRED_EDUCATION);
              setOfferedSalary(FilterOptions.OFFERED_SALARY);
              setRequiredExperience(FilterOptions.REQUIRED_EXPERIENCE);
              setIndustry(FilterOptions.INDUSTRY);
              setCompanyStrength(FilterOptions.COMPANY_STRENGTH);
              setFinancingStage(FilterOptions.FINANCING_STAGE);
            }}
            style={styles.filterBtnContainer({
              backgroundColor: '#151715',
              width: WIDTH / 3 - 20,
            })}>
            <Text style={styles.filterBtnText}>Reset</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              console.log(getActiveFilters(workplacePolicy));
              console.log(getActiveFilters(requiredEducation));
              console.log(getActiveFilters(offeredSalary));
              console.log(getActiveFilters(requiredExperience));
              console.log(getActiveFilters(industry));
              console.log(getActiveFilters(companyStrength));
              console.log(getActiveFilters(financingStage));
            }}
            style={[
              styles.filterBtnContainer({
                backgroundColor: '#0D9B57',
                width: WIDTH - WIDTH / 3 - 20,
              }),
              styles.mlauto,
            ]}>
            <Text style={[styles.filterBtnText, styles.bold]}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  headerTitleText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  filterDot: {
    width: 4,
    height: 4,
    backgroundColor: '#0D9B57',
    borderRadius: 50,
    marginHorizontal: 10,
    alignSelf: 'flex-start',
    marginTop: 9,
  },
  filterCount: {
    color: '#0D9B57',
    fontSize: 16,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#0D0F0D',
    paddingHorizontal: 10,
  },
  filterActionContainer: {
    backgroundColor: '#0D0F0D',
    paddingVertical: 14,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterBtnContainer: ({backgroundColor, width}) => ({
    backgroundColor,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    borderRadius: 4,
  }),
  filterBtnText: {
    color: 'white',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  mlauto: {
    marginLeft: 'auto',
  },
});
