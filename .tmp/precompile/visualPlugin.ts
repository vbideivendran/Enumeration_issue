import { Visual } from "../../src/visual";
var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];

var samplevisualEA1C7E19C9A84E10924080E4D1ADA466_DEBUG = {
    name: 'samplevisualEA1C7E19C9A84E10924080E4D1ADA466_DEBUG',
    displayName: 'samplevisual',
    class: 'Visual',
    version: '1.0.0',
    apiVersion: '2.6.0',
    create: (options) => {
        if (Visual) {
            return new Visual(options);
        }

        console.error('Visual instance not found');
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["samplevisualEA1C7E19C9A84E10924080E4D1ADA466_DEBUG"] = samplevisualEA1C7E19C9A84E10924080E4D1ADA466_DEBUG;
}

export default samplevisualEA1C7E19C9A84E10924080E4D1ADA466_DEBUG;