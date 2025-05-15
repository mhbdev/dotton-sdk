import { BaseResponse } from './common';

// /manager/list
export interface ManagerPlatform {
  address: string;
  lock_price: string;
  fee_nominator: string;
  fee_denominator: string;
  transfer_fee: string;
  state: string;
}

export interface ManagerListManager {
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

export interface ManagerListResponse extends BaseResponse {
  result: {
    platform: ManagerPlatform;
    managers: ManagerListManager[];
    offset: number;
    limit: number;
    next_offset: number;
  };
}

// /manager/subdomains
export interface ManagerSubdomainManager {
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

export interface ManagerSubdomain {
  address: string;
  index: string;
  expire_date: string;
  admin: string;
  manager_address: string;
  domain_name: string;
  subdomain_name: string;
}

export interface ManagerSubdomainsResponse extends BaseResponse {
  result: {
    manager: ManagerSubdomainManager;
    subdomains: ManagerSubdomain[];
    offset: number;
    limit: number;
    next_offset: number;
  };
}

// /manager/getDomainAddressByName
export interface GetDomainAddressByNameResponse extends BaseResponse {
  result: {
    domain_name: string;
    address: string;
    exist: boolean;
    state: string;
  };
}

// /manager/buySubdomain
export interface BuySubdomainResponse extends BaseResponse {
  result: {
    address: string;
    value: string;
    payload: string;
  };
}