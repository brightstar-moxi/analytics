// pages/api/analyze.js
export default async (req, res) => {
    if (req.method === 'POST') {
      const { text } = req.body;
      
      // Mock sentiment analysis response
      const mockResponse = {
        sentiment: 'Positive',
        score: 0.8,
        chartData: {
          positive: 0.8,
          negative: 0.1,
          neutral: 0.1,
        },
      };
      
      res.status(200).json(mockResponse);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  };
  