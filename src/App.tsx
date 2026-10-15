import { useState, useEffect } from 'react';
import Navbar, { PageId } from './components/Navbar';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import ProductInquiryModal from './components/ProductInquiryModal';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import IPhonesPage from './pages/IPhonesPage';
import AndroidPage from './pages/AndroidPage';
import AccessoriesPage from './pages/AccessoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqsPage from './pages/FaqsPage';
import { ProductItem } from './data/storeData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Sync with browser hash for accessible navigation and refresh retention
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'shop',
        'iphones',
        'android',
        'accessories',
        'about',
        'contact',
        'faqs',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleCloseInquiry = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF1F5] text-[#101827]">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'shop' && (
          <ShopPage onOpenInquiry={handleOpenInquiry} initialCategory="all" />
        )}
        {currentPage === 'iphones' && (
          <IPhonesPage onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'android' && (
          <AndroidPage onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'accessories' && (
          <AccessoriesPage onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'faqs' && <FaqsPage />}
      </main>

      {/* Mandatory Left-Side Floating Contact Button */}
      <FloatingCallButton />

      {/* Product Inquiry Dialog */}
      <ProductInquiryModal product={selectedProduct} onClose={handleCloseInquiry} />

      {/* Site Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
