import React, { useState } from "react";

const DocumentsView = () => {
  const [documents, setDocuments] = useState([
    { name: "Internship Certificate", type: "Certificate", date: "2025-09-23" },
    { name: "Project Report", type: "Project", date: "2025-09-20" },
  ]);

  const addDocument = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const type = form.type.value;
    if (!name) return;

    setDocuments([
      ...documents,
      { name, type, date: new Date().toISOString().split("T")[0] },
    ]);
    form.reset();
  };

  const deleteDocument = (idx) => {
    setDocuments(documents.filter((_, i) => i !== idx));
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">My Documents</h2>

      {/* Upload Form */}
      <form
        onSubmit={addDocument}
        className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Document Name"
          required
          className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <select
          name="type"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option>Certificate</option>
          <option>Internship</option>
          <option>Project</option>
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Upload
        </button>
      </form>

      {/* Documents Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md min-w-[500px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left font-medium">Document Name</th>
              <th className="p-3 text-left font-medium">Type</th>
              <th className="p-3 text-left font-medium">Date Uploaded</th>
              <th className="p-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-3">{doc.name}</td>
                <td className="p-3">{doc.type}</td>
                <td className="p-3">{doc.date}</td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => deleteDocument(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DocumentsView;
