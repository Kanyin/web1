import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import ServiceHighlights from "@/components/home/ServiceHighlights";
/*import Testimonials from "@/components/home/Testimonials";*/
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <ServiceHighlights />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
