'use client'
import { useState } from 'react';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    country: '',
    zipCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission logic here
    alert(`Thank you for your $${donationAmount} ${donationType} donation!`);
  };

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Your donation helps us provide essential healthcare services to communities in need around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-auto">
              <div className="text-3xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Patients Helped Annually</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-auto">
              <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-auto">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Of Donations Go Directly to Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Supplies</h3>
              <p className="text-gray-600">$50 provides a medical kit that can serve 10 families with essential healthcare supplies.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Health</h3>
              <p className="text-gray-600">$100 trains a community health worker to provide basic care and health education.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Response</h3>
              <p className="text-gray-600">$250 provides emergency medical care for families affected by disasters or conflicts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white">
                <h2 className="text-3xl font-bold mb-6">Your Donation Matters</h2>
                <p className="mb-4">Every contribution, no matter the size, makes a significant impact on our ability to provide healthcare to those in need.</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tax-deductible donations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Immediate donation confirmation</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Donation Type</label>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        className={`px-4 py-2 rounded-lg ${donationType === 'one-time' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                        onClick={() => setDonationType('one-time')}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-2 rounded-lg ${donationType === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                        onClick={() => setDonationType('monthly')}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Donation Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {presetAmounts.map(amount => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-3 rounded-lg ${donationAmount === amount ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                          onClick={() => setDonationAmount(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`py-3 rounded-lg ${!presetAmounts.includes(donationAmount) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                        onClick={() => setDonationAmount(0)}
                      >
                        Other
                      </button>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        type="number"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(Number(e.target.value))}
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Personal Information</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Payment Information</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-3"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <select
                        name="country"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                      </select>
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Donate ${donationAmount} {donationType === 'monthly' ? 'Monthly' : 'Today'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;