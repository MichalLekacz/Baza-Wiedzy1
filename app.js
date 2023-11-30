// Ścieżka do pliku JSON lokalnie
const filePath = "./advanced-js.json";

// Użyj Fetch do pobrania danych
fetch(filePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
    // Znajdź element z klasą "container"
    var containerElement = document.querySelector(".container");

    // Tworzenie elementów HTML z danymi JSON za pomocą forEach
    jsonData.forEach(function (item) {
      // Tworzenie elementu article
      var articleElement = document.createElement("article");
      articleElement.classList.add("article");

      // Tworzenie elementu h2
      var h2Element = document.createElement("h2");
      h2Element.textContent = item.title;

      // Tworzenie elementu p
      var pElement = document.createElement("p");
      pElement.innerHTML = item.article;

      // Dodawanie elementów do article
      articleElement.appendChild(h2Element);
      articleElement.appendChild(pElement);

      // Dodawanie article do container
      containerElement.appendChild(articleElement);
      // Sprawdzenie czy klucz 'code' ma wartość
      if (item.code) {
        // Tworzenie elementu pre i code tylko jeśli klucz 'code' ma wartość
        var preElement = document.createElement("pre");
        var codeElement = document.createElement("code");
        codeElement.classList.add("javascript");
        codeElement.classList.add("hljs");
        codeElement.classList.add("language-javascript");
        codeElement.textContent = item.code;
        preElement.appendChild(codeElement);
        // Dodawanie elementu pre do article
        articleElement.appendChild(preElement);
      }
    });
  })
  .catch((error) => {
    console.error("Błąd pobierania pliku JSON:", error);
  })
  .finally(() => {
    hljs.highlightAll();
  });
