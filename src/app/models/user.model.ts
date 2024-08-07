export class User {
  id?: number;
  firstname: string | undefined;
  lastname: string | undefined;
  gender: 'MAN' | 'WOMAN' | undefined;
  birthday: Date | undefined;
  age: number | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  nationality: string | undefined;
  countryOfResidency: string | undefined;
  city: string | undefined;
  educationLevel: 'BAC_OR_LESS' | 'UNIVERSITY' | 'NONE' | undefined;
  workSituation: 'EMPLOYEE' | 'FREELANCER' | 'BUSINESSMAN' | 'UNEMPLOYED' | undefined;
  socialStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOWED' | undefined;
  lastLogin: Date | undefined;
  isOnline: boolean | undefined;
  financialSituation: 'RICH' | 'MIDDLE' | 'UNDER_MIDDLE' | undefined;
  height: number | undefined;
  weight: number | undefined;
  healthSituation: 'NORMAL' | 'MENTAL_ILLNESS' | 'CHRONIC_DISEASE' | 'SKIN_DISEASE' | 'OTHER' | undefined;
  shape: 'SLIM' | 'SPORT' | 'FAT' | 'NORMAL' | undefined;
  acceptsPolygamy: boolean | undefined;
  religion: 'RELIGIOUS' | 'COMMITTED_TO_RELIGION' | 'NOT_VERY_RELIGIOUS' | 'NOT_AT_ALL' | undefined;
  prayerFrequency: 'PRAY' | 'OFTEN' | 'SOMETIMES' | 'NOT_AT_ALL' | undefined;
  aboutMe: string | undefined;
  aboutMyPartner: string | undefined;
  dontLikeToHaveInPartner: string | undefined;
  whenDoYouWantToGetMarried: 'ASAP' | 'IN_MONTHS' | 'NEXT_YEAR' | 'WHENEVER_POSSIBLE' | undefined;
  livingSituation: 'OWN_HOME' | 'RENTING' | 'WITH_MY_FAMILY' | undefined;
  habits: 'SMOKING' | 'DRINKING' | 'SMOKING_AND_DRINKING' | 'NON' | undefined;
  preferredLanguage: string | undefined;
  typeOfClothes: 'NO_HIJAB' | 'MID_HIJAB' | 'FULL_HIJAB' | 'NIQAB' | undefined;
  activated: boolean | undefined;
}
