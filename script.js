document.getElementById("getRate").addEventListener("click", () => {
  const currency = document.getElementById("currency").value;
  const apiKey = "d856033016a88c3c1ce5a1ae";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.conversion_rates) {
        const inrRate = data.conversion_rates["INR"];
        document.getElementById("result").textContent =
          `1 ${currency} = ₹${inrRate}`;
      } else {
        document.getElementById("result").textContent =
          "Error fetching data.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("result").textContent =
        "Error fetching data.";
    });
});
