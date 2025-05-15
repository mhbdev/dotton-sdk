import DotTON from '../src/index';

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