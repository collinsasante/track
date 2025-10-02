# Airtable Setup Guide

This guide will help you set up the required Airtable tables for the design review system.

## Create "Design Feedback" Table

In your Airtable base, create a new table called **"Design Feedback"** with these fields:

### Required Fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Name** | Single line text | The order ID (e.g., "ORD-5CtOu") - Auto-created by Airtable |
| **Customer** | Single line text | Name of the customer |
| **Comment** | Long text | The comment/feedback text |
| **X** | Number | X coordinate (0-100) |
| **Y** | Number | Y coordinate (0-100) |
| **Marker** | Number | The marker ID (1, 2, 3...) |
| **Date** | Single line text | When submitted |
| **Screenshot** | Attachment | Screenshot with markers |
| **Total** | Number | Count of markers |

**Note:** The "Name" field is automatically created by Airtable when you create a new table. Just add the other fields to match the table above.

### Quick Setup Steps:

1. Open your Airtable base
2. Click **"Add or import"** → **"Create empty table"**
3. Name it: `Design Feedback`
4. The "Name" field is already created - keep it!
5. Click **"+"** to add these fields:
   - **Customer** (Single line text)
   - **Comment** (Long text)
   - **X** (Number - Decimal, 2 places)
   - **Y** (Number - Decimal, 2 places)
   - **Marker** (Number - Integer)
   - **Date** (Single line text)
   - **Screenshot** (Attachment) ← Important!
   - **Total** (Number - Integer)

## Field Settings:

- **X** and **Y**: Format as "Decimal" with 2 decimal places
- **Marker** and **Total**: Format as "Integer"
- **Date**: Can also be "Date" field type if preferred
- **Screenshot**: MUST be "Attachment" type to receive images

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
- Make sure "Annotated Design" is an **Attachment** field type
- Check browser console for errors

## Optional: Link to Other Tables

You can link the "Design Feedback" table to your existing tables:

1. Add a **Linked Record** field to "Design Feedback"
2. Link to your "Submissions" or "Project Information" table
3. Use the "Name" field to match records by Order ID
