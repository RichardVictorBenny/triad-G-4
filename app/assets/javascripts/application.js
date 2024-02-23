//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  const express = require('express');
  const OpenAI = require('openai');

  const app = express();
  const port = 3000;

  // Initialize OpenAI client
  const openai = new OpenAI('your-api-key');

  // Middleware to parse JSON requests
  app.use(express.json());

  // Endpoint to handle incoming chat messages from frontend
  app.post('/chat', async (req, res) => {
    const userInput = req.body.message;

    // Call OpenAI API to get chatbot response
    const completion = await openai.chat.completions.create({
      messages: [{ "role": "user", "content": userInput }],
      model: "gpt-3.5-turbo",
    });

    // Send chatbot response back to frontend
    res.json({ response: completion.choices[0].message.content });
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });

})
