// import toast, { Toaster } from 'react-hot-toast';

// import { useEffect, useState } from 'react';
// import { Microscope, ShoppingCart, X, Search } from 'lucide-react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import AOS from 'aos';
// import QRCode from 'qrcode.react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'aos/dist/aos.css';
// import logo from "./assets/logo.png";

// // import { useNavigate } from 'react-router-dom';

// // Test packages data
// const testPackages = [
//   { id: 1, name: 'Wellwise Essential Profile', tests: 12, originalPrice: 999, price: 500, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope'] },
//   { id: 2, name: 'Wellwise Advanced with Allergy Screen Profile', tests: 31, originalPrice: 3000, price: 2900, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope', 'Complete Haemogram', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 3, name: 'Wellwise Advanced Profile', tests: 21, originalPrice: 3499, price: 2200, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 4, name: 'Wellwise Advanced All Day', tests: 6, originalPrice: 3000, price: 2200, image: 'https://images.unsplash.com/photo-1579165466998-92c516f2f94f?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//   { id: 5, name: 'Wellwise Platinum Profile', tests: 21, originalPrice: 13430, price: 5999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 6, name: 'Wellwise Basic', tests: 15, originalPrice: 800, price: 299, image: 'https://images.unsplash.com/photo-1576086213149-9e0a42ab17f3?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 7, name: 'Covid Antigen', tests: 15, originalPrice: 750, price: 450, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 8, name: 'WellWise Senior Citizen Profile - Male', tests: 15, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 9, name: 'WellWise Senior Citizen Profile - Female', tests: 13, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1579684453377-48ec05c5a4c7?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Lipid Profile', '25 Hydroxy Vitamin D Level', 'Vitamin B12', 'Total – Thyroid Profile', 'KFT Profile with Calcium', 'Inorganic Phosphorus', 'Liver Function Test Profile', 'Urine Routine And Microscopy', 'Rheumatoid Factor (Quantitative)', 'Folate'] },
//   { id: 10, name: 'Accuprobe 1.3', tests: 21, originalPrice: 2350, price: 1500, image: 'https://images.unsplash.com/photo-1576086213286-131c2aa4f11e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 11, name: 'Medcis 1.3', tests: 21, originalPrice: 5570, price: 2499, image: 'https://images.unsplash.com/photo-1581093458759-bf91c4e9d24e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 12, name: 'Wellwise Total Profile', tests: 6, originalPrice: 2000, price: 1699, image: 'https://images.unsplash.com/photo-1579684385215-936c0f6a5618?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 13, name: 'HBA1C 3 Month Average Sugar', tests: 21, originalPrice: 450, price: 350, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 14, name: 'Covid 19 Testing', tests: 21, originalPrice: 750, price: 700, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 15, name: 'Thyroid Profile', tests: 21, originalPrice: 450, price: 400, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 16, name: 'Full Body Checkup (SRL)', tests: 4, originalPrice: 2200, price: 2000, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//   { id: 17, name: 'Wellwise Essential Profile with Smart Report', tests: 12, originalPrice: 1950, price: 999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscopy'] }
// ];





// function App() {
//   const [cart, setCart] = useState<number[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showDetails, setShowDetails] = useState<number | null>(null);
//   const [showPayment, setShowPayment] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [debouncedSearch, setDebouncedSearch] = useState('');
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);


//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(searchQuery);
//     }, 300);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [searchQuery]);

//   const addToCart = (id: number) => {
//     setCart([...cart, id]);
//     // alert("Item Added to Cart")
//     toast.success('Item added Successfully');
//   };

//   const removeFromCart = (id: number) => {
//     setCart(cart.filter(itemId => itemId !== id));
//   };

//   const getTotalAmount = () => {
//     return cart.reduce((total, id) => {
//       const item = testPackages.find(pkg => pkg.id === id);
//       return total + (item?.price || 0);
//     }, 0);
//   };

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // const navigate = useNavigate();
//   // const handleCash=()=>{
//   //   navigate("www.google.com")
//   // }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar - Updated styling */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             {/* <Microscope className="h-8 w-8 text-primary" /> */}
//             <img src={logo} alt="" className=" h-[42px] w-auto sm:h-[75px] text-primary" />
//             <span className="text-2xl sm:text-3xl font-bold  text-[#836e40]">DEEP DIAGNOSTICS</span>
//           </div>

//           {/* Desktop Search */}
//           <div className="hidden xl:flex flex-1 max-w-xl mx-8">
//             <input
//               type="text"
//               placeholder="Search health packages..."
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {['home', 'services', 'tests', 'lab-info', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="nav-link capitalize"
//               >
//                 {item.replace('-', ' ')}
//               </button>
//             ))}
//           </div>


//           {/* Mobile Search Icon */}
//           <button
//             className="xl:hidden p-2 hover:scale-110 transition-transform duration-300"
//             onClick={() => setIsSearchVisible(!isSearchVisible)}
//           >
//             <Search className="h-6 w-6 text-secondary" />
//           </button>


//           <button
//             onClick={() => setShowCart(true)}
//             className="relative p-2 hover:scale-110 transition-transform duration-300"
//           >
//             <ShoppingCart className="h-6 w-6 text-secondary" />
//             {cart.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* Mobile Search Bar */}
//         {isSearchVisible && (
//           <div className="xl:hidden px-4 pb-4">
//             <input
//               type="text"
//               placeholder="Search health packages..."
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         )}




//       </nav>



//           <Toaster />


//       {/* Hero Section - Enhanced styling */}
//       <section id="home" className="pt-16">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000 }}
//           className="h-[600px] md:h-[700px]"
//         >
//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-right">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Advanced Diagnostics for Better Healthcare
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       State-of-the-art laboratory services with precise results
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('tests')}
//                       className="btn-primary text-lg"
//                     >
//                       Explore Health Checkups
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </section>

//       {/* Services Section - Improved layout */}
//       <section id="services" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title" data-aos="fade-up">Our Services</h2>
//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             {[
//               {
//                 title: 'Home Collection',
//                 description: 'Professional sample collection at your doorstep',
//                 image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Lab Visit',
//                 description: 'Modern facility with cutting-edge equipment',
//                 image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Emergency Tests',
//                 description: 'Round-the-clock emergency testing services',
//                 image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800'
//               }
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//                 <div className="p-6 px-3">
//                   <h3 className="!text[15px] font-bold text-secondary mb-3">{service.title}</h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>



//    {/* Tests Section - Add this after Services section */}
// {/* <section id="tests" className="py-20 bg-white"> */}
// <section id="tests" className="pt-20 pb-20 bg-white">
//   <div className="container mx-auto px-4">
//     <h2 className="section-title" data-aos="fade-up">Health Check Packages</h2>

//     {testPackages.filter(pkg =>
//       pkg.name.toLowerCase().includes(debouncedSearch.toLowerCase())
//     ).length === 0 ? (
//       <div className="text-center py-12 text-gray-500">
//         No packages found matching your search
//       </div>
//     ) : (
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//         {/* {testPackages.map((pkg) => ( */}

//         {testPackages
//           .filter(pkg =>
//             pkg.name.toLowerCase().includes(debouncedSearch.toLowerCase())
//           )
//           .map((pkg) => (
//             <div
//               key={pkg.id}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//               data-aos="fade-up"
//             >
//               <div className="relative h-48">
//                 <img
//                   src={pkg.image}
//                   alt={pkg.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
//               </div>
//               <div className="p-6 px-3">
//                 <h3 className="!text[15px] font-bold text-secondary mb-2">{pkg.name}</h3>
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-primary font-bold">₹{pkg.price}</span>
//                   <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
//                 </div>
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-sm text-gray-600">{pkg.tests} Tests Included</span>
//                   <button
//                     onClick={() => setShowDetails(pkg.id)}
//                     className="text-primary hover:text-[#836e40] text-lg"
//                   >
//                     View Details
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => addToCart(pkg.id)}
//                   className="w-full bg-[#836e40] hover:bg-primary text-white py-2 rounded transition-colors duration-300"
//                 >
//                   Add to Cart
//                 </button>
                
//               </div>
//             </div>
//           ))}
//       </div>
//     )}
//   </div>
// </section>



//       {/* Lab Info Section - Completely redesigned */}
//       <section id="lab-info" className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 opacity-95" />
//         <div className="container mx-auto px-4 relative z-10">
//           <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
//             Why Choose Deep Diagnostic?
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: '20+', text: 'Years Experience', icon: '🏆' },
//               { number: '50,000+', text: 'Tests Conducted', icon: '🔬' },
//               { number: '99.9%', text: 'Accuracy Rate', icon: '✓' },
//               { number: '24/7', text: 'Emergency Service', icon: '⚡' }
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="stat-card"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="text-5xl mb-4">{stat.icon}</div>
//                 <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium">{stat.text}</div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 grid md:grid-cols-2 gap-12">
//             <div className="space-y-6" data-aos="fade-right">
//               <h3 className="text-3xl font-bold text-white mb-6">Advanced Technology</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• State-of-the-art diagnostic equipment</p>
//                 <p>• Digital reporting system</p>
//                 <p>• AI-assisted analysis for accuracy</p>
//                 <p>• ISO certified laboratory</p>
//               </div>
//             </div>
//             <div className="space-y-6" data-aos="fade-left">
//               <h3 className="text-3xl font-bold text-white mb-6">Quality Assurance</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• NABL accredited facility</p>
//                 <p>• Regular quality checks</p>
//                 <p>• Expert pathologists</p>
//                 <p>• Quick turnaround time</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section - Enhanced design */}
//       <section id="contact" className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title mb-16" data-aos="fade-up">Get in Touch</h2>
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="space-y-8" data-aos="fade-right">
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Visit Our Lab</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📍</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Address</h4>
//                       <p className="text-gray-600">123 Medical Complex, Mall Road</p>
//                       <p className="text-gray-600">Amritsar, Punjab, India</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📞</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Phone</h4>
//                       <p className="text-gray-600">+91 1234567890</p>
//                       <p className="text-gray-600">+91 9876543210</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">✉️</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Email</h4>
//                       <p className="text-gray-600">info@deepdiagnostic.com</p>
//                       <p className="text-gray-600">support@deepdiagnostic.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Working Hours</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Monday - Saturday</span>
//                     <span className="font-semibold">7:00 AM - 9:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Sunday</span>
//                     <span className="font-semibold">8:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="mt-4 p-3 bg-primary/10 rounded-lg">
//                     <p className="text-sm text-gray-700">
//                       24/7 Emergency Services Available
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-aos="fade-left">
//               <div className="map-container">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0294044563335!2d74.87345931544636!3d31.634777981330785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa0e061f45%3A0x9f62a10d29f7c7c3!2sMall%20Rd%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer - Enhanced design */}
//       <footer className="gradient-bg text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-12">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Microscope className="h-8 w-8 text-primary" />
//                 <span className="text-xl font-bold">Deep Diagnostic</span>
//               </div>
//               <p className="text-gray-300">
//                 Leading the way in medical diagnostics with precision and care.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Test Packages</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   Facebook
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   Twitter
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-gray-700">
//             <p className="text-center text-gray-400">
//               © {new Date().getFullYear()} Deep Diagnostic. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Cart Modal */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Your Cart</h2>
//               <button onClick={() => setShowCart(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             {cart.length === 0 ? (
//               <p className="text-gray-600">Your cart is empty</p>
//             ) : (
//               <>
//                 {cart.map(id => {
//                   const item = testPackages.find(pkg => pkg.id === id);
//                   return (
//                     <div key={id} className="flex justify-between items-center mb-4">
//                       <div>
//                         <h3 className="font-semibold">{item?.name}</h3>
//                         <p className="text-[#D4AF37]">₹{item?.price}</p>
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   );
//                 })}
//                 <div className="border-t pt-4 mt-4">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="font-bold">Total:</span>
//                     <span className="text-xl font-bold text-[#D4AF37]">₹{getTotalAmount()}</span>
//                   </div>
//                   <button
//                     onClick={() => {
//                       setShowCart(false);
//                       setShowPayment(true);
//                     }}
//                     className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#B38F2D] transition duration-300"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Test Details Modal */}
//       {showDetails !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-primary ">
//                 {testPackages.find(pkg => pkg.id === showDetails)?.name}
//               </h2>
//               <button onClick={() => setShowDetails(null)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <h3 className="font-semibold text-[#836e40] mb-2">Included Tests:</h3>
//             <ul className="list-disc list-inside space-y-1 mb-6">
//               {testPackages.find(pkg => pkg.id === showDetails)?.details.map((test, index) => (
//                 <li key={index} className="text-gray-600">{test}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Payment Modal */}
//       {showPayment && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Scan to Pay</h2>
//               <button onClick={() => setShowPayment(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="flex flex-col items-center">
//               <QRCode
//                 value={`upi://pay?pa=shabdpreetz@okhdfcbank&pn=Deep%20Diagnostic&am=${getTotalAmount()}&cu=INR`}
//                 size={200}
//                 level="H"
//               />
//               <p className="mt-4 text-center text-gray-600">
//                 Scan this QR code with any UPI app to complete your payment
//               </p>
//             </div>
//             <div className="flex flex-col justify-center items-center ">
//               <p className='mt-4 text-[#836e40] font-bold'>OR</p>
//               <button className='mt-3 p-2 text-white rounded-lg hover:bg-[#836e40] bg-primary font-bold'>Pay In Person</button>
//               Done With the Payment? </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// // export default App












