
export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Elon Musk", feedback: "OpenCourses has transformed the way we approach online education. Highly recommended!", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Bill Gates", feedback: "The best platform for learning and teaching online. A game-changer in the industry.", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Sundar Pichai", feedback: "OpenCourses offers an unparalleled learning experience. Excellent platform.", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Success Stories</h2>
      <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} class="bg-gray-100 p-4 rounded-lg text-center">
            <img src={testimonial.image} alt={testimonial.name} class="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p class="text-gray-600 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
