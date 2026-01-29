const Footer = ()=>{

return(
<>
<footer class="bg-gray-900 text-gray-300 mt-20">
  <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* <!-- Brand --> */}
    <div>
      <h2 class="text-2xl font-bold text-white">AIC</h2>
      <p class="text-sm mt-3 text-gray-400">
        Building intelligent solutions with AI, data, and innovation.
      </p>
    </div>

    {/* <!-- Links --> */}
    <div>
      <h3 class="text-white font-semibold mb-3">Product</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-white">Features</a></li>
        <li><a href="#" class="hover:text-white">Pricing</a></li>
        <li><a href="#" class="hover:text-white">Integrations</a></li>
      </ul>
    </div>

    {/* <!-- Company --> */}
    <div>
      <h3 class="text-white font-semibold mb-3">Company</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-white">About</a></li>
        <li><a href="#" class="hover:text-white">Careers</a></li>
        <li><a href="#" class="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Newsletter --> */}
    <div>
      <h3 class="text-white font-semibold mb-3">Stay Updated</h3>
      <div class="flex">
        <input
          type="email"
          placeholder="Your email"
          class="w-full px-3 py-2 rounded-l-md text-black outline-none"
        />
        <button class="bg-indigo-600 px-4 py-2 rounded-r-md text-white hover:bg-indigo-700">
          Join
        </button>
      </div>
    </div>
  </div>

  {/* <!-- Bottom --> */}
  <div class="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
    © 2026 AIC. All rights reserved.
  </div>
</footer>
</>
)


}

export default Footer;
