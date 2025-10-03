import { HelmetProvider } from 'react-helmet-async'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AppRoutes from '@/routes/AppRoutes'

export default function App(){
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
