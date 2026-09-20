import React, { useState, type ChangeEvent } from 'react';
import useCourseStore from '../store/courseStore';

const CourseForm: React.FC = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState<string>('');
  console.log('CourseForm Rendered');

  const handleCourseSubmit = (): void => {
    if (!courseTitle) {
      alert('please add a course title');
      return;
    }
    addCourse({
      id: Math.ceil(Math.random() * 1000000).toString(),
      title: courseTitle,
      description: '',
      duration: '',
      completed: false,
    });
    setCourseTitle('');
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        placeholder="What are you learning next?"
        aria-label="Course title"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button onClick={handleCourseSubmit} className="form-submit-btn">
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
