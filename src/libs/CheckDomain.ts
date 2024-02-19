const checkDomain = async (domain: string): Promise<boolean | null> => {
    try {
      const apiUrl = `/api/domainChecker?domainName=${domain}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      return data.dataCheck;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default checkDomain;