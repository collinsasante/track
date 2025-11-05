# Cloudinary Setup Guide

This guide will help you set up Cloudinary for uploading annotated design screenshots.

## Step 1: Create Cloudinary Account

1. Go to https://cloudinary.com/users/register_free
2. Sign up for a free account
3. Verify your email

## Step 2: Get Your Cloud Name

1. Log in to Cloudinary dashboard
2. You'll see your **Cloud name** at the top
3. In your case, it's: `dfm3kmq1y`

## Step 3: Create an Unsigned Upload Preset

**Important:** You need to create an **unsigned upload preset** to allow uploads from the browser without authentication.

1. In Cloudinary dashboard, go to **Settings** (gear icon)
2. Click **Upload** tab
3. Scroll down to **Upload presets** section
4. Click **Add upload preset**
5. Configure it:
   - **Preset name:** `dfm3kmq1y` (or any name you want)
   - **Signing Mode:** Select **"Unsigned"** ⭐ (This is critical!)
   - **Folder:** (optional) You can set a folder like `design-feedback`
   - Leave other settings as default
6. Click **Save**

## Step 4: Update the Code (Already Done)

The code is already configured with:
- Cloud name: `dfm3kmq1y`
- Upload preset: `dfm3kmq1y`

## Verify It Works

After setting up the unsigned preset:
1. Go to your design review page
2. Add comments
3. Click "Submit All Feedback to Airtable"
4. Screenshot should upload to Cloudinary
5. URL saved to Airtable in "Annotated Design" field

## Troubleshooting

### Error: "Unknown API key" or 401 Unauthorized
- Your upload preset is not set to "Unsigned"
- Go back to Cloudinary Settings → Upload → Edit your preset
- Make sure **Signing Mode** is set to **"Unsigned"**

### Upload succeeds but image doesn't appear in Airtable
- Check that "Annotated Design" field is an **Attachment** type
- Check console for errors

## Free Tier Limits

Cloudinary free tier includes:
- 25 GB storage
- 25 GB monthly bandwidth
- More than enough for design feedback screenshots!
