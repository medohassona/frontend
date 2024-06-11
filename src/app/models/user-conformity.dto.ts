export interface UserConformityDTO {
  userId: number;
  fullName: string;
  images: string[];
  lastLogin: Date;
  isOnline: boolean;
  countryOfResidency: string;
  age: number;
  conformityPercentage: number;
}
