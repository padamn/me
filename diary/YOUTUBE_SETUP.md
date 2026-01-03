# How to Add Your YouTube Playlists

## Quick Guide

### Option 1: YouTube Playlists

1. **Go to your YouTube playlist** (e.g., `https://www.youtube.com/playlist?list=PLxxxxxx`)
2. **Get the Playlist ID** - it's the part after `list=` in the URL
   - Example: If your URL is `https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf`
   - Your Playlist ID is: `PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf`

3. **Edit `script.js`** and find the `getMusicContent()` function
4. **Replace** `YOUR_PLAYLIST_ID_HERE` with your actual playlist ID
5. **Add more playlists** by copying the iframe code block

### Option 2: YouTube Wrapped / Spotify Wrapped

If you have a YouTube Wrapped video or Spotify Wrapped screenshot:

**For YouTube Wrapped Video:**
1. Go to your YouTube Wrapped video
2. Click "Share" → "Embed"
3. Copy the entire `<iframe>` code
4. Paste it into the music section in `script.js`

**For Spotify Wrapped:**
1. Take a screenshot of your Spotify Wrapped
2. Save it to `/Users/padam/Downloads/Wimpy-Web/diary/` folder
3. Add an image tag in the music section:
   ```html
   <img src="spotify-wrapped-2024.png" alt="My Spotify Wrapped" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;">
   ```

## Example Code

Here's what a complete YouTube playlist embed looks like:

```html
<div class="playlist-item mb-lg">
  <h3 class="text-blue mb-sm">My Chill Playlist ♪</h3>
  <p class="mb-sm">Late night coding vibes</p>
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-top: 15px;">
    <iframe 
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
      src="https://www.youtube.com/embed/videoseries?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
</div>
```

## Where to Edit

Open `/Users/padam/Downloads/Wimpy-Web/diary/script.js` and find the `getMusicContent()` function (around line 147).

Replace the example playlists with your own!
