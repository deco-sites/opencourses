
export default function FeaturedCourse() {
  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
      <h2 class="text-3xl font-bold mb-4 text-green-600">Featured Course</h2>
      <p class="text-gray-700 mb-4">Learn the fundamentals of web development with this comprehensive course.</p>
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex items-center mr-4 mb-4 md:mb-0">
          <span class="text-yellow-400 mr-1">★★★★★</span>
          <span class="text-gray-600">(4.9/5)</span>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">Enroll Now</button>
      </div>
      <a href="/course/1" class="text-green-500 hover:underline mt-4 block">Learn more</a>
    </div>
  );
}
