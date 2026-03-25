import productsJson from '@/data/products.json';

export default function sitemap() {
  const baseUrl = 'https://aerosemkimya.com.tr';

  // Core static routes
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/products/aviation',
    '/products/general',
    '/certificates',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product routes based on products.json mapping
  const productRoutes = productsJson.map((product) => ({
    url: `${baseUrl}/products/${product.category}/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
