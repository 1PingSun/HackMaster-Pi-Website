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
					autogenerate: { directory: 'initial-settings' },
				},
				{
					label: 'Usage',
					autogenerate: { directory: 'usage' },
				},
			],
		}),
	],
});
