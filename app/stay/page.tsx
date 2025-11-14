import Image from 'next/image';
import Link from 'next/link';

export default function StayPage() {
  return (
    <div>
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/farm-landscape.jpg"
          alt="Beautiful mountain view at Magic Farm Taos with golden fields"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white text-shadow">
            Experience Mágica
          </h1>
        </div>
      </div>

      {/* Learn, Pray, Stay Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-earth-800 mb-10 text-center">
            Learn, Pray, Stay
          </h2>

          {/* Learn */}
          <div className="mb-10">
            <h3 className="text-2xl font-serif text-sage-700 mb-4">LEARN</h3>
            <p className="text-earth-700 leading-relaxed mb-4">
              Garden tours in every season & harvesting spring, summer, fall. Learn the Latin names 
              and uses of medicinal herbs on a guided tour of the mature, living, vibrant medicinal 
              herbs in our extensive apothecary "gardens." Sampling encouraged!
            </p>
            <p className="text-earth-700 leading-relaxed">
              Personal & small business consultations by appointment - avail yourself of a career 
              of knowledge & experience.
            </p>
          </div>

          {/* Pray */}
          <div className="mb-10">
            <h3 className="text-2xl font-serif text-sage-700 mb-4">PRAY</h3>
            <p className="text-earth-700 leading-relaxed mb-4">
              Pray & meditate beside the sacred water, heart & spirit borne along the energy of 
              the pure spring's gentle healing flow. Feel the sublime power.
            </p>
            <p className="text-earth-700 leading-relaxed">
              Take the pure Nemea® spring water with you, allow the sunlight to refract through 
              its clarity, ask guidance & study its frozen guidance, let your gardens drink deeply 
              of the nourishing mineral water. This blessing is free to all, with grace & peace. 
              Gratitudes can be shared{' '}
              <a 
                href="https://buymeacoffee.com/magicfarmtaos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 underline"
              >
                here
              </a>
              {' '}and{' '}
              <a 
                href="https://venmo.com/herbal-apothecary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 underline"
              >
                here
              </a>.
            </p>
          </div>

          {/* Stay */}
          <div>
            <h3 className="text-2xl font-serif text-sage-700 mb-4">STAY</h3>
          </div>
        </div>
      </section>

      {/* Rental Info Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-earth-800 mb-6 text-center">
            Mágica Apartmette Rental Info
          </h2>

          {/* New Option */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-serif text-sage-700 mb-4">
              NEW OPTION: RENT UNFURNISHED MONTH-TO-MONTH
            </h3>
            <p className="text-2xl font-bold text-earth-800 mb-4">
              $1,500/month + electric
            </p>
          </div>

          {/* About the Apartmette */}
          <div className="mb-8">
            <h3 className="text-xl font-serif text-sage-700 mb-4">
              About the Mágica Chem- and Allergen-free Apartmette
            </h3>
            <p className="text-earth-700 leading-relaxed mb-4">
              We'll ask you to complete your background and credit check through one of the 
              websites where this is listed - Furnished Finder, Zillow, etc.
            </p>
          </div>

          {/* Pricing Options */}
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-earth-800 mb-2">
                Healthcare Professionals
              </h4>
              <p className="text-earth-700 mb-2">
                <strong>$1,630/month</strong> or <strong>$4,300</strong> for 13-week contract
              </p>
              <p className="text-earth-600">
                Includes all utilities and services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-earth-800 mb-2">
                Vacation Rental
              </h4>
              <p className="text-earth-700 mb-2">
                <strong>$2,245/month</strong>
              </p>
              <p className="text-earth-600">
                Includes all utilities, full service, plus optional Mágica outdoor activities 
                such as guided grounding/meditation, living apothecary tours & samples, veggies 
                & herbs in season, & your gardeny guest requests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-earth-800 mb-2">
                SUMMER 2025 - Unfurnished Month-to-Month
              </h4>
              <p className="text-earth-700 mb-2">
                <strong>$1,480/month</strong> starting May 1, 2025
              </p>
              <p className="text-earth-600">
                Includes all utilities, no extra services.
              </p>
            </div>
          </div>

          {/* Deposit Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h4 className="text-lg font-semibold text-earth-800 mb-3">
              All Rentals Require:
            </h4>
            <ul className="space-y-2 text-earth-700">
              <li>• Security/Damage deposit equal to one month rent</li>
              <li>• Fully-refundable cleaning deposit of $1,250 (non-negotiable)</li>
              <li>• Video chat meeting to view space and ask questions</li>
              <li>• Background and credit check completion</li>
              <li>• Healthcare professionals: employment verification with contract dates</li>
            </ul>
          </div>

          {/* Rules */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h4 className="text-lg font-semibold text-earth-800 mb-3">
              Space Guidelines
            </h4>
            <p className="text-earth-700 leading-relaxed mb-4">
              We offer a spectacularly clean, sanitized, allergen-free, chemical-free, 
              energetically balanced, & secure private space and it is kept that way.
            </p>
            <ul className="space-y-2 text-earth-700">
              <li>• No animals allowed indoors (space kept allergen-free)</li>
              <li>• No shoes indoors</li>
              <li>• No tobacco indoors</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-earth-700 mb-6">
              Message for more details. Thank you and welcome!
            </p>
            <a
              href="https://www.furnishedfinder.com/property/614752_1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sage-700 transition-colors"
            >
              Read More & Book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
