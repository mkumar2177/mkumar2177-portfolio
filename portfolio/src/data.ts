// All profile content lives here. Everything comes from the resume — edit freely.
export const profile = {
  name: 'Mohd Khalid Umar',
  email: 'mohdkhalidumar1@gmail.com',
  phone: '7982163187',
  github: 'https://github.com/mkumar2177',
  githubUser: 'mkumar2177',
  linkedin: 'https://www.linkedin.com/in/mohd-khalid-umar-2b1906315/',
  resume: '/Mohd_Khalid_Umar_Resume.pdf', // put the PDF in /public with this name
}
export type Tag = 'reg' | 'cls' | 'clu' | 'app'
export const projects: { name: string; tags: Tag[]; problem: string; about: string; stack: string[]; repo: string; flow?: string[] }[] = [
  { name: 'Smart City Analytics Suite', tags: ['reg', 'clu', 'app'], problem: 'City data on traffic, crime, air and waste is hard to act on.',
    about: 'Multi-module app applying ML to urban problems. Random Forest and K-Means models run on prepared features and surface in an interactive Streamlit dashboard.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'], repo: '-Demo-smart-city-analytics-suite',
    flow: ['Datasets', 'Preprocessing + features', 'Random Forest / K-Means', 'Streamlit dashboard'] },
  { name: 'Car Price Prediction', tags: ['reg'], problem: 'Used-car prices are hard to estimate fairly.',
    about: 'Random Forest Regression with data cleaning, feature encoding and evaluation on held-out test data.',
    stack: ['Python', 'Pandas', 'Scikit-learn'], repo: 'Car-Prize-Prediction-Using-Random_Forest_Regression' },
  { name: 'Credit Card Fraud Prediction', tags: ['cls'], problem: 'Fraud hides among many legitimate transactions.',
    about: 'Artificial Neural Network classifier with preprocessing, scaling, training and evaluation, plus an app script.',
    stack: ['Python', 'ANN', 'Scikit-learn'], repo: 'Credit-Card-Fraud-Prediction-ANN-' },
  { name: 'Smart Traffic Management System', tags: ['app'], problem: 'Traffic flow needs data-driven control.',
    about: 'Project with app, dataset, models and notebooks folders. See the repository README for details.',
    stack: ['Python'], repo: 'Smart-Traffic-Management-System' },
  { name: 'Additional ML Projects', tags: ['cls', 'reg'], problem: 'Core algorithms practised end to end.',
    about: 'Breast Cancer (KNN), Heart Disease (Decision Tree) and House Price (Decision Tree regression) notebooks, from preprocessing to evaluation.',
    stack: ['Python', 'Pandas', 'Scikit-learn'], repo: 'Data-science-' },
]
export const filters: { k: Tag | 'all'; label: string }[] = [
  { k: 'all', label: 'All' }, { k: 'reg', label: 'Regression' }, { k: 'cls', label: 'Classification' }, { k: 'clu', label: 'Clustering' }, { k: 'app', label: 'Streamlit app' }]
export const skills: Record<string, string[]> = {
  Programming: ['Python', 'SQL', 'C++'],
  'Data Science & ML': ['NumPy', 'Pandas', 'Scikit-learn', 'EDA', 'Data cleaning', 'Feature engineering', 'Regression', 'Classification', 'Clustering', 'Random Forest', 'Decision Tree', 'KNN', 'K-Means', 'ANN', 'Model evaluation'],
  'Analytics & Visualization': ['Power BI', 'Matplotlib', 'Seaborn', 'Streamlit'],
  Tools: ['Jupyter Notebook', 'VS Code', 'Git', 'GitHub'],
}
export const nav = ['about', 'projects', 'stack', 'training', 'github', 'contact']
