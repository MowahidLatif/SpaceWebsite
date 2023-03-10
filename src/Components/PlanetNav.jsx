import React from "react";
import { Link } from "react-router-dom";

export default function PlanetNav() {
  return (
    <div>
      <nav>
        <Link to="mercury">Mercury</Link>
        <Link to="venus">Venus</Link>
        <Link to="earth">Earth</Link>
        <Link to="mars">Mars</Link>
        <Link to="jupiter">Jupiter</Link>
        <Link to="saturn">Saturn</Link>
        <Link to="uranus">Uranus</Link>
        <Link to="neptune">Neptune</Link>
        <Link to="pluto">Pluto</Link>
      </nav>
    </div>
  );
}
