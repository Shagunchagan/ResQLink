import React, { useState } from 'react';

const OrderNow: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 fade-in">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
          <p className="text-gray-500 mb-8">
            Thank you, {formData.name}. We have received your order for {quantity} ResQLink device{quantity > 1 ? 's' : ''}.
            A confirmation email has been sent to {formData.email}.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="text-blue-600 font-medium hover:underline"
          >
            Place another order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 fade-in">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Visual / Product Info */}
        <div className="flex flex-col justify-center">
           <img 
             src="https://i.ibb.co/XrhPmLBV/freepik-expand-11827.png" 
             alt="ResQLink Packaging" 
             className="rounded-2xl shadow-xl mb-8 w-full object-cover h-80 lg:h-96"
           />
           <div className="bg-white p-6 rounded-xl shadow-sm">
             <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
             <div className="flex justify-between items-center py-2 border-b border-gray-100">
               <span>ResQLink Device</span>
               <span className="font-medium">$149.00</span>
             </div>
             <div className="flex justify-between items-center py-2 border-b border-gray-100">
               <span>Quantity</span>
               <div className="flex items-center space-x-3">
                 <button 
                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
                   className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                 >
                   -
                 </button>
                 <span className="font-medium w-4 text-center">{quantity}</span>
                 <button 
                   onClick={() => setQuantity(quantity + 1)}
                   className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                 >
                   +
                 </button>
               </div>
             </div>
             <div className="flex justify-between items-center py-4 text-xl font-bold">
               <span>Total</span>
               <span>${(149 * quantity).toFixed(2)}</span>
             </div>
           </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-gray-500 mb-8">Secure encryption. Fast shipping.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                required
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
              <input 
                required
                type="text" 
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                placeholder="1234 Safety Blvd, Tech City"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                placeholder="Special delivery instructions..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white font-bold py-4 rounded-full shadow-lg hover:bg-gray-800 transition-transform transform active:scale-95"
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;