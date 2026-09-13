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