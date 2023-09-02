import './css/CGPAcalc.css'
import React, { useState } from 'react';

const gradesData = [
  { grade: 'A+', value: 10 },
  { grade: 'A', value: 9 },
  { grade: 'B+', value: 8 },
  { grade: 'B', value: 7 },
  { grade: 'C+', value: 6 },
  { grade: 'C', value: 5 },
  { grade: 'D', value: 4 },
];

const CourseRow = ({ index, rowData, handleChange }) => {
  return (
    <tr key={index}>
      <td>{`Course ${index + 1}`}</td>
      <td>
        <select
          value={rowData.grade}
          onChange={(e) => handleChange(index, 'grade', e.target.value)}
        >
          {gradesData.map((item) => (
            <option key={item.grade} value={item.grade}>
              {item.grade}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="number"
          value={rowData.credits}
          onChange={(e) => handleChange(index, 'credits', e.target.value)}
        />
      </td>
    </tr>
  );
};

const CGPACalc = () => {
  const [totalCourses, setTotalCourses] = useState(1);
  const [courseData, setCourseData] = useState([
    { grade: 'A+', credits: 0 },
    // Initialize with the first row
  ]);

  const handleChange = (index, field, value) => {
    setCourseData((prevData) =>
      prevData.map((course, i) =>
        i === index ? { ...course, [field]: value } : course
      )
    );
  };

  const handleCalculate = () => {
    let totalCredits = 0;
    let totalScore = 0;

    courseData.forEach((course) => {
      const creditValue = parseFloat(course.credits);
      if (!isNaN(creditValue) && creditValue > 0) {
        totalCredits += creditValue;
        const gradeValue =
          gradesData.find((item) => item.grade === course.grade)?.value || 0;
        totalScore += gradeValue * creditValue;
      }
    });

    if (totalCredits > 0) {
      const sgpa = totalScore / totalCredits;
      alert(`SGPA: ${sgpa.toFixed(2)}`);
    } else {
      alert('Please enter valid credit values for the courses.');
    }
  };

  const handleTotalCoursesChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setTotalCourses(value);
      setCourseData(new Array(value).fill({ grade: 'A+', credits: 0 }));
    }
  };

  return (
    <div>
      <h1>CGPA Calculator</h1>
      <div>
        <label>Total Courses:</label>
        <input
          type="number"
          value={totalCourses}
          onChange={handleTotalCoursesChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map((rowData, index) => (
            <CourseRow
              key={index}
              index={index}
              rowData={rowData}
              handleChange={handleChange}
            />
          ))}
        </tbody>
      </table>
      <button onClick={handleCalculate}>Calculate SGPA</button>
    </div>
  );
};

export default CGPACalc;
