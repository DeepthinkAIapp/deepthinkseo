#!/usr/bin/env python3
"""
Custom HTTP Server with URL Rewriting Support
This server handles clean URLs for the Deepthink SEO blog
"""

import http.server
import socketserver
import os
import urllib.parse
from pathlib import Path

# URL rewriting rules (similar to .htaccess)
URL_REWRITES = {
    '/content-marketing-seo-success-2025': '/public/blog/content-marketing-seo-success-2025.html',
    '/technical-seo-checklist-2025': '/public/blog/technical-seo-checklist-2025.html',
    '/complete-seo-strategy-guide-2025': '/public/blog/complete-seo-strategy-guide-2025.html',
    '/local-seo-strategies-small-businesses-2025': '/public/blog/local-seo-strategies-small-businesses-2025.html',
    '/ai-powered-seo-strategies-2025': '/public/blog/ai-powered-seo-strategies-2025.html',
    '/blog': '/public/blog/index.html',
    '/contact': '/public/contact.html',
}

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path
        
        # Check if this is a clean URL that needs rewriting
        if path in URL_REWRITES:
            # Rewrite the URL
            new_path = URL_REWRITES[path]
            print(f"URL Rewrite: {path} -> {new_path}")
            
            # Check if the file exists
            file_path = os.path.join(os.getcwd(), new_path.lstrip('/'))
            if os.path.exists(file_path):
                # Serve the rewritten file
                self.path = new_path
                return http.server.SimpleHTTPRequestHandler.do_GET(self)
            else:
                # File doesn't exist, return 404
                self.send_error(404, "File not found")
                return
        
        # Handle regular requests
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

def run_server(port=8000):
    """Start the custom HTTP server"""
    with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 Custom HTTP Server running on http://localhost:{port}")
        print(f"📝 URL Rewriting enabled for clean blog URLs")
        print(f"📁 Serving files from: {os.getcwd()}")
        print(f"🔗 Clean URLs available:")
        for clean_url in URL_REWRITES.keys():
            print(f"   - http://localhost:{port}{clean_url}")
        print(f"\n⏹️  Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n🛑 Server stopped")

if __name__ == "__main__":
    run_server() 