// CODE with Mobile Search OK


// import toast, { Toaster } from 'react-hot-toast';
// import { useEffect, useState } from 'react';
// import { Microscope, ShoppingCart, X, Search } from 'lucide-react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import AOS from 'aos';
// import QRCode from 'qrcode.react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'aos/dist/aos.css';
// import logo from "./assets/logo.png";

// // Test packages data
// const testPackages = [
//   { id: 1, name: 'Wellwise Essential Profile', tests: 12, originalPrice: 999, price: 500, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope'] },
//   { id: 2, name: 'Wellwise Advanced with Allergy Screen Profile', tests: 31, originalPrice: 3000, price: 2900, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope', 'Complete Haemogram', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 3, name: 'Wellwise Advanced Profile', tests: 21, originalPrice: 3499, price: 2200, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 4, name: 'Wellwise Advanced All Day', tests: 6, originalPrice: 3000, price: 2200, image: 'https://images.unsplash.com/photo-1579165466998-92c516f2f94f?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//   { id: 5, name: 'Wellwise Platinum Profile', tests: 21, originalPrice: 13430, price: 5999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 6, name: 'Wellwise Basic', tests: 15, originalPrice: 800, price: 299, image: 'https://images.unsplash.com/photo-1576086213149-9e0a42ab17f3?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 7, name: 'Covid Antigen', tests: 15, originalPrice: 750, price: 450, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 8, name: 'WellWise Senior Citizen Profile - Male', tests: 15, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 9, name: 'WellWise Senior Citizen Profile - Female', tests: 13, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1579684453377-48ec05c5a4c7?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Lipid Profile', '25 Hydroxy Vitamin D Level', 'Vitamin B12', 'Total – Thyroid Profile', 'KFT Profile with Calcium', 'Inorganic Phosphorus', 'Liver Function Test Profile', 'Urine Routine And Microscopy', 'Rheumatoid Factor (Quantitative)', 'Folate'] },
//   { id: 10, name: 'Accuprobe 1.3', tests: 21, originalPrice: 2350, price: 1500, image: 'https://images.unsplash.com/photo-1576086213286-131c2aa4f11e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 11, name: 'Medcis 1.3', tests: 21, originalPrice: 5570, price: 2499, image: 'https://images.unsplash.com/photo-1581093458759-bf91c4e9d24e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 12, name: 'Wellwise Total Profile', tests: 6, originalPrice: 2000, price: 1699, image: 'https://images.unsplash.com/photo-1579684385215-936c0f6a5618?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 13, name: 'HBA1C 3 Month Average Sugar', tests: 21, originalPrice: 450, price: 350, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 14, name: 'Covid 19 Testing', tests: 21, originalPrice: 750, price: 700, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 15, name: 'Thyroid Profile', tests: 21, originalPrice: 450, price: 400, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 16, name: 'Full Body Checkup (SRL)', tests: 4, originalPrice: 2200, price: 2000, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//   { id: 17, name: 'Wellwise Essential Profile with Smart Report', tests: 12, originalPrice: 1950, price: 999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscopy'] }
// ];

// function App() {
//   const [cart, setCart] = useState<number[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showDetails, setShowDetails] = useState<number | null>(null);
//   const [showPayment, setShowPayment] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [debouncedSearch, setDebouncedSearch] = useState('');
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(searchQuery);
//     }, 300);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [searchQuery]);

//   const addToCart = (id: number) => {
//     setCart([...cart, id]);
//     toast.success('Item added Successfully');
//   };

//   const removeFromCart = (id: number) => {
//     setCart(cart.filter(itemId => itemId !== id));
//   };

//   const getTotalAmount = () => {
//     return cart.reduce((total, id) => {
//       const item = testPackages.find(pkg => pkg.id === id);
//       return total + (item?.price || 0);
//     }, 0);
//   };

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <img src={logo} alt="Logo" className="h-[42px] w-auto sm:h-[75px]" />
//             <span className="text-2xl sm:text-3xl font-bold text-[#836e40]">DEEP DIAGNOSTICS</span>
//           </div>

