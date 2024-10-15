import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import EventCard from './components/EventCard';
import BusinessList from './components/BusinessList';
import ForumPage from './ForumPage';  // If you're using this for forum
import EventCalendarPage from './EventCalendarPage';  // For events
import BusinessDirectoryPage from './BusinessDirectoryPage';  // For businesses

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forums" element={<PostList />} />
        <Route path="/events" element={<EventCard />} />
        <Route path="/businesses" element={<BusinessList />} />
        <Route path="/ForumPage" element={<ForumPage />} />
        <Route path="/EventCalendarPage" element={<EventCalendarPage />} />
        <Route path="/BusinessDirectoryPage" element={<BusinessDirectoryPage />} />
        <Route path="/" element={<h1>Welcome to HelpDepot</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
