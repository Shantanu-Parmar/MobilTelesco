# MobilTelesco

## Overview
MobilTelesco is a mobile application that controls a Raspberry Pi-based telescope system using a smartphone interface. It features real-time camera-based object detection (via NanoDetTFLite), directional controls (Up, Down, Left, Right) displayed on an OLED connected to the Pi, and sensor data integration (accelerometer, gyroscope, compass). The system uses Flask for communication between the app and Pi.

## Features
- Real-time camera preview with object detection.
- Directional command transmission to the Pi.
- OLED display updates based on phone inputs.
- Sensor data display (accelerometer, gyroscope, compass).
- Android-compatible with a simple UI.

## Prerequisites
### Hardware
- Raspberry Pi (e.g., Pi Zero 2W).
- SSD1306 OLED display (I2C, address 0x3D or as detected).
- Android smartphone.

### Software
- **Raspberry Pi**:
  - Python 3.x
  - Flask, Pillow, adafruit-circuitpython-ssd1306
  - Virtual environment (venv)
- **Android**:
  - Android Studio
  - Kotlin
  - CameraX library
  - NanoDetTFLite model

## Installation
### Raspberry Pi
1. Clone the repo or copy `disp.py`:
   ```bash
   git clone https://github.com/yourusername/MobilTelesco.git
   cd MobilTelesco

Set up dependencies:
bashpython3 -m venv venv
source venv/bin/activate
pip install flask pillow adafruit-circuitpython-ssd1306

Connect OLED (SDA, SCL, VCC, GND, reset to GPIO 4).
Enable I2C:
bashsudo raspi-config
# Interface Options > I2C > Enable
sudo reboot

Run the server:
bashpython3 disp.py


Android App

Open the project in Android Studio.
Ensure AndroidManifest.xml includes:
xml<uses-permission android:name="android.permission.CAMERA" />
<application android:usesCleartextTraffic="true" ... >

Build and run on an Android device.
Connect to the same Wi-Fi as the Pi.

Usage

Start the Flask server on the Pi.
Launch the app on your phone and grant camera permissions.
Use the on-screen buttons to send commands.
The OLED should display the selected direction or message.

Configuration

Pi IP: Update CameraActivity.kt with your Pi’s IP (e.g., http://192.168.1.9:5000/test).
OLED Address: Verify with i2cdetect -y 1 and adjust disp.py if needed.

Troubleshooting

No OLED Display: Check I2C with i2cdetect -y 1 and wiring.
App Connection Issues: Ensure same Wi-Fi and usesCleartextTraffic is enabled.
Network Errors: Allow port 5000 on Pi (sudo ufw allow 5000).

Contributing
Fork this repo, submit issues, or pull requests. Improvements to detection, UI, or performance are welcome!
Credits

Developed with help from Grok 3 by xAI.
Thanks to Adafruit and CameraX communities.

License
[Specify license, e.g., MIT, or "No license" if none]
text### **How to Use**
1. **Create the File**:
   - In Android Studio, right-click the project root (e.g., `MobilTelesco`) > **New** > **File**.
   - Name it `README.md`, paste the content above, and save.
2. **Commit and Push**:
   - **VCS** > **Commit** > Select `README.md` > Add message (e.g., "Added README") > **Commit and Push**.
   - Push to your GitHub repo as described earlier.

### **Notes**
- **Time**: It’s 05:38 PM IST on August 29, 2025—perfect to wrap this up!
- **Compatibility**: This Markdown is optimized for GitHub rendering.
- **Customization**: Replace `https://github.com/yourusername/MobilTelesco.git` with your repo URL and add a license if desired.

Let me know if you need help committing it or adjusting the content!
