import React, { useState } from "react";
import HomiqNavbar from "./Homiq/HomiqNavbar";
import Hero from "./Homiq/Hero";
import Collections from "./Homiq/Collections";
import LivingExperience from "./Homiq/LivingExperience";
import DesignPhilosophy from "./Homiq/DesignPhilosophy";
import RoomSanctuary from "./Homiq/RoomSanctuary";
import ArchitecturalShowcase from "./Homiq/ArchitecturalShowcase";
import TactileAtelier from "./Homiq/TactileAtelier";
import SpatialConcierge from "./Homiq/SpatialConcierge";
import ReserveBlueprint from "./Homiq/ReserveBlueprint";
import HomiqFooter from "./Homiq/HomiqFooter";

import { useEffect } from 'react';


export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeReservationData, setActiveReservationData] = useState(null);

  const handleOpenReserve = (zoneData) => {
    setActiveReservationData(zoneData);
    setCurrentPage("reserve");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // 1. કાયમી ટાઈટલ
    document.title = "Homiq | Minimalist Home Decor";

    // 2. કાયમી Favicon
    const iconData = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none'%3E%3Cpath d='M12 18 V26' stroke='%23C5A059' stroke-width='3.5' stroke-linecap='round'/%3E%3Cpath d='M6 34 L32 14 L58 34' stroke='%23C5A059' stroke-width='4.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 26 V52 M14 41 C14 36 21 34 25 38 V52' stroke='%23C5A059' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 43 C27 36 34 35 38 39 C41 35 48 36 50 42 V52' stroke='%23C5A059' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25 52 H54' stroke='%23C5A059' stroke-width='3.5' stroke-linecap='round'/%3E%3C/svg%3E";

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = iconData;
  }, []);

  return (
    <div className="homiq-app-root">
      <HomiqNavbar />

      <main style={{ paddingTop: "110px", minHeight: "80vh" }}>
        {currentPage === "home" ? (
          <>
            <Hero />
          
            <LivingExperience />
            <DesignPhilosophy />
            <RoomSanctuary />
            <ArchitecturalShowcase />
            <TactileAtelier onReserveClick={handleOpenReserve} />
            {/* ફક્ત હોમ પેજ પર જ Manifesto & Lookbook સેક્શન દેખાશે */}
            <SpatialConcierge />
          </>
        ) : (
          /* Reserve Blueprint વાળા પેજ પર SpatialConcierge નહીં આવે */
          <ReserveBlueprint
            zoneData={activeReservationData}
            onBack={handleBackToHome}
          />
        )}
      </main>

      {/* ફૂટર બંને પેજ પર એકદમ છેલ્લે દેખાશે */}
      <HomiqFooter />
    </div>
  );
}