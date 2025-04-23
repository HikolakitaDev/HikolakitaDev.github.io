import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResponsiveAppBar from './components/navbar.tsx'
import App from './App.tsx'
import Card from './components/card.tsx'
import SectionTitle from './components/section-title.tsx'
import Projects from './components/projects.tsx'
import Skills from './components/skills.tsx'
import Award from './components/award.tsx'
import Footer from './components/footer.tsx'
import ContactForm from './components/contact.tsx'
import Tarif from './components/tarifs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveAppBar />
    <App />
    <Card />
    <SectionTitle sectionTitle="Projects" txt="I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between."/>
    <Projects />
    <SectionTitle sectionTitle="Skills" txt="After 3 years of web developement, here are some skills that I have acquired."/>
    <Skills />
    <SectionTitle sectionTitle="Awards" txt="I'm proud to have received the following awards:"/>
    <Award />
    <SectionTitle sectionTitle="Plans" txt="If you need my services, you can choose between these three options:"/>
    <Tarif />
    <SectionTitle sectionTitle='Contact' txt='Feel free to contact me if you have any questions or inquiries.'/>
    <ContactForm />
    <Footer /> 
  </StrictMode>,
)
