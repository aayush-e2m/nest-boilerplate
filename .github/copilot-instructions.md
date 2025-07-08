# Workspaces Module

This module handles workspace management with proper pagination, authentication, and authorization.

## API Endpoints

### 1. Create Workspace
- **Method**: `POST`
- **Endpoint**: `/workspaces`
- **Authentication**: Required (JWT)
- **Permission**: `WORKSPACES_CREATE`
- **Body**: `CreateWorkspaceDto`
- **Response**: Created workspace data

### 2. Get Workspaces for Dropdown (Lightweight)
- **Method**: `GET`
- **Endpoint**: `/workspaces/dropdown`
- **Authentication**: None (available to authenticated users)
- **Query Parameters**:
  - `search` (optional): Search by name or description
  - `isActive` (optional): Filter by active status
- **Response**: Minimal workspace data (id, name, isActive, themeColor)

### 3. Get Workspaces with Pagination (Full List)
- **Method**: `GET`
- **Endpoint**: `/workspaces`
- **Authentication**: Required (JWT)
- **Permission**: `WORKSPACES_READ`
- **Query Parameters**:
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Items per page (default: 10)
  - `search` (optional): Search by name or description
  - `isActive` (optional): Filter by active status
  - `sort` (optional): Sort format "field:order" (e.g., "name:asc")
- **Response**: Paginated workspace data with counts

### 4. Get Single Workspace
- **Method**: `GET`
- **Endpoint**: `/workspaces/:id`
- **Authentication**: Required (JWT)
- **Permission**: `WORKSPACES_READ`
- **Response**: Complete workspace data

### 5. Update Workspace
- **Method**: `PATCH`
- **Endpoint**: `/workspaces/:id`
- **Authentication**: Required (JWT)
- **Permission**: `WORKSPACES_UPDATE`
- **Body**: `UpdateWorkspaceDto`
- **Response**: Updated workspace data

### 6. Delete Workspace
- **Method**: `DELETE`
- **Endpoint**: `/workspaces/:id`
- **Authentication**: Required (JWT)
- **Permission**: `WORKSPACES_DELETE`
- **Response**: Success message

### 7. Add Member to Workspace
- **Method**: `POST`
- **Endpoint**: `/workspaces/:id/members/:userId`
- **Authentication**: Required (JWT)
- **Permission**: `WORKSPACES_MANAGE_MEMBERS`
- **Response**: Updated workspace data

### 8. Remove Member from Workspace
- **Method**: `DELETE`
- **Endpoint**: `/workspaces/:id/members/:userId`
- **Authentication**: Required (JWT)
- **Permission**: `WORKSPACES_MANAGE_MEMBERS`
- **Response**: Success message

## Permissions Required

The following permissions must be added to the roles configuration:
- `WORKSPACES_CREATE` - Create workspaces
- `WORKSPACES_READ` - View workspaces
- `WORKSPACES_UPDATE` - Update workspaces
- `WORKSPACES_DELETE` - Delete workspaces
- `WORKSPACES_MANAGE_MEMBERS` - Add/remove workspace members

## Data Filtering

### Excluded Fields
The following fields are automatically excluded from API responses:
- `created_at`
- `updated_at` 
- `deleted_at`
- `members` (relationship - only count provided)
- `projects` (relationship - only count provided)

### Search Functionality
Search is performed on:
- Workspace name (case-insensitive)
- Workspace description (case-insensitive)

### Sorting Options
Available sort fields:
- `name`
- `created_at`
- `updated_at`
- `isActive`

Sort format: `field:order` where order is `asc` or `desc`

## Response Format

### Success Response (Single Item)
```json
{
  "status": true,
  "message": "Success message",
  "data": { ... }
}
```

### Success Response (Paginated List)
```json
{
  "status": true,
  "message": "Success message",
  "pagination": {
    "total_records": 100,
    "current_page": 1,
    "total_pages": 10
  },
  "data": [ ... ]
}
```

### Error Response
```json
{
  "status": false,
  "message": "Error message"
}
```
