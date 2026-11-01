export const skillCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'data', label: 'Data Analytics' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'ai', label: 'AI & Web Dev' },
  { id: 'prog', label: 'Programming & DB' },
];

export const skills = [
  // Programming
  {
    id: 'python',
    symbol: 'Py',
    number: 1,
    name: 'Python',
    category: 'prog',
    categoryLabel: 'Programming',
    color: '#3776AB',
    badgeBg: 'rgba(55, 118, 171, 0.1)',
    description: 'Core language used for data analysis, machine learning pipelines, and backend microservices.',
    projects: ['ATM Cash Demand Prediction', 'NILA – AI Document Assistant', 'Smart Energy Management System', 'Sales and Revenue Analysis']
  },
  {
    id: 'java',
    symbol: 'Jv',
    number: 2,
    name: 'Java',
    category: 'prog',
    categoryLabel: 'Programming',
    color: '#007396',
    badgeBg: 'rgba(0, 115, 150, 0.1)',
    description: 'Object-oriented programming, data structures, and foundational software engineering.',
    projects: ['TCS CodeVita Solutions', 'Academic Foundations']
  },
  {
    id: 'sql',
    symbol: 'Sq',
    number: 3,
    name: 'SQL',
    category: 'prog',
    categoryLabel: 'Programming & DB',
    color: '#CC292B',
    badgeBg: 'rgba(204, 41, 43, 0.1)',
    description: 'Relational database queries, joins, aggregations, schema design, and analytical queries.',
    projects: ['AI Model Dataset Management System', 'Customer Segmentation Analysis']
  },
  {
    id: 'mysql',
    symbol: 'My',
    number: 4,
    name: 'MySQL',
    category: 'prog',
    categoryLabel: 'Database',
    color: '#4479A1',
    badgeBg: 'rgba(68, 121, 161, 0.1)',
    description: 'Relational database management, relational integrity, indexing, and transactional operations.',
    projects: ['AI Model Dataset Management System']
  },
  {
    id: 'mongodb',
    symbol: 'Mg',
    number: 5,
    name: 'MongoDB',
    category: 'prog',
    categoryLabel: 'Database',
    color: '#47A248',
    badgeBg: 'rgba(71, 162, 72, 0.1)',
    description: 'NoSQL document-based data modeling, JSON storage, and flexible schemas.',
    projects: ['AI Model Dataset Management System', 'Web Applications']
  },

  // Data Analytics
  {
    id: 'powerbi',
    symbol: 'Pb',
    number: 6,
    name: 'Power BI',
    category: 'data',
    categoryLabel: 'Data Analytics',
    color: '#F2C811',
    badgeBg: 'rgba(242, 200, 17, 0.15)',
    description: 'Interactive business intelligence dashboards, DAX calculated measures, and executive KPI reporting.',
    projects: ['Customer Segmentation Analysis', 'Thiranx Internship Dashboards', 'Sales and Revenue Analysis']
  },
  {
    id: 'excel',
    symbol: 'Xl',
    number: 7,
    name: 'Excel',
    category: 'data',
    categoryLabel: 'Data Analytics',
    color: '#217346',
    badgeBg: 'rgba(33, 115, 70, 0.1)',
    description: 'Data cleaning, pivot tables, VLOOKUP/XLOOKUP, formulas, and preliminary exploratory analysis.',
    projects: ['Thiranx Internship', 'Sales and Revenue Analysis']
  },
  {
    id: 'tableau',
    symbol: 'Tb',
    number: 8,
    name: 'Tableau',
    category: 'data',
    categoryLabel: 'Data Analytics',
    color: '#E97627',
    badgeBg: 'rgba(233, 118, 39, 0.1)',
    description: 'Visual analytics, geographical mapping, storyboarding, and interactive drill-down charts.',
    projects: ['Exploratory Data Analysis Projects']
  },
  {
    id: 'pandas',
    symbol: 'Pd',
    number: 9,
    name: 'Pandas',
    category: 'data',
    categoryLabel: 'Data Analytics',
    color: '#150458',
    badgeBg: 'rgba(21, 4, 88, 0.1)',
    description: 'Dataframe manipulation, time-series operations, missing-value imputation, and statistical aggregation.',
    projects: ['ATM Cash Demand Prediction', 'Thiranx Internship', 'House Price Prediction']
  },
  {
    id: 'numpy',
    symbol: 'Np',
    number: 10,
    name: 'NumPy',
    category: 'data',
    categoryLabel: 'Data Analytics',
    color: '#013243',
    badgeBg: 'rgba(1, 50, 67, 0.1)',
    description: 'Vectorized mathematical computing, multi-dimensional array operations, and numerical linear algebra.',
    projects: ['ATM Cash Demand Prediction', 'Smart Energy Management System']
  },
  {
    id: 'matplotlib',
    symbol: 'Mp',
    number: 11,
    name: 'Matplotlib',
    category: 'data',
    categoryLabel: 'Data Analytics',
    color: '#11557C',
    badgeBg: 'rgba(17, 85, 124, 0.1)',
    description: 'Publication-quality scientific plots, distribution histograms, and correlation heatmaps.',
    projects: ['Thiranx Internship', 'House Price Prediction']
  },
  {
    id: 'plotly',
    symbol: 'Pl',
    number: 12,
    name: 'Plotly',
    category: 'data',
    categoryLabel: 'Data Analytics',
    color: '#3F4F75',
    badgeBg: 'rgba(63, 79, 117, 0.1)',
    description: 'Interactive web-ready charts, zooming, hover tooltips, and dynamic telemetry visualizers.',
    projects: ['ATM Cash Demand Prediction', 'Smart Energy Management System']
  },

  // Machine Learning
  {
    id: 'regression',
    symbol: 'Rg',
    number: 13,
    name: 'Linear/Logistic Reg.',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    color: '#6366F1',
    badgeBg: 'rgba(99, 102, 241, 0.1)',
    description: 'Supervised predictive modeling for continuous values and probabilistic classification.',
    projects: ['House Price Prediction', 'ATM Cash Demand Prediction']
  },
  {
    id: 'randomforest',
    symbol: 'Rf',
    number: 14,
    name: 'Random Forest',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    color: '#059669',
    badgeBg: 'rgba(5, 150, 105, 0.1)',
    description: 'Ensemble decision trees for robust non-linear feature interaction modeling and regression.',
    projects: ['ATM Cash Demand Prediction', 'Energy Demand Forecasting']
  },
  {
    id: 'clustering',
    symbol: 'Km',
    number: 15,
    name: 'K-Means & DBSCAN',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    color: '#8B5CF6',
    badgeBg: 'rgba(139, 92, 246, 0.1)',
    description: 'Unsupervised clustering to segment behavioral patterns, identify clusters, and detect anomalies.',
    projects: ['Customer Segmentation Analysis']
  },
  {
    id: 'feateval',
    symbol: 'Fe',
    number: 16,
    name: 'Feature Engineering',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    color: '#D97706',
    badgeBg: 'rgba(217, 119, 6, 0.1)',
    description: 'Feature scaling, encoding, correlation selection, cross-validation, and metrics (RMSE, MAE, R², F1).',
    projects: ['ATM Cash Demand Prediction', 'House Price Prediction']
  },

  // AI & Web Dev
  {
    id: 'genai',
    symbol: 'Ga',
    number: 17,
    name: 'Generative AI',
    category: 'ai',
    categoryLabel: 'AI & Web Dev',
    color: '#10B981',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    description: 'Large language model prompting, embeddings, retrieval-augmented systems, and context engineering.',
    projects: ['NILA – AI Document Assistant', 'Oracle AI Agent Studio']
  },
  {
    id: 'rag',
    symbol: 'Rg',
    number: 18,
    name: 'RAG & FAISS',
    category: 'ai',
    categoryLabel: 'AI & Web Dev',
    color: '#06B6D4',
    badgeBg: 'rgba(6, 182, 212, 0.1)',
    description: 'Retrieval-Augmented Generation using local vector index search for grounded document Q&A.',
    projects: ['NILA – AI Document Assistant']
  },
  {
    id: 'ollama',
    symbol: 'Ol',
    number: 19,
    name: 'Ollama',
    category: 'ai',
    categoryLabel: 'AI & Web Dev',
    color: '#334155',
    badgeBg: 'rgba(51, 65, 85, 0.1)',
    description: 'Locally deployed open-source LLM inference with zero external API dependencies or cloud latency.',
    projects: ['NILA – AI Document Assistant']
  },
  {
    id: 'fastapi',
    symbol: 'Fa',
    number: 20,
    name: 'FastAPI',
    category: 'ai',
    categoryLabel: 'AI & Web Dev',
    color: '#009688',
    badgeBg: 'rgba(0, 150, 136, 0.1)',
    description: 'High-performance asynchronous Python REST APIs with automatic OpenAPI/Swagger documentation.',
    projects: ['NILA – AI Document Assistant', 'Backend Services']
  },
  {
    id: 'react',
    symbol: 'Re',
    number: 21,
    name: 'React',
    category: 'ai',
    categoryLabel: 'AI & Web Dev',
    color: '#61DAFB',
    badgeBg: 'rgba(97, 218, 251, 0.1)',
    description: 'Component-based modern web UIs, responsive hooks, interactive state management, and SPAs.',
    projects: ['Personal Portfolio', 'Web Application UIs']
  },
  {
    id: 'nodejs',
    symbol: 'Nd',
    number: 22,
    name: 'Node.js',
    category: 'ai',
    categoryLabel: 'AI & Web Dev',
    color: '#339933',
    badgeBg: 'rgba(51, 153, 51, 0.1)',
    description: 'Server-side JavaScript runtime for backend tools, script execution, and web development tooling.',
    projects: ['Full-Stack Projects', 'Tooling']
  }
];
