import { BaseResponse } from './common';

// User endpoints interfaces
export interface UserManager {
  address: string;
  index: string;
  renew_price: string;
  renew_period: string;
  state: string;
  sale_state: string;
  expire_date: string;
  last_sub_expire_date: string;
  admin: string;
  access: string;
  platform_address: string;
  domain_name: string;
}

export interface GetUserManagersResponse extends BaseResponse {
  result: {
    managers: UserManager[];
    offset: number;
    limit: number;
    next_offset: number;
  };
}

export interface UserSubdomain {
  address: string;
  index: string;
  expire_date: string;
  admin: string;
  manager_address: string;
  domain_name: string;
  subdomain_name: string;
}

export interface GetUserSubdomainsResponse extends BaseResponse {
  result: {
    subdomains: UserSubdomain[];
    offset: number;
    limit: number;
    next_offset: number;
  };
}