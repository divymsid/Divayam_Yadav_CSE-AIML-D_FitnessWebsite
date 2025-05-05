import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import UserForm from './pages/UserForm';
import WorkoutRecommendation from './pages/WorkoutRecommendation';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="onboarding" element={<UserForm />} />
            <Route path="recommendations" element={<WorkoutRecommendation />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;