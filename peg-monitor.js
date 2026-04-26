const { ethers } = require("ethers");

async function checkPegStatus(oracleContract) {
    const price = await oracleContract.latestRoundData();
    const formattedPrice = ethers.formatUnits(price.answer, 8);
    
    console.log(`Current Peg Price: $${formattedPrice}`);
    
    if (parseFloat(formattedPrice) > 1.01) {
        console.log("Status: Expansionary Phase - Minting Shares");
    } else if (parseFloat(formattedPrice) < 0.99) {
        console.log("Status: Contractionary Phase - Issuing Bonds");
    } else {
        console.log("Status: Pegged - Stability Maintained");
    }
}

module.exports = { checkPegStatus };