//           {/* Desktop Search */}
//           <div className="hidden xl:flex flex-1 max-w-xl mx-8">
//             <input
//               type="text"
//               placeholder="Search health packages..."
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {['home', 'services', 'tests', 'lab-info', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="nav-link capitalize"
//               >
//                 {item.replace('-', ' ')}
//               </button>
//             ))}
//           </div>

//           {/* Cart Icon */}
//           <button
//             onClick={() => setShowCart(true)}
//             className="relative p-2 hover:scale-110 transition-transform duration-300"
//           >
//             <ShoppingCart className="h-6 w-6 text-secondary" />
//             {cart.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Desktop Mobile Search: Removed the mobile search icon from the navbar.
//           Now, we add a fixed search button at the bottom right on mobile screens. */}

//       {/* Main content components (Hero, Services, Tests, etc.) remain the same */}
//       <Toaster />

//       <section id="home" className="pt-16">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000 }}
//           className="h-[600px] md:h-[700px]"
//         >
//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-right">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Advanced Diagnostics for Better Healthcare
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       State-of-the-art laboratory services with precise results
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('tests')}
//                       className="btn-primary text-lg"
//                     >
//                       Explore Health Checkups
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title" data-aos="fade-up">Our Services</h2>
//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             {[
//               {
//                 title: 'Home Collection',
//                 description: 'Professional sample collection at your doorstep',
//                 image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Lab Visit',
//                 description: 'Modern facility with cutting-edge equipment',
//                 image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Emergency Tests',
//                 description: 'Round-the-clock emergency testing services',
//                 image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800'
//               }
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//                 <div className="p-6 px-3">
//                   <h3 className="!text[15px] font-bold text-secondary mb-3">{service.title}</h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tests Section */}
//       <section id="tests" className="pt-20 pb-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title" data-aos="fade-up">Health Check Packages</h2>
//           {testPackages.filter(pkg =>
//             pkg.name.toLowerCase().includes(debouncedSearch.toLowerCase())
//           ).length === 0 ? (
//             <div className="text-center py-12 text-gray-500">
//               No packages found matching your search
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//               {testPackages
//                 .filter(pkg =>
//                   pkg.name.toLowerCase().includes(debouncedSearch.toLowerCase())
//                 )
//                 .map((pkg) => (
//                   <div
//                     key={pkg.id}
//                     className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//                     data-aos="fade-up"
//                   >
//                     <div className="relative h-48">
//                       <img
//                         src={pkg.image}
//                         alt={pkg.name}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
//                     </div>
//                     <div className="p-6 px-3">
//                       <h3 className="!text[15px] font-bold text-secondary mb-2">{pkg.name}</h3>
//                       <div className="flex items-center justify-between mb-4">
//                         <span className="text-primary font-bold">₹{pkg.price}</span>
//                         <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
//                       </div>
//                       <div className="flex items-center justify-between mb-4">
//                         <span className="text-sm text-gray-600">{pkg.tests} Tests Included</span>
//                         <button
//                           onClick={() => setShowDetails(pkg.id)}
//                           className="text-primary hover:text-[#836e40] text-lg"
//                         >
//                           View Details
//                         </button>
//                       </div>
//                       <button
//                         onClick={() => addToCart(pkg.id)}
//                         className="w-full bg-[#836e40] hover:bg-primary text-white py-2 rounded transition-colors duration-300"
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Lab Info Section */}
//       <section id="lab-info" className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 opacity-95" />
//         <div className="container mx-auto px-4 relative z-10">
//           <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
//             Why Choose Deep Diagnostic?
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: '20+', text: 'Years Experience', icon: '🏆' },
//               { number: '50,000+', text: 'Tests Conducted', icon: '🔬' },
//               { number: '99.9%', text: 'Accuracy Rate', icon: '✓' },
//               { number: '24/7', text: 'Emergency Service', icon: '⚡' }
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="stat-card"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="text-5xl mb-4">{stat.icon}</div>
//                 <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium">{stat.text}</div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 grid md:grid-cols-2 gap-12">
//             <div className="space-y-6" data-aos="fade-right">
//               <h3 className="text-3xl font-bold text-white mb-6">Advanced Technology</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• State-of-the-art diagnostic equipment</p>
//                 <p>• Digital reporting system</p>
//                 <p>• AI-assisted analysis for accuracy</p>
//                 <p>• ISO certified laboratory</p>
//               </div>
//             </div>
//             <div className="space-y-6" data-aos="fade-left">
//               <h3 className="text-3xl font-bold text-white mb-6">Quality Assurance</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• NABL accredited facility</p>
//                 <p>• Regular quality checks</p>
//                 <p>• Expert pathologists</p>
//                 <p>• Quick turnaround time</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title mb-16" data-aos="fade-up">Get in Touch</h2>
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="space-y-8" data-aos="fade-right">
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Visit Our Lab</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📍</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Address</h4>
//                       <p className="text-gray-600">123 Medical Complex, Mall Road</p>
//                       <p className="text-gray-600">Amritsar, Punjab, India</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📞</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Phone</h4>
//                       <p className="text-gray-600">+91 1234567890</p>
//                       <p className="text-gray-600">+91 9876543210</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">✉️</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Email</h4>
//                       <p className="text-gray-600">info@deepdiagnostic.com</p>
//                       <p className="text-gray-600">support@deepdiagnostic.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Working Hours</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Monday - Saturday</span>
//                     <span className="font-semibold">7:00 AM - 9:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Sunday</span>
//                     <span className="font-semibold">8:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="mt-4 p-3 bg-primary/10 rounded-lg">
//                     <p className="text-sm text-gray-700">
//                       24/7 Emergency Services Available
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-aos="fade-left">
//               <div className="map-container">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0294044563335!2d74.87345931544636!3d31.634777981330785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa0e061f45%3A0x9f62a10d29f7c7c3!2sMall%20Rd%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="gradient-bg text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-12">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Microscope className="h-8 w-8 text-primary" />
//                 <span className="text-xl font-bold">Deep Diagnostic</span>
//               </div>
//               <p className="text-gray-300">
//                 Leading the way in medical diagnostics with precision and care.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Test Packages</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   Facebook
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   Twitter
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-gray-700">
//             <p className="text-center text-gray-400">
//               © {new Date().getFullYear()} Deep Diagnostic. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Cart Modal */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Your Cart</h2>
//               <button onClick={() => setShowCart(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             {cart.length === 0 ? (
//               <p className="text-gray-600">Your cart is empty</p>
//             ) : (
//               <>
//                 {cart.map(id => {
//                   const item = testPackages.find(pkg => pkg.id === id);
//                   return (
//                     <div key={id} className="flex justify-between items-center mb-4">
//                       <div>
//                         <h3 className="font-semibold">{item?.name}</h3>
//                         <p className="text-[#D4AF37]">₹{item?.price}</p>
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   );
//                 })}
//                 <div className="border-t pt-4 mt-4">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="font-bold">Total:</span>
//                     <span className="text-xl font-bold text-[#D4AF37]">₹{getTotalAmount()}</span>
//                   </div>
//                   <button
//                     onClick={() => {
//                       setShowCart(false);
//                       setShowPayment(true);
//                     }}
//                     className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#B38F2D] transition duration-300"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Test Details Modal */}
//       {showDetails !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-primary ">
//                 {testPackages.find(pkg => pkg.id === showDetails)?.name}
//               </h2>
//               <button onClick={() => setShowDetails(null)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <h3 className="font-semibold text-[#836e40] mb-2">Included Tests:</h3>
//             <ul className="list-disc list-inside space-y-1 mb-6">
//               {testPackages.find(pkg => pkg.id === showDetails)?.details.map((test, index) => (
//                 <li key={index} className="text-gray-600">{test}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Payment Modal */}
//       {showPayment && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Scan to Pay</h2>
//               <button onClick={() => setShowPayment(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="flex flex-col items-center">
//               <QRCode
//                 value={`upi://pay?pa=shabdpreetz@okhdfcbank&pn=Deep%20Diagnostic&am=${getTotalAmount()}&cu=INR`}
//                 size={200}
//                 level="H"
//               />
//               <p className="mt-4 text-center text-gray-600">
//                 Scan this QR code with any UPI app to complete your payment
//               </p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <p className='mt-4 text-[#836e40] font-bold'>OR</p>
//               <button className='mt-3 p-2 text-white rounded-lg hover:bg-[#836e40] bg-primary font-bold'>Pay In Person</button>
//               <p className="mt-3">Done With the Payment?</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 
//         ---- MOBILE SEARCH OVERLAY ---- 
//         When `isSearchVisible` is true, this full-screen overlay (only on small screens)
//         displays a search input field with a close button.
//       */}
//       {isSearchVisible && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 md:hidden">
//           <div className="bg-white p-4 rounded-lg w-11/12 mx-auto">
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search health packages..."
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button onClick={() => setIsSearchVisible(false)} className="ml-2">
//                 <X className="h-6 w-6 text-secondary" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 
//         ---- FIXED BOTTOM-RIGHT SEARCH ICON (MOBILE ONLY) ---- 
//         This button is fixed at the bottom right and only visible on mobile screens
//         (hidden on md and larger) using the `md:hidden` class.
//       */}
//       {!isSearchVisible && (
//         <button
//           className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-white border border-gray-300 md:hidden"
//           onClick={() => setIsSearchVisible(true)}
//         >
//           <Search className="h-6 w-6 text-secondary" />
//         </button>
//       )}

//     </div>
//   );
// }

// export default App;





