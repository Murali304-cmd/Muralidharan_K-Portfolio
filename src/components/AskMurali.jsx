import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, X, User, CornerDownLeft, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import { experiences, certifications, achievements } from '../data/experience';
import { leetcodeStats } from '../data/leetcode';

const SUGGESTED_CHIPS = [
  "What projects use RAG?",
  "Show ML skills",
  "Where did he intern?",
  "What are his LeetCode stats?",
  "What college does he attend?",
  "What certifications does he hold?"
];

function answerQuery(query) {
  const q = query.toLowerCase();

  if (q.includes('rag') || q.includes('nila') || q.includes('document')) {
    const nila = projects.find(p => p.id === 'nila-ai-assistant');
    return `Murali is developing **NILA – AI Document Assistant**, a local offline PDF conversational assistant using Retrieval-Augmented Generation (RAG), Ollama for local LLM inference, FAISS for vector similarity search, and FastAPI.`;
  }

  if (q.includes('intern') || q.includes('thiranx') || q.includes('work experience')) {
    const thiranx = experiences.find(e => e.id === 'thiranx');
    return `Murali completed a **Data Analytics Internship at Thiranx** (Remote, June–July 2026). He cleaned and analyzed multi-dimensional datasets using Python (Pandas, NumPy) and Excel, created interactive Power BI dashboards, and presented strategic recommendations to leadership.`;
  }

  if (q.includes('leetcode') || q.includes('problem') || q.includes('dsa') || q.includes('solved')) {
    return `Murali has solved **${leetcodeStats.totalSolved} total problems** on LeetCode (Profile: ${leetcodeStats.username}):\n• **Easy:** ${leetcodeStats.categories[0].solved}\n• **Medium:** ${leetcodeStats.categories[1].solved}\n• **Hard:** ${leetcodeStats.categories[2].solved}\nFocus areas: Arrays, Two Pointers, Trees, Graphs, and DP.`;
  }

  if (q.includes('college') || q.includes('education') || q.includes('mcet') || q.includes('study') || q.includes('cgpa')) {
    return `Murali is pursuing **B.E. in Information Technology** at **Dr. Mahalingam College of Engineering and Technology (Dr. MCET), Pollachi** with a **8.3 CGPA** (Expected June 2028). His secondary schooling was at Variyar Higher Secondary School, Dharmapuri.`;
  }

  if (q.includes('ml') || q.includes('machine learning') || q.includes('model') || q.includes('algorithm')) {
    const mlSkills = skills.filter(s => s.category === 'ml').map(s => s.name).join(', ');
    return `Murali's Machine Learning expertise includes: **${mlSkills}**, plus tools like Scikit-learn, Pandas, NumPy, and Streamlit. Key projects include **ATM Cash Demand Prediction** and **Smart Energy Management System**.`;
  }

  if (q.includes('skill') || q.includes('tech stack') || q.includes('language')) {
    return `Murali's stack covers:\n• **Programming:** Python, Java, SQL\n• **Analytics & Viz:** Excel, Power BI, Tableau, Pandas, NumPy, Matplotlib, Plotly\n• **ML & AI:** Linear/Logistic Regression, Random Forest, K-Means, DBSCAN, RAG, Ollama, FAISS\n• **Web & DB:** FastAPI, Django, React, Node.js, MySQL, SQLite, MongoDB, Git.`;
  }

  if (q.includes('certif') || q.includes('oracle') || q.includes('license')) {
    const certList = certifications.map(c => `• **${c.title}** (${c.issuer})`).join('\n');
    return `Verified Certifications:\n${certList}`;
  }

  if (q.includes('achievement') || q.includes('codevita') || q.includes('rank') || q.includes('tcs')) {
    return `Major Achievements:\n• **TCS CodeVita Season 13:** Achieved Global Rank **16,434** in algorithmic coding.\n• **CampusCrew 100K Milestone Honor Certificate** for active technical contribution.`;
  }

  if (q.includes('smart energy') || q.includes('research') || q.includes('energy')) {
    return `The **Smart Energy Management System** is a research framework combining solar irradiance forecasting, consumer demand forecasting, and dynamic electricity tariff prediction with Reinforcement Learning battery State of Charge (SoC) allocation.`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
    return `You can reach Murali at **${profile.email}** or call **${profile.phone}**. You can also connect via LinkedIn: ${profile.linkedin}.`;
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('who are you')) {
    return `Hello! I am an offline client-side portfolio assistant trained exclusively on K. Muralidharan's verified data files. Ask me anything about his projects, skills, education, internship, or LeetCode stats!`;
  }

  return `I don't have factual information regarding that specific query in Murali's verified portfolio data files. Please try asking about his **projects (NILA, ATM Cash Demand, Smart Energy)**, **skills (ML, Power BI, Python)**, **Thiranx internship**, **LeetCode stats**, or **education at Dr. MCET**.`;
}

export default function AskMurali({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm an offline assistant for Murali's portfolio (inspired by his local NILA RAG project). Ask me any question about his verified skills, projects, or background!"
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    const botResponse = { sender: 'bot', text: answerQuery(text) };

    setMessages(prev => [...prev, userMsg, botResponse]);
    if (!textToSend) setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
      />

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-premium border border-slate-200 dark:border-slate-800 flex flex-col h-[580px] max-h-[85vh] overflow-hidden z-10"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-cyan flex items-center justify-center text-white shadow-soft">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                Ask Muralidharan
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-semibold">
                  Offline RAG Model
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Grounded strictly in verified portfolio data files
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Chips Bar */}
        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800/80 flex gap-2 overflow-x-auto text-xs whitespace-nowrap scrollbar-none bg-white dark:bg-slate-900">
          {SUGGESTED_CHIPS.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 dark:hover:text-brand-300 text-[11px] transition-colors shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs sm:text-sm">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-7 h-7 rounded-lg bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-brand-600 text-white rounded-tr-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-xs'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about skills, projects, internship, LeetCode..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-40 transition-colors shadow-soft"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-[10px] text-center text-slate-400 font-mono mt-1.5">
            Strict factual mode • No generative hallucination
          </div>
        </div>
      </motion.div>
    </div>
  );
}

