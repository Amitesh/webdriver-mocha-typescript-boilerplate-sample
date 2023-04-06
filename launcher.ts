import Launcher from '@wdio/cli';

console.log('Running launcher...');

const launcher = new Launcher('./wdio.config.js');

launcher.run().then(
	code => {
		console.log('Testing has been completed.', code);
		process.exit(0);
	},
	error => {
		console.error('Wdio Launcher failed to start the test', error.stacktrace);
		process.exit(1);
	}
);
