import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SocialFloat, SocialFloatMobile } from "@/components/ui/SocialFloat";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Paquetes from "@/pages/paquetes";
import PaqueteDetalle from "@/pages/paquete-detalle";
import Tours from "@/pages/tours";
import Blog from "@/pages/blog";
import ToursCosta from "@/pages/tours-costa";
import ToursSierra from "@/pages/tours-sierra";
import ToursSelva from "@/pages/tours-selva";
import CategoriaCultural from "@/pages/categoria-cultural";
import CategoriaAventura from "@/pages/categoria-aventura";
import CategoriaNaturaleza from "@/pages/categoria-naturaleza";
import Soporte from "@/pages/soporte";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/paquetes" component={Paquetes} />
      <Route path="/paquetes/:slug" component={PaqueteDetalle} />
      <Route path="/tours" component={Tours} />
      <Route path="/tours/costa" component={ToursCosta} />
      <Route path="/tours/sierra" component={ToursSierra} />
      <Route path="/tours/selva" component={ToursSelva} />
      <Route path="/categorias/cultural" component={CategoriaCultural} />
      <Route path="/categorias/aventura" component={CategoriaAventura} />
      <Route path="/categorias/naturaleza" component={CategoriaNaturaleza} />
      <Route path="/blog" component={Blog} />
      <Route path="/soporte" component={Soporte} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SocialFloat />
        <SocialFloatMobile />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
