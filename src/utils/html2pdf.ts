import html2pdf from 'html2pdf.js';

function setStylesOnElement(element: HTMLElement, styles: object) {
  Object.assign(element.style, styles);
}

export function printTable(filename: string) {
  const element = document.getElementById('table-report')!;
  const tempContainer = document.createElement('div');
  const title = document.createElement('h2');
  const clonedTable = element.cloneNode(true) as HTMLElement;
  const rows = clonedTable.querySelectorAll('tr');
  const footer = clonedTable.querySelector('.v-data-table-footer')!;

  rows.forEach(row => {
    const cells = row.querySelectorAll('td, th');
    if (cells.length > 0) {
      cells[cells.length - 1].remove();
    }
  });
  footer.remove();

  title.textContent = 'Indupasa Reportes';
  setStylesOnElement(tempContainer, { padding: '20px', paddingTop: '40px', backgroundColor: '#fff', });
  setStylesOnElement(title, {textAlign: 'center', fontSize: '28px', marginBottom: '20px', color: '#0B5733', });
  tempContainer.appendChild(title);
  tempContainer.appendChild(clonedTable);
  document.body.appendChild(tempContainer);

  const options = {
    filename,
    image: { type: 'pdf', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'landscape',
    },
  };
  html2pdf().set(options).from(tempContainer).toPdf().get('pdf').then(
    function(pdf: any) {
      const newWindow = window.open(pdf.output('bloburl'), '_blank');
      if (newWindow) {
        setTimeout(() => {
          newWindow.print();
        }, 1000);
      }
      document.body.removeChild(tempContainer);
    }
  ).catch((error: any) => {
    console.error('Error generating PDF:', error);
    document.body.removeChild(tempContainer);
  });
}
