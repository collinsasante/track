# Airtable Setup Guide

This guide will help you set up the required Airtable tables for the design review system.

## Create "Design Feedback" Table

In your Airtable base, create a new table called **"Design Feedback"** with these fields:

### Required Fields (Only 6 fields needed!):

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Order ID** | Single line text | The order ID (e.g., "ORD-5CtOu") |
| **Customer** | Single line text | Name of the customer |
| **Feedback** | Long text | ALL comments with positions (formatted automatically) |
| **Annotated Design** | Attachment | Screenshot with markers + comment text labels |
| **Total Comments** | Number (Integer) | Count of how many comments |
| **Created** | Single line text or Date | When submitted |

**Note:** Create these fields EXACTLY as shown (case-sensitive).

**Important:**
- Each submission = ONE record
- All feedback combined in one field
- Screenshot shows everything visually
- NO need for individual X/Y position fields!

### Quick Setup Steps:

1. Open your Airtable base
2. Click **"Add or import"** → **"Create empty table"**
3. Name it: `Design Feedback`
4. Click **"+"** to add these fields (exact names, case-sensitive):
   - **Order ID** (Single line text)
   - **Customer** (Single line text)
   - **Feedback** (Long text) ← ALL comments will be here
   - **Annotated Design** (Attachment) ← Screenshot with markers
   - **Total Comments** (Number - Integer)
   - **Created** (Single line text or Date)

## Field Settings:

- **Feedback**: Long text field - will contain all comments formatted like:
  ```
  [1] Change the color to blue (Position: 45.2, 32.1)

  [2] Make logo bigger (Position: 78.5, 12.3)
  ```
- **Total Comments**: Format as "Integer"
- **Created**: Can also be "Date" field type if preferred
- **Annotated Design**: MUST be "Attachment" type to receive images from Cloudinary

## Testing:

After creating the table, try submitting feedback on the design review page. You should see:
- ONE record per submission
- All comments combined in the "Feedback" field
- Annotated design screenshot attached (uploaded via Cloudinary)

## Troubleshooting:

### Error 422 - Unprocessable Content
- The table doesn't exist or field names don't match
- Check table name is exactly: `Design Feedback`
- Verify all field names match exactly (case-sensitive)

### No image uploaded
- Make sure "Annotated Design" is an **Attachment** field type (not Single line text or URL)
- Check browser console for errors

## Optional: Link to Other Tables

You can link the "Design Feedback" table to your existing tables:

1. Add a **Linked Record** field to "Design Feedback"
2. Link to your "Submissions" or "Project Information" table
3. Use the "Name" field to match records by Order ID
