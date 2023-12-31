import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register({ name, email, password }: RegisterDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login({ email, password }: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
}
