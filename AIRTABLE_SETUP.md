# Airtable Setup Guide

This guide will help you set up the required Airtable tables for the design review system.

## Create "Design Feedback" Table

In your Airtable base, create a new table called **"Design Feedback"** with these fields:

### Required Fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Order ID** | Single line text | The order ID (e.g., "ORD-5CtOu") |
| **Customer** | Single line text | Name of the customer |
| **Feedback** | Long text | The comment/feedback text |
| **X Position** | Number | X coordinate (0-100) |
| **Y Position** | Number | Y coordinate (0-100) |
| **Marker ID** | Number | The marker ID (1, 2, 3...) |
| **Created** | Single line text | When submitted |
| **Annotated Design** | Attachment | Screenshot with markers |
| **Total Comments** | Number | Count of markers |

**Note:** Create these fields exactly as shown (case-sensitive).

### Quick Setup Steps:

1. Open your Airtable base
2. Click **"Add or import"** → **"Create empty table"**
3. Name it: `Design Feedback`
4. Click **"+"** to add these fields (exact names, case-sensitive):
   - **Order ID** (Single line text)
   - **Customer** (Single line text)
   - **Feedback** (Long text)
   - **X Position** (Number - Decimal, 2 places)
   - **Y Position** (Number - Decimal, 2 places)
   - **Marker ID** (Number - Integer)
   - **Created** (Single line text)
   - **Annotated Design** (Attachment) ← Important!
   - **Total Comments** (Number - Integer)

## Field Settings:

- **X Position** and **Y Position**: Format as "Decimal" with 2 decimal places
- **Marker ID** and **Total Comments**: Format as "Integer"
- **Created**: Can also be "Date" field type if preferred
- **Annotated Design**: MUST be "Attachment" type to receive images

## Testing:

After creating the table, try submitting feedback on the design review page. You should see:
- Individual comments saved as records
- An annotated design screenshot uploaded after each comment

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
