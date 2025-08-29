MobilTelesco

MobilTelesco is a mobile application designed to control a Raspberry Pi–based telescope system through a smartphone interface. It integrates real-time object detection, directional controls, and sensor feedback into a single platform, making telescope operation more accessible.

The system can also be extended to collect smartphone-captured astrophotography images, enabling the creation of lightweight open datasets for research and education.

Overview

MobilTelesco bridges low-cost hardware (Raspberry Pi, OLED, sensors) and modern smartphone capabilities (camera, ML inference, motion sensors) to create an interactive astrophotography system.

Key components:

Android application – provides a simple UI, real-time preview, and NanoDet-TFLite inference.

Flask server on Raspberry Pi – receives commands and updates an SSD1306 OLED.

Bidirectional interaction – smartphone sends movement commands; Pi responds with feedback and status.

Optional dataset logging – captures and organizes night-sky images for later processing or research.

Features

Real-time camera preview with integrated object detection (NanoDet-TFLite).

Directional command controls (Up, Down, Left, Right) from the phone.

OLED feedback display linked to user inputs.

Sensor data integration: accelerometer, gyroscope, compass.

Cross-platform communication over Wi-Fi via Flask.

Extensible for astrophotography dataset creation.

Prerequisites
Hardware

Raspberry Pi (e.g., Pi Zero 2W or newer)

SSD1306 OLED display (I²C)

Android smartphone (Android 8.0+)

Software

Raspberry Pi

Python 3.x

Flask, Pillow, Adafruit SSD1306 libraries

Virtual environment recommended

Android App

Android Studio (Kotlin)

CameraX

NanoDet-TFLite model

Installation
Raspberry Pi
# Clone the repository
git clone https://github.com/yourusername/MobilTelesco.git
cd MobilTelesco

# Set up virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install flask pillow adafruit-circuitpython-ssd1306


Enable I²C:

sudo raspi-config
# Interface Options > I2C > Enable
sudo reboot


Run server:

python3 disp.py

Android App

Open project in Android Studio.

Add in AndroidManifest.xml:

<application android:usesCleartextTraffic="true" ... >


Build and run on your Android device (connected to same Wi-Fi as Pi).

Usage

Start Flask server on the Pi.

Open MobilTelesco on the smartphone.

Grant camera permissions.

Use on-screen buttons to send movement commands.

OLED updates with the active direction or message.

Optional: enable dataset logging to save smartphone captures for later research.

Configuration

Pi IP address: update CameraActivity.kt (e.g., http://192.168.1.9:5000/test).

OLED I²C address: verify with i2cdetect -y 1 and update disp.py if needed.

Troubleshooting

No OLED output → Check I²C wiring and run i2cdetect -y 1.

App cannot connect → Ensure both devices share Wi-Fi and usesCleartextTraffic is enabled.

Network issues → Open Flask port:

sudo ufw allow 5000

Contributing

Contributions are encouraged!

Extend the Android app UI

Add telescope automation features

Improve detection accuracy or dataset collection

Share field test results

Credits

Developed with support from:

Adafruit SSD1306 libraries

NanoDet / CameraX communities

Inspiration from citizen science astrophotography projects

License

Specify a license (e.g., MIT).
