import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
export declare class AuthController {
    private readonly authSservice;
    constructor(authSservice: AuthService);
    register(registerDto: RegisterDto): Promise<{
        name: string;
        email: string;
    }>;
    login(loguinDto: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile(user: UserActiveInterface): string;
    prueba(user: UserActiveInterface): string;
}
