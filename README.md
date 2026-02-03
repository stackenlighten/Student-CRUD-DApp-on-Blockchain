# Astro BSC Student DApp 🎓

A high-performance Decentralized Application (DApp) built with **Astro.js** and **React**, allowing a manager to maintain student records on the **Binance Smart Chain (BSC) Testnet**.

## 🚀 Overview
This project migrates a standard HTML/Web3 interface into a modern **Islands Architecture**. It interacts with a Solidity smart contract to perform full CRUD (Create, Read, Update, Delete) operations on student data.

## 🛠️ Features
- **Smart Contract Integration**: Connects to `Students.sol` for secure data storage.
- **React Islands**: Interactive UI components that hydrate only when needed.
- **Dynamic Form**: A single form that toggles between "Add" and "Update" modes.
- **Instant UI Updates**: Uses React `useState` to refresh the student table immediately after transactions.
- **Field Auto-Clear**: Automatically resets input fields upon successful blockchain confirmation.
- **Network Guard**: Detects and prompts a switch to BSC Testnet (Chain ID 97).

## 🏗️ Technical Stack
- **Frontend**: Astro.js, React, Bootstrap 5.
- **Blockchain**: Solidity (^0.8.3), Web3.js.
- **Network**: BSC Testnet.

## 📋 Smart Contract (Students.sol)
The contract governs the rules of the registry:
- **`owner`**: Only the deployer can add or modify records.
- **`students` mapping**: Stores student profiles (ID, Name, Age, Class, Exists).
- **`createStudent`**: Adds a new record to the blockchain.
- **`updateStudent`**: Modifies existing student details via their ID.
- **`removeStudent`**: Performs a soft-delete by setting the `exists` flag to false.

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/stackenlighten/Student-CRUD-DApp-on-Blockchain.git
   cd Student-CRUD-DApp-on-Blockchain