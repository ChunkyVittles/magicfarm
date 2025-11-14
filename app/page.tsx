import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';

export default function Home() {
  const featuredProducts = sampleProducts.filter(p => p.featured);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-earth-800 mb-4">
            Mágica
          </h1>
          <p className="text-2xl text-sage-700 mb-2 font-light">
            Magic Farm Taos
          </p>
          <p className="text-xl text-earth-600 mb-8">
            Simple. Sacred. Pure.
          </p>
          <p className="max-w-2xl mx-auto text-earth-700 mb-10 leading-relaxed">
            Discover our living apothecary of medicinal herbs, sacred plants, and pure natural products. 
            Grown with love at 6,900 feet elevation in the southern Rocky Mountains of New Mexico.
          </p>
          <Link 
            href="/shop"
            className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sage-700 transition-colors"
          >
            Explore Our Shop
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-earth-800 mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-sage-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-earth-800 mb-6">
            Our Sacred Space
          </h2>
          <p className="text-earth-700 leading-relaxed mb-4">
            Mágica is a serene oasis nestled in the mountains of Taos, New Mexico. 
            For over 25 years, we've been growing the most potent medicinal and ceremonial herbs 
            with organic-plus practices that exceed certification standards.
          </p>
          <p className="text-earth-700 leading-relaxed">
            We serve and tend the land and water as a sacred duty, creating potions and medicines 
            to amplify love and healing throughout the world.
          </p>
        </div>
      </section>
    </div>
  );
}
