MobilTelesco

MobilTelesco is a mobile application + Raspberry Pi system for controlling a DIY telescope.
It combines real-time object detection, directional control, and sensor integration into a simple Android interface.

🚀 Features

📷 Real-time camera preview with on-device object detection (NanoDetTFLite).

🎮 Directional controls (Up, Down, Left, Right) sent to the Pi.

🖥️ OLED display updates reflecting commands or status messages.

📡 Flask-based communication between phone and Pi.

📊 Sensor integration (accelerometer, gyroscope, compass).

📱 Android-friendly UI with CameraX support.

🔧 Prerequisites
Hardware

Raspberry Pi (tested on Pi Zero 2W, compatible with others).

SSD1306 OLED display (I2C, default addr: 0x3D).

Android smartphone (Android 8+).

Software

On Raspberry Pi

Python 3.x

Flask, Pillow, Adafruit SSD1306 driver

Virtual environment (recommended)

On Android

Android Studio

Kotlin

CameraX library

NanoDet TFLite
 model

⚙️ Installation
Raspberry Pi Setup
# Clone the repository
git clone https://github.com/yourusername/MobilTelesco.git
cd MobilTelesco

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install flask pillow adafruit-circuitpython-ssd1306


Enable I2C on Pi

sudo raspi-config
# Go to: Interface Options > I2C > Enable
sudo reboot


Run the Flask server

python3 disp.py

Android App Setup

Open the project in Android Studio.

Ensure AndroidManifest.xml has:

<application
    android:usesCleartextTraffic="true" ... >


Build and run on your Android device.

Connect phone and Pi to the same Wi-Fi network.

▶️ Usage

Start the Flask server on your Raspberry Pi.

Launch the Android app and grant camera permissions.

Use on-screen buttons to send directional commands.

The Pi’s OLED will update with the selected direction/message.

🔧 Configuration

Pi IP address: update CameraActivity.kt with your Pi’s IP (e.g., http://192.168.1.9:5000/test).

OLED I2C address: verify with:

i2cdetect -y 1


Update disp.py if needed.

🛠 Troubleshooting

OLED not displaying → Check wiring & run i2cdetect -y 1.

App not connecting → Ensure both devices are on the same Wi-Fi & usesCleartextTraffic is enabled.

Network errors → Allow Flask port:

sudo ufw allow 5000

🤝 Contributing

Contributions are welcome!

Fork the repo

Submit issues or feature requests

Open a pull request with improvements (e.g., UI, detection models, performance tweaks)

🙏 Credits

Developed with help from Grok 3 by xAI

Thanks to the Adafruit and CameraX communities

📜 License

MIT
 (or specify another license — currently placeholder).