// code  without search and  fully Ok


  // import toast, { Toaster } from 'react-hot-toast';
  // import { useEffect, useState } from 'react';
  // import { Microscope, ShoppingCart, X } from 'lucide-react';
  // import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  // import { Swiper, SwiperSlide } from 'swiper/react';
  // import AOS from 'aos';
  // import QRCode from 'qrcode.react';
  // import 'swiper/css';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';
  // import 'aos/dist/aos.css';
  // import logo from "./assets/logo.png";

  // // Test packages data
  // const testPackages = [
  //     { id: 1, name: 'Wellwise Essential Profile', tests: 12, originalPrice: 999, price: 500, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope'] },
  //     { id: 2, name: 'Wellwise Advanced with Allergy Screen Profile', tests: 31, originalPrice: 3000, price: 2900, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope', 'Complete Haemogram', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 3, name: 'Wellwise Advanced Profile', tests: 21, originalPrice: 3499, price: 2200, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 4, name: 'Wellwise Advanced All Day', tests: 6, originalPrice: 3000, price: 2200, image: 'https://images.unsplash.com/photo-1579165466998-92c516f2f94f?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
  //     { id: 5, name: 'Wellwise Platinum Profile', tests: 21, originalPrice: 13430, price: 5999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 6, name: 'Wellwise Basic', tests: 15, originalPrice: 800, price: 299, image: 'https://images.unsplash.com/photo-1576086213149-9e0a42ab17f3?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
  //     { id: 7, name: 'Covid Antigen', tests: 15, originalPrice: 750, price: 450, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
  //     { id: 8, name: 'WellWise Senior Citizen Profile - Male', tests: 15, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
  //     { id: 9, name: 'WellWise Senior Citizen Profile - Female', tests: 13, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1579684453377-48ec05c5a4c7?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Lipid Profile', '25 Hydroxy Vitamin D Level', 'Vitamin B12', 'Total – Thyroid Profile', 'KFT Profile with Calcium', 'Inorganic Phosphorus', 'Liver Function Test Profile', 'Urine Routine And Microscopy', 'Rheumatoid Factor (Quantitative)', 'Folate'] },
  //     { id: 10, name: 'Accuprobe 1.3', tests: 21, originalPrice: 2350, price: 1500, image: 'https://images.unsplash.com/photo-1576086213286-131c2aa4f11e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 11, name: 'Medcis 1.3', tests: 21, originalPrice: 5570, price: 2499, image: 'https://images.unsplash.com/photo-1581093458759-bf91c4e9d24e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 12, name: 'Wellwise Total Profile', tests: 6, originalPrice: 2000, price: 1699, image: 'https://images.unsplash.com/photo-1579684385215-936c0f6a5618?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 13, name: 'HBA1C 3 Month Average Sugar', tests: 21, originalPrice: 450, price: 350, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 14, name: 'Covid 19 Testing', tests: 21, originalPrice: 750, price: 700, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 15, name: 'Thyroid Profile', tests: 21, originalPrice: 450, price: 400, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  //     { id: 16, name: 'Full Body Checkup (SRL)', tests: 4, originalPrice: 2200, price: 2000, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
  //     { id: 17, name: 'Wellwise Essential Profile with Smart Report', tests: 12, originalPrice: 1950, price: 999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscopy'] }
  //   ];

  // function App() {
  //   const [cart, setCart] = useState<number[]>([]);
  //   const [showCart, setShowCart] = useState(false);
  //   const [showDetails, setShowDetails] = useState<number | null>(null);
  //   const [showPayment, setShowPayment] = useState(false);

  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       once: true,
  //     });
  //   }, []);

  //   const addToCart = (id: number) => {
  //     setCart([...cart, id]);
  //     toast.success('Item added Successfully');
  //   };

  //   const removeFromCart = (id: number) => {
  //     setCart(cart.filter(itemId => itemId !== id));
  //   };

  //   const getTotalAmount = () => {
  //     return cart.reduce((total, id) => {
  //       const item = testPackages.find(pkg => pkg.id === id);
  //       return total + (item?.price || 0);
  //     }, 0);
  //   };

  //   const scrollToSection = (id: string) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   };

  //   return (
  //     <div className="min-h-screen bg-gray-50 overflow-x-hidden">
  //       {/* Navbar */}
  //       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
  //         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
  //           <div className="flex items-center space-x-3">
  //             <img src={logo} alt="Logo" className="h-[42px] w-auto sm:h-[75px]" />
  //             <span className="text-2xl sm:text-3xl font-bold text-[#836e40]">DEEP DIAGNOSTICS</span>
  //           </div>
  //           <div className="hidden md:flex space-x-8">
  //             {['home', 'services', 'tests', 'lab-info', 'contact'].map((item) => (
  //               <button
  //                 key={item}
  //                 onClick={() => scrollToSection(item)}
  //                 className="nav-link capitalize"
  //               >
  //                 {item.replace('-', ' ')}
  //               </button>
  //             ))}
  //           </div>
  //           <button
  //             onClick={() => setShowCart(true)}
  //             className="relative p-2 hover:scale-110 transition-transform duration-300"
  //           >
  //             <ShoppingCart className="h-6 w-6 text-secondary" />
  //             {cart.length > 0 && (
  //               <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
  //                 {cart.length}
  //               </span>
  //             )}
  //           </button>
  //         </div>
  //       </nav>

  //       <Toaster />

  //       {/* Hero Section */}
  //       <section id="home" className="pt-16">
  //         <Swiper
  //           modules={[Navigation, Pagination, Autoplay]}
  //           navigation
  //           pagination={{ clickable: true }}
  //           autoplay={{ delay: 5000 }}
  //           className="h-[600px] md:h-[700px]"
  //         >
  //           <SwiperSlide>
  //             <div
  //               className="h-full bg-cover bg-center relative"
  //               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=2000)' }}
  //             >
  //               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
  //                 <div className="container mx-auto px-4">
  //                   <div className="max-w-3xl" data-aos="fade-right">
  //                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
  //                       Advanced Diagnostics for Better Healthcare
  //                     </h1>
  //                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
  //                       State-of-the-art laboratory services with precise results
  //                     </p>
  //                     <button
  //                       onClick={() => scrollToSection('tests')}
  //                       className="btn-primary text-lg"
  //                     >
  //                       Explore Health Checkups
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </SwiperSlide>
  //         </Swiper>
  //       </section>

  //       {/* Services Section */}
  //       <section id="services" className="py-20">
  //         <div className="container mx-auto px-4">
  //           <h2 className="section-title" data-aos="fade-up">Our Services</h2>
  //           <div className="grid md:grid-cols-3 gap-8 mt-12">
  //             {[
  //               {
  //                 title: 'Home Collection',
  //                 description: 'Professional sample collection at your doorstep',
  //                 image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
  //               },
  //               {
  //                 title: 'Lab Visit',
  //                 description: 'Modern facility with cutting-edge equipment',
  //                 image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  //               },
  //               {
  //                 title: 'Emergency Tests',
  //                 description: 'Round-the-clock emergency testing services',
  //                 image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800'
  //               }
  //             ].map((service, index) => (
  //               <div
  //                 key={index}
  //                 className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
  //                 data-aos="fade-up"
  //                 data-aos-delay={index * 100}
  //               >
  //                 <div className="relative h-48 overflow-hidden">
  //                   <img
  //                     src={service.image}
  //                     alt={service.title}
  //                     className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
  //                   />
  //                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  //                 </div>
  //                 <div className="p-6 px-3">
  //                   <h3 className="!text[15px] font-bold text-secondary mb-3">
  //                     {service.title}
  //                   </h3>
  //                   <p className="text-gray-600">{service.description}</p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Tests Section */}
  //       <section id="tests" className="pt-20 pb-20 bg-white">
  //         <div className="container mx-auto px-4">
  //           <h2 className="section-title" data-aos="fade-up">Health Check Packages</h2>
  //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
  //             {testPackages.map((pkg) => (
  //               <div
  //                 key={pkg.id}
  //                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  //                 data-aos="fade-up"
  //               >
  //                 <div className="relative h-48">
  //                   <img
  //                     src={pkg.image}
  //                     alt={pkg.name}
  //                     className="w-full h-full object-cover"
  //                   />
  //                   <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
  //                 </div>
  //                 <div className="p-6 px-3">
  //                   <h3 className="!text[15px] font-bold text-secondary mb-2">
  //                     {pkg.name}
  //                   </h3>
  //                   <div className="flex items-center justify-between mb-4">
  //                     <span className="text-primary font-bold">₹{pkg.price}</span>
  //                     <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
  //                   </div>
  //                   <div className="flex items-center justify-between mb-4">
  //                     <span className="text-sm text-gray-600">{pkg.tests} Tests Included</span>
  //                     <button
  //                       onClick={() => setShowDetails(pkg.id)}
  //                       className="text-primary hover:text-[#836e40] text-lg"
  //                     >
  //                       View Details
  //                     </button>
  //                   </div>
  //                   <button
  //                     onClick={() => addToCart(pkg.id)}
  //                     className="w-full bg-[#836e40] hover:bg-primary text-white py-2 rounded transition-colors duration-300"
  //                   >
  //                     Add to Cart
  //                   </button>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Lab Info Section */}
  //       <section id="lab-info" className="py-20 relative overflow-hidden">
  //         <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 opacity-95" />
  //         <div className="container mx-auto px-4 relative z-10">
  //           <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
  //             Why Choose Deep Diagnostic?
  //           </h2>
  //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  //             {[
  //               { number: '20+', text: 'Years Experience', icon: '🏆' },
  //               { number: '50,000+', text: 'Tests Conducted', icon: '🔬' },
  //               { number: '99.9%', text: 'Accuracy Rate', icon: '✓' },
  //               { number: '24/7', text: 'Emergency Service', icon: '⚡' }
  //             ].map((stat, index) => (
  //               <div
  //                 key={index}
  //                 className="stat-card"
  //                 data-aos="zoom-in"
  //                 data-aos-delay={index * 100}
  //               >
  //                 <div className="text-5xl mb-4">{stat.icon}</div>
  //                 <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
  //                 <div className="text-gray-600 font-medium">{stat.text}</div>
  //               </div>
  //             ))}
  //           </div>

  //           <div className="mt-20 grid md:grid-cols-2 gap-12">
  //             <div className="space-y-6" data-aos="fade-right">
  //               <h3 className="text-3xl font-bold text-white mb-6">Advanced Technology</h3>
  //               <div className="space-y-4 text-gray-200">
  //                 <p>• State-of-the-art diagnostic equipment</p>
  //                 <p>• Digital reporting system</p>
  //                 <p>• AI-assisted analysis for accuracy</p>
  //                 <p>• ISO certified laboratory</p>
  //               </div>
  //             </div>
  //             <div className="space-y-6" data-aos="fade-left">
  //               <h3 className="text-3xl font-bold text-white mb-6">Quality Assurance</h3>
  //               <div className="space-y-4 text-gray-200">
  //                 <p>• NABL accredited facility</p>
  //                 <p>• Regular quality checks</p>
  //                 <p>• Expert pathologists</p>
  //                 <p>• Quick turnaround time</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Contact Section */}
  //       <section id="contact" className="py-20 bg-gray-100">
  //         <div className="container mx-auto px-4">
  //           <h2 className="section-title mb-16" data-aos="fade-up">Get in Touch</h2>
  //           <div className="grid lg:grid-cols-2 gap-12 items-start">
  //             <div className="space-y-8" data-aos="fade-right">
  //               <div className="contact-info">
  //                 <h3 className="text-2xl font-bold text-secondary mb-6">Visit Our Lab</h3>
  //                 <div className="space-y-4">
  //                   <div className="flex items-start space-x-4">
  //                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
  //                       <span className="text-2xl">📍</span>
  //                     </div>
  //                     <div>
  //                       <h4 className="font-semibold text-gray-900">Address</h4>
  //                       <p className="text-gray-600">123 Medical Complex, Mall Road</p>
  //                       <p className="text-gray-600">Amritsar, Punjab, India</p>
  //                     </div>
  //                   </div>
  //                   <div className="flex items-start space-x-4">
  //                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
  //                       <span className="text-2xl">📞</span>
  //                     </div>
  //                     <div>
  //                       <h4 className="font-semibold text-gray-900">Phone</h4>
  //                       <p className="text-gray-600">+91 1234567890</p>
  //                       <p className="text-gray-600">+91 9876543210</p>
  //                     </div>
  //                   </div>
  //                   <div className="flex items-start space-x-4">
  //                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
  //                       <span className="text-2xl">✉️</span>
  //                     </div>
  //                     <div>
  //                       <h4 className="font-semibold text-gray-900">Email</h4>
  //                       <p className="text-gray-600">info@deepdiagnostic.com</p>
  //                       <p className="text-gray-600">support@deepdiagnostic.com</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="contact-info">
  //                 <h3 className="text-2xl font-bold text-secondary mb-6">Working Hours</h3>
  //                 <div className="space-y-3">
  //                   <div className="flex justify-between">
  //                     <span className="text-gray-600">Monday - Saturday</span>
  //                     <span className="font-semibold">7:00 AM - 9:00 PM</span>
  //                   </div>
  //                   <div className="flex justify-between">
  //                     <span className="text-gray-600">Sunday</span>
  //                     <span className="font-semibold">8:00 AM - 6:00 PM</span>
  //                   </div>
  //                   <div className="mt-4 p-3 bg-primary/10 rounded-lg">
  //                     <p className="text-sm text-gray-700">
  //                       24/7 Emergency Services Available
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div data-aos="fade-left">
  //               <div className="map-container">
  //                 <iframe
  //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0294044563335!2d74.87345931544636!3d31.634777981330785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa0e061f45%3A0x9f62a10d29f7c7c3!2sMall%20Rd%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
  //                   width="100%"
  //                   height="100%"
  //                   style={{ border: 0 }}
  //                   allowFullScreen
  //                   loading="lazy"
  //                 ></iframe>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Footer */}
  //       <footer className="gradient-bg text-white py-16">
  //         <div className="container mx-auto px-4">
  //           <div className="grid md:grid-cols-4 gap-12">
  //             <div className="space-y-4">
  //               <div className="flex items-center space-x-2">
  //                 <Microscope className="h-8 w-8 text-primary" />
  //                 <span className="text-xl font-bold">Deep Diagnostic</span>
  //               </div>
  //               <p className="text-gray-300">
  //                 Leading the way in medical diagnostics with precision and care.
  //               </p>
  //             </div>
  //             <div>
  //               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
  //               <ul className="space-y-2">
  //                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
  //                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
  //                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Test Packages</a></li>
  //                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
  //               </ul>
  //             </div>
  //             <div>
  //               <h3 className="text-lg font-bold mb-4">Legal</h3>
  //               <ul className="space-y-2">
  //                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
  //                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
  //                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
  //               </ul>
  //             </div>
  //             <div>
  //               <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
  //               <div className="flex space-x-4">
  //                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
  //                   Facebook
  //                 </a>
  //                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
  //                   Twitter
  //                 </a>
  //                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
  //                   LinkedIn
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="mt-12 pt-8 border-t border-gray-700">
  //             <p className="text-center text-gray-400">
  //               © {new Date().getFullYear()} Deep Diagnostic. All rights reserved.
  //             </p>
  //           </div>
  //         </div>
  //       </footer>

  //       {/* Cart Modal */}
  //       {showCart && (
  //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
  //             <div className="flex justify-between items-center mb-6">
  //               <h2 className="text-2xl font-bold text-[#000080]">Your Cart</h2>
  //               <button onClick={() => setShowCart(false)}>
  //                 <X className="h-6 w-6" />
  //               </button>
  //             </div>
  //             {cart.length === 0 ? (
  //               <p className="text-gray-600">Your cart is empty</p>
  //             ) : (
  //               <>
  //                 {cart.map(id => {
  //                   const item = testPackages.find(pkg => pkg.id === id);
  //                   return (
  //                     <div key={id} className="flex justify-between items-center mb-4">
  //                       <div>
  //                         <h3 className="font-semibold">{item?.name}</h3>
  //                         <p className="text-[#D4AF37]">₹{item?.price}</p>
  //                       </div>
  //                       <button
  //                         onClick={() => removeFromCart(id)}
  //                         className="text-red-500 hover:text-red-700"
  //                       >
  //                         Remove
  //                       </button>
  //                     </div>
  //                   );
  //                 })}
  //                 <div className="border-t pt-4 mt-4">
  //                   <div className="flex justify-between items-center mb-4">
  //                     <span className="font-bold">Total:</span>
  //                     <span className="text-xl font-bold text-[#D4AF37]">₹{getTotalAmount()}</span>
  //                   </div>
  //                   <button
  //                     onClick={() => {
  //                       setShowCart(false);
  //                       setShowPayment(true);
  //                     }}
  //                     className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#B38F2D] transition duration-300"
  //                   >
  //                     Proceed to Payment
  //                   </button>
  //                 </div>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       )}

  //       {/* Test Details Modal */}
  //       {showDetails !== null && (
  //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white rounded-lg p-8 max-w-md w-full">
  //             <div className="flex justify-between items-center mb-6">
  //               <h2 className="text-2xl font-bold text-primary ">
  //                 {testPackages.find(pkg => pkg.id === showDetails)?.name}
  //               </h2>
  //               <button onClick={() => setShowDetails(null)}>
  //                 <X className="h-6 w-6" />
  //               </button>
  //             </div>
  //             <h3 className="font-semibold text-[#836e40] mb-2">Included Tests:</h3>
  //             <ul className="list-disc list-inside space-y-1 mb-6">
  //               {testPackages.find(pkg => pkg.id === showDetails)?.details.map((test, index) => (
  //                 <li key={index} className="text-gray-600">{test}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //       )}

  //       {/* Payment Modal */}
  //       {showPayment && (
  //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white rounded-lg p-8 max-w-md w-full">
  //             <div className="flex justify-between items-center mb-6">
  //               <h2 className="text-2xl font-bold text-[#000080]">Scan to Pay</h2>
  //               <button onClick={() => setShowPayment(false)}>
  //                 <X className="h-6 w-6" />
  //               </button>
  //             </div>
  //             <div className="flex flex-col items-center">
  //               <QRCode
  //                 value={`upi://pay?pa=shabdpreetz@okhdfcbank&pn=Deep%20Diagnostic&am=${getTotalAmount()}&cu=INR`}
  //                 size={200}
  //                 level="H"
  //               />
  //               <p className="mt-4 text-center text-gray-600">
  //                 Scan this QR code with any UPI app to complete your payment
  //               </p>
  //             </div>
  //             <div className="flex flex-col justify-center items-center">
  //               <p className="mt-4 text-[#836e40] font-bold">OR</p>
  //               <button className="mt-3 p-2 text-white rounded-lg hover:bg-[#836e40] bg-primary font-bold">
  //                 Pay In Person
  //               </button>
  //               <p className="mt-3">Done With the Payment?</p>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  // export default App;







