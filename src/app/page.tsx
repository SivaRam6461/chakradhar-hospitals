import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Departments from "@/components/Departments";
import Doctors from "@/components/Doctors";
import Facilities from "@/components/Facilities";
import Treatments from "@/components/Treatments";
import Testimonials from "@/components/Testimonials";
import HealthPackages from "@/components/HealthPackages";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <WhyChooseUs />
      <About />
      <StatsCounter />
      <Departments />
      <Doctors />
      <Facilities />
      <Treatments />
      <Testimonials />
      <HealthPackages />
      <Gallery />
      <FAQ />
      <Appointment />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
