import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authSservice;
    constructor(authSservice: AuthService);
    register(registerDto: RegisterDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login(loguinDto: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile(req: any): any;
}