//   import toast, { Toaster } from 'react-hot-toast';
// import { useEffect, useState } from 'react';
// import { Microscope, ShoppingCart, X } from 'lucide-react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import AOS from 'aos';
// import QRCode from 'qrcode.react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'aos/dist/aos.css';
// import logo from "./assets/logo.png";

// // Test packages data
//  const testPackages = [
//       { id: 1, name: 'Wellwise Essential Profile', tests: 12, originalPrice: 999, price: 500, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope'] },
//       { id: 2, name: 'Wellwise Advanced with Allergy Screen Profile', tests: 31, originalPrice: 3000, price: 2900, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope', 'Complete Haemogram', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 3, name: 'Wellwise Advanced Profile', tests: 21, originalPrice: 3499, price: 2200, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 4, name: 'Wellwise Advanced All Day', tests: 6, originalPrice: 3000, price: 2200, image: 'https://images.unsplash.com/photo-1579165466998-92c516f2f94f?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//       { id: 5, name: 'Wellwise Platinum Profile', tests: 21, originalPrice: 13430, price: 5999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 6, name: 'Wellwise Basic', tests: 15, originalPrice: 800, price: 299, image: 'https://images.unsplash.com/photo-1576086213149-9e0a42ab17f3?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//       { id: 7, name: 'Covid Antigen', tests: 15, originalPrice: 750, price: 450, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//       { id: 8, name: 'WellWise Senior Citizen Profile - Male', tests: 15, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//       { id: 9, name: 'WellWise Senior Citizen Profile - Female', tests: 13, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1579684453377-48ec05c5a4c7?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Lipid Profile', '25 Hydroxy Vitamin D Level', 'Vitamin B12', 'Total – Thyroid Profile', 'KFT Profile with Calcium', 'Inorganic Phosphorus', 'Liver Function Test Profile', 'Urine Routine And Microscopy', 'Rheumatoid Factor (Quantitative)', 'Folate'] },
//       { id: 10, name: 'Accuprobe 1.3', tests: 21, originalPrice: 2350, price: 1500, image: 'https://images.unsplash.com/photo-1576086213286-131c2aa4f11e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 11, name: 'Medcis 1.3', tests: 21, originalPrice: 5570, price: 2499, image: 'https://images.unsplash.com/photo-1581093458759-bf91c4e9d24e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 12, name: 'Wellwise Total Profile', tests: 6, originalPrice: 2000, price: 1699, image: 'https://images.unsplash.com/photo-1579684385215-936c0f6a5618?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 13, name: 'HBA1C 3 Month Average Sugar', tests: 21, originalPrice: 450, price: 350, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 14, name: 'Covid 19 Testing', tests: 21, originalPrice: 750, price: 700, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 15, name: 'Thyroid Profile', tests: 21, originalPrice: 450, price: 400, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//       { id: 16, name: 'Full Body Checkup (SRL)', tests: 4, originalPrice: 2200, price: 2000, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//       { id: 17, name: 'Wellwise Essential Profile with Smart Report', tests: 12, originalPrice: 1950, price: 999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscopy'] }
//     ];


// function App() {
//   const [cart, setCart] = useState<number[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showDetails, setShowDetails] = useState<number | null>(null);
//   const [showPayment, setShowPayment] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   const addToCart = (id: number) => {
//     setCart([...cart, id]);
//     toast.success('Item added Successfully');
//   };

//   const removeFromCart = (id: number) => {
//     setCart(cart.filter(itemId => itemId !== id));
//   };

//   const getTotalAmount = () => {
//     return cart.reduce((total, id) => {
//       const item = testPackages.find(pkg => pkg.id === id);
//       return total + (item?.price || 0);
//     }, 0);
//   };

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 overflow-x-hidden">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <img src={logo} alt="Logo" className="h-[42px] w-auto sm:h-[75px]" />
//             <span className="text-2xl sm:text-3xl font-bold text-[#836e40]">DEEP DIAGNOSTICS</span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             {['home', 'services', 'tests', 'lab-info', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="nav-link capitalize"
//               >
//                 {item.replace('-', ' ')}
//               </button>
//             ))}
//           </div>
//           <button
//             onClick={() => setShowCart(true)}
//             className="relative p-2 hover:scale-110 transition-transform duration-300"
//           >
//             <ShoppingCart className="h-6 w-6 text-secondary" />
//             {cart.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </nav>

//       <Toaster />

//       {/* Hero Section with 3 Slides */}
//       <section id="home" className="pt-16">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000 }}
//           className="h-[600px] md:h-[700px]"
//         >
//           {/* Slide 1 */}
//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-right">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Advanced Diagnostics for Better Healthcare
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       State-of-the-art laboratory services with precise results
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('tests')}
//                       className="btn-primary text-lg"
//                     >
//                       Explore Health Checkups
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Slide 2 */}
//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-left">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Modern Facilities & Expert Analysis
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       Combining advanced technology with expert care.
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('services')}
//                       className="btn-primary text-lg"
//                     >
//                       Our Services
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Slide 3 */}
//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-up">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Trusted Diagnostics You Can Rely On
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       Delivering swift and accurate results for your peace of mind.
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('contact')}
//                       className="btn-primary text-lg"
//                     >
//                       Contact Us
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title" data-aos="fade-up">Our Services</h2>
//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             {[
//               {
//                 title: 'Home Collection',
//                 description: 'Professional sample collection at your doorstep',
//                 image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Lab Visit',
//                 description: 'Modern facility with cutting-edge equipment',
//                 image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Emergency Tests',
//                 description: 'Round-the-clock emergency testing services',
//                 image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800'
//               }
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//                 <div className="p-6 px-3">
//                   <h3 className="!text[15px] font-bold text-secondary mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tests Section */}
//       <section id="tests" className="pt-20 pb-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title" data-aos="fade-up">Health Check Packages</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {testPackages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 data-aos="fade-up"
//               >
//                 <div className="relative h-48">
//                   <img
//                     src={pkg.image}
//                     alt={pkg.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
//                 </div>
//                 <div className="p-6 px-3">
//                   <h3 className="!text[15px] font-bold text-secondary mb-2">
//                     {pkg.name}
//                   </h3>
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-primary font-bold">₹{pkg.price}</span>
//                     <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
//                   </div>
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-sm text-gray-600">{pkg.tests} Tests Included</span>
//                     <button
//                       onClick={() => setShowDetails(pkg.id)}
//                       className="text-primary hover:text-[#836e40] text-lg"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => addToCart(pkg.id)}
//                     className="w-full bg-[#836e40] hover:bg-primary text-white py-2 rounded transition-colors duration-300"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lab Info Section */}
//       <section id="lab-info" className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 opacity-95" />
//         <div className="container mx-auto px-4 relative z-10">
//           <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
//             Why Choose Deep Diagnostic?
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: '20+', text: 'Years Experience', icon: '🏆' },
//               { number: '50,000+', text: 'Tests Conducted', icon: '🔬' },
//               { number: '99.9%', text: 'Accuracy Rate', icon: '✓' },
//               { number: '24/7', text: 'Emergency Service', icon: '⚡' }
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="stat-card"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="text-5xl mb-4">{stat.icon}</div>
//                 <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium">{stat.text}</div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 grid md:grid-cols-2 gap-12">
//             <div className="space-y-6" data-aos="fade-right">
//               <h3 className="text-3xl font-bold text-white mb-6">Advanced Technology</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• State-of-the-art diagnostic equipment</p>
//                 <p>• Digital reporting system</p>
//                 <p>• AI-assisted analysis for accuracy</p>
//                 <p>• ISO certified laboratory</p>
//               </div>
//             </div>
//             <div className="space-y-6" data-aos="fade-left">
//               <h3 className="text-3xl font-bold text-white mb-6">Quality Assurance</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• NABL accredited facility</p>
//                 <p>• Regular quality checks</p>
//                 <p>• Expert pathologists</p>
//                 <p>• Quick turnaround time</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title mb-16" data-aos="fade-up">Get in Touch</h2>
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="space-y-8" data-aos="fade-right">
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Visit Our Lab</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📍</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Address</h4>
//                       <p className="text-gray-600">123 Medical Complex, Mall Road</p>
//                       <p className="text-gray-600">Amritsar, Punjab, India</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📞</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Phone</h4>
//                       <p className="text-gray-600">+91 1234567890</p>
//                       <p className="text-gray-600">+91 9876543210</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">✉️</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Email</h4>
//                       <p className="text-gray-600">info@deepdiagnostic.com</p>
//                       <p className="text-gray-600">support@deepdiagnostic.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Working Hours</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Monday - Saturday</span>
//                     <span className="font-semibold">7:00 AM - 9:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Sunday</span>
//                     <span className="font-semibold">8:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="mt-4 p-3 bg-primary/10 rounded-lg">
//                     <p className="text-sm text-gray-700">
//                       24/7 Emergency Services Available
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-aos="fade-left">
//               <div className="map-container">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0294044563335!2d74.87345931544636!3d31.634777981330785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa0e061f45%3A0x9f62a10d29f7c7c3!2sMall%20Rd%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="gradient-bg text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-12">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Microscope className="h-8 w-8 text-primary" />
//                 <span className="text-xl font-bold">Deep Diagnostic</span>
//               </div>
//               <p className="text-gray-300">
//                 Leading the way in medical diagnostics with precision and care.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Test Packages</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   Facebook
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   Twitter
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-gray-700">
//             <p className="text-center text-gray-400">
//               © {new Date().getFullYear()} Deep Diagnostic. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Cart Modal */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Your Cart</h2>
//               <button onClick={() => setShowCart(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             {cart.length === 0 ? (
//               <p className="text-gray-600">Your cart is empty</p>
//             ) : (
//               <>
//                 {cart.map(id => {
//                   const item = testPackages.find(pkg => pkg.id === id);
//                   return (
//                     <div key={id} className="flex justify-between items-center mb-4">
//                       <div>
//                         <h3 className="font-semibold">{item?.name}</h3>
//                         <p className="text-[#D4AF37]">₹{item?.price}</p>
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   );
//                 })}
//                 <div className="border-t pt-4 mt-4">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="font-bold">Total:</span>
//                     <span className="text-xl font-bold text-[#D4AF37]">₹{getTotalAmount()}</span>
//                   </div>
//                   <button
//                     onClick={() => {
//                       setShowCart(false);
//                       setShowPayment(true);
//                     }}
//                     className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#B38F2D] transition duration-300"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Test Details Modal */}
//       {showDetails !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-primary ">
//                 {testPackages.find(pkg => pkg.id === showDetails)?.name}
//               </h2>
//               <button onClick={() => setShowDetails(null)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <h3 className="font-semibold text-[#836e40] mb-2">Included Tests:</h3>
//             <ul className="list-disc list-inside space-y-1 mb-6">
//               {testPackages.find(pkg => pkg.id === showDetails)?.details.map((test, index) => (
//                 <li key={index} className="text-gray-600">{test}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Payment Modal */}
//       {showPayment && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Scan to Pay</h2>
//               <button onClick={() => setShowPayment(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="flex flex-col items-center">
//               <QRCode
//                 value={`upi://pay?pa=shabdpreetz@okhdfcbank&pn=Deep%20Diagnostic&am=${getTotalAmount()}&cu=INR`}
//                 size={200}
//                 level="H"
//               />
//               <p className="mt-4 text-center text-gray-600">
//                 Scan this QR code with any UPI app to complete your payment
//               </p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <p className="mt-4 text-[#836e40] font-bold">OR</p>
//               <button className="mt-3 p-2 text-white rounded-lg hover:bg-[#836e40] bg-primary font-bold">
//                 Pay In Person
//               </button>
//               <p className="mt-3">Done With the Payment?</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





