/**
 * Simple Node.js application for Git workflow demonstration
 * This file demonstrates basic JavaScript concepts for code review
 */

// Configuration object
const config = {
    appName: "Git Demo App",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development"
};

// Main application class
class DemoApp {
    constructor(name) {
        this.name = name;
        this.startTime = new Date();
    }

    // Display welcome message
    showWelcome() {
        console.log(`Welcome to ${this.name}!`);
        console.log(`Version: ${config.version}`);
        console.log(`Environment: ${config.environment}`);
        console.log(`Started at: ${this.startTime.toLocaleString()}`);
    }

    // Calculate and display runtime
    showRuntime() {
        const currentTime = new Date();
        const runtime = currentTime - this.startTime;
        console.log(`Application has been running for ${runtime}ms`);
    }

    // Simple mathematical operation for demonstration
    calculateSum(numbers) {
        if (!Array.isArray(numbers)) {
            throw new Error("Input must be an array of numbers");
        }
        
        return numbers.reduce((sum, num) => {
            if (typeof num !== 'number') {
                throw new Error("All elements must be numbers");
            }
            return sum + num;
        }, 0);
    }

    // Async function example
    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Main run method
    async run() {
        this.showWelcome();
        
        // Example usage
        const numbers = [1, 2, 3, 4, 5];
        const sum = this.calculateSum(numbers);
        console.log(`Sum of [${numbers.join(', ')}] = ${sum}`);
        
        // Wait for 2 seconds
        console.log("Waiting 2 seconds...");
        await this.delay(2000);
        
        this.showRuntime();
        console.log("Application finished successfully!");
    }
}

// Initialize and run the application
if (require.main === module) {
    const app = new DemoApp(config.appName);
    app.run().catch(error => {
        console.error("Application error:", error);
        process.exit(1);
    });
}

module.exports = DemoApp; 