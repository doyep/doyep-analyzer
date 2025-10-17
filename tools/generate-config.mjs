import fs from 'fs';
import path from 'path';

const configPath = path.resolve('src/assets/config.json');
const configExamplePath = path.resolve('src/assets/config.example.json');
const configExample = JSON.parse(fs.readFileSync(configExamplePath, 'utf8'));

const config = {
	clientId: process.env.CLIENT_ID ?? configExample.clientId,
};

if (!fs.existsSync(configPath)) {
	fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
	console.log(`✅ Generated config.json`);
}
