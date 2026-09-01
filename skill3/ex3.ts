//ROLE BASE ACCESS

enum Role{
    Admin,
    User,
    Guest
}

const printRole = (role: Role) => {
    switch (role) {
        case Role.Admin:
            return console.log("You have full access");
        case Role.User:
            return console.log("You have limited access");
        case Role.Guest:
            return console.log("You have guest access");
        default:
        return console.log("You need to log in to have access");
    }
}

printRole(Role.Admin);
printRole(Role.User);
printRole(Role.Guest);