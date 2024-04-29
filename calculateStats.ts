const fs = require('fs');

interface Measurement {
    timestamp: string;
    bpm: number;
}

interface DailyStats {
    date: string;
    min: number;
    max: number;
    median: number;
    latestDataTimestamp: string;
}

// Read input data from JSON file
const rawData: Measurement[] = JSON.parse(fs.readFileSync('input.json', 'utf-8'));

// Process data to calculate daily statistics
const dailyStats: DailyStats[] = [];

const groupByDate: { [date: string]: Measurement[] } = {};

rawData.forEach((measurement) => {
    const date = measurement.timestamp.substr(0, 10);
    if (!groupByDate[date]) {
        groupByDate[date] = [];
    }
    groupByDate[date].push(measurement);
});

for (const date in groupByDate) {
    const measurements = groupByDate[date];
    const bpmValues = measurements.map((m) => m.bpm).sort((a, b) => a - b);
    const min = bpmValues[0];
    const max = bpmValues[bpmValues.length - 1];
    let median;
    if (bpmValues.length % 2 === 0) {
        median = (bpmValues[bpmValues.length / 2 - 1] + bpmValues[bpmValues.length / 2]) / 2;
    } else {
        median = bpmValues[Math.floor(bpmValues.length / 2)];
    }
    const latestDataTimestamp = measurements[measurements.length - 1].timestamp;
    dailyStats.push({ date, min, max, median, latestDataTimestamp });
}

// Write processed data to output JSON file
fs.writeFileSync('output.json', JSON.stringify(dailyStats, null, 2));

console.log('Output has been written to output.json');
