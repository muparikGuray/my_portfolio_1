import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  FolderOpen, 
  User, 
  Wrench, 
  Briefcase, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Upload,
  Eye,
  Settings,
  Shield,
  Database
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  status: 'active' | 'completed' | 'draft';
  completionDate: string;
}

interface AboutData {
  bio: string;
  profileImage: string;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    behance: string;
  };
}

interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'other';
  icon: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  availability: boolean;
  icon: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [projects, setProjects] = useState<Project[]>([]);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Load initial data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // Load from localStorage or API
    const savedProjects = localStorage.getItem('admin_projects');
    const savedAbout = localStorage.getItem('admin_about');
    const savedSkills = localStorage.getItem('admin_skills');
    const savedServices = localStorage.getItem('admin_services');

    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedAbout) setAboutData(JSON.parse(savedAbout));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedServices) setServices(JSON.parse(savedServices));
  };

  const saveData = (type: string, data: any) => {
    localStorage.setItem(`admin_${type}`, JSON.stringify(data));
  };

  const handleSave = (type: string, item: any) => {
    switch (type) {
      case 'projects':
        const updatedProjects = editingItem?.id 
          ? projects.map(p => p.id === editingItem.id ? item : p)
          : [...projects, { ...item, id: Date.now().toString() }];
        setProjects(updatedProjects);
        saveData('projects', updatedProjects);
        break;
      case 'about':
        setAboutData(item);
        saveData('about', item);
        break;
      case 'skills':
        const updatedSkills = editingItem?.id 
          ? skills.map(s => s.id === editingItem.id ? item : s)
          : [...skills, { ...item, id: Date.now().toString() }];
        setSkills(updatedSkills);
        saveData('skills', updatedSkills);
        break;
      case 'services':
        const updatedServices = editingItem?.id 
          ? services.map(s => s.id === editingItem.id ? item : s)
          : [...services, { ...item, id: Date.now().toString() }];
        setServices(updatedServices);
        saveData('services', updatedServices);
        break;
    }
    setIsEditing(false);
    setEditingItem(null);
    setShowModal(false);
  };

  const handleDelete = (type: string, id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    switch (type) {
      case 'projects':
        const filteredProjects = projects.filter(p => p.id !== id);
        setProjects(filteredProjects);
        saveData('projects', filteredProjects);
        break;
      case 'skills':
        const filteredSkills = skills.filter(s => s.id !== id);
        setSkills(filteredSkills);
        saveData('skills', filteredSkills);
        break;
      case 'services':
        const filteredServices = services.filter(s => s.id !== id);
        setServices(filteredServices);
        saveData('services', filteredServices);
        break;
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'services', label: 'Services', icon: Briefcase },
  ];

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-primary-100 dark:border-primary-900/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Projects</p>
            <p className="text-3xl font-bold text-primary-600">{projects.length}</p>
          </div>
          <FolderOpen className="w-12 h-12 text-primary-600" />
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-secondary-100 dark:border-secondary-900/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Skills</p>
            <p className="text-3xl font-bold text-secondary-600">{skills.length}</p>
          </div>
          <Wrench className="w-12 h-12 text-secondary-600" />
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-accent-100 dark:border-accent-900/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Services</p>
            <p className="text-3xl font-bold text-accent-600">{services.length}</p>
          </div>
          <Briefcase className="w-12 h-12 text-accent-600" />
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Projects</p>
            <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">
              {projects.filter(p => p.status === 'active').length}
            </p>
          </div>
          <Eye className="w-12 h-12 text-gray-600" />
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects Management</h2>
        <button
          onClick={() => {
            setEditingItem(null);
            setIsEditing(true);
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  project.status === 'active' ? 'bg-green-100 text-green-800' :
                  project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEditingItem(project);
                      setIsEditing(true);
                      setShowModal(true);
                    }}
                    className="p-1 text-primary-600 hover:bg-primary-100 rounded"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete('projects', project.id)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'projects':
        return renderProjects();
      case 'about':
        return <div className="text-center py-12 text-gray-500">About section management coming soon...</div>;
      case 'skills':
        return <div className="text-center py-12 text-gray-500">Skills management coming soon...</div>;
      case 'services':
        return <div className="text-center py-12 text-gray-500">Services management coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-primary-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Content Management</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-3" />
              {tab.label}
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={onLogout}
            className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>

      {/* Modal for editing */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {editingItem ? 'Edit' : 'Add'} Project
                </h3>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setIsEditing(false);
                    setEditingItem(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center py-12 text-gray-500">
                Project form implementation coming soon...
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;