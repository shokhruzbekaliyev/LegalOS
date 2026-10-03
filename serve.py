"""
LegalOS Uzbekistan - Local Development Server
Usage: python serve.py [port]
"""

import http.server
import socketserver
import os
import sys
import urllib.parse

PORT = 3000
if len(sys.argv) > 1:
    try:
        PORT = int(sys.argv[1])
    except ValueError:
        pass

DIRECTORY = os.path.dirname(os.path.abspath(__file__))
TEMPLATES_DIR = os.path.join(DIRECTORY, "templates")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def translate_path(self, path):
        # HTML sahifalar templates/ papkasida turadi: "/" va "/login.html" -> templates/...
        # css/, js/, assets/ esa loyiha ildizidan xizmat qilinadi.
        url_path = urllib.parse.urlsplit(path).path
        if url_path == "/":
            url_path = "/index.html"
        name = url_path.lstrip("/")
        if name.endswith(".html") and "/" not in name:
            return os.path.join(TEMPLATES_DIR, name)
        return super().translate_path(path)

    def end_headers(self):
        # Enable CORS and caching headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

print(f"==================================================")
print(f" LegalOS Uzbekistan Web UI Server is running!")
print(f" URL: http://localhost:{PORT}")
print(f" Directory: {DIRECTORY}")
print(f" Templates: {TEMPLATES_DIR}")
print(f"==================================================")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer to'xtatildi.")
except Exception as e:
    print(f"Xatolik: {e}")
