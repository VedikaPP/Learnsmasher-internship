document.getElementById('pdfButton').addEventListener('click', function() {
  var link = document.createElement('a');
  link.href ='resume.pdf';
  link.click();
  document.body.removeChild(link);
});