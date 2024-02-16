import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiKey = process.env.API_KEY;
    const apiURL = process.env.API_URL;
    const domainName = req.query.domainName as string;

    const response = await fetch(
      `${apiURL}?apiKey=${apiKey}&domain=${domainName}&sug=true&count=10`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data.domainAvailability);
    const dataCheck = data.domainAvailability;

    res.status(200).json({ message: "Success Get Domain", dataCheck });
  } catch (error) {
    res.status(500).json({ message: "Error Networking" });
  }
}
