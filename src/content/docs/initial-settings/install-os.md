---
title: Install OS
description: This guide will show you how to install Raspberry Pi OS Lite on Raspberry Pi Zero 2 W for the HackMaster Pi.
---

This guide will show you how to install Raspberry Pi OS Lite on Raspberry Pi Zero 2 W for the HackMaster Pi.

1. Download [Raspberry Pi Imager](https://www.raspberrypi.com/software/) on your personal computer.
2. Open Raspberry Pi Imager application on your personal computer.
3. Select options based on the following information.
   1. Raspberry Pi Device: Raspberry Pi Zero 2 W
   2. Operating System: Raspberry Pi OS Lite (64-bit)
   3. Storage: (Choose the SD card you want to use for HackMaster Pi)
4. Press the `NEXT` button to start writing the OS to the SD card.
5. Unplug the SD card from your personal computer and plug it back in.
6. Go to the root of SD card.
7. Establish an empty file `ssh` in the root path of your SD card.
8. Establish config file `wpa_supplicant.conf` for Wi-Fi setting in the root path of your SD card (Remember to replace the currect SSID and AP-PSK following).

    ```
    country=TW
    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1

    network={
        ssid="SSID"
        psk="AP-PSK"
        proto=RSN
        key_mgmt=WPA-PSK
    }
    ```
9.  Plug in the SD card to the Raspberry Pi.
10. Turn on the Raspberry Pi's power.
11. Wait for the Raspberry Pi to fully boot up, open the AP admin panel, and note down the IP of the Raspberry Pi. It may take A few minutes.
12. Connect the Raspberry Pi via SSH protocol. The default password is `raspberry` or `pi`.
    ```bash
    ssh pi@your-raspberry-pi-ip
    
    # For Example:
    ssh pi@192.168.1.2
    ```