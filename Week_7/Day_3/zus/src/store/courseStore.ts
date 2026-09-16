import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CourseSchema, type Course } from '../schema/course.schema';


interface CourseStore {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: string) => void;
  toggleCourseStatus: (courseId: string) => void;
}

const courseStore = (
  set: (fn: (state: CourseStore) => Partial<CourseStore>) => void
): CourseStore => ({
  courses: [],
  addCourse: (course) => {
    const validCourse = CourseSchema.parse(course);
    set((state) => ({
      courses: [validCourse, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));    
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId ? { ...course, completed: !course.completed } : course
      ),
    }));
  },
});

const useCourseStore = create<CourseStore>()(
  devtools(
    persist(courseStore, {
      name: 'courses',
    })
  )
);

export default useCourseStore;