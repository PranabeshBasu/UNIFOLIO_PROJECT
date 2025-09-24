import React, { useState } from 'react';
import { mockStudents } from '../../lib/mockData';
import { Search } from 'lucide-react';

const StudentDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('All');

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (department === 'All' || student.department === department)
  );

  const departments = ['All', ...new Set(mockStudents.map(s => s.department))];

  return (
    <div className="bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow">
       <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-800">Student Database</h1>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by student name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full md:w-56 bg-white py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                </select>
            </div>
        </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold text-sm text-gray-600">STUDENT ID</th>
              <th className="p-4 font-semibold text-sm text-gray-600">NAME</th>
              <th className="p-4 font-semibold text-sm text-gray-600">DEPARTMENT</th>
              <th className="p-4 font-semibold text-sm text-gray-600">YEAR</th>
              <th className="p-4 font-semibold text-sm text-gray-600">CGPA</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id} className="border-t hover:bg-gray-50">
                <td className="p-4 text-gray-500">{student.id}</td>
                <td className="p-4 font-medium text-gray-800">{student.name}</td>
                <td className="p-4 text-gray-500">{student.department}</td>
                <td className="p-4 text-gray-500">{student.year}</td>
                <td className="p-4 font-semibold text-indigo-600">{student.cgpa.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDatabase;
