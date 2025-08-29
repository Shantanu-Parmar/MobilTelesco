# MobilTelesco

MobilTelesco is a mobile application designed to control a Raspberry Pi–based telescope system through a smartphone interface. It integrates real-time object detection, directional controls, and sensor feedback into a single platform, making telescope operation more accessible.

The system can also be extended to collect smartphone-captured astrophotography images, enabling the creation of lightweight open datasets for research and education.

---

## Overview

MobilTelesco bridges low-cost hardware (Raspberry Pi, OLED, sensors) and modern smartphone capabilities (camera, ML inference, motion sensors) to create an interactive astrophotography system.

**Key components:**

- **Android application** – provides a simple UI, real-time preview, and NanoDet-TFLite inference.  
- **Flask server on Raspberry Pi** – receives commands and updates an SSD1306 OLED.  
- **Bidirectional interaction** – smartphone sends movement commands; Pi responds with feedback and status.  
- **Optional dataset logging** – captures and organizes night-sky images for later processing or research.  

---

## Features

- Real-time camera preview with integrated object detection (NanoDet-TFLite).  
- Directional command controls (Up, Down, Left, Right) from the phone.  
- OLED feedback display linked to user inputs.  
- Sensor data integration: accelerometer, gyroscope, compass.  
- Cross-platform communication over Wi-Fi via Flask.  
- Extensible for astrophotography dataset creation.  

---

## Prerequisites

### Hardware
- Raspberry Pi (e.g., Pi Zero 2W or newer)  
- SSD1306 OLED display (I²C)  
- Android smartphone (Android 8.0+)  

### Software

**Raspberry Pi**
- Python 3.x  
- Flask, Pillow, Adafruit SSD1306 libraries  
- Virtual environment recommended  

**Android App**
- Android Studio (Kotlin)  
- CameraX  
- NanoDet-TFLite model  

---

## Installation

### Raspberry Pi

```bash
# Clone the repository
git clone https://github.com/yourusername/MobilTelesco.git
cd MobilTelesco

# Set up virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install flask pillow adafruit-circuitpython-ssd1306
```

**Enable I²C:**

```bash
sudo raspi-config
# Interface Options > I2C > Enable
sudo reboot
```

**Run server:**

```bash
python3 disp.py
```

### Android App

1. Open project in Android Studio.  
2. Add in `AndroidManifest.xml`:  
   ```xml
   <application android:usesCleartextTraffic="true" ... >
   ```  
3. Build and run on your Android device (connected to same Wi-Fi as Pi).  

---

## Usage

1. Start Flask server on the Pi.  
2. Open MobilTelesco on the smartphone.  
3. Grant camera permissions.  
4. Use on-screen buttons to send movement commands.  
5. OLED updates with the active direction or message.  
6. *(Optional)* Enable dataset logging to save smartphone captures for later research.  

---

## Configuration

- **Pi IP address**: update `CameraActivity.kt`
- **OLED I²C address**: verify with `i2cdetect -y 1` and update `disp.py` if needed.  

---

## Troubleshooting

- **No OLED output** → Check I²C wiring and run `i2cdetect -y 1`.  
- **App cannot connect** → Ensure both devices share Wi-Fi and `usesCleartextTraffic` is enabled.  
- **Network issues** → Open Flask port:
- 
```bash
sudo ufw allow 5000
```


---

## 📜 License

This dataset is licensed under the **Creative Commons Attribution 4.0 International (CC BY 4.0)** license.  
You are free to:
- Use, share, and adapt the data
- Even for commercial purposes  
**But you must give appropriate credit** to the dataset author.
---

## 🤝 Contributing & Contact

I welcome:
- Collaborations on image analysis or model training
- Contributions of new smartphone images to expand the dataset
- Educational or citizen science outreach projects

📬 **Shantanu Parmar**  
📧 Email: *shantanu.c.parmar@gmail.cpm*  
🌐 Website: https://shantanu-parmar.github.io/  
GitHub: https://github.com/Shantanu-Parmar

---

## 🖼️ Preview

<p align="center">
  <img src="mbtrlogo.png" alt="MobilTelesco Logo" width="220"/>
</p>

<p align="center"><em>“A telescope in your pocket. The universe on your screen.”</em></p>
---📬 **Shantanu Parmar**  
📧 Email: *shantanu.c.parmar@gmail.cpm*  
🌐 Website: https://shantanu-parmar.github.io/  
GitHub: https://github.com/Shantanu-Parmar

---

## 🖼️ Preview

<p align="center">
  <img src="mbtrlogo.png" alt="MobilTelesco Logo" width="220"/>
</p>

<p align="center"><em>“A telescope in your pocket. The universe on your screen.”</em></p>
---

