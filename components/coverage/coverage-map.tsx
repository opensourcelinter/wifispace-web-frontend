"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";

const coverageData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Ikeja",
        status: "coming_soon",
        description:
          "Active coverage in most parts of Ikeja including GRA, Alausa, and Opebi",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [3.35, 6.6],
            [3.38, 6.6],
            [3.38, 6.57],
            [3.35, 6.57],
            [3.35, 6.6],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Iyana Ipaja",
        status: "available",
        description:
          "Coverage active around Iyana Ipaja axis, connecting to Agege and Egbeda",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [3.295, 6.605],
            [3.325, 6.605],
            [3.325, 6.585],
            [3.295, 6.585],
            [3.295, 6.605],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ayobo",
        status: "available",
        description:
          "Active in Ayobo, Ipaja North, and surrounding residential areas",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [3.26, 6.64],
            [3.29, 6.64],
            [3.29, 6.62],
            [3.26, 6.62],
            [3.26, 6.64],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ogba",
        status: "available",
        description:
          "Full coverage in Ogba, including Ogba Housing Estate and proximity to Ikeja",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [3.31, 6.64],
            [3.34, 6.64],
            [3.34, 6.62],
            [3.31, 6.62],
            [3.31, 6.64],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Yaba",
        status: "not_covered",
        description:
          "Active coverage in Yaba, including Unilag axis, Alagomeji, and commercial zones",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [3.375, 6.52],
            [3.405, 6.52],
            [3.405, 6.5],
            [3.375, 6.5],
            [3.375, 6.52],
          ],
        ],
      },
    },
  ],
} as const;

const getFillColor = (status: string) => {
  switch (status) {
    case "available":
      return "#22c55e";
    case "coming_soon":
      return "#eab308";
    case "not_covered":
      return "#ef4444";
    default:
      return "#9ca3af";
  }
};

export default function CoverageMap() {
  const LagosCenter: [number, number] = [6.5244, 3.3792];

  const FitBoundsToFeatures = () => {
    const map = useMap();

    useEffect(() => {
      const bounds = L.latLngBounds([]);
      coverageData.features.forEach((feature) => {
        if (
          feature.geometry.type === "Polygon" ||
          feature.geometry.type === "MultiPolygon"
        ) {
          const coords = feature.geometry.coordinates.flat(2);
          for (let i = 0; i < coords.length; i += 2) {
            bounds.extend([coords[i + 1], coords[i]]);
          }
        }
      });

      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [60, 60] });
      }
    }, [map]);

    return null;
  };

  return (
    <div className="w-full h-125 md:h-150 rounded-xl overflow-hidden border border-border shadow-sm">
      <MapContainer
        center={LagosCenter}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <GeoJSON
          data={coverageData}
          style={(feature) => ({
            fillColor: getFillColor(feature?.properties?.status || "unknown"),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.6,
          })}
          onEachFeature={(feature, layer) => {
            if (!feature.properties) return;

            const { name, status, description } = feature.properties;

            const tooltipContent = `
              <div class="text-sm font-medium">
                <strong>${name || "Area"}</strong><br />
                <span class="text-xs">Status: ${status?.replace("_", " ") || "Unknown"}</span>
                ${description ? `<p class="mt-1 text-xs text-gray-600">${description}</p>` : ""}
              </div>
            `;

            layer.bindTooltip(tooltipContent, {
              sticky: true,
              direction: "top",
              className:
                "custom-tooltip bg-white dark:bg-gray-900 p-2 rounded shadow-md border border-gray-200 dark:border-gray-700",
            });
          }}
        />

        <FitBoundsToFeatures />
      </MapContainer>
    </div>
  );
}
