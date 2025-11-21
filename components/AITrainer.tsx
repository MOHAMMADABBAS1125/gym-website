import React, { useState } from 'react';
import { BrainCircuit, Loader2, Send, CheckCircle } from 'lucide-react';
import { generateWorkoutPlan } from '../services/geminiService';
import { WorkoutRequest, FitnessGoal, FitnessLevel } from '../types';
import ReactMarkdown from 'react-markdown';

const AITrainer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState<WorkoutRequest>({
    goal: FitnessGoal.WEIGHT_LOSS,
    level: FitnessLevel.BEGINNER,
    daysPerWeek: '3',
    duration: '45',
    equipment: 'Full Gym'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const plan = await generateWorkoutPlan(formData);
    setResult(plan);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Input Form */}
        <div className="space-y-8">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
              <BrainCircuit className="text-brand-red h-8 w-8" />
              Daccan AI Trainer
            </h2>
            <p className="mt-4 text-gray-400">
              Tell our AI system about your goals, and get a customized workout plan instantly. 
              Powered by Google Gemini models.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-xl">
            <div className="space-y-6">
              
              {/* Goal */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Main Goal</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-black border-zinc-700 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3"
                >
                  {Object.values(FitnessGoal).map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Level */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Experience Level</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-black border-zinc-700 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3"
                >
                  {Object.values(FitnessLevel).map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Days */}
                <div>
                  <label className="block text-sm font-medium text-gray-300">Days / Week</label>
                  <input
                    type="number"
                    name="daysPerWeek"
                    min="1"
                    max="7"
                    value={formData.daysPerWeek}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-black border-zinc-700 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3"
                  />
                </div>
                 {/* Duration */}
                 <div>
                  <label className="block text-sm font-medium text-gray-300">Mins / Session</label>
                  <input
                    type="number"
                    name="duration"
                    min="15"
                    max="180"
                    value={formData.duration}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-black border-zinc-700 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3"
                  />
                </div>
              </div>

              {/* Equipment */}
              <div>
                <label className="block text-sm font-medium text-gray-300">Available Equipment</label>
                <input
                  type="text"
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  placeholder="e.g., Full Gym, Dumbbells only, Bodyweight"
                  className="mt-1 block w-full rounded-md bg-black border-zinc-700 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin h-5 w-5" /> Generating Plan...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Generate Plan <Send className="h-4 w-4" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Result Display */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 h-[600px] overflow-y-auto shadow-inner custom-scrollbar">
           {!result && !loading && (
             <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-50">
               <BrainCircuit className="h-24 w-24 mb-4" />
               <p className="text-lg">Your custom plan will appear here</p>
             </div>
           )}

           {loading && (
             <div className="h-full flex flex-col items-center justify-center text-brand-red">
               <Loader2 className="h-16 w-16 animate-spin mb-4" />
               <p className="text-lg animate-pulse text-white">Consulting elite trainers...</p>
             </div>
           )}

           {result && !loading && (
             <div className="prose prose-invert prose-red max-w-none">
               <div className="flex items-center gap-2 text-green-500 mb-6">
                 <CheckCircle className="h-6 w-6" />
                 <span className="font-bold">Plan Generated Successfully</span>
               </div>
               {/* Rendering Markdown Response */}
               <ReactMarkdown
                 components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-brand-red mb-4 border-b border-red-900 pb-2" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-white mt-6 mb-3" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-medium text-red-400 mt-4 mb-2" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-2 text-gray-300" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal pl-5 space-y-2 text-gray-300" {...props} />,
                    strong: ({node, ...props}) => <strong className="text-white font-bold" {...props} />,
                    p: ({node, ...props}) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />
                 }}
               >
                 {result}
               </ReactMarkdown>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default AITrainer;