import { useState } from "react";

const LectureMissed = () => {
  const [missedLectures, setMissedLectures] = useState([
    { id: 1, course: "Computer Science", room: "Fml100", date: "11/11/11", time: "9:00" },
    { id: 2, course: "Computer Science", room: "Fml100", date: "11/11/11", time: "9:00" },
    { id: 3, course: "Computer Science", room: "Fml100", date: "11/11/11", time: "9:00" },
    { id: 4, course: "Computer Science", room: "Fml100", date: "11/11/11", time: "9:00" },
    { id: 5, course: "Computer Science", room: "Fml100", date: "11/11/11", time: "9:00" },
  ]);

  return (
    <div className="lecture-missed bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8">
      <h2 className="text-gray-800 text-2xl font-semibold mb-6">
        Lectures Missed
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Room
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {missedLectures.map((lecture) => (
              <tr
                key={lecture.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {lecture.course}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {lecture.room}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {lecture.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {lecture.time}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default LectureMissed;