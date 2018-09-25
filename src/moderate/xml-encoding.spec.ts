import { xmlEncoding } from './xml-encoding';

describe('xmlEncoding', () => {
  it('should throw an error if a given tag does not exist in the mapping', () => {
    const xml = `
      <familyx lastName="McDowell" state="CA">
        <person firstName="Gayle">Some Message</person>
      </familyx>
    `;
    const mapping: Map<string, number> = new Map([
      ['family', 1],
      ['person', 2],
      ['firstName', 3],
      ['lastName', 4],
      ['state', 5],
    ]);

    expect(() => {
      xmlEncoding(xml, mapping);
    }).toThrow('Invalid tag');
  });

  it('should throw an error if a given attribute does not exist in the mapping', () => {
    const xml = `
      <family lastName="McDowell" state="CA">
        <person firstName="Gayle" middleName="Laakmann">Some Message</person>
      </family>
    `;
    const mapping: Map<string, number> = new Map([
      ['family', 1],
      ['person', 2],
      ['firstName', 3],
      ['lastName', 4],
      ['state', 5],
    ]);

    expect(() => {
      xmlEncoding(xml, mapping);
    }).toThrow('Invalid attribute');
  });

  it('should encode the provided XML', () => {
    const xml = `
      <family lastName="McDowell" state="CA">
        <person firstName="Gayle">Some Message</person>
      </family>
    `;
    const mapping: Map<string, number> = new Map([
      ['family', 1],
      ['person', 2],
      ['firstName', 3],
      ['lastName', 4],
      ['state', 5],
    ]);
    const encodedXml = xmlEncoding(xml, mapping);

    expect(encodedXml).toBe('1 4 McDowell 5 CA 0 2 3 Gayle 0 Some Message 0 0');
  });

  it('should encode the provided XML if some attribute values contain spaces', () => {
    const xml = `
      <family lastName="McDowell" state="CA">
        <person firstName="Gayle Laakmann">Some Message</person>
      </family>
    `;
    const mapping: Map<string, number> = new Map([
      ['family', 1],
      ['person', 2],
      ['firstName', 3],
      ['lastName', 4],
      ['state', 5],
    ]);
    const encodedXml = xmlEncoding(xml, mapping);

    expect(encodedXml).toBe('1 4 McDowell 5 CA 0 2 3 Gayle Laakmann 0 Some Message 0 0');
  });
});
