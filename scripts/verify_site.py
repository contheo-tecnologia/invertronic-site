import urllib.request
import re

base = 'http://localhost:3000'
res = urllib.request.urlopen(base)
print('Page status:', res.status)
html = res.read().decode('utf-8')

# Find CSS
css_links = re.findall(r'href="(/_next/static/css/[^"]+)"', html)
print('Found CSS links:', css_links)
for c in css_links:
    c_res = urllib.request.urlopen(base + c)
    css_content = c_res.read().decode('utf-8')
    print('CSS Status:', c_res.status, 'Length:', len(css_content), 'Tailwind OK:', 'display:flex' in css_content or 'flex' in css_content)

# Check images
img_srcs = [
    '/images/logo-invertronic.png',
    '/images/banner-ponte-rolante-invertronic.jpg',
    '/images/banner-equipamentos-weg-industria.jpg'
]
for src in img_srcs:
    try:
        i_res = urllib.request.urlopen(base + src)
        print('Image:', src, 'Status:', i_res.status, 'Bytes:', len(i_res.read()))
    except Exception as e:
        print('Image ERR:', src, e)
