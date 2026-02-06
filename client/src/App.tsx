import { Switch, Route, Router as WouterRouter } from "wouter";
import { useSyncExternalStore } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SocialFloat, SocialFloatMobile } from "@/components/ui/SocialFloat";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Paquetes from "@/pages/paquetes";
import PaqueteDetalle from "@/pages/paquete-detalle";
import Tours from "@/pages/tours";
import SobreNosotros from "@/pages/sobre-nosotros";
import ToursCosta from "@/pages/tours-costa";
import ToursSierra from "@/pages/tours-sierra";
import ToursSelva from "@/pages/tours-selva";
import CategoriaCultural from "@/pages/categoria-cultural";
import CategoriaAventura from "@/pages/categoria-aventura";
import CategoriaNaturaleza from "@/pages/categoria-naturaleza";
import Soporte from "@/pages/soporte";
import TerminosCondiciones from "@/pages/terminos-condiciones";
import PoliticaPrivacidad from "@/pages/politica-privacidad";
import TrabajaConNosotros from "@/pages/trabaja-con-nosotros";
import Contacto from "@/pages/contacto";
import GuiaPeru from "@/pages/guia-peru";

function Router() {
  // Ensure base does not end with a trailing slash for wouter
  // Provide a hash-based location hook so routing works on GitHub Pages subpaths
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const shouldUseHash = import.meta.env.PROD && base !== "";

  function usePathnameLocation() {
    const getSnapshot = () => {
      const path = location.pathname.replace(base, "") || "/";
      return path.startsWith("/") ? path : `/${path}`;
    };
    const subscribe = (cb: () => void) => {
      window.addEventListener("popstate", cb);
      return () => window.removeEventListener("popstate", cb);
    };
    const path = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
    const navigate = (to: string, { replace = false } = {}) => {
      if (replace) history.replaceState(null, "", to);
      else history.pushState(null, "", to);
      window.dispatchEvent(new PopStateEvent("popstate"));
    };
    return [path, navigate] as const;
  }

  function useHashLocation() {
    const getSnapshot = () => {
      if (location.hash) return location.hash.slice(1);
      const path = location.pathname.replace(base, "") || "/";
      return path.startsWith("/") ? path : `/${path}`;
    };
    const subscribe = (cb: () => void) => {
      window.addEventListener("hashchange", cb);
      window.addEventListener("popstate", cb);
      return () => {
        window.removeEventListener("hashchange", cb);
        window.removeEventListener("popstate", cb);
      };
    };
    const path = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
    const navigate = (to: string, { replace = false } = {}) => {
      if (replace) location.replace("#" + to);
      else location.hash = to;
    };
    return [path, navigate] as const;
  }

  return (
    <WouterRouter hook={shouldUseHash ? useHashLocation : usePathnameLocation}>
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
      <Route path="/sobre-nosotros" component={SobreNosotros} />
      <Route path="/soporte" component={Soporte} />
      <Route path="/terminos-condiciones" component={TerminosCondiciones} />
      <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
      <Route path="/trabaja-con-nosotros" component={TrabajaConNosotros} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/guia-peru" component={GuiaPeru} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <SocialFloat />
        <SocialFloatMobile />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
