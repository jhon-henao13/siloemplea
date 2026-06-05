import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/ui/Hero';
import CategoryFilters from './components/ui/CategoryFilters';
import JobCard from './components/ui/JobCard';
import PublishJobModal from './components/ui/PublishJobModal';
import JobDetailBottomSheet from './components/ui/JobDetailBottomSheet';
import AuthModal from './components/ui/AuthModal';
import UserProfileModal from './components/ui/UserProfileModal';
import MapPremiumModal from './components/ui/MapPremiumModal';
import Footer from './components/layout/Footer';
import { MOCK_JOBS, CATEGORIES } from './utils/mockData';
import ReloadPrompt from './components/layout/ReloadPrompt';

function App() {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  // Control de Capas de Modales Globales
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  // Control de Estados Cruzados de Sesión
  const [user, setUser] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePublishJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  const handleOpenDetails = (job) => {
    setSelectedJob(job);
    setIsBottomSheetOpen(true);
  };

  const handleCloseDetails = () => {
    setIsBottomSheetOpen(false);
    setTimeout(() => setSelectedJob(null), 300); 
  };

  // Interceptación de flujo condicional con enfoque de conversión premium
  const handleSearchJobClick = () => {
    if (!user) {
      setIsAuthOpen(true);
    } else {
      setIsProfileOpen(true);
    }
  };

  const handleUpgradeUser = () => {
    setUser(prev => ({ ...prev, isPremium: true }));
  };

  const filteredJobs = selectedCategory === 'Todos'
    ? jobs
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-surface-50">
      <Navbar 
        onPublishClick={() => setIsModalOpen(true)} 
        onAuthClick={() => setIsAuthOpen(true)}
        onMapClick={() => setIsMapOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
        user={user}
      />
      
      <main className="flex-grow">
        <Hero 
          onBusinessClick={() => setIsModalOpen(true)} 
          onSearchJobClick={handleSearchJobClick}
        />
        
        <CategoryFilters 
          categories={CATEGORIES} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onViewDetails={handleOpenDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-surface rounded-xl border border-slate-100 p-8">
              <p className="text-text-muted text-lg">No encontramos vacantes activas en este momento para "{selectedCategory}".</p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <PublishJobModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onPublish={handlePublishJob}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onAuthSuccess={(userData) => setUser(userData)}
      />

      <UserProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        user={user}
        onUpgradeToPremium={handleUpgradeUser}
      />

      <MapPremiumModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)}
      />

      {selectedJob && (
        <JobDetailBottomSheet 
          job={selectedJob}
          isOpen={isBottomSheetOpen}
          onClose={handleCloseDetails}
        />
      )}
      
      <ReloadPrompt />
    </div>
  );
}

export default App;