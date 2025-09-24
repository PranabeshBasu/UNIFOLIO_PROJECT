import React, { useState } from 'react';
import Card from '../../components/faculty/FacultyCard';
import { mockStudents, mockApprovals } from '../../lib/faculty/mockData';
import { Search, ChevronDown } from 'lucide-react';

const StudentDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('All');

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (department === 'All' || student.department === department)
  );

  const departments = ['All', ...new Set(mockStudents.map(s => s.department))];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Student Database</h1>
        <p className="text-slate-500">Access and manage student records and academic performance.</p>
      </div>
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="relative">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full md:w-56 appearance-none bg-white pr-8 py-2 border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              {departments.map(dep => <option key={dep}>{dep}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Student ID</th>
                <th className="p-4 font-semibold text-slate-600">Name</th>
                <th className="p-4 font-semibold text-slate-600">Department</th>
                <th className="p-4 font-semibold text-slate-600">Year</th>
                <th className="p-4 font-semibold text-slate-600">CGPA</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50">
                  <td className="p-4 text-slate-500">{student.id}</td>
                  <td className="p-4 text-slate-800 font-medium">{student.name}</td>
                  <td className="p-4 text-slate-500">{student.department}</td>
                  <td className="p-4 text-slate-500">{student.year}</td>
                  <td className="p-4 font-semibold text-primary">{student.cgpa.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default StudentDatabase;

