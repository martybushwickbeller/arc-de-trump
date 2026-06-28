import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Nav from './components/Nav';
import Hero from './components/Hero';
import MonumentStats from './components/MonumentStats';
import QuotePlaque from './components/QuotePlaque';
import Comparisons from './components/Comparisons';
import PublicConsultation from './components/PublicConsultation';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <MonumentStats />
      <QuotePlaque
        text="Me. It's going to be beautiful."
        attribution="Donald J. Trump"
        title="45th & 47th President of the United States · October 15, 2025"
        variant="gold"
      />
      <Comparisons />
      <QuotePlaque
        text="Historically, triumphal arches mark moments of conquest. Arlington marks the cost of it."
        attribution="Aaron D. Murphy, AIA"
        title="ADM Architecture"
        variant="green"
      />
      <PublicConsultation />
      <QuotePlaque
        text="The United States has never had an emperor or king."
        attribution="The Historical Record"
        title="1776 – Present"
        variant="gold"
      />
      <FAQ />
      <Footer />
    </>
  );
}