// Code With Arrow Button in swipper



// import toast, { Toaster } from 'react-hot-toast';
// import { useEffect, useState } from 'react';
// import { Microscope, ShoppingCart, X } from 'lucide-react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import AOS from 'aos';
// import QRCode from 'qrcode.react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'aos/dist/aos.css';
// import logo from "./assets/logo.png";

// // Add this CSS in your global stylesheet or in a <style> tag in your index.html file
// // to override and position the swiper arrows.
// const customStyles = `
//   .swiper-button-prev, .swiper-button-next {
//     color: #fff;             /* Arrow color */
//     width: 3rem;             /* Increase hit area */
//     height: 3rem;
//     top: 50%;
//     transform: translateY(-50%);
//     z-index: 100;
//   }
//   .swiper-button-prev {
//     left: 1rem;              /* Adjust left spacing */
//   }
//   .swiper-button-next {
//     right: 1rem;             /* Adjust right spacing */
//   }
// `;

// const styleEl = document.createElement('style');
// styleEl.innerHTML = customStyles;
// document.head.appendChild(styleEl);

// // Test packages data
// const testPackages = [
//   { id: 1, name: 'Wellwise Essential Profile', tests: 12, originalPrice: 999, price: 500, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope'] },
//   { id: 2, name: 'Wellwise Advanced with Allergy Screen Profile', tests: 31, originalPrice: 3000, price: 2900, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope', 'Complete Haemogram', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 3, name: 'Wellwise Advanced Profile', tests: 21, originalPrice: 3499, price: 2200, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 4, name: 'Wellwise Advanced All Day', tests: 6, originalPrice: 3000, price: 2200, image: 'https://images.unsplash.com/photo-1579165466998-92c516f2f94f?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//   { id: 5, name: 'Wellwise Platinum Profile', tests: 21, originalPrice: 13430, price: 5999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 6, name: 'Wellwise Basic', tests: 15, originalPrice: 800, price: 299, image: 'https://images.unsplash.com/photo-1576086213149-9e0a42ab17f3?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 7, name: 'Covid Antigen', tests: 15, originalPrice: 750, price: 450, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 8, name: 'WellWise Senior Citizen Profile - Male', tests: 15, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
//   { id: 9, name: 'WellWise Senior Citizen Profile - Female', tests: 13, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1579684453377-48ec05c5a4c7?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Lipid Profile', '25 Hydroxy Vitamin D Level', 'Vitamin B12', 'Total – Thyroid Profile', 'KFT Profile with Calcium', 'Inorganic Phosphorus', 'Liver Function Test Profile', 'Urine Routine And Microscopy', 'Rheumatoid Factor (Quantitative)', 'Folate'] },
//   { id: 10, name: 'Accuprobe 1.3', tests: 21, originalPrice: 2350, price: 1500, image: 'https://images.unsplash.com/photo-1576086213286-131c2aa4f11e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 11, name: 'Medcis 1.3', tests: 21, originalPrice: 5570, price: 2499, image: 'https://images.unsplash.com/photo-1581093458759-bf91c4e9d24e?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 12, name: 'Wellwise Total Profile', tests: 6, originalPrice: 2000, price: 1699, image: 'https://images.unsplash.com/photo-1579684385215-936c0f6a5618?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 13, name: 'HBA1C 3 Month Average Sugar', tests: 21, originalPrice: 450, price: 350, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 14, name: 'Covid 19 Testing', tests: 21, originalPrice: 750, price: 700, image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 15, name: 'Thyroid Profile', tests: 21, originalPrice: 450, price: 400, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
//   { id: 16, name: 'Full Body Checkup (SRL)', tests: 4, originalPrice: 2200, price: 2000, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
//   { id: 17, name: 'Wellwise Essential Profile with Smart Report', tests: 12, originalPrice: 1950, price: 999, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscopy'] }
// ];

// function App() {
//   const [cart, setCart] = useState<number[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showDetails, setShowDetails] = useState<number | null>(null);
//   const [showPayment, setShowPayment] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   const addToCart = (id: number) => {
//     setCart([...cart, id]);
//     toast.success('Item added Successfully');
//   };

//   const removeFromCart = (id: number) => {
//     setCart(cart.filter(itemId => itemId !== id));
//   };

//   const getTotalAmount = () => {
//     return cart.reduce((total, id) => {
//       const item = testPackages.find(pkg => pkg.id === id);
//       return total + (item?.price || 0);
//     }, 0);
//   };

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 overflow-x-hidden">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <img src={logo} alt="Logo" className="h-[42px] w-auto sm:h-[75px]" />
//             <span className="text-2xl sm:text-3xl font-bold text-[#836e40]">DEEP DIAGNOSTICS</span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             {['home', 'services', 'tests', 'lab-info', 'contact'].map(item => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="nav-link capitalize"
//               >
//                 {item.replace('-', ' ')}
//               </button>
//             ))}
//           </div>
//           <button
//             onClick={() => setShowCart(true)}
//             className="relative p-2 hover:scale-110 transition-transform duration-300"
//           >
//             <ShoppingCart className="h-6 w-6 text-secondary" />
//             {cart.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </nav>

//       <Toaster />

//       {/* Hero Section with 3 Slides */}
//       <section id="home" className="pt-16">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000 }}
//           className="h-[600px] md:h-[700px]"
//         >
//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-right">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Advanced Diagnostics for Better Healthcare
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       State-of-the-art laboratory services with precise results
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('tests')}
//                       className="btn-primary text-lg"
//                     >
//                       Explore Health Checkups
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-right">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Reliable & Accurate Reports
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       We ensure that every test meets the highest quality standards.
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('tests')}
//                       className="btn-primary text-lg"
//                     >
//                       Explore Health Checkups
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
          
