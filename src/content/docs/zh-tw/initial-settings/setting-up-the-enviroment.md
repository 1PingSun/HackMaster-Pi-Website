---
title: 環境設定
description: 本指南將教您如何設定 Raspberry Pi Zero 2 W 的軟體環境，讓 HackMaster Pi 可以正常運作。
---

本指南將教您如何設定 Raspberry Pi Zero 2 W 的軟體環境，讓 HackMaster Pi 可以正常運作。

## 快速安裝

HackMaster Pi 提供一鍵安裝腳本，可自動完成所有環境設定。

1. 安裝 git：
    ```bash
    sudo apt install git
    ```

2. 複製專案儲存庫：
    ```bash
    git clone https://github.com/1PingSun/HackMaster-Pi.git
    ```

3. 執行安裝腳本：
    ```bash
    cd HackMaster-Pi
    chmod +x setup.sh
    sudo ./setup.sh
    ```

## 安裝內容說明

安裝腳本將會自動完成以下設定：

### 系統套件安裝
- 更新系統套件清單
- 安裝 Python 3 及相關開發工具
- 安裝無線網路工具（aircrack-ng, hostapd, dnsmasq）
- 安裝 NFC/RFID 工具（libnfc, nfc-tools）
- 安裝紅外線控制工具（LIRC）
- 安裝藍牙工具（BlueZ）

### Python 套件安裝
- Flask 或 FastAPI（Web UI 框架）
- Adafruit SSD1306（OLED 螢幕驅動）
- 其他相依套件

### 服務設定
- 設定 Web UI 服務自動啟動
- 設定系統權限
- 建立必要的工作目錄

## 驗證安裝

安裝完成後，您可以透過以下方式驗證系統是否正常運作：

1. 檢查 Web UI 服務狀態：
    ```bash
    sudo systemctl status hackmasterpi
    ```

2. 檢查 OLED 螢幕是否正常顯示

3. 在瀏覽器開啟 Web UI（請將 IP 替換為您的 Raspberry Pi IP）：
    ```
    http://[您的 Raspberry Pi IP]
    ```

## 故障排除

### Web UI 無法啟動
```bash
# 檢查服務日誌
sudo journalctl -u hackmasterpi -f

# 重新啟動服務
sudo systemctl restart hackmasterpi
```

### 模組連接問題
```bash
# 檢查 I2C 設備
sudo i2cdetect -y 1

# 檢查 GPIO 權限
ls -l /dev/gpiomem
```

### 網路工具無法使用
```bash
# 檢查無線網卡模式
iwconfig

# 檢查網卡驅動
lsmod | grep mac80211
```

## 更新系統

如需更新 HackMaster Pi 到最新版本：

```bash
cd HackMaster-Pi
git pull
sudo ./setup.sh
```

## 進階設定（選用）

### Docker 容器化部署
如果您偏好使用 Docker 部署，可以使用以下方式：

```bash
# 安裝 Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 使用 Docker Compose 啟動
sudo docker-compose up -d
```

:::note
Docker 部署方式仍在測試中，部分硬體存取功能可能需要額外設定。建議新手使用標準安裝腳本。
:::

## 系統需求

- Raspberry Pi OS Lite (64-bit)
- 至少 8GB 的 MicroSD 卡（建議 16GB 以上）
- 穩定的網路連線（用於下載套件）
- 完成硬體組裝的 HackMaster Pi

## 法律聲明

:::caution[重要提醒]
HackMaster Pi 僅供教育和安全研究用途。使用者需自行承擔使用本工具的所有責任。未經授權存取他人的電腦系統和網路是違法的。

**請勿使用本工具進行任何非法、未經授權或惡意的活動。**

使用本工具前，請確保：
- 僅在自有設備上進行測試
- 已取得設備所有者的書面授權
- 了解相關法律規範（如我國《刑法》第 358、359 條）
:::
