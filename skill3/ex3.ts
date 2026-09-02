//ROLE BASE ACCESS

enum Role{
    Admin,
    User,
    Guest
}

const printRole = (role: Role) => {
    switch (role) {
        case Role.Admin:
            return "You have full access";
        case Role.User:
            return "You have limited access";
        case Role.Guest:
            return "You have guest access";
        default:
        return "You need to log in to have access";
    }
}

printRole(Role.Admin);
printRole(Role.User);
printRole(Role.Guest);