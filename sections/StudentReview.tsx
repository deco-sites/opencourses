
export default function StudentReviews() {
  const reviews = [
    { id: 1, name: "Jane Doe", review: "This course was amazing! I learned so much." },
    { id: 2, name: "John Smith", review: "Highly recommend this course to anyone looking to improve their skills." },
    { id: 3, name: "Sara Lee", review: "Fantastic content and well-structured." },
  ];

  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Student Reviews</h2>
      <div class="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} class="bg-gray-100 p-4 rounded-lg">
            <p class="text-gray-800 font-semibold">{review.name}</p>
            <p class="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
