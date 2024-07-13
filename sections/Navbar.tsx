
export default function Navbar() {
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.style.display = isMenuOpen ? "block" : "none";
    }
  };

  return (
    <nav class="bg-white shadow-md fixed w-full z-10 top-0 h-16">
      <div class="max-w-screen-lg mx-auto flex justify-between items-center p-4 h-full">
        <div class="flex items-center space-x-4">
          <h1 class="text-2xl font-bold text-green-600">OpenCourses</h1>
          <div class="hidden md:flex space-x-4">
            <a href="/UserProfile" class="hover:text-green-600 transition">Home</a>
            <a href="/courses" class="hover:text-green-600 transition">Courses</a>
            <a href="/about" class="hover:text-green-600 transition">About</a>
            <a href="/contact" class="hover:text-green-600 transition">Contact</a>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input
              type="text"
              class="bg-gray-100 text-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search courses..."
            />
            <button class="absolute right-0 top-0 mt-2 mr-2 text-gray-600 hover:text-gray-800">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16a6 6 0 1110.32 1.906l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A6 6 0 018 16z"
                />
              </svg>
            </button>
          </div>
          <div class="hidden md:flex space-x-4">
            <a href="/UserProfile" class="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">Login</a>
            <a href="/signup" class="px-4 py-2 bg-white text-green-600 border border-green-600 rounded-full hover:bg-gray-100 transition">Sign Up</a>
          </div>
          <button
            class="md:hidden flex items-center"
            onClick={toggleMenu}
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="md:hidden bg-white shadow-md py-2 space-y-2 px-4" style={{ display: "none" }}>
        <a href="/" class="block hover:text-green-600 transition">Home</a>
        <a href="/courses" class="block hover:text-green-600 transition">Courses</a>
        <a href="/about" class="block hover:text-green-600 transition">About</a>
        <a href="/contact" class="block hover:text-green-600 transition">Contact</a>
        <a href="/login" class="block px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">Login</a>
        <a href="/signup" class="block px-4 py-2 bg-white text-green-600 border border-green-600 rounded-full hover:bg-gray-100 transition">Sign Up</a>
      </div>
    </nav>
  );
}
