export const AUTH_STRING = {
  SUCCESS: {
    LOGIN_SUCCESS: 'Login successful',
    LOGOUT_SUCCESS: 'Logout successful',
    PASSWORD_CHANGED: 'Password changed successfully',
    PASSWORD_RESET: 'Password reset successful',
    PASSWORD_RESET_REQUEST: 'Password reset request successful',
  },
  ERROR: {
    INVALID_EMAIL_PASSWORD: 'Invalid email or password',
    LOGIN_VERIFICATION_REMAIN: 'Login verification remain',
    TWO_FA_CODE_REQUIRED: 'Two factor authentication code required',
    INVALID_TWO_FA_CODE: 'Invalid two factor authentication code',
  },
};

export const USERS_STRING = {
  SUCCESS: {
    USER_CREATED: 'User created successfully',
  },
  ERROR: {
    USER_EXIST: 'User with this email already exists',
    AGENCY_ALREADY_EXISTS: 'Agency with this name already exists',
    AGENCY_NOT_FOUND: 'Agency not found',
    AGENCY_NAME_REQUIRED: 'Agency name is required',
  },
};

export const ROLES_STRING = {
  SUCCESS: {
    ROLE_CREATED: 'Role created successfully',
  },
  ERROR: {
    ROLE_NOT_FOUND: 'Role not found',
  },
};

export const DESIGNATION_STRING = {
  SUCCESS: {
    DESIGNATION_CREATED: 'Designation created successfully',
  },
  ERROR: {
    DESIGNATION_NOT_FOUND: 'Designation not found',
  },
};

export const COMMON_ERROR_STRING = {
  INTERNAL_SERVER_ERROR: 'Internal server error',
};
