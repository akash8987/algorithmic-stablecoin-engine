# Algorithmic Stablecoin Engine

This repository contains a professional implementation of a seigniorage-based algorithmic stablecoin. Unlike collateralized stablecoins, this protocol manages supply through market incentives and game theory.

### The Three-Token System
1. **Stable Token (Basis):** The asset targeted to $1.00.
2. **Bond Token:** Issued during contraction (price < $1) to burn Stable tokens and reduce supply.
3. **Share Token:** Receives seigniorage (newly minted Stable tokens) during expansion (price > $1).

### Mechanics
* **Epochs:** Monetary policy is updated in fixed time intervals (e.g., every 8 hours).
* **Oracle Integration:** Uses Chainlink or Uniswap V3 TWAP to determine the current peg status.
* **Treasury:** Manages the logic for minting new tokens or enabling bond redemptions.
