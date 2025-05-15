# @pizzaton/dotton

Official SDK for [dotTON](https://sub.fractionft.xyz) platform integration.  
This package helps developers connect with the dotTON API and interact with TON blockchain domains and subdomains.

---

## What is dotTON?

[dotTON](https://dotton.notion.site/1a6f5e910fdb801581adfbdfa28eb49e?v=1a6f5e910fdb807ca6e1000c8af00ea7) is an all-in-one platform for managing, trading, and integrating TON domains and subdomains.  
It provides a robust API for on-chain asset management, domain discovery, and subdomain operations, making it easy for developers to build TON-based applications and services.

Learn more:  
- [Official Notion Docs](https://dotton.notion.site/1a6f5e910fdb801581adfbdfa28eb49e?v=1a6f5e910fdb807ca6e1000c8af00ea7)
- [Medium Introduction](https://medium.com/@Mhbdev/introducing-dotton-your-all-in-one-platform-for-ton-domains-and-subdomains-4558352422de)

---

## Features

- Query available platforms and top domains
- Search for domains and subdomains
- Retrieve domain and subdomain details
- Manage domain ownership and subdomain creation
- Integrate with TON blockchain assets via a simple TypeScript/JavaScript API

---

## Installation

```bash
npm install @pizzaton/dotton
```

---

## Usage

Here's a quick example of how to use the SDK:

```typescript
import DotTON from '@pizzaton/dotton';

async function main() {
  const dotton = new DotTON();

  // Get platforms
  const platforms = await dotton.getPlatforms();
  console.log('Platforms:', platforms);

  // Get top domains
  const topDomains = await dotton.getTopDomains();
  console.log('Top Domains:', topDomains);

  // Search domains
  const search = await dotton.searchDomains('memelanders');
  console.log('Search:', search);

  // Find by name
  const find = await dotton.findByName('memelanders');
  console.log('Find by name:', find);

  // Get manager info
  const manager = await dotton.getManager('memelanders');
  console.log('Manager:', manager);

  // Get subdomain info
  const subdomain = await dotton.getSubdomain('memelanders', 'test');
  console.log('Subdomain:', subdomain);

  // Get manager list
  const managerList = await dotton.getManagerList('0:600a5eabec250ffaf609e0190f66acb700cfd34c5747407664d87a2b8b183ffc', 0, 10);
  console.log('Manager List:', managerList);

  // Get manager subdomains
  const managerSubdomains = await dotton.getManagerSubdomains('0:da712a5dd4069c8c501713c81b76e5e14a2c359cfce32c12aa8d6f80adcba345', 0, 10);
  console.log('Manager Subdomains:', managerSubdomains);

  // Find domain address by name
  const domainAddress = await dotton.findDomainAddressByName('0:600a5eabec250ffaf609e0190f66acb700cfd34c5747407664d87a2b8b183ffc', 'memelanders');
  console.log('Domain Address:', domainAddress);

  // Buy subdomain
  const buySubdomain = await dotton.buySubdomain('0:76ede1bde7ec6c78ae46ff065d112c5d9011b41ad575913976fa92191ccd0503', 'test');
  console.log('Buy Subdomain:', buySubdomain);
}

main().catch(console.error);
```

---

## API Reference

All methods return a Promise and follow the dotTON API structure.

### Initialization

```typescript
const dotton = new DotTON(options?: { apiKey?: string, baseUrl?: string, timeout?: number });
```

### Platform Endpoints

- `getPlatforms()`
- `getTopDomains()`
- `searchDomains(query: string)`
- `findByName(query: string)`
- `getManager(domainName: string)`
- `getSubdomain(domainName: string, subdomainName: string)`

### Manager Endpoints

- `getManagerList(platform: string, offset: number, limit: number)`
- `getManagerSubdomains(manager: string, offset: number, limit: number)`
- `findDomainAddressByName(platform: string, domainName: string)`
- `buySubdomain(manager: string, subdomainName: string)`

### User Endpoints

- `getUserManagers(adminAddress: string, offset: string, limit: string)`
- `getUserSubdomains(adminAddress: string, offset: string, limit: string)`

---

## Error Handling

All errors are thrown as `DotTONError` with details:

```typescript
try {
  await dotton.getPlatforms();
} catch (err) {
  if (err instanceof DotTONError) {
    console.error('DotTON API Error:', err.message, err.statusCode, err.data);
  }
}
```

---

## Development

- Build: `npm run build`
- Test: `npm test`
- Example usage: See [`examples/usage.ts`](./examples/usage.ts)

---

## License

MIT

---

## Links

- [dotTON Platform](https://sub.fractionft.xyz)
- [Official Documentation](https://dotton.notion.site/1a6f5e910fdb801581adfbdfa28eb49e?v=1a6f5e910fdb807ca6e1000c8af00ea7)
- [Medium Article](https://medium.com/@Mhbdev/introducing-dotton-your-all-in-one-platform-for-ton-domains-and-subdomains-4558352422de)
- [GitHub Repository](https://github.com/pizzaton/dotton)
