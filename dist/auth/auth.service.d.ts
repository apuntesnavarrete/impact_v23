import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    register(): string;
    login(): string;
}
