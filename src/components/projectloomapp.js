import React, { useState, useEffect, useRef } from 'react';
import { Plus, Users, MessageCircle, Settings, Play, Pause, Send, Upload, Trash2, Edit, Eye, EyeOff, Download, Loader2 } from 'lucide-react';

// Main App Component
const ProjectLoomApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [personas, setPersonas] = useState([]);
  const [environments, setEnvironments] = useState([]);
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">🔍 Project Loom</h1>
          <span className="text-purple-200 text-sm">AI Simulation Platform</span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'dashboard' ? 'bg-white text-purple-600' : 'hover:bg-purple-700'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('create-persona')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'create-persona' ? 'bg-white text-purple-600' : 'hover:bg-purple-700'}`}
          >
            Create Persona
          </button>
          <button
            onClick={() => setCurrentPage('create-environment')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'create-environment' ? 'bg-white text-purple-600' : 'hover:bg-purple-700'}`}
          >
            Create Environment
          </button>
          <button
            onClick={() => setCurrentPage('simulation')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'simulation' ? 'bg-white text-purple-600' : 'hover:bg-purple-700'}`}
          >
            Simulation
          </button>
        </div>
      </div>
    </nav>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Project Loom</h2>
        <p className="text-gray-600">Create AI personas and simulate dynamic interactions in customizable environments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-xl font-semibold">Personas</h3>
          </div>
          <p className="text-gray-600 mb-4">You have {personas.length} personas created</p>
          <button
            onClick={() => setCurrentPage('create-persona')}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Persona
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Environments</h3>
          </div>
          <p className="text-gray-600 mb-4">You have {environments.length} environments created</p>
          <button
            onClick={() => setCurrentPage('create-environment')}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Environment
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold">Simulations</h3>
          </div>
          <p className="text-gray-600 mb-4">Ready to run simulations</p>
          <button
            onClick={() => setCurrentPage('simulation')}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <Play className="w-4 h-4 mr-2" />
            Start Simulation
          </button>
        </div>
      </div>

      {/* Recent Personas */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold mb-4">Your Personas</h3>
        {personas.length === 0 ? (
          <p className="text-gray-500">No personas created yet. Create your first persona to get started!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personas.map((persona, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg">{persona.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{persona.llm}</p>
                <p className="text-sm text-gray-700">{persona.role}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {persona.traits.slice(0, 3).map((trait, i) => (
                    <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {trait.name}
                    </span>
                  ))}
                  {persona.traits.length > 3 && (
                    <span className="text-xs text-gray-500">+{persona.traits.length - 3} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Create Persona Component
  const CreatePersona = () => {
    const [formData, setFormData] = useState({
      name: '',
      llm: '',
      role: '',
      knowledgeHub: '',
      traits: []
    });
    const [selectedTraits, setSelectedTraits] = useState({});
    const [isGeneratingBackstory, setIsGeneratingBackstory] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const traitCategories = {
      'Personality Type': ['Introverted', 'Extroverted', 'Ambivert', 'Optimistic', 'Realistic', 'Cynical'],
      'Cognitive Approach': ['Analytical', 'Creative', 'Strategic', 'Intuitive', 'Detail-oriented', 'Big-picture thinker'],
      'Communication Style': ['Assertive', 'Passive', 'Persuasive', 'Diplomatic', 'Blunt', 'Humorous'],
      'Emotional Tone': ['Calm', 'Passionate', 'Stoic', 'Empathetic', 'Playful', 'Anxious'],
      'Problem-Solving Strategy': ['Logical', 'Experimental', 'Collaborative', 'Cautious', 'Decisive', 'Adaptive'],
      'Motivations / Drives': ['Power', 'Curiosity', 'Recognition', 'Security', 'Achievement', 'Belonging']
    };

    const handleTraitToggle = (category, trait) => {
      const key = `${category}-${trait}`;
      setSelectedTraits(prev => {
        const newTraits = { ...prev };
        if (newTraits[key]) {
          delete newTraits[key];
        } else {
          newTraits[key] = { name: trait, category, intensity: 'Neutral' };
        }
        return newTraits;
      });
    };

    const handleIntensityChange = (traitKey, intensity) => {
      setSelectedTraits(prev => ({
        ...prev,
        [traitKey]: { ...prev[traitKey], intensity }
      }));
    };

    const generateBackstory = async () => {
      setIsGeneratingBackstory(true);
      // Simulate AI backstory generation
      setTimeout(() => {
        const backstories = [
          `${formData.name} grew up in a family of engineers, developing a keen analytical mind and attention to detail. Their ${formData.role.toLowerCase()} stems from years of observing complex systems and finding elegant solutions to intricate problems.`,
          `With a background in creative arts and business strategy, ${formData.name} brings a unique perspective to their role as ${formData.role.toLowerCase()}. They believe in challenging conventional wisdom and pushing boundaries.`,
          `${formData.name} started their career in a completely different field before discovering their passion for ${formData.role.toLowerCase()}. This diverse background gives them an unconventional approach to problem-solving.`
        ];
        setFormData(prev => ({
          ...prev,
          knowledgeHub: backstories[Math.floor(Math.random() * backstories.length)]
        }));
        setIsGeneratingBackstory(false);
      }, 2000);
    };

    const handleFileUpload = (event) => {
      const files = Array.from(event.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.llm || !formData.role) {
        alert('Please fill in all required fields');
        return;
      }

      const newPersona = {
        ...formData,
        traits: Object.values(selectedTraits),
        files: uploadedFiles,
        id: Date.now()
      };

      setPersonas(prev => [...prev, newPersona]);
      
      // Reset form
      setFormData({ name: '', llm: '', role: '', knowledgeHub: '', traits: [] });
      setSelectedTraits({});
      setUploadedFiles([]);
      
      alert('Persona created successfully!');
      setCurrentPage('dashboard');
    };

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create a New Persona</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            {/* LLM Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Choose an LLM *</label>
              <div className="space-y-2">
                {['ChatGPT (OpenAI)', 'Gemini (Google)', 'Claude (Anthropic)'].map(llm => (
                  <label key={llm} className="flex items-center">
                    <input
                      type="radio"
                      name="llm"
                      value={llm}
                      checked={formData.llm === llm}
                      onChange={(e) => setFormData(prev => ({ ...prev, llm: e.target.value }))}
                      className="mr-3"
                      required
                    />
                    <span>{llm}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Role/Function */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role / Function *</label>
              <textarea
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                placeholder="Creative strategist who challenges assumptions"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows="3"
                required
              />
              <div className="mt-2 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">💡 Tip: How to Write an Effective Role/Function</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Describe the persona's role using a brief but purposeful phrase. Combine a title or identity with a functional goal or behavior.
                </p>
                <p className="text-sm text-blue-800 font-medium mb-1">[Who they are] + [What they're meant to do]</p>
                <div className="text-sm text-blue-700">
                  <p><strong>Examples:</strong></p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>"Product Manager who challenges assumptions and drives innovation"</li>
                    <li>"Skeptical scientist focused on disproving weak arguments"</li>
                    <li>"Charismatic team lead who mediates conflict and inspires alignment"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Traits Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Traits Section</h3>
              <div className="p-4 bg-yellow-50 rounded-lg mb-4">
                <h4 className="font-medium text-yellow-900 mb-2">💡 Tip: Why Traits Matter</h4>
                <p className="text-sm text-yellow-800">
                  While not required, carefully selecting traits will generate the best results because traits guide how the persona thinks, 
                  communicates, and reacts in different situations. The more accurately you define traits, the more realistic and useful your persona will be.
                </p>
              </div>

              {Object.entries(traitCategories).map(([category, traits]) => (
                <div key={category} className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">{category}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {traits.map(trait => {
                      const traitKey = `${category}-${trait}`;
                      const isSelected = selectedTraits[traitKey];
                      
                      return (
                        <div key={trait} className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={!!isSelected}
                              onChange={() => handleTraitToggle(category, trait)}
                              className="mr-2"
                            />
                            <span className="text-sm">{trait}</span>
                          </label>
                          
                          {isSelected && (
                            <div className="ml-6">
                              <select
                                value={isSelected.intensity}
                                onChange={(e) => handleIntensityChange(traitKey, e.target.value)}
                                className="text-xs p-1 border border-gray-300 rounded"
                              >
                                <option value="Weak">Weak</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Strong">Strong</option>
                              </select>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Knowledge Hub */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Knowledge Hub</label>
              <p className="text-sm text-gray-600 mb-4">
                Use this space to enrich your persona with deeper context. You can write a custom backstory, 
                add key facts, paste relevant information, upload documents, or generate a backstory using AI.
              </p>
              
              <textarea
                value={formData.knowledgeHub}
                onChange={(e) => setFormData(prev => ({ ...prev, knowledgeHub: e.target.value }))}
                placeholder="Write a custom backstory or key information..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
                rows="6"
                maxLength="2500"
              />
              
              <div className="flex space-x-4 mb-4">
                <button
                  type="button"
                  onClick={generateBackstory}
                  disabled={isGeneratingBackstory || !formData.name || !formData.role}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isGeneratingBackstory ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4 mr-2" />
                  )}
                  Generate Backstory
                </button>
                
                <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Files
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.txt,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Uploaded Files:</h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4