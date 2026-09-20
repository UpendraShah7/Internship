import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  return (
    <div>
      <div className="main-container">
        <h1 className="app-title">My Course list</h1>
        <p className="intro-text">
          Keep your next lesson close and your progress visible.
        </p>
        <CourseForm />
        <CourseList />
      </div>
    </div>
  );
}

export default App;
