import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Import models
import { DotTONOptions, DotTONErrorResponse } from './models/common';
import { 
  GetPlatformsResponse, GetTopDomainsResponse, SearchDomainsResponse, 
  FindByNameResponse, GetManagerResponse, GetSubdomainResponse 
} from './models/platform';
import { 
  ManagerListResponse, ManagerSubdomainsResponse, 
  GetDomainAddressByNameResponse, BuySubdomainResponse 
} from './models/manager';
import { GetUserManagersResponse, GetUserSubdomainsResponse } from './models/user';

// Import error handling
import { DotTONError } from './errors/DotTONError';

export * from './models/common';
export * from './models/platform';
export * from './models/manager';
export * from './models/user';
export * from './errors/DotTONError';

export default class DotTON {
  private apiKey?: string;
  private baseUrl: string;
  private client: AxiosInstance;

  constructor(options: DotTONOptions = {}) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl || 'https://api.fractionft.xyz/subs';
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }
    this.client = axios.create({
      baseURL: this.baseUrl,
      timeout: options.timeout || 30000,
      headers
    });
  }

  // Platform endpoints
  async getPlatforms(): Promise<GetPlatformsResponse> {
    return this.request('GET', '/platform/get');
  }

  async getTopDomains(): Promise<GetTopDomainsResponse> {
    return this.request('GET', '/platform/topDomains');
  }

  async searchDomains(query: string): Promise<SearchDomainsResponse> {
    return this.request('GET', '/platform/search', { params: { query } });
  }

  async findByName(query: string): Promise<FindByNameResponse> {
    return this.request('GET', '/platform/findByName', { params: { query } });
  }

  async getManager(domainName: string): Promise<GetManagerResponse> {
    return this.request('GET', '/platform/getManager', { params: { domain_name: domainName } });
  }

  async getSubdomain(domainName: string, subdomainName: string): Promise<GetSubdomainResponse> {
    return this.request('GET', '/platform/getSubdomain', { params: { domain_name: domainName, subdomain_name: subdomainName } });
  }

  // Manager endpoints
  async getManagerList(platform: string, offset: number, limit: number): Promise<ManagerListResponse | DotTONErrorResponse> {
    return this.request('GET', '/manager/list', { params: { platform, offset, limit } });
  }

  async getManagerSubdomains(manager: string, offset: number, limit: number): Promise<ManagerSubdomainsResponse | DotTONErrorResponse> {
    return this.request('GET', '/manager/subdomains', { params: { manager, offset, limit } });
  }

  async findDomainAddressByName(platform: string, domainName: string): Promise<GetDomainAddressByNameResponse | DotTONErrorResponse> {
    return this.request('GET', '/manager/getDomainAddressByName', { params: { platform, domain_name: domainName } });
  }

  async buySubdomain(manager: string, subdomainName: string): Promise<BuySubdomainResponse | DotTONErrorResponse> {
    return this.request('GET', '/manager/buySubdomain', { params: { manager, subdomain_name: subdomainName } });
  }

  // User endpoints
  async getUserManagers(adminAddress: string, offset: string, limit: string): Promise<GetUserManagersResponse> {
    return this.request('GET', '/user/getManagers', { params: { admin_address: adminAddress, offset, limit } });
  }

  async getUserSubdomains(adminAddress: string, offset: string, limit: string): Promise<GetUserSubdomainsResponse> {
    return this.request('GET', '/user/getSubdomains', { params: { admin_address: adminAddress, offset, limit } });
  }

  // Utility method for making requests
  private async request<T>(method: string, path: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response = await this.client.request({
        method,
        url: path,
        ...options
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new DotTONError(
          error.response.data?.message || 'API request failed',
          error.response.status,
          error.response.data
        );
      }
      throw new DotTONError('Network error', 0, error);
    }
  }
}