//           <SwiperSlide>
//             <div
//               className="h-full bg-cover bg-center relative"
//               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000)' }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
//                 <div className="container mx-auto px-4">
//                   <div className="max-w-3xl" data-aos="fade-right">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                       Modern Lab Facilities
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-200 mb-8">
//                       Equipped with advanced technology for accurate testing.
//                     </p>
//                     <button
//                       onClick={() => scrollToSection('tests')}
//                       className="btn-primary text-lg"
//                     >
//                       Explore Health Checkups
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title" data-aos="fade-up">Our Services</h2>
//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             {[
//               {
//                 title: 'Home Collection',
//                 description: 'Professional sample collection at your doorstep',
//                 image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Lab Visit',
//                 description: 'Modern facility with cutting-edge equipment',
//                 image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
//               },
//               {
//                 title: 'Emergency Tests',
//                 description: 'Round-the-clock emergency testing services',
//                 image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800'
//               }
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//                 <div className="p-6 px-3">
//                   <h3 className="!text[15px] font-bold text-secondary mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tests Section */}
//       <section id="tests" className="pt-20 pb-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title" data-aos="fade-up">Health Check Packages</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {testPackages.map(pkg => (
//               <div
//                 key={pkg.id}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 data-aos="fade-up"
//               >
//                 <div className="relative h-48">
//                   <img
//                     src={pkg.image}
//                     alt={pkg.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
//                 </div>
//                 <div className="p-6 px-3">
//                   <h3 className="!text[15px] font-bold text-secondary mb-2">
//                     {pkg.name}
//                   </h3>
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-primary font-bold">₹{pkg.price}</span>
//                     <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
//                   </div>
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-sm text-gray-600">{pkg.tests} Tests Included</span>
//                     <button
//                       onClick={() => setShowDetails(pkg.id)}
//                       className="text-primary hover:text-[#836e40] text-lg"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => addToCart(pkg.id)}
//                     className="w-full bg-[#836e40] hover:bg-primary text-white py-2 rounded transition-colors duration-300"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lab Info Section */}
//       <section id="lab-info" className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 opacity-95" />
//         <div className="container mx-auto px-4 relative z-10">
//           <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
//             Why Choose Deep Diagnostic?
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: '20+', text: 'Years Experience', icon: '🏆' },
//               { number: '50,000+', text: 'Tests Conducted', icon: '🔬' },
//               { number: '99.9%', text: 'Accuracy Rate', icon: '✓' },
//               { number: '24/7', text: 'Emergency Service', icon: '⚡' }
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="stat-card"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="text-5xl mb-4">{stat.icon}</div>
//                 <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium">{stat.text}</div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 grid md:grid-cols-2 gap-12">
//             <div className="space-y-6" data-aos="fade-right">
//               <h3 className="text-3xl font-bold text-white mb-6">Advanced Technology</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• State-of-the-art diagnostic equipment</p>
//                 <p>• Digital reporting system</p>
//                 <p>• AI-assisted analysis for accuracy</p>
//                 <p>• ISO certified laboratory</p>
//               </div>
//             </div>
//             <div className="space-y-6" data-aos="fade-left">
//               <h3 className="text-3xl font-bold text-white mb-6">Quality Assurance</h3>
//               <div className="space-y-4 text-gray-200">
//                 <p>• NABL accredited facility</p>
//                 <p>• Regular quality checks</p>
//                 <p>• Expert pathologists</p>
//                 <p>• Quick turnaround time</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title mb-16" data-aos="fade-up">Get in Touch</h2>
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="space-y-8" data-aos="fade-right">
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Visit Our Lab</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📍</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Address</h4>
//                       <p className="text-gray-600">123 Medical Complex, Mall Road</p>
//                       <p className="text-gray-600">Amritsar, Punjab, India</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">📞</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Phone</h4>
//                       <p className="text-gray-600">+91 1234567890</p>
//                       <p className="text-gray-600">+91 9876543210</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <span className="text-2xl">✉️</span>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">Email</h4>
//                       <p className="text-gray-600">info@deepdiagnostic.com</p>
//                       <p className="text-gray-600">support@deepdiagnostic.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="contact-info">
//                 <h3 className="text-2xl font-bold text-secondary mb-6">Working Hours</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Monday - Saturday</span>
//                     <span className="font-semibold">7:00 AM - 9:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Sunday</span>
//                     <span className="font-semibold">8:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="mt-4 p-3 bg-primary/10 rounded-lg">
//                     <p className="text-sm text-gray-700">24/7 Emergency Services Available</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-aos="fade-left">
//               <div className="map-container">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0294044563335!2d74.87345931544636!3d31.634777981330785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa0e061f45%3A0x9f62a10d29f7c7c3!2sMall%20Rd%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="gradient-bg text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-12">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Microscope className="h-8 w-8 text-primary" />
//                 <span className="text-xl font-bold">Deep Diagnostic</span>
//               </div>
//               <p className="text-gray-300">Leading the way in medical diagnostics with precision and care.</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Test Packages</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">Facebook</a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">Twitter</a>
//                 <a href="#" className="text-gray-300 hover:text-primary transition-colors">LinkedIn</a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-gray-700">
//             <p className="text-center text-gray-400">© {new Date().getFullYear()} Deep Diagnostic. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Cart Modal */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Your Cart</h2>
//               <button onClick={() => setShowCart(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             {cart.length === 0 ? (
//               <p className="text-gray-600">Your cart is empty</p>
//             ) : (
//               <>
//                 {cart.map(id => {
//                   const item = testPackages.find(pkg => pkg.id === id);
//                   return (
//                     <div key={id} className="flex justify-between items-center mb-4">
//                       <div>
//                         <h3 className="font-semibold">{item?.name}</h3>
//                         <p className="text-[#D4AF37]">₹{item?.price}</p>
//                       </div>
//                       <button onClick={() => removeFromCart(id)} className="text-red-500 hover:text-red-700">
//                         Remove
//                       </button>
//                     </div>
//                   );
//                 })}
//                 <div className="border-t pt-4 mt-4">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="font-bold">Total:</span>
//                     <span className="text-xl font-bold text-[#D4AF37]">₹{getTotalAmount()}</span>
//                   </div>
//                   <button
//                     onClick={() => {
//                       setShowCart(false);
//                       setShowPayment(true);
//                     }}
//                     className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#B38F2D] transition duration-300"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Test Details Modal */}
//       {showDetails !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-primary ">
//                 {testPackages.find(pkg => pkg.id === showDetails)?.name}
//               </h2>
//               <button onClick={() => setShowDetails(null)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <h3 className="font-semibold text-[#836e40] mb-2">Included Tests:</h3>
//             <ul className="list-disc list-inside space-y-1 mb-6">
//               {testPackages.find(pkg => pkg.id === showDetails)?.details.map((test, index) => (
//                 <li key={index} className="text-gray-600">{test}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Payment Modal */}
//       {showPayment && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-[#000080]">Scan to Pay</h2>
//               <button onClick={() => setShowPayment(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="flex flex-col items-center">
//               <QRCode
//                 value={`upi://pay?pa=shabdpreetz@okhdfcbank&pn=Deep%20Diagnostic&am=${getTotalAmount()}&cu=INR`}
//                 size={200}
//                 level="H"
//               />
//               <p className="mt-4 text-center text-gray-600">
//                 Scan this QR code with any UPI app to complete your payment
//               </p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <p className="mt-4 text-[#836e40] font-bold">OR</p>
//               <button className="mt-3 p-2 text-white rounded-lg hover:bg-[#836e40] bg-primary font-bold">
//                 Pay In Person
//               </button>
//               <p className="mt-3">Done With the Payment?</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;






import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Microscope, ShoppingCart, X } from 'lucide-react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import QRCode from 'qrcode.react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import logo from "./assets/logo.png";

