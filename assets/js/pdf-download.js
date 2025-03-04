(function() {
    // Function to lazy-load a script.
    function loadScript(url, callback) {
      var script = document.createElement('script');
      script.src = url;
      script.onload = callback;
      script.onerror = function() {
        console.error("Failed to load script:", url);
      };
      document.getElementsByTagName('head')[0].appendChild(script);
    }

    // Generate the PDF from the element with id "blog-content"
    function generatePDF() {
      var element = document.getElementById("blog-content");
      if (!element) return;
      var opt = {
        margin: 0.5, // inches
        filename: pdfFilename, // uses global variable set in the partial
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    }

    // Attach click event to the "Get PDF" link.
    var downloadButton = document.getElementById("download-pdf");
    if (downloadButton) {
      downloadButton.addEventListener("click", function(e) {
        e.preventDefault();
        if (typeof html2pdf === 'undefined') {
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js", generatePDF);
        } else {
          generatePDF();
        }
      });
    }
  })();
