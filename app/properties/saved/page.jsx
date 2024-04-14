"use client";
import React, { useState, useEffect } from "react";
import PropertyCard from "../../../components/PropertyCard";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";
const SavedPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch("/api/bookmarks");
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          console.log(error);
          setLoading(false);
          toast.error("Failed to fetch data");
        }
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchSavedProperties();
  }, []);
  console.log("Props", properties);
  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="px-4 py-6">
      <h1 className="text-2xl mb-4">Save Properties</h1>
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties?.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => {
              return <PropertyCard key={property._id} property={property} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
