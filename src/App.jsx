import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/ui/Hero';
import CategoryFilters from './components/ui/CategoryFilters';
import JobCard from './components/ui/JobCard';
import PublishJobModal from './components/ui/PublishJobModal';
import Footer from './components/layout/Footer';
import { MOCK_JOBS, CATEGORIES } from './utils/mockData';

function App() {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Manejar inserción de nuevas vacantes desde el formulario local
  const handlePublishJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  const filteredJobs = selectedCategory === 'Todos'
    ? jobs
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-surface-50">
      {/* Pasamos la función para abrir el modal al Navbar */}
      <Navbar onPublishClick={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Pasamos la función para abrir el modal al Hero (Botón: Soy un negocio) */}
        <Hero onBusinessClick={() => setIsModalOpen(true)} />
        
        <CategoryFilters 
          categories={CATEGORIES} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
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

      {/* Trigger de Capa de Formulario */}
      <PublishJobModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onPublish={handlePublishJob}
      />
    </div>
  );
}

export default App;