import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ExperienceProvider, Nav, Footer, usePageMotion } from "./components";
import * as P from "./pages";
function Site() {
  const ref = useRef(null);
  const { pathname } = useLocation();
  usePageMotion(ref);
  return (
    <>
      <Nav />
      <main ref={ref} id="main" tabIndex="-1" key={pathname}>
        <Routes>
          <Route path="/" element={<P.Home />} />
          <Route path="/why-change" element={<P.WhyChange />} />
          <Route path="/products" element={<P.ProductsPage />} />
          <Route path="/products/:slug" element={<P.ProductPage />} />
          <Route path="/platform" element={<P.Platform />} />
          <Route path="/solutions" element={<P.Solutions />} />
          <Route path="/solutions/:slug" element={<P.SolutionPage />} />
          <Route path="/results" element={<P.Results />} />
          <Route path="/pricing" element={<P.Pricing />} />
          <Route path="/request-demo" element={<P.RequestDemo />} />
          <Route path="/sign-in" element={<P.SignIn />} />
          <Route path="/about" element={<P.About />} />
          <Route path="/contact" element={<P.Contact />} />
          <Route path="/trust" element={<P.Trust />} />
          <Route path="/integrations" element={<P.Integrations />} />
          <Route path="/resources" element={<P.Resources />} />
          <Route path="/resources/:slug" element={<P.ResourceArticle />} />
          <Route path="/legal/privacy" element={<P.Legal />} />
          <Route path="/legal/terms" element={<P.Legal terms />} />
          <Route path="/demo" element={<P.DemoIntro />} />
          <Route path="/demo/incidents" element={<P.IncidentQueue />} />
          <Route
            path="/demo/incidents/INC-027"
            element={<P.IncidentOverview />}
          />
          <Route
            path="/demo/incidents/INC-027/timeline"
            element={<P.IncidentTimeline />}
          />
          <Route
            path="/demo/incidents/INC-027/impact"
            element={<P.IncidentImpact />}
          />
          <Route
            path="/demo/incidents/INC-027/impact/:account"
            element={<P.IncidentRecord />}
          />
          <Route
            path="/demo/incidents/INC-027/approval"
            element={<P.IncidentApproval />}
          />
          <Route
            path="/demo/incidents/INC-027/report"
            element={<P.IncidentReport />}
          />
          <Route path="/demo/data-dictionary" element={<P.Dictionary />} />
          <Route path="*" element={<P.NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <ExperienceProvider>
      <Site />
    </ExperienceProvider>
  );
}
