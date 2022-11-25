// const parser = require("fast-xml-parser");
import parser from "fast-xml-parser";
import he from "he";

export default function jsonToXml(json, config = null) {
  let options = {
    attributeNamePrefix: "@",
    textNodeName: "$",
    ignoreAttributes: false,
    tagValueProcessor: (a) =>
      he.encode(a.toString(), { useNamedReferences: false }),
  };
  const jsparser = new parser.j2xParser(options);
  json = { xml: json };
  let xml = jsparser.parse(json);
  return '<?xml version="1.0" encoding="utf-8"?>' + xml;
}

// export default class Helper {
//   jsonToXml(json, config = null) {
//     let options = {
//       attributeNamePrefix: "@",
//       textNodeName: "$",
//       ignoreAttributes: false,
//       tagValueProcessor: (a) =>
//         he.encode(a.toString(), { useNamedReferences: false }),
//     };
//     const jsparser = new parser.j2xParser(options);
//     json = { xml: json };
//     let xml = jsparser.parse(json);
//     return '<?xml version="1.0" encoding="utf-8"?>' + xml;
//   }
// }

//module.exports = new Helper();
