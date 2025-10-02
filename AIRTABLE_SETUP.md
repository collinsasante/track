# Airtable Setup Guide

This guide will help you set up the required Airtable tables for the design review system.

## Create "Design Feedback" Table

In your Airtable base, create a new table called **"Design Feedback"** with these fields:

### Required Fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Project ID** | Single line text | The order ID (e.g., "ORD-5CtOu") |
| **Customer Name** | Single line text | Name of the customer |
| **Feedback** | Long text | The comment/feedback text |
| **Position X** | Number | X coordinate (0-100) |
| **Position Y** | Number | Y coordinate (0-100) |
| **Marker Number** | Number | The marker ID (1, 2, 3...) |
| **Timestamp** | Single line text | When submitted |
| **Annotated Design** | Attachment | Screenshot with markers |
| **Total Comments** | Number | Count of markers |

### Quick Setup Steps:

1. Open your Airtable base
2. Click **"Add or import"** → **"Create empty table"**
3. Name it: `Design Feedback`
4. Add each field from the table above
5. Make sure **"Annotated Design"** is an **Attachment** field type

## Field Settings:

- **Position X** and **Position Y**: Format as "Decimal" with 2 decimal places
- **Marker Number** and **Total Comments**: Format as "Integer"
- **Timestamp**: Can also be "Date" field type if preferred

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
3. Use the "Project ID" field to match records