// Test packages data
const testPackages = [
  { id: 1, name: 'Wellwise Essential Profile', tests: 12, originalPrice: 999, price: 500, image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope'] },
  { id: 2, name: 'Wellwise Advanced with Allergy Screen Profile', tests: 31, originalPrice: 3000, price: 2900, image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscope', 'Complete Haemogram', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 3, name: 'Wellwise Advanced Profile', tests: 21, originalPrice: 3499, price: 2200, image: 'https://amoryurgentcare.com/wp-content/uploads/2020/04/what-can-a-blood-test-tell-you-1536x1025.jpg', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 4, name: 'Wellwise Advanced All Day', tests: 6, originalPrice: 3000, price: 2200, image: 'https://media.istockphoto.com/id/1430284847/photo/researcher-dripping-a-blood-sample-in-a-petri-dish-focus-on-a-pipette.jpg?s=612x612&w=0&k=20&c=XtjPoomD-AY-pz1X4lFtDoYd_4S0lilnxTe452WOBhs=', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
  { id: 5, name: 'Wellwise Platinum Profile', tests: 21, originalPrice: 13430, price: 5999, image: 'https://media.istockphoto.com/id/1151219525/photo/closeup-of-a-female-scientist-in-a-laboratory-working-on-experiment-with-cbd-oil-extracted.jpg?s=612x612&w=0&k=20&c=KlLKXw8XCnV4iQyfQQzoUgGIlRbkGzaBOUl6zk8xt7Q=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 6, name: 'Wellwise Basic', tests: 15, originalPrice: 800, price: 299, image: 'https://media.istockphoto.com/id/1305502515/photo/male-scientist-take-test-tube.jpg?s=612x612&w=0&k=20&c=rQK2enpLZbrA_o7oEy-y2GdZai02ZpjZQfdCO0muZdI=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
  { id: 7, name: 'Covid Antigen', tests: 15, originalPrice: 750, price: 450, image: 'https://www.gavi.org/sites/default/files/vaccineswork/2021/Thumb/shutterstock_1808630479_h2.jpg', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
  { id: 8, name: 'WellWise Senior Citizen Profile - Male', tests: 15, originalPrice: 8670, price: 3999, image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', '25 Hydroxy Vitamin D Level', 'CRP (C-Reactive Protein)', 'Iron and Total Iron Binding Capacity', 'Inorganic Phosphorus', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Prostate Specific Antigen (P.S.A.) – Total', 'Ferritin', 'Thyroid Profile*', 'Vitamin B12', 'Urine Routine And Microscopy'] },
  { id: 9, name: 'WellWise Senior Citizen Profile - Female', tests: 13, originalPrice: 8670, price: 3999, image: 'https://media.istockphoto.com/id/992787134/photo/trying-to-perfect-the-medicine.jpg?s=612x612&w=0&k=20&c=4bvW3nZTzwL6ZgtFAlXRVzK3XhXWyQKKtDy1QYhzHhQ=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Lipid Profile', '25 Hydroxy Vitamin D Level', 'Vitamin B12', 'Total – Thyroid Profile', 'KFT Profile with Calcium', 'Inorganic Phosphorus', 'Liver Function Test Profile', 'Urine Routine And Microscopy', 'Rheumatoid Factor (Quantitative)', 'Folate'] },
  { id: 10, name: 'Accuprobe 1.3', tests: 21, originalPrice: 2350, price: 1500, image: 'https://www.pathreflab.com/wp-content/uploads/2023/03/dermatopathology.jpg', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 11, name: 'Medcis 1.3', tests: 21, originalPrice: 5570, price: 2499, image: 'https://media.istockphoto.com/id/1855590213/photo/a-scientist-analyses-a-blood-sample-with-a-pipette-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=yba2tOpXnmLmvrT5flgG69qcIKMpf9R7YJ0euhbplyA=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 12, name: 'Wellwise Total Profile', tests: 6, originalPrice: 2000, price: 1699, image: 'https://media.istockphoto.com/id/2152362354/photo/confident-male-scientist-in-white-lab-coat-and-protective-glasses-at-a-medical-laboratory.jpg?s=612x612&w=0&k=20&c=xxHC5SwW_nXHFE65MkJuDAvs8z6KeEmvu5weZcTmI2o=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 13, name: 'HBA1C 3 Month Average Sugar', tests: 21, originalPrice: 450, price: 350, image: 'https://media.istockphoto.com/id/2205869713/photo/testing-multiples-in-a-biochemistry-lab-using-a-multi-channel-pipette-tool.jpg?s=612x612&w=0&k=20&c=RqnqPqYfug2meq6LV8-cWpcueoO5U6UXlLNSQGDzWR8=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 14, name: 'Covid 19 Testing', tests: 21, originalPrice: 750, price: 700, image: 'https://media.istockphoto.com/id/879831490/photo/cosmetology-lab-assistant-preparing-organic-substance-for-anti-aging-cream.jpg?s=612x612&w=0&k=20&c=hrgp8kfmOPsiThfvuwwvIZ7Y2hBaeCQ_Y4ZM_aHtGAI=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 15, name: 'Thyroid Profile', tests: 21, originalPrice: 450, price: 400, image: 'https://media.istockphoto.com/id/1589960454/photo/blood-science-and-scientist-in-laboratory-with-test-tube-sample-for-research-medical-study.jpg?s=612x612&w=0&k=20&c=7FVs0LMxF9xCtrnXl11iU5ynhs3VoZeThuPGhqAOUAM=', details: ['Complete Haemogram', 'Blood Sugar Fasting', 'Glycosylated Haemoglobin (HbA1C)', 'Thyroid Profile*', 'KFT Profile with Calcium', 'Liver Function Test Profile', 'Lipid Profile', 'Creatine Kinase (CPK)', 'Inorganic Phosphorus', 'CRP (C-Reactive Protein)', 'CRP- C-REACTIVE PROTEIN', 'Apolipoproteins A1 & B', 'Rheumatoid Factor (Quantitative)', 'Iron and Total Iron Binding Capacity', 'Ferritin', 'LDH (Lactate Dehydrogenase) Total', 'Vitamin B12', '25 Hydroxy Vitamin D Level', 'Hepatitis B Surface Antigen', 'Allergy Screen-PhadiaTop/Inf', 'Urine Routine And Microscopy'] },
  { id: 16, name: 'Full Body Checkup (SRL)', tests: 4, originalPrice: 2200, price: 2000, image: 'https://tse2.mm.bing.net/th?id=OIP.B6JK98ZXVp0M6IC71rSRJgHaE2&pid=Api&P=0&h=220', details: ['COVID-19 tests can detect either SARS-CoV-2 or biomarkers of SARS-CoV-2, the virus that causes COVID-19, or antibodies that your body makes after getting COVID-19 or after getting vaccinated.', 'Tests for SARS-CoV-2 tell you if you have an infection at the time of the test. This type of test is called a “viral” test because it looks for viral infection. Antigen tests, Nucleic Acid Amplification Tests (NAATs), and other tests are viral tests.', 'Tests for antibodies may tell you if you have had a past infection with the virus that causes COVID-19. Your body creates antibodies after getting infected with SARS-CoV-2 or after getting vaccinated against COVID-19. These tests are called “antibody” or “serology” tests.', 'Testing is very important to help reduce the spread of COVID-19. You should always discuss your test results with your healthcare provider.'] },
  { id: 17, name: 'Wellwise Essential Profile with Smart Report', tests: 12, originalPrice: 1950, price: 999, image: 'https://tse3.mm.bing.net/th?id=OIP.mVCEC-Zj6x4JwA6ke7XEpwAAAA&pid=Api&P=0&h=220', details: ['CBC (Complete Blood Count)', 'Bilirubin Total and Direct', 'Blood Sugar Fasting', 'Cholesterol', 'Creatinine', 'Glycosylated Haemoglobin (HbA1C)', 'SGOT – Aspartate Amino Transferase', 'SGPT – Alanine Amino Transferase', 'Triglycerides', 'Urea', 'TSH', 'Urine Routine And Microscopy'] }
];
function App() {
  // const [cart, setCart] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [showCart, setShowCart] = useState(false);
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
    toast.success('Item added Successfully');
  };

  // const removeFromCart = (id: number) => {
  //   setCart(cart.filter(itemId => itemId !== id));
  // };

  const removeFromCart = (id: number) => {
    const index = cart.indexOf(id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const getTotalAmount = () => {
    return cart.reduce((total, id) => {
      const item = testPackages.find(pkg => pkg.id === id);
      return total + (item?.price || 0);
    }, 0);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-[42px] w-auto sm:h-[75px]" />
            <span className="text-2xl sm:text-3xl font-bold text-[#836e40]">DEEP DIAGNOSTICS</span>
          </div>
          <div className="hidden md:flex space-x-3 lg:space-x-8 ">
            {['home', 'services', 'tests', 'lab-info', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link capitalize"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowCart(true)}
            className="relative p-2 hover:scale-110 transition-transform duration-300"
          >
            <ShoppingCart className="h-6 w-6 text-secondary" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      <Toaster />

      {/* Hero Section with 3 Slides (Navigation arrows removed) */}
      <section id="home" className="pt-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-[600px] md:h-[700px]"
        >
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=2000)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl" data-aos="fade-right">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      Advanced Diagnostics for Better Healthcare
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                      State-of-the-art laboratory services with precise results
                    </p>
                    <button
                      onClick={() => scrollToSection('tests')}
                      className="btn-primary text-lg"
                    >
                      Explore Health Checkups
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/002/414/650/original/hand-with-protective-gloves-holding-a-blood-samples-for-covid-test-free-photo.jpg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl" data-aos="fade-right">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      Reliable & Accurate Reports
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                      We ensure that every test meets the highest quality standards.
                    </p>
                    <button
                      onClick={() => scrollToSection('tests')}
                      className="btn-primary text-lg"
                    >
                      Explore Health Checkups
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/2153846.jpg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl" data-aos="fade-right">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      Modern Lab Facilities
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                      Equipped with advanced technology for accurate testing.
                    </p>
                    <button
                      onClick={() => scrollToSection('tests')}
                      className="btn-primary text-lg"
                    >
                      Explore Health Checkups
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title" data-aos="fade-up">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Home Collection',
                description: 'Professional sample collection at your doorstep',
                image: 'https://biocityhealthcare.com/wp-content/uploads/2022/05/skillful-nurse-is-doing-blood-test-man-clinic-man-medical-mask-1024x683.jpg'
              },
              {
                title: 'Lab Visit',
                description: 'Modern facility with cutting-edge equipment',
                image: 'https://apacmed.org/content/uploads/2022/12/Laboratory-based-IVD-tests.png'
              },
              {
                title: 'Emergency Tests',
                description: 'Round-the-clock emergency testing services',
                image: 'https://specials-images.forbesimg.com/imageserve/5e753d7610380d0006bdcb26/960x0.jpg?fit=scale'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 px-3">
                  <h3 className="!text[15px] font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests Section */}
      <section id="tests" className="pt-20 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title" data-aos="fade-up">Health Check Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testPackages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
              >
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
                </div>
                <div className="p-6 px-3">
                  <h3 className="!text[15px] font-bold text-secondary mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-bold">₹{pkg.price}</span>
                    <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{pkg.tests} Tests Included</span>
                    <button
                      onClick={() => setShowDetails(pkg.id)}
                      className="text-primary hover:text-[#836e40] text-lg"
                    >
                      View Details
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(pkg.id)}
                    // className="w-full bg-[#836e40] hover:bg-primary text-white py-2 rounded transition-colors duration-300"
                    className="w-full bg-secondary hover:bg-primary text-white py-2 rounded transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Info Section */}
      <section id="lab-info" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 opacity-95" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
            Why Choose Deep Diagnostic?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '20+', text: 'Years Experience', icon: '🏆' },
              { number: '50,000+', text: 'Tests Conducted', icon: '🔬' },
              { number: '99.9%', text: 'Accuracy Rate', icon: '✓' },
              { number: '24/7', text: 'Emergency Service', icon: '⚡' }
            ].map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-3xl font-bold text-white mb-6">Advanced Technology</h3>
              <div className="space-y-4 text-gray-200">
                <p>• State-of-the-art diagnostic equipment</p>
                <p>• Digital reporting system</p>
                <p>• AI-assisted analysis for accuracy</p>
                <p>• ISO certified laboratory</p>
              </div>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-white mb-6">Quality Assurance</h3>
              <div className="space-y-4 text-gray-200">
                <p>• NABL accredited facility</p>
                <p>• Regular quality checks</p>
                <p>• Expert pathologists</p>
                <p>• Quick turnaround time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-16" data-aos="fade-up">Get in Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8" data-aos="fade-right">
              <div className="contact-info">
                <h3 className="text-2xl font-bold text-secondary mb-6">Visit Our Lab</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">123 Medical Complex, Mall Road</p>
                      <p className="text-gray-600">Amritsar, Punjab, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 1234567890</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@deepdiagnostic.com</p>
                      <p className="text-gray-600">support@deepdiagnostic.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <h3 className="text-2xl font-bold text-secondary mb-6">Working Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-gray-700">24/7 Emergency Services Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0294044563335!2d74.87345931544636!3d31.634777981330785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa0e061f45%3A0x9f62a10d29f7c7c3!2sMall%20Rd%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Microscope className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Deep Diagnostic</span>
              </div>
              <p className="text-gray-300">Leading the way in medical diagnostics with precision and care.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Test Packages</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">© {new Date().getFullYear()} Deep Diagnostic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#000080]">Your Cart</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                {cart.map(id => {
                  const item = testPackages.find(pkg => pkg.id === id);
                  return (
                    <div key={id} className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-semibold">{item?.name}</h3>
                        <p className="text-[#D4AF37]">₹{item?.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(id)} className="text-red-500 hover:text-red-700">
                        Remove
                      </button>
                    </div>
                  );
                })}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">Total:</span>
                    <span className="text-xl font-bold text-[#D4AF37]">₹{getTotalAmount()}</span>
                  </div>
                  <button
                    onClick={() => {
                      setShowCart(false);
                      setShowPayment(true);
                    }}
                    // className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#B38F2D] transition duration-300"
                    className="w-full bg-secondary text-white py-2 rounded hover:bg-[#B38F2D] transition duration-300"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Test Details Modal */}
      {showDetails !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary ">
                {testPackages.find(pkg => pkg.id === showDetails)?.name}
              </h2>
              <button onClick={() => setShowDetails(null)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <h3 className="font-semibold text-[#836e40] mb-2">Included Tests:</h3>
            <ul className="list-disc list-inside space-y-1 mb-6">
              {testPackages.find(pkg => pkg.id === showDetails)?.details.map((test, index) => (
                <li key={index} className="text-gray-600">{test}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#000080]">Scan to Pay</h2>
              <button onClick={() => setShowPayment(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <QRCode
                value={`upi://pay?pa=shabdpreetz@okhdfcbank&pn=Deep%20Diagnostic&am=${getTotalAmount()}&cu=INR`}
                size={200}
                level="H"
              />
              <p className="mt-4 text-center text-gray-600">
                Scan this QR code with any UPI app to complete your payment
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="mt-4 text-[#836e40] font-bold">OR</p>
              <button className="mt-3 p-2 text-white rounded-lg hover:bg-[#836e40] bg-primary font-bold">
                Pay In Person
              </button>
              <p className="mt-3">Done With the Payment?</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
