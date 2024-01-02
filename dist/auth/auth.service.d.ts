import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register({ name, email, password, role }: RegisterDto): Promise<{
        name: string;
        email: string;
    }>;
    login({ email, password }: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
}
