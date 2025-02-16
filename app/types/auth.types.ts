enum UserRole {
  BUYER,
  SELLER,
}

interface TLoginResponseData {
  name: string;
  image?: string;
  email: string;
  id: string;
  token: string;
  phoneNumber: string;
  role: UserRole;
}

export interface TLoginResponse {
  data: TLoginResponseData;
  message: string;
}
