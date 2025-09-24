import React, { useState, useEffect, useRef } from 'react';
import AdminCard from '../../components/admin/AdminCard.jsx';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

// This is a mock list of departments. In a real app, this would come from an API.
const departments = ["All Students", "Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering"];
const writtenForOptions = ["Dashboard", "Approvals Page", "Student Portal", "Analytics Page"];

const PostEvent = () => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const [editorReady, setEditorReady] = useState(false);
  const quillRef = useRef(null);
  const editorWrapperRef = useRef(null);

  // Initialize Quill editor
  useEffect(() => {
    if (!window.Quill) {
      console.error("Quill library not found. Make sure the script is loaded.");
      setEditorReady(false);
      return;
    }

    if (editorWrapperRef.current && !quillRef.current) {
      const editor = editorWrapperRef.current.querySelector('.editor-container');
      if (editor) {
        quillRef.current = new window.Quill(editor, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              ['clean']
            ],
          },
          placeholder: 'Compose a detailed description...',
        });
        setEditorReady(true);
      }
    }
    
    // Cleanup function to destroy Quill instance when component unmounts
    return () => {
      if (quillRef.current && quillRef.current.container) {
        quillRef.current = null;
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ show: true, message: "Event/Notice published successfully!" });
    e.target.reset();
    if (quillRef.current) {
      quillRef.current.setText(''); // Clear the editor
    }
    
    setTimeout(() => setToast({ show: false, message: "" }), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-24 right-5 p-4 rounded-xl shadow-2xl text-white bg-green-500 flex items-center gap-3 animate-fade-in-down z-50">
          <CheckCircle size={24} />
          <span className="font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Post Event or Notice</h1>
        <p className="text-gray-500">
          Create and publish announcements for the entire campus or specific departments.
        </p>
      </div>

      {/* Form Card with bluish theme */}
      <AdminCard className="bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow">
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Title and Type Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                required
                placeholder="e.g., Final Year Project Submission"
                className="w-full bg-[#D9DBDB] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                id="type"
                className="w-full bg-[#D9DBDB] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option>Notice</option>
                <option>Event</option>
                <option>Workshop</option>
                <option>Placement Drive</option>
                <option>Holiday</option>
              </select>
            </div>
          </div>
          
          {/* Description using Quill */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows="5"
              required
              placeholder="e.g., Description of Your project"
              className="w-full bg-[#D9DBDB] border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            ></textarea>
          </div>

          {/* Date and Written For Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date (Optional)
              </label>
              <input
                type="datetime-local"
                id="startDate"
                className="w-full bg-[#D9DBDB] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
              <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                End Date / Deadline (Optional)
              </label>
              <input
                type="datetime-local"
                id="endDate"
                className="w-full bg-[#D9DBDB] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="writtenFor" className="block text-sm font-medium text-gray-700 mb-1">
                Written For
              </label>
              <select
                id="writtenFor"
                className="w-full bg-[#D9DBDB] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
              >
                {writtenForOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
          </div>

          {/* Attachment and Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                Attachment (Optional)
              </label>
              <input
                type="file"
                id="attachment"
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition"
              />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visible To
                </label>
                <div className="grid grid-cols-2 gap-2">
                    {departments.map(dep => (
                        <div key={dep} className="flex items-center">
                            <input id={dep} type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor={dep} className="ml-2 block text-sm text-gray-900">{dep}</label>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Publish Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Send size={18} />
              Publish
            </button>
          </div>
        </form>
      </AdminCard>
    </div>
  );
};

export default PostEvent;

