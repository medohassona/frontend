export interface UserFilterDTO {
  minAge?: number;
  maxAge?: number;
  nationality?: string;
  countryOfResidency?: string;
  educationLevel?: 'BAC_OR_LESS' | 'UNIVERSITY' | 'NONE';
  workSituation?: 'EMPLOYEE' | 'FREELANCER' | 'BUSINESSMAN' | 'UNEMPLOYED';
  socialStatus?: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOWED';
  financialSituation?: 'RICH' | 'MIDDLE' | 'UNDER_MIDDLE';
  heightMin?: number;
  heightMax?: number;
  weightMin?: number;
  weightMax?: number;
  healthSituation?: 'NORMAL' | 'MENTAL_ILLNESS' | 'CHRONIC_DISEASE' | 'SKIN_DISEASE';
  shape?: 'SLIM' | 'SPORT' | 'FAT' | 'NORMAL';
  acceptsPolygamy?: boolean;
  religion?: 'RELIGIOUS' | 'COMMITTED_TO_RELIGION' | 'NOT_VERY_RELIGIOUS' | 'NOT_AT_ALL';
  prayerFrequency?: 'PRAY' | 'OFTEN' | 'SOMETIMES' | 'NOT_AT_ALL';
  whenDoYouWantToGetMarried?: 'ASAP' | 'IN_MONTHS' | 'NEXT_YEAR' | 'WHENEVER_POSSIBLE';
  livingSituation?: 'OWN_HOME' | 'RENTING' | 'WITH_MY_FAMILY';
  habits?: 'SMOKING' | 'DRINKING' | 'SMOKING_AND_DRINKING' | 'NON';
  preferredLanguage?: string;
  typeOfClothes?: 'NO_HIJAB' | 'MID_HIJAB' | 'FULL_HIJAB' | 'NIQAB';
}
