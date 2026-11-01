export const skillCategories = [
  { id: 'all', label: 'All Stack' },
  { id: 'data', label: 'Data & BI' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'ai', label: 'AI & Systems' },
];

export const skills = [
  {
    id: 'python',
    symbol: 'Py',
    number: 1,
    name: 'Python',
    category: 'ai',
    categoryLabel: 'Core Language',
    color: '#3776AB',
    description: 'Foundational language powering all machine learning models, ETL pipelines, and API services.',
    projects: ['ATM Cash Demand Prediction', 'NILA – AI Document Assistant', 'Smart Energy Management System']
  },
  {
    id: 'powerbi',
    symbol: 'Pb',
    number: 2,
    name: 'Power BI & DAX',
    category: 'data',
    categoryLabel: 'Data & BI',
    color: '#F2C811',
    description: 'Interactive business intelligence reporting, complex DAX calculated measures, and RFM clustering dashboards.',
    projects: ['Customer Segmentation Analysis', 'Thiranx Internship Dashboards', 'Sales and Revenue Analysis']
  },
  {
    id: 'sql',
    symbol: 'Sq',
    number: 3,
    name: 'SQL',
    category: 'data',
    categoryLabel: 'Data & BI',
    color: '#CC292B',
    description: 'Relational data modeling, window functions, complex joins, and transactional database integrity.',
    projects: ['AI Model Dataset Management System', 'Retail Analytics']
  },
  {
    id: 'ml',
    symbol: 'Ml',
    number: 4,
    name: 'Machine Learning',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    color: '#059669',
    description: 'Supervised predictive regression, Random Forest ensembles, and unsupervised K-Means/DBSCAN clustering.',
    projects: ['ATM Cash Demand Prediction', 'House Price Prediction', 'Smart Energy Management System']
  },
  {
    id: 'rag',
    symbol: 'Rg',
    number: 5,
    name: 'RAG & Vector Search',
    category: 'ai',
    categoryLabel: 'AI & Systems',
    color: '#06B6D4',
    description: 'Retrieval-Augmented Generation using FAISS vector indexing, semantic embeddings, and local Ollama LLMs.',
    projects: ['NILA – AI Document Assistant']
  },
  {
    id: 'fastapi',
    symbol: 'Fa',
    number: 6,
    name: 'FastAPI & React',
    category: 'ai',
    categoryLabel: 'AI & Systems',
    color: '#009688',
    description: 'High-speed asynchronous Python REST APIs integrated with reactive, component-driven user interfaces.',
    projects: ['NILA – AI Document Assistant', 'Interactive Portfolios']
  },
  {
    id: 'pandas',
    symbol: 'Pd',
    number: 7,
    name: 'Pandas & NumPy',
    category: 'data',
    categoryLabel: 'Data & BI',
    color: '#150458',
    description: 'Vectorized mathematical operations, missing-value imputation, feature scaling, and time-series aggregation.',
    projects: ['ATM Cash Demand Prediction', 'Thiranx Internship']
  },
  {
    id: 'excel',
    symbol: 'Xl',
    number: 8,
    name: 'Excel Analytics',
    category: 'data',
    categoryLabel: 'Data & BI',
    color: '#217346',
    description: 'Pivot tables, exploratory data cleaning, multi-criteria lookup formulas, and executive summary tables.',
    projects: ['Thiranx Internship', 'Sales and Revenue Analysis']
  }
];
