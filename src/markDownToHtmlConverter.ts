export const transformMarkupToHtml = (markDown: string): string => {
    if(markDown === "") return markDown;
    
    const lines = markDown.split('\n');
    const convertedLines = lines.map((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine === '') return '';

      if(trimmedLine.startsWith('###### ')) return `<h6>${trimmedLine.slice(7)}</h6>`;
      if(trimmedLine.startsWith('##### ')) return `<h5>${trimmedLine.slice(6)}</h5>`;
      if(trimmedLine.startsWith('#### ')) return `<h4>${trimmedLine.slice(5)}</h4>`;
      if(trimmedLine.startsWith('### ')) return `<h3>${trimmedLine.slice(4)}</h3>`;
      if(trimmedLine.startsWith('## ')) return `<h2>${trimmedLine.slice(3)}</h2>`;
      if(trimmedLine.startsWith('# ')) return `<h1>${trimmedLine.slice(2)}</h1>`;

      return `<p>${trimmedLine}</p>`;
    })

    const almostDoneHtml = convertedLines.join('\n');
    const html = convertMarkdownLinkToHtmlLink(almostDoneHtml);
  return html;
  }
export const convertMarkdownLinkToHtmlLink = (markDown: string): string => {
  return markDown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
}
