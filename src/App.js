import './App.css';
import  Add from './components/addTask';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    maxWidth: 500,
    margin: `50px auto`
  }
};

function App() {
  return (
    <div className="App" style={styles.container}>
      <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <i class="fas fa-check-square me-1"></i>
              <u>My Todo-s</u>
            </p>
      <div class="card-body">
      <Add/>
      <TaskList/>
      </div>
      
    </div>
  );
}

export default App;
