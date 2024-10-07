import {describe, expect, test} from '@jest/globals';
import { transformMarkupToHtml, convertMarkdownLinkToHtmlLink } from './markDownToHtmlConverter';

describe('Mark Down to Html Converter', () => {
  test('returns empty string', () => {
    expect(transformMarkupToHtml("")).toBe("");
  });

  test('returns headings', () => {
    expect(transformMarkupToHtml(`
# Header one
## Another Header
`)).toBe(`
<h1>Header one</h1>
<h2>Another Header</h2>
`);
  });

  test('link transform', () => {
    expect(convertMarkdownLinkToHtmlLink(`<h2>This is a header [with a link](http://yahoo.com)</h2>`)).toBe(`<h2>This is a header <a href=\"http://yahoo.com\">with a link</a></h2>`);
  })
});