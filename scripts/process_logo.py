import os
from PIL import Image

src_path = r"C:/Users/Matheus/.gemini/antigravity/brain/7586c669-65ec-4f2b-aeb4-ff72b8708f71/.user_uploaded/media_1793209981216_fe5cc0f4.png"
out_dir = r"c:\Users\Matheus\OneDrive\Desktop\SITE INVERTRONIC\public\images"

img = Image.open(src_path).convert("RGBA")
w, h = img.size

# Save original copy
img.save(os.path.join(out_dir, "logo-invertronic-original.png"), "PNG")

# We want transparent background for all white pixels outside the + and - circles.
# Circle + approx: center (870, 55), radius 22
# Circle - approx: center (838, 107), radius 22

def in_protected_circle(x, y):
    d_plus = (x - 870)**2 + (y - 55)**2
    if d_plus <= 22**2:
        return True
    d_minus = (x - 838)**2 + (y - 107)**2
    if d_minus <= 22**2:
        return True
    return False

# Create transparent image
transparent_img = Image.new("RGBA", (w, h), (0, 0, 0, 0))

# Also create light / glow version for dark mode headers (bright white/cyan letters + yellow diode)
light_img = Image.new("RGBA", (w, h), (0, 0, 0, 0))

for y in range(h):
    for x in range(w):
        r, g, b, a = img.getpixel((x, y))
        
        # Check if white background
        is_white = (r > 240 and g > 240 and b > 240)
        
        if is_white and not in_protected_circle(x, y):
            # Soft edge alpha for antialiasing
            brightness = (r + g + b) / 3.0
            if brightness >= 252:
                transparent_img.putpixel((x, y), (0, 0, 0, 0))
                light_img.putpixel((x, y), (0, 0, 0, 0))
            else:
                # Antialiased fringe
                alpha = int(255 * (255 - brightness) / 15.0)
                transparent_img.putpixel((x, y), (r, g, b, min(255, max(0, alpha))))
                light_img.putpixel((x, y), (255, 255, 255, min(255, max(0, alpha))))
        else:
            # Preserve original colors
            transparent_img.putpixel((x, y), (r, g, b, 255))
            
            # For the light version (ideal for dark blue background):
            # If it's the yellow diode, keep it vibrant yellow
            if r > 180 and g > 150 and b < 100:
                light_img.putpixel((x, y), (r, g, b, 255))
            elif in_protected_circle(x, y) and is_white:
                # keep + and - white background
                light_img.putpixel((x, y), (255, 255, 255, 255))
            else:
                # The blue letters and truss can be brightened for contrast, or made crisp white/light-cyan
                # Let's keep a dedicated clean version
                light_img.putpixel((x, y), (r, g, b, 255))

transparent_img.save(os.path.join(out_dir, "logo-invertronic.png"), "PNG")

# Now create an optimized Dark-Mode variant where the dark blue becomes bright/white with cyan accent
# so that on dark blue backgrounds it pops with 100% legibility!
darkmode_img = Image.new("RGBA", (w, h), (0, 0, 0, 0))

for y in range(h):
    for x in range(w):
        r, g, b, a = transparent_img.getpixel((x, y))
        if a == 0:
            darkmode_img.putpixel((x, y), (0, 0, 0, 0))
        elif in_protected_circle(x, y) and (r > 230 and g > 230 and b > 230):
            # Inside the + and - circle, white bg remains white
            darkmode_img.putpixel((x, y), (255, 255, 255, 255))
        elif r > 180 and g > 150 and b < 100:
            # Yellow diode remains golden yellow
            darkmode_img.putpixel((x, y), (255, 214, 0, 255))
        else:
            # Dark blue areas (text, crane, diode border, +/- signs)
            # Make the letters crisp clean white/ice-blue for stunning contrast on dark navy!
            # If it's inside the + and - circle, keep dark blue sign
            if in_protected_circle(x, y):
                darkmode_img.putpixel((x, y), (0, 75, 117, 255))
            else:
                # Make the crane and letters bright white (#FFFFFF) or icy cyan
                darkmode_img.putpixel((x, y), (255, 255, 255, a))

darkmode_img.save(os.path.join(out_dir, "logo-invertronic-darkmode.png"), "PNG")
print("Logos processed successfully!")
