const checkDomain = async (domain: string): Promise<boolean | null> => {
    try {
      const apiKey = process.env.API_KEY || '691eabb87dea48cbad24040492033361';
      const apiUrl = process.env.API_URL || `https://api.whoisfreaks.com/v1.0/domain/availability?apiKey=${apiKey}&domain=${domain}`;


      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data.domainAvailability)
      return data.domainAvailability;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default checkDomain;