import Header from "@/components/Header"
import Hero from "@/components/Hero"
import WeddingPackage from "@/components/WeddingPackage"
import MenuShowcase from "@/components/MenuShowcase"
import FoodSurvey from "@/components/FoodSurvey"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WeddingPackage />
      <MenuShowcase />
      <FoodSurvey />
    </div>
  );
};

export default Index;
