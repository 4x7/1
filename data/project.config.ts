export const projectConfig = {
    mnemonicWork: false, // if true - use mnemonic, if false - use private_key(WIF only)
    unisatAPIKey: "", // You can get API Key on developer center https://developer.unisat.io/dashboard | You can use multiple keys
    feesUsing: "fast", //slow|medium|fast
    maxGas: 7,
    gasCheckerSleep: [1, 1],
    sleep: [1, 1],
    batchCount: 3, // Number of wallets in batch, example: 10 wallets, 3 batchCount = [5, 10, 1], [4, 3, 6], [7, 2, 9], [8]
    batchSleep: [1, 1] // Sleep before start new batch
}

export const walletsGenerator = {
    quantityWallets: 50
}

export const configRunes = {
    runesMint: [
        {
            "runeID": "1:0",
            "price": 330,
            "count": 1
        },
        {
            "runeID": "1:0",
            "price": 330,
            "count": 1
        },
        {
            "runeID": "1:0",
            "price": 330,
            "count": 1
        },
        {
            "runeID": "1:0",
            "price": 330,
            "count": 1
        },
    ],
    quantityRunesMint: [1, 4], //quantity rune mint per wallet: min,
    runeDeployPrice: 330,
    sleep: [10, 20]
}

export const configInscription = {
    inscriptionMint: [
        {
            "name": "doge",
            "price": 330,
            "amount": 4200,
            "count": 1
        },
    ],
    quantityMint: [1, 1], //quantity rune mint per wallet: min,
    inscriptionDeployPrice: 330,
    sleep: [10, 20]
}