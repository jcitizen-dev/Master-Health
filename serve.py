#!/usr/bin/env python3
"""Local HTTP server for Health Master App — run from the Health Master App directory."""
import http.server, socketserver, os, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    def log_message(self, fmt, *args):
        pass  # suppress request noise

with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print(f'\n  Health Master App → http://localhost:{PORT}\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n  Server stopped.')
