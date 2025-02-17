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

interface TRegisterResponseData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: UserRole;
  id: string;
  image: string;
}

export interface TRegisterResponse {
  data: TRegisterResponseData;
  message: string;
}

export interface TLoginResponse {
  data: TLoginResponseData;
  message: string;
}
