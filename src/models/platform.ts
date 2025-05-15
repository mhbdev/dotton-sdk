import { BaseResponse } from './common';

// /platform/get
export interface Platform {
  address: string;
  lock_price: string;
  fee_nominator: string;
  fee_denominator: string;
  transfer_fee: string;
  state: string;
}

export interface GetPlatformsResponse extends BaseResponse {
  result: {
    platforms: Platform[];
  };
}

// /platform/topDomains
export interface TopDomain {
  domain_name: string;
  manager_address: string;
  subdomains: string;
}

export interface GetTopDomainsResponse extends BaseResponse {
  result: {
    domains: TopDomain[];
  };
}

// /platform/search
export interface SearchDomain {
  address: string;
  domain: string;
  sale_state: string;
  access: string;
  price: string;
  period: string;
}

export interface SearchSubdomain {
  name: string;
  domain: string;
  owner: string;
  manager: string;
}

export interface SearchDomainsResponse extends BaseResponse {
  result: {
    domains: SearchDomain[];
    subdomains: SearchSubdomain[];
  };
}

// /platform/findByName
export interface FindByNameDomain {
  address: string;
  domain: string;
  sale_state: string;
  access: string;
  price: string;
  period: string;
}

export interface FindByNameResponse extends BaseResponse {
  result: {
    domain: FindByNameDomain | null;
    subdomain: any; // Could be null or object, define if you have more info
    suggestions: any[];
    manager_address: string;
    subdomain_address: string;
  };
}

// /platform/getManager
export interface GetManagerResponse extends BaseResponse {
  result: {
    domain_name: string;
    address: string;
    index: string;
    renew_price: string;
    renew_period: string;
    state: string;
    sale_state: string;
    expire_date_time: string;
    expire_date: string;
    last_sub_expire_date_time: string;
    last_sub_expire_date: string;
    admin: string;
    access: string;
    platform: string;
  };
}

// /platform/getSubdomain
export interface GetSubdomainResponse extends BaseResponse {
  result: {
    subdomain: {
      address: string;
      index: string;
      expire_date_time: string;
      expire_date: string;
      admin: string;
      domain_name: string;
      subdomain_name: string;
    };
    manager: {
      domain_name: string;
      address: string;
      index: string;
      renew_price: string;
      renew_period: string;
      state: string;
      sale_state: string;
      expire_date_time: string;
      expire_date: string;
      last_sub_expire_date_time: string;
      last_sub_expire_date: string;
      admin: string;
      access: string;
      platform: string;
    };
  };
}