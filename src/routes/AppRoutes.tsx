import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Team from '@/pages/Team'
import Events from '@/pages/Events'
import Gallery from '@/pages/Gallery'
import Sponsors from '@/pages/Sponsors'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Store from '@/pages/Store'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipo" element={<Team />} />
      <Route path="/eventos" element={<Events />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/tienda" element={<Store />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
