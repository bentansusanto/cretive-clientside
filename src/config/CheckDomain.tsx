import React, { useEffect, useState } from "react";
// import domainCheck from "@/pages/api/domainChecker";

export const CheckDomain = () => {
  const [domain, setDomain] = useState<string>("");
  const [error, setError] = useState('');
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAvailability = async () => {
      try {
        if (!domain) return;
        setLoading(true);

        const response = await fetch(
          `http://localhost:3000/api/domainChecker?domainName=${domain}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data.dataCheck);
        setAvailability(data.dataCheck);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    checkAvailability();
  }, [domain]);

  return { setDomain, domain, availability, loading, error };
};
