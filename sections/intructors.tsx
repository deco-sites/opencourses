
export default function Instructors() {
  const instructors = [
    { id: 1, name: "Alex Johnson", bio: "Expert in Web Development with over 10 years of experience.", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Maria Rodriguez", bio: "Data Science professional with a passion for teaching.", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Chris Williams", bio: "Machine Learning enthusiast and experienced instructor.", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Meet Our Instructors</h2>
      <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor) => (
          <div key={instructor.id} class="bg-gray-100 p-4 rounded-lg text-center">
            <img src={instructor.image} alt={instructor.name} class="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{instructor.name}</h3>
            <p class="text-gray-600">{instructor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
