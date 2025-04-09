import React from 'react';
import { useNavigate } from 'react-router-dom';

const faculties = [
  { id: 1, name: 'Faculty of Science' },
  { id: 2, name: 'Faculty of Engineering' },
  { id: 3, name: 'Faculty of Arts' },
  { id: 4, name: 'Faculty of Business' },
];

function FacultySelectionPage() {
  const navigate = useNavigate();

  const handleFacultySelect = (facultyId) => {
    navigate(`/difficulty/${facultyId}`); 
  };

  return (
    <div className="container">
      <h1>Select Your Faculty</h1>
      <div className="faculty-grid">
        {faculties.map((faculty) => (
          <div key={faculty.id} className="faculty-card" onClick={() => handleFacultySelect(faculty.id)}>
            <h2>{faculty.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultySelectionPage;