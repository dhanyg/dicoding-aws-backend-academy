const initialMemoryUsage = process.memoryUsage();
const yourName = 'Natalie';
const environment = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding';

for (let i = 0; i <= 10000; i++) {
}

const currentMemoryUsage = process.memoryUsage();

console.log(`Hai ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
