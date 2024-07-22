export let moduleFileExtensions: string[];
export let testMatch: string[];
export let transform: {
    '^.+\\.js$': string;
};
export let moduleNameMapper: {
    '^@/(.*)$': string;
};
export let collectCoverage: boolean;
export let coverageDirectory: string;
export let reporters: (string | (string | {
    pageTitle: string;
    outputPath: string;
    includeFailureMsg: boolean;
})[])[];
