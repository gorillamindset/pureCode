import Layout from './components/common/Layout';
import Dashboard from "@/pages/dashboard/Dashboard";
import { Toaster } from "sonner";
import BackToTop from './components/common/BackToTop';
import { Navbar } from './components/sidebar';
import Header from './components/header/Header';


const App = () => {
  return (
    <>
      <Layout>
        <Navbar/>
        <Header/>
        <Dashboard/>
        <BackToTop />
        <Toaster richColors />
      </Layout>
    </>
  );
};

export default App;
