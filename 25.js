// Create the personAccount object literal
let personAccount = {
    // Properties
    firstName: "John",
    lastName: "Doe",
    incomes: [
        { description: "Salary", amount: 5000 },
        { description: "Freelance", amount: 1200 }
    ],
    expenses: [
        { description: "Rent", amount: 1500 },
        { description: "Groceries", amount: 300 },
        { description: "Utilities", amount: 200 }
    ],

    // Method to calculate total income
    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    // Method to calculate total expense
    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    // Method to get account info
    accountInfo: function() {
        return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
    },

    // Method to add income
    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },

    // Method to add expense
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },

    // Method to get account balance (totalIncome - totalExpense)
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Example usage:

console.log(personAccount.accountInfo());
console.log("Account Balance: $" + personAccount.accountBalance());

// Adding new income and expense
personAccount.addIncome("Dividend", 500);
personAccount.addExpense("Car Payment", 400);

// Recalculate account info after adding new income and expense
console.log(personAccount.accountInfo());
console.log("Updated Account Balance: $" + personAccount.accountBalance());
