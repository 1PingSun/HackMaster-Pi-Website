// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://hackmasterpi.org/',
	integrations: [
		starlight({
			favicon: '/favicon.ico',
			title: 'HackMaster Pi',
			logo: {
				dark: './src/assets/PNG-Dark.webp',
				light: './src/assets/PNG-Light.webp',
				alt: 'HackMaster Pi Logo',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/1PingSun/HackMaster-Pi' }],
			sidebar: [
				{
					label: 'Initial Settings',
					items: [
						{ label: 'Install OS', link: '/initial-settings/install-os' },
						{ label: 'Assemble', link: '/initial-settings/assemble' },
						{ label: 'Setting up the Enviroment', link: '/initial-settings/setting-up-the-enviroment' },
					],
				},
				{
					label: 'Usage: Bluetooth',
					items: [
						{ label: 'Beacon Emulator', link: '/usage-ble/beacon' },
						{ label: 'AirPods Emulator', link: '/usage-ble/airpods' },
					],
				},
			],
		}),
	],
});
