const attributeRegExp = /^(?<attribute>\w+)="(?<value>[\w\s]*)"$/;
const elementRegExp = /^<(?<closing>\/?)(?<tag>\w+)(?<attributes>(?:\s\w+="[\w\s]*")*)>$/;
const valueRegExp = /^[\w\s]*/;
const separatorRegExp = /\s(?![\w\s]*")/;

/**
 * Encodes the provided XML element based on the provided mapping
 * @param xml String representation of the XML element
 * @param mapping Mapping of tags and attributes
 */
export function xmlEncoding(xml: string, mapping: Map<string, number>): string {
  let encodedXML = '';
  while (xml.length > 0) {
    xml = xml.trim();
    const isElement = xml.startsWith('<');
    const isValue = valueRegExp.test(xml);
    let endIndex: number | undefined;
    if (isElement) {
      endIndex = xml.indexOf('>') + 1;
    } else if (isValue) {
      endIndex = xml.indexOf('<');
    }

    if (endIndex && endIndex > -1) {
      const part = xml.substring(0, endIndex);
      const encodedPart = isElement ? encodePart(part, mapping) : part;
      encodedXML = encodedXML ? `${encodedXML} ${encodedPart}` : encodedPart;
      xml = xml.slice(endIndex);
    }
  }
  return encodedXML;
}

function encodePart(part: string, mapping: Map<string, number>): string {
  let encodedPart = '';
  const elementRegExpExec = elementRegExp.exec(part);
  if (elementRegExpExec) {
    const closing = elementRegExpExec.groups!.closing;
    const tag = elementRegExpExec.groups!.tag;
    const attributes = elementRegExpExec.groups!.attributes
      .trim()
      .split(separatorRegExp);
    const tagValue = mapping.get(tag);
    if (!tagValue) {
      throw new Error('Invalid tag');
    }
    if (closing) {
      encodedPart = '0';
    } else {
      encodedPart = `${tagValue}`;
      attributes.forEach((attr) => {
        const attributeRegExpExec = attributeRegExp.exec(attr);
        if (attributeRegExpExec) {
          const attribute = attributeRegExpExec.groups!.attribute;
          const value = attributeRegExpExec.groups!.value;
          const attributeValue = mapping.get(attribute);
          if (!attributeValue) {
            throw new Error('Invalid attribute');
          }
          encodedPart = `${encodedPart} ${attributeValue} ${value}`;
        }
      });
      encodedPart = `${encodedPart} 0`;
    }
  }
  return encodedPart;
}
