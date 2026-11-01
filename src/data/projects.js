export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'data', label: 'Data Analytics' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'ai', label: 'Artificial Intelligence' },
  { id: 'research', label: 'Research' },
  { id: 'web', label: 'Web Development' },
];

export const projects = [
  {
    id: 'nila-ai-assistant',
    title: 'NILA – AI Document Assistant',
    subtitle: 'Local Offline PDF Q&A via Retrieval-Augmented Generation',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    status: 'Developing',
    statusVariant: 'amber',
    featured: true,
    description: 'An AI-powered document intelligence assistant that operates completely offline. Users upload complex PDFs and query them in natural language using local LLM inference and vector similarity search.',
    problem: 'Cloud-based document analyzers leak proprietary data and incur high API costs, while manual document searching across dense academic/business PDFs is tedious.',
    approach: 'Engineered an offline RAG pipeline parsing PDF text into overlapping semantic chunks, indexing chunk embeddings inside a FAISS vector store, and streaming answers generated through local Ollama LLMs orchestrated with FastAPI.',
    stack: ['Python', 'RAG', 'Ollama', 'FAISS', 'FastAPI'],
    githubUrl: null, // "Repository Coming Soon"
    demoUrl: null,
    uiType: 'rag-chat',
    metrics: [
      { label: 'Privacy', val: '100% Local' },
      { label: 'Latency', val: 'Sub-second search' },
      { label: 'Index', val: 'FAISS Vector' }
    ]
  },
  {
    id: 'smart-energy-management',
    title: 'Smart Energy Management System',
    subtitle: 'Renewable Microgrid Optimization & Battery SoC Allocation',
    category: 'research',
    categoryLabel: 'Research',
    status: 'Research',
    statusVariant: 'violet',
    featured: true,
    description: 'An exploratory research framework modeling intelligent IoT-driven smart microgrids. Combines solar irradiance forecasting, consumer demand forecasting, and dynamic tariff prediction with Reinforcement Learning battery dispatch.',
    problem: 'Intermittent renewable generation causes grid instability and expensive peak-hour grid consumption without dynamic energy scheduling.',
    approach: 'Constructed multi-stage predictive pipeline: forecasting solar generation and household load curves, evaluating battery State of Charge (SoC), and training a Reinforcement Learning agent to balance battery storage vs. grid purchase.',
    stack: ['Python', 'Machine Learning', 'Reinforcement Learning', 'IoT Architecture', 'NumPy'],
    githubUrl: null,
    demoUrl: null,
    uiType: 'energy-flow',
    metrics: [
      { label: 'Nature', val: 'Research Framework' },
      { label: 'Optimization', val: 'RL Agent' },
      { label: 'Domain', val: 'Smart Microgrids' }
    ]
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation Analysis',
    subtitle: 'Behavioral Clustering & DAX-Driven Business Intelligence',
    category: 'data',
    categoryLabel: 'Data Analytics',
    status: 'Completed',
    statusVariant: 'emerald',
    featured: true,
    description: 'Interactive business intelligence dashboard transforming transactional retail data into high-value customer segments using DAX calculated measures and behavioral clustering.',
    problem: 'Retail managers lack visibility into customer lifetime value, churning risk segments, and purchase frequencies needed for personalized retention marketing.',
    approach: 'Cleaned raw transaction datasets, engineered RFM (Recency, Frequency, Monetary) metrics, formulated complex DAX calculated tables, and built drill-down Power BI visual reports.',
    stack: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
    githubUrl: null,
    demoUrl: null,
    uiType: 'powerbi-dashboard',
    metrics: [
      { label: 'Tool', val: 'Power BI & DAX' },
      { label: 'Segmentation', val: 'RFM Clusters' },
      { label: 'Status', val: 'Verified Resume' }
    ]
  },
  {
    id: 'atm-cash-demand',
    title: 'ATM Cash Demand Prediction',
    subtitle: 'Machine Learning Time-Series & Branch Cash Optimization',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    status: 'Completed',
    statusVariant: 'emerald',
    featured: true,
    description: 'Supervised predictive model forecasting daily cash withdrawal demands at bank ATM terminals, developed as the capstone for the AMYPO 20-day ML training program.',
    problem: 'ATM replenishment carries hefty transit insurance fees and stockout penalties when demand surges on weekends or paydays.',
    approach: 'Performed extensive data cleansing with Pandas and NumPy, extracted calendar indicators (holidays, week numbers), trained regression models, and visualised forecast residuals using Plotly and Streamlit.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Streamlit'],
    githubUrl: null,
    demoUrl: null,
    uiType: 'cash-chart',
    metrics: [
      { label: 'Model', val: 'Supervised Regression' },
      { label: 'Training', val: 'AMYPO ML Capstone' },
      { label: 'Status', val: 'Verified Resume' }
    ]
  },
  {
    id: 'ai-dataset-management',
    title: 'AI Model Dataset Management System',
    subtitle: 'Structured Relational Repository for ML Training Corpora',
    category: 'web',
    categoryLabel: 'Web Development',
    status: 'Completed',
    statusVariant: 'emerald',
    featured: false,
    description: 'A centralized database-backed system for cataloging, versioning, querying, and updating AI training datasets with rigorous metadata tracking.',
    problem: 'Unorganized datasets scattered across storage drives lead to version drift, broken model reproducibility, and duplicate preprocessing efforts.',
    approach: 'Designed normalized relational database schemas with robust CRUD operations, validation layers, and an accessible frontend for data scientists to search and register dataset splits.',
    stack: ['Python', 'SQL', 'Database Connectivity', 'CRUD Architecture'],
    githubUrl: null,
    demoUrl: null,
    uiType: 'dataset-crud',
    metrics: [
      { label: 'Operations', val: 'Full CRUD' },
      { label: 'Connectivity', val: 'SQL Engine' },
      { label: 'Status', val: 'Verified Resume' }
    ]
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    subtitle: 'Multivariate Regression with Feature Engineering',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    status: 'Developing',
    statusVariant: 'amber',
    featured: false,
    description: 'End-to-end regression pipeline predicting residential property valuations based on spatial features, square footage, quality ratings, and neighborhood amenities.',
    problem: 'Real estate valuations are vulnerable to subjective biases and volatile market trends when evaluated without historical multivariable data.',
    approach: 'Handled missing values, engineered polynomial and interaction features, tested multiple linear and ensemble regressors, and evaluated mean squared error curves.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: null,
    demoUrl: null,
    uiType: 'price-prediction',
    metrics: [
      { label: 'Pipeline', val: 'Scikit-Learn' },
      { label: 'Objective', val: 'Valuation Modeling' }
    ]
  },
  {
    id: 'sales-revenue-analysis',
    title: 'Sales and Revenue Analysis',
    subtitle: 'Exploratory Analytics & Executive Revenue Tracking',
    category: 'data',
    categoryLabel: 'Data Analytics',
    status: 'Developing',
    statusVariant: 'amber',
    featured: false,
    description: 'In-depth analytical study examining historical sales volume, regional distribution, seasonality, and product margin contributions.',
    problem: 'Business leaders struggle to pinpoint which product categories yield highest profit versus high logistical cost.',
    approach: 'Synthesized multi-branch sales records, calculated year-over-year revenue velocity, and produced interactive charts highlighting top revenue drivers.',
    stack: ['Excel', 'Power BI', 'Pandas', 'Data Cleaning'],
    githubUrl: null,
    demoUrl: null,
    uiType: 'sales-chart',
    metrics: [
      { label: 'Domain', val: 'Revenue BI' },
      { label: 'Tooling', val: 'Excel & Power BI' }
    ]
  },
  {
    id: 'smart-attendance-system',
    title: 'Smart Attendance System',
    subtitle: 'Automated Computer Vision & Face Recognition Concept',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    status: 'Concept',
    statusVariant: 'blue',
    featured: false,
    description: 'Conceptual architecture for contactless, real-time classroom attendance logging utilizing automated face detection and timestamped database logging.',
    problem: 'Manual roll-calls consume 10-15 minutes of every lecture and are prone to proxy attendance and transcription errors.',
    approach: 'Designed pipeline capturing classroom video feeds, detecting facial landmarks, computing biometric embeddings, and matching against enrolled student directories.',
    stack: ['Computer Vision Concept', 'Python', 'OpenCV Concept', 'Database'],
    githubUrl: null,
    demoUrl: null,
    uiType: 'attendance-vision',
    metrics: [
      { label: 'Type', val: 'Conceptual Prototype' },
      { label: 'Modality', val: 'Vision & Logging' }
    ]
  }
];

