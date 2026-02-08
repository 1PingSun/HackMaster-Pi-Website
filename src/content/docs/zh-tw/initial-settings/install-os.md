---
title: 安裝作業系統
description: 本指南將教您如何在 Raspberry Pi Zero 2 W 上安裝 Raspberry Pi OS Lite，為 HackMaster Pi 做好準備。
---

本指南將教您如何在 Raspberry Pi Zero 2 W 上安裝 Raspberry Pi OS Lite，為 HackMaster Pi 做好準備。

## 安裝步驟

1. 在您的個人電腦上下載 [Raspberry Pi Imager](https://www.raspberrypi.com/software/)。
2. 在您的個人電腦上開啟 Raspberry Pi Imager 應用程式。
3. 根據以下資訊選擇選項：
   1. **Raspberry Pi 裝置**：Raspberry Pi Zero 2 W
   2. **作業系統**：Raspberry Pi OS Lite (64-bit)
   3. **儲存裝置**：（選擇您要用於 HackMaster Pi 的 SD 卡）
4. 按下 `NEXT` 按鈕開始將作業系統寫入 SD 卡。
5. 將 SD 卡從您的個人電腦拔出，然後重新插入。
6. 進入 SD 卡的根目錄。
7. 在 SD 卡根目錄建立一個空檔案 `ssh`。
8. 在 SD 卡根目錄建立 Wi-Fi 設定檔 `wpa_supplicant.conf`（記得替換正確的 SSID 和 AP-PSK）：
    ```
    country=TW
    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1

    network={
        ssid="SSID"
        psk="AP-PSK"
        proto=RSN
        key_mgmt=WPA-PSK
        priority=1
    }
    ```
9.  將 SD 卡插入 Raspberry Pi。
10. 開啟 Raspberry Pi 的電源。
11. 等待 Raspberry Pi 完全開機，開啟路由器管理面板，記下 Raspberry Pi 的 IP 位址。這可能需要幾分鐘。
12. 透過 SSH 協定連線至 Raspberry Pi。預設密碼為 `raspberry` 或 `pi`。
    ```bash
    ssh pi@your-raspberry-pi-ip
    
    # 範例：
    ssh pi@192.168.1.2
    ```

## 注意事項

- 確保您的 Wi-Fi 網路使用 WPA2 加密
- 第一次開機可能需要較長時間，請耐心等候
- 如果無法連線，請檢查 Wi-Fi 設定檔內容是否正確
