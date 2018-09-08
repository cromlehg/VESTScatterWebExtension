
export const Blockchains = {
    EOS:'vest',
    // ETH:'eth'
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));