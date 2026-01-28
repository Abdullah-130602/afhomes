import Layout from "../layout/index";

export const metadata = {
  title: "Contact Us | AF Homes",
  description: "Get in touch with AF Homes. We're here to help with your real estate needs.",
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Have questions? We'd love to hear from you. Contact us today.
          </p>
          
          {/* Contact Information and Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-black mb-2">Phone</h4>
                  <p className="text-gray-600">+971 XX XXX XXXX</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Email</h4>
                  <p className="text-gray-600">info@afhomes.ae</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Office Address</h4>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">WhatsApp</h4>
                  <p className="text-gray-600">+971 XX XXX XXXX</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                    rows="5"
                    placeholder="Your message..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
