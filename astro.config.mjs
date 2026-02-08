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
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-tw': {
					label: '繁體中文',
					lang: 'zh-TW',
				},
			},
			sidebar: [
				{
					label: 'Initial Settings',
					translations: {
						'zh-TW': '初始設定',
					},
					items: [
						{ 
							label: 'Install OS', 
							link: '/initial-settings/install-os',
							translations: {
								'zh-TW': '安裝作業系統',
							},
						},
						{ 
							label: 'Assemble', 
							link: '/initial-settings/assemble',
							translations: {
								'zh-TW': '硬體組裝',
							},
						},
						{ 
							label: 'Setting up the Enviroment', 
							link: '/initial-settings/setting-up-the-enviroment',
							translations: {
								'zh-TW': '環境設定',
							},
						},
					],
				},
				{
					label: 'Usage: Bluetooth',
					translations: {
						'zh-TW': '使用說明：藍牙',
					},
					items: [
						{ 
							label: 'Beacon Emulator', 
							link: '/usage-ble/beacon',
							translations: {
								'zh-TW': 'Beacon 模擬器',
							},
						},
						{ 
							label: 'AirPods Emulator', 
							link: '/usage-ble/airpods',
							translations: {
								'zh-TW': 'AirPods 模擬器',
							},
						},
					],
				},
				{
					label: 'Usage: Wi-Fi',
					translations: {
						'zh-TW': '使用說明：Wi-Fi',
					},
					items: [
						{ 
							label: 'Password Wordlist Generator', 
							link: '/usage-wifi/password-wordlist-generator',
							translations: {
								'zh-TW': '密碼字典產生器',
							},
						},
						{ 
							label: 'Wi-Fi Password Cracker', 
							link: '/usage-wifi/wifi-cracker',
							translations: {
								'zh-TW': 'Wi-Fi 密碼破解',
							},
						},
					]
				},
			],
		}),
	],
});
