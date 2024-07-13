export default function PopularCourses() {
  const courses = [
    { id: 1, title: "Web Development", description: "Learn HTML, CSS, and JavaScript.", progress: 75, link: "/course/1" },
    { id: 2, title: "Data Science", description: "Master data analysis and visualization.", progress: 50, link: "/course/2" },
    { id: 3, title: "Machine Learning", description: "Understand the basics of machine learning.", progress: 30, link: "/course/3" },
  ];

  return (
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Popular Courses</h2>
      <div class="grid gap-4 md:grid-cols-2">
        {courses.map(course => (
          <div key={course.id} class="p-4 bg-white rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h3 class="text-xl font-bold mb-2 text-green-600">{course.title}</h3>
            <p class="text-gray-700 mb-4">{course.description}</p>
            <div class="relative pt-1">
              <div class="flex mb-2 items-center justify-between">
                <div>
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    {course.progress}%
                  </span>
                </div>
              </div>
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div style={{ width: `${course.progress}%` }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
              </div>
            </div>
            <a href={course.link} class="text-green-500 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
