// project.js

// Function to fetch and load quotes from the JSON file
async function loadQuotes() {
    const response = await fetch('https://noahruppe.github.io/cse121b/quotes.json');
    if (!response.ok) {
      console.error('Failed to fetch quotes');
      return [];
    }
    const data = await response.json();
    return data.quotes;
  }
  
  const quoteElement = document.getElementById('quote');
  
  // Function to generate and display a random quote
  async function generateRandomQuote() {
    const quotes = await loadQuotes();
    if (quotes.length === 0) {
      quoteElement.textContent = 'No quotes available.';
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.textContent = quote;
  }
  
  // Event listener for the "Generate Quote" button
  document.getElementById('generate-quote').addEventListener('click', generateRandomQuote);
  
  export { generateRandomQuote };
  