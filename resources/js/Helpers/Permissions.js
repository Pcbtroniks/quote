export const PERMISSIONS = {
    CREATE: 'create',
    READ: 'read',
    UPDATE: 'update',
    DELETE: 'delete',
    MANAGE_AGENCIES: 'agencies.manage',
    MANAGE_AGENCY: 'agency.manage',
    MANAGE_BRANCH: 'branch.manage',
}

export const userHasPermission = (user, permission) => {
    if (user) {
        return user.permissions.includes(permission);
    }
    return false;
}