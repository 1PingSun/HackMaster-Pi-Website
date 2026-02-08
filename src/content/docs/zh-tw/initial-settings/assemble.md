---
title: 硬體組裝
description: 本指南將教您如何組裝 Raspberry Pi Zero 2 W 並連接各個模組，完成 HackMaster Pi 的硬體準備。
---

本指南將教您如何組裝 Raspberry Pi Zero 2 W 並連接各個模組，完成 HackMaster Pi 的硬體準備。

## 硬體元件清單

在開始組裝前，請確認您已準備好以下元件：

| 硬體元件 | 數量 | 預估單價 |
|---------|------|---------|
| Raspberry Pi Zero 2 W | 1 | NT$ 600 |
| MicroSD Card (Class 2 A2) | 1 | NT$ 200 |
| PN532 NFC/RFID 模組 | 1 | NT$ 150 |
| YS-IRTM 紅外線模組 | 1 | NT$ 50 |
| OLED 0.96" 螢幕 | 1 | NT$ 100 |
| **總成本** | | **NT$ 1,100** |

## 3D 外殼

1. 下載 3D 模組檔案：[https://github.com/1PingSun/HackMaster-Pi/tree/main/3D-Modules](https://github.com/1PingSun/HackMaster-Pi/tree/main/3D-Modules)
2. 使用 3D 列印機列印 3D 模組。
3. 將各個元件和 Raspberry Pi Zero 2 W 組裝進 3D 外殼模組中。

![HackMaster Pi 3D 模組列印縮時攝影](../../initial-settings/src/Time-lapse.gif)

## 連接電路

請依照以下電路圖連接各個元件：

### PN532 NFC/RFID 模組
* VCC → Raspberry Pi 3.3V (pin 1)
* GND → Raspberry Pi GND (pin 6)
* SDA → Raspberry Pi SDA (pin 3)
* SCL → Raspberry Pi SCL (pin 5)

### YS-IRTM 紅外線模組
* VCC → Raspberry Pi 5V (pin 2)
* GND → Raspberry Pi GND (pin 6)
* RXT → Raspberry Pi GPIO 18 (pin 12)
* TXT → Raspberry Pi GPIO 17 (pin 11)

### OLED 0.96" 螢幕
* VCC → Raspberry Pi 3.3V (pin 1)
* GND → Raspberry Pi GND (pin 6)
* SDA → Raspberry Pi SDA (pin 3)
* SCL → Raspberry Pi SCL (pin 5)

![HackMaster Pi 電路圖](../../initial-settings/src/circuit-diagram.webp)

## 組裝注意事項

- 在連接電路前，請確保 Raspberry Pi 已關機並拔除電源
- 仔細核對接腳位置，避免接錯導致硬體損壞
- 3.3V 和 5V 不可接錯，否則可能損壞元件
- 確保所有連接穩固，避免接觸不良
- 組裝完成後，先進行外觀檢查再通電測試

## 功能模組說明

### 藍牙攻擊模組
利用 Raspberry Pi Zero 2 W 內建的藍牙 4.2 功能，透過 BlueZ 協定堆疊實現 BLE 信標模擬與設備偽裝，可用於測試藍牙設備的安全性與使用者的警覺性。

### Wi-Fi 攻擊模組
整合完整的無線網路安全檢測工具鏈，從密碼字典產生、四次握手封包擷取、密碼破解，到惡意 AP 架設，涵蓋常見的 Wi-Fi 滲透測試情境。

### RFID/NFC 模組
透過 PN532 晶片支援 ISO14443A/B 及 FeliCa 等多種協定，可讀取、複製及模擬常見的門禁卡與 NFC 標籤，用於評估實體存取控制系統的安全性。

### 紅外線模組
使用 LIRC 框架處理各種家電遙控器協定，可記錄並重現紅外線訊號，用於測試智慧家居設備是否存在未授權控制的風險